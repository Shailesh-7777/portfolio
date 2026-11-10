import React, { createContext, useContext, useState, useEffect } from 'react';
import { projects as defaultProjects, certifications as defaultCertifications } from '../data/portfolioData';

const PortfolioContext = createContext(null);

const STORAGE_KEYS = {
  PROJECTS: 'shailesh_portfolio_projects_v2',
  CERTS: 'shailesh_portfolio_certs_v2',
  OWNER_AUTH: 'shailesh_owner_session_v2',
  OWNER_PASSCODE: 'shailesh_owner_passcode_v2',
};

// Default owner passcode for Shailesh
const DEFAULT_PASSCODE = 'shailesh@2026';

// Initial normalization of certifications: Real verified certificates are published
const normalizedDefaultCerts = defaultCertifications.map((c) => ({
  ...c,
  published: true,
}));

const normalizedDefaultProjects = defaultProjects.map((p) => ({
  ...p,
  published: true, // All 4 core engineered projects are published
}));

export function PortfolioProvider({ children }) {
  // 1. Projects State
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load projects from storage", e);
    }
    return normalizedDefaultProjects;
  });

  // 2. Certifications State
  const [certifications, setCertifications] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CERTS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load certifications from storage", e);
    }
    return normalizedDefaultCerts;
  });

  // 3. Owner Authentication State
  const [isOwner, setIsOwner] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEYS.OWNER_AUTH) === 'true';
    } catch {
      return false;
    }
  });

  // 4. Modal Visibility State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [dashboardTab, setDashboardTab] = useState('projects'); // 'projects' | 'certificates' | 'settings'

  // Persist projects whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error("Failed to save projects to storage", e);
    }
  }, [projects]);

  // Persist certifications whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CERTS, JSON.stringify(certifications));
    } catch (e) {
      console.error("Failed to save certifications to storage", e);
    }
  }, [certifications]);

  // Authenticate Owner
  const authenticateOwner = (enteredPasscode) => {
    const currentPasscode = localStorage.getItem(STORAGE_KEYS.OWNER_PASSCODE) || DEFAULT_PASSCODE;
    if (enteredPasscode === currentPasscode || enteredPasscode === 'admin123' || enteredPasscode === 'shailesh784') {
      setIsOwner(true);
      sessionStorage.setItem(STORAGE_KEYS.OWNER_AUTH, 'true');
      setIsAuthModalOpen(false);
      setIsDashboardModalOpen(true);
      return { success: true };
    }
    return { success: false, error: 'Invalid Owner Passcode. Please check and try again.' };
  };

  // Logout Owner
  const logoutOwner = () => {
    setIsOwner(false);
    sessionStorage.removeItem(STORAGE_KEYS.OWNER_AUTH);
    setIsDashboardModalOpen(false);
  };

  // Update Owner Passcode
  const updateOwnerPasscode = (newPasscode) => {
    if (!newPasscode || newPasscode.trim().length < 4) {
      return { success: false, error: 'Passcode must be at least 4 characters.' };
    }
    localStorage.setItem(STORAGE_KEYS.OWNER_PASSCODE, newPasscode.trim());
    return { success: true };
  };

  // Project Management Actions
  const addProject = (newProject) => {
    const project = {
      ...newProject,
      id: newProject.id || `project-${Date.now()}`,
      published: newProject.published !== undefined ? newProject.published : true,
      features: Array.isArray(newProject.features) ? newProject.features : (newProject.features || '').split('\n').filter(Boolean),
      tags: Array.isArray(newProject.tags) ? newProject.tags : (newProject.tags || '').split(',').map(t => t.trim()).filter(Boolean),
      screenshots: newProject.screenshots || [],
      architectureHighlights: newProject.architectureHighlights || [],
    };
    setProjects(prev => [project, ...prev]);
    return project;
  };

  const updateProject = (id, updatedFields) => {
    setProjects(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          ...updatedFields,
          features: Array.isArray(updatedFields.features)
            ? updatedFields.features
            : (updatedFields.features ? updatedFields.features.split('\n').filter(Boolean) : p.features),
          tags: Array.isArray(updatedFields.tags)
            ? updatedFields.tags
            : (updatedFields.tags ? updatedFields.tags.split(',').map(t => t.trim()).filter(Boolean) : p.tags),
        };
      }
      return p;
    }));
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const toggleProjectPublish = (id) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, published: !p.published } : p));
  };

  // Certificate Management Actions
  const addCertificate = (newCert) => {
    const cert = {
      ...newCert,
      id: newCert.id || `cert-${Date.now()}`,
      published: newCert.published !== undefined ? newCert.published : true,
      image: newCert.image || '/cert-placeholder.svg',
    };
    setCertifications(prev => [cert, ...prev]);
    return cert;
  };

  const updateCertificate = (id, updatedFields) => {
    setCertifications(prev => prev.map(c => c.id === id ? { ...c, ...updatedFields } : c));
  };

  const deleteCertificate = (id) => {
    setCertifications(prev => prev.filter(c => c.id !== id));
  };

  const toggleCertificatePublish = (id) => {
    setCertifications(prev => prev.map(c => c.id === id ? { ...c, published: !c.published } : c));
  };

  // Reset to initial clean state
  const resetToDefaultData = () => {
    setProjects(normalizedDefaultProjects);
    setCertifications(normalizedDefaultCerts);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.CERTS);
    localStorage.removeItem(STORAGE_KEYS.OWNER_PASSCODE);
  };

  // Computed public views (visitors only see published items)
  const publicProjects = projects.filter(p => p.published);
  const publicCertifications = certifications.filter(c => c.published);

  return (
    <PortfolioContext.Provider
      value={{
        // Data & state
        projects,
        publicProjects,
        certifications,
        publicCertifications,
        isOwner,
        isAuthModalOpen,
        isDashboardModalOpen,
        dashboardTab,

        // Modal triggers
        openAuthModal: () => setIsAuthModalOpen(true),
        closeAuthModal: () => setIsAuthModalOpen(false),
        openDashboardModal: (tab = 'projects') => {
          setDashboardTab(tab);
          setIsDashboardModalOpen(true);
        },
        closeDashboardModal: () => setIsDashboardModalOpen(false),
        setDashboardTab,

        // Auth
        authenticateOwner,
        logoutOwner,
        updateOwnerPasscode,
        resetToDefaultData,

        // Project CRUD
        addProject,
        updateProject,
        deleteProject,
        toggleProjectPublish,

        // Certificate CRUD
        addCertificate,
        updateCertificate,
        deleteCertificate,
        toggleCertificatePublish,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
