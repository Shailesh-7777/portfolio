/**
 * Reliable Persistent Storage for Certificates and Proof Assets
 * Uses IndexedDB for large blob/base64 storage (PDFs & High-Res Images)
 * with graceful fallback to localStorage.
 */

const DB_NAME = 'shailesh_portfolio_db';
const DB_VERSION = 1;
const STORE_NAME = 'certificates_store';
const LOCAL_STORAGE_BACKUP_KEY = 'shailesh_portfolio_certs_v3';

// Maximum allowed upload size: 10MB
export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'application/pdf'
];

/**
 * Open IndexedDB database
 */
function openDatabase() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      resolve(null);
      return;
    }

    try {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        console.warn('IndexedDB open error, falling back to localStorage:', event.target.error);
        resolve(null);
      };
    } catch (err) {
      console.warn('IndexedDB initialization failed:', err);
      resolve(null);
    }
  });
}

/**
 * Load all stored certificates from IndexedDB or localStorage
 */
export async function loadPersistentCertificates(fallbackDefaults = []) {
  try {
    const db = await openDatabase();
    if (db) {
      return new Promise((resolve) => {
        try {
          const transaction = db.transaction([STORE_NAME], 'readonly');
          const store = transaction.objectStore(STORE_NAME);
          const request = store.getAll();

          request.onsuccess = () => {
            const result = request.result;
            if (result && Array.isArray(result) && result.length > 0) {
              resolve(result);
            } else {
              // Try localStorage fallback
              const saved = localStorage.getItem(LOCAL_STORAGE_BACKUP_KEY);
              if (saved) {
                try {
                  const parsed = JSON.parse(saved);
                  if (Array.isArray(parsed) && parsed.length > 0) {
                    resolve(parsed);
                    return;
                  }
                } catch {
                  // Ignore parse error
                }
              }
              resolve(fallbackDefaults);
            }
          };

          request.onerror = () => {
            resolve(fallbackDefaults);
          };
        } catch (e) {
          console.warn('IndexedDB read transaction failed:', e);
          resolve(fallbackDefaults);
        }
      });
    }

    // Fallback: localStorage
    const saved = localStorage.getItem(LOCAL_STORAGE_BACKUP_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.warn('Failed to parse localStorage certs:', e);
      }
    }
    return fallbackDefaults;
  } catch (error) {
    console.error('Error loading persistent certificates:', error);
    return fallbackDefaults;
  }
}

/**
 * Save all certificates to IndexedDB and sync to localStorage
 */
export async function savePersistentCertificates(certificates) {
  if (!Array.isArray(certificates)) return false;

  // 1. Always attempt saving to IndexedDB (best for large PDFs/images)
  try {
    const db = await openDatabase();
    if (db) {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      // Clear existing records and re-insert
      store.clear();
      for (const cert of certificates) {
        store.put(cert);
      }
    }
  } catch (err) {
    console.warn('IndexedDB save failed:', err);
  }

  // 2. Also keep a lightweight copy in localStorage (strip massive base64 if needed to avoid quota errors)
  try {
    const lightweightCerts = certificates.map(c => {
      // If base64 file data is over 2MB, omit raw data in localStorage backup to avoid QUOTA_EXCEEDED_ERR
      if (typeof c.fileUrl === 'string' && c.fileUrl.startsWith('data:') && c.fileUrl.length > 2000000) {
        return { ...c, fileUrl: c.fileUrl.slice(0, 50) + '...[truncated for storage quota]' };
      }
      return c;
    });
    localStorage.setItem(LOCAL_STORAGE_BACKUP_KEY, JSON.stringify(lightweightCerts));
  } catch (err) {
    console.warn('LocalStorage backup quota reached or unavailable:', err);
  }

  return true;
}

/**
 * Validate a file before uploading
 */
export function validateCertificateFile(file) {
  if (!file) {
    return { valid: false, error: 'No file selected.' };
  }

  // 1. Validate file size (max 10MB)
  if (file.size > MAX_FILE_SIZE_BYTES) {
    const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
    return {
      valid: false,
      error: `File is too large (${sizeInMb}MB). Maximum allowed file size is 10MB.`
    };
  }

  // 2. Validate MIME type & file extension
  const fileName = (file.name || '').toLowerCase();
  const fileType = (file.type || '').toLowerCase();

  const isPdf = fileType === 'application/pdf' || fileName.endsWith('.pdf');
  const isImage = ALLOWED_MIME_TYPES.includes(fileType) ||
    fileName.endsWith('.jpg') ||
    fileName.endsWith('.jpeg') ||
    fileName.endsWith('.png') ||
    fileName.endsWith('.webp');

  if (!isPdf && !isImage) {
    return {
      valid: false,
      error: 'Unsupported file format. Please upload a PDF, JPG, JPEG, PNG, or WebP document.'
    };
  }

  return {
    valid: true,
    fileType: isPdf ? 'pdf' : 'image',
    fileName: file.name,
    fileSize: file.size
  };
}

/**
 * Convert a File object to Data URL
 */
export function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
