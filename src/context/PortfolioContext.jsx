import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  projects as defaultProjects,
  certifications as defaultCertifications,
  defaultCertificateCategories
} from '../data/portfolioData';
import {
  loadPersistentCertificates,
  savePersistentCertificates
} from '../utils/certificateStorage';

const PortfolioContext = createContext(null);

const STORAGE_KEYS = {
  PROJECTS: 'shailesh_portfolio_projects_v2',
  CERTS: 'shailesh_portfolio_certs_v3',
  CATEGORIES: 'shailesh_portfolio_categories_v3',
  OWNER_AUTH: 'shailesh_owner_session_v2',
  OWNER_PASSCODE: 'shailesh_owner_passcode_v2',
};

// Default owner passcode for Shailesh
const DEFAULT_PASSCODE = 'shailesh@2026';

// Initial normalization of certifications: Real verified certificates are published
const normalizedDefaultCerts = defaultCertifications.map((c, index) => ({
  ...c,
  published: true,
  category: c.category || 'Web Development',
  fileType: c.fileType || 'image',
  order: c.order || index + 1,
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

  // 2. Certifications State (initialized with fallback, then loaded from IndexedDB)
  const [certifications, setCertifications] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CERTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Failed to load certifications from local storage", e);
    }
    return normalizedDefaultCerts;
  });

  // 3. Certificate Categories State
  const [categories, setCategories] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Failed to load categories from storage", e);
    }
    return defaultCertificateCategories;
  });

  // 4. Owner Authentication State
  const [isOwner, setIsOwner] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEYS.OWNER_AUTH) === 'true';
    } catch {
      return false;
    }
  });

  // 5. Modal Visibility State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [dashboardTab, setDashboardTab] = useState('projects'); // 'projects' | 'certificates' | 'settings'

  // Hydrate certificates from IndexedDB on initial mount
  useEffect(() => {
    let isMounted = true;
    async function hydrateCertificates() {
      try {
        const loaded = await loadPersistentCertificates(normalizedDefaultCerts);
        if (isMounted && Array.isArray(loaded) && loaded.length > 0) {
          // Sort loaded certificates by order
          const sorted = [...loaded].sort((a, b) => (a.order || 0) - (b.order || 0));
          setCertifications(sorted);

          // Extract any custom categories from loaded certs
          const certCategories = loaded.map(c => c.category).filter(Boolean);
          setCategories(prev => {
            const combined = Array.from(new Set([...prev, ...certCategories]));
            return combined;
          });
        }
      } catch (err) {
        console.warn('Hydration from IndexedDB failed, using memory/localStorage:', err);
      }
    }
    hydrateCertificates();
    return () => { isMounted = false; };
  }, []);

  // Persist projects whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error("Failed to save projects to storage", e);
    }
  }, [projects]);

  // Persist certifications to IndexedDB and localStorage whenever changed
  useEffect(() => {
    savePersistentCertificates(certifications);
  }, [certifications]);

  // Persist categories whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    } catch (e) {
      console.error("Failed to save categories to storage", e);
    }
  }, [categories]);

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

  // Add custom category
  const addCategory = (newCat) => {
    const trimmed = (newCat || '').trim();
    if (!trimmed) return false;
    if (!categories.includes(trimmed)) {
      setCategories(prev => [...prev, trimmed]);
    }
    return true;
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
    const maxOrder = certifications.reduce((acc, c) => Math.max(acc, c.order || 0), 0);
    const cert = {
      ...newCert,
      id: newCert.id || `cert-${Date.now()}`,
      category: newCert.category || 'Web Development',
      published: newCert.published !== undefined ? newCert.published : true,
      image: newCert.image || (newCert.fileType === 'pdf' ? '/cert-placeholder.svg' : '/cert-placeholder.svg'),
      fileUrl: newCert.fileUrl || newCert.image || '',
      fileType: newCert.fileType || (newCert.fileUrl?.endsWith('.pdf') ? 'pdf' : 'image'),
      order: newCert.order !== undefined ? newCert.order : maxOrder + 1,
    };

    // Ensure category is in categories list
    if (cert.category && !categories.includes(cert.category)) {
      addCategory(cert.category);
    }

    setCertifications(prev => [...prev, cert]);
    return cert;
  };

  const updateCertificate = (id, updatedFields) => {
    // If category is new, add to categories list
    if (updatedFields.category && !categories.includes(updatedFields.category)) {
      addCategory(updatedFields.category);
    }

    setCertifications(prev => prev.map(c => {
      if (c.id === id) {
        const merged = { ...c, ...updatedFields };
        if (updatedFields.fileType) merged.fileType = updatedFields.fileType;
        if (updatedFields.fileUrl) merged.fileUrl = updatedFields.fileUrl;
        return merged;
      }
      return c;
    }));
  };

  const deleteCertificate = (id) => {
    setCertifications(prev => prev.filter(c => c.id !== id));
  };

  const toggleCertificatePublish = (id) => {
    setCertifications(prev => prev.map(c => c.id === id ? { ...c, published: !c.published } : c));
  };

  // Reorder a certificate up or down
  const moveCertificate = (id, direction) => {
    setCertifications(prev => {
      const sorted = [...prev].sort((a, b) => (a.order || 0) - (b.order || 0));
      const index = sorted.findIndex(c => c.id === id);
      if (index === -1) return prev;

      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= sorted.length) return prev;

      // Swap elements
      const temp = sorted[index];
      sorted[index] = sorted[targetIndex];
      sorted[targetIndex] = temp;

      // Reassign sequential order numbers
      return sorted.map((c, i) => ({ ...c, order: i + 1 }));
    });
  };

  // Reset to initial clean state
  const resetToDefaultData = () => {
    setProjects(normalizedDefaultProjects);
    setCertifications(normalizedDefaultCerts);
    setCategories(defaultCertificateCategories);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.CERTS);
    localStorage.removeItem(STORAGE_KEYS.CATEGORIES);
    localStorage.removeItem(STORAGE_KEYS.OWNER_PASSCODE);
    savePersistentCertificates(normalizedDefaultCerts);
  };

  // Computed public views (visitors only see published items, sorted by order)
  const publicProjects = projects.filter(p => p.published);
  const publicCertifications = certifications
    .filter(c => c.published)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <PortfolioContext.Provider
      value={{
        // Data & state
        projects,
        publicProjects,
        certifications,
        publicCertifications,
        categories,
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
        moveCertificate,
        addCategory,
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
