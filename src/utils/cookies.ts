/**
 * Cookie utility functions for managing cookie consent and other cookies
 */

// Extend Window interface for analytics objects
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown[];
  }
}

/**
 * Set a cookie with the given name, value, and expiration days
 */
export const setCookie = (name: string, value: string, days: number = 365): void => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

/**
 * Get a cookie value by name
 */
export const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

/**
 * Delete a cookie by name
 */
export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
};

/**
 * Check if user has accepted cookie consent
 */
export const hasAcceptedCookies = (): boolean => {
  return document.cookie.includes("cookieConsent=accepted");
};

/**
 * Check if user has declined cookie consent
 */
export const hasDeclinedCookies = (): boolean => {
  return document.cookie.includes("cookieConsent=declined");
};

/**
 * Check if user has made any cookie consent choice (accepted or declined)
 */
export const hasMadeCookieChoice = (): boolean => {
  return document.cookie.includes("cookieConsent=");
};

/**
 * Get the current cookie consent status
 */
export const getCookieConsentStatus = (): 'accepted' | 'declined' | null => {
  if (hasAcceptedCookies()) return 'accepted';
  if (hasDeclinedCookies()) return 'declined';
  return null;
};

/**
 * Check if analytics/tracking cookies are allowed
 */
export const areAnalyticsAllowed = (): boolean => {
  return hasAcceptedCookies();
};

/**
 * Clear analytics data when cookies are declined
 */
export const clearAnalyticsData = (): void => {
  // Clear Google Analytics data
  if (typeof window !== 'undefined' && window.gtag) {
    // Clear any existing analytics data
    try {
      // Reset dataLayer
      if (window.dataLayer) {
        window.dataLayer = [];
      }
      
      // Clear any stored analytics preferences
      if (localStorage) {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
          if (key.includes('_ga') || key.includes('analytics') || key.includes('gtm')) {
            localStorage.removeItem(key);
          }
        });
      }
    } catch {
      console.log('Analytics data cleared');
    }
  }

  // Enhanced Google Analytics cookie cleanup
  try {
    // Clear all possible GA cookies from current domain
    const cookies = document.cookie.split(';');
    const gaCookies = cookies.filter(cookie => {
      const [name] = cookie.split('=');
      const cookieName = name.trim();
      return cookieName.includes('_ga') || 
             cookieName.includes('_gid') || 
             cookieName.includes('_gat') ||
             cookieName.includes('_gac') ||
             cookieName.includes('_gac_gb') ||
             cookieName.includes('gtm') ||
             cookieName.includes('analytics');
    });
    
    gaCookies.forEach(cookie => {
      const [name] = cookie.split('=');
      const cookieName = name.trim();
      deleteCookie(cookieName);
    });

    // Also try to clear GA cookies from sessionStorage
    if (sessionStorage) {
      const sessionKeys = Object.keys(sessionStorage);
      const gaSessionKeys = sessionKeys.filter(key => 
        key.includes('_ga') || 
        key.includes('analytics') || 
        key.includes('gtm')
      );
      
      gaSessionKeys.forEach(key => {
        sessionStorage.removeItem(key);
      });
    }

    // Try to clear cookies from .google.com domain (if possible)
    // Note: This may not work due to cross-domain restrictions
    try {
      document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.google.com';
      document.cookie = '_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.google.com';
      document.cookie = '_gat=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.google.com';
    } catch {
      // Cross-domain cookie deletion may fail - this is normal
    }

    // Clear any remaining GA data from localStorage
    if (localStorage) {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.includes('_ga') || 
            key.includes('_gid') || 
            key.includes('_gat') ||
            key.includes('analytics') || 
            key.includes('gtm') ||
            key.includes('google')) {
          localStorage.removeItem(key);
        }
      });
    }

    console.log(`Cleared ${gaCookies.length} Google Analytics cookies`);
  } catch (error) {
    console.log('Google Analytics cleanup error:', error);
  }

  // Clear Facebook Meta Pixel data
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      
      // Clear Facebook Pixel data from localStorage
      if (localStorage) {
        const keys = Object.keys(localStorage);
        const fbKeys = keys.filter(key => 
          key.includes('fb_') || 
          key.includes('facebook') || 
          key.includes('pixel') ||
          key.includes('_fbp') ||
          key.includes('_fbc')
        );
        
        fbKeys.forEach(key => {
          localStorage.removeItem(key);
        });
        
      }

      // Clear Facebook Pixel cookies - target the actual cookie names Facebook uses
      const cookies = document.cookie.split(';');
      const fbCookies = cookies.filter(cookie => {
        const [name] = cookie.split('=');
        const cookieName = name.trim();
        return cookieName.includes('_fbp') || 
               cookieName.includes('_fbc') || 
               cookieName.includes('fb_') ||
               cookieName.includes('fr') ||
               cookieName.startsWith('fb_');
      });
      
      fbCookies.forEach(cookie => {
        const [name] = cookie.split('=');
        const cookieName = name.trim();
        deleteCookie(cookieName);
      });

      // Reset Facebook Pixel queue
      if (window._fbq) {
        window._fbq = []
      }
      
      // Also try to clear any Facebook Pixel data from sessionStorage
      if (sessionStorage) {
        const sessionKeys = Object.keys(sessionStorage);
        const fbSessionKeys = sessionKeys.filter(key => 
          key.includes('fb_') || 
          key.includes('facebook') || 
          key.includes('pixel')
        );
        
        fbSessionKeys.forEach(key => {
          sessionStorage.removeItem(key);
        });
        
      }
      
    } catch (error) {
      console.log('Facebook Pixel data cleared with errors:', error);
    }
  }
};

/**
 * Check if user is in EU for enhanced privacy compliance
 * This is a basic implementation - in production you might want to use a more sophisticated geo-location service
 */
export const isUserInEU = (): boolean => {
  // Check for EU-specific timezone or language preferences
  // This is a simplified check - real implementation would use IP geolocation
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const euTimezones = [
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Rome',
    'Europe/Madrid', 'Europe/Amsterdam', 'Europe/Brussels', 'Europe/Vienna',
    'Europe/Prague', 'Europe/Budapest', 'Europe/Warsaw', 'Europe/Stockholm',
    'Europe/Oslo', 'Europe/Copenhagen', 'Europe/Helsinki', 'Europe/Riga',
    'Europe/Tallinn', 'Europe/Vilnius', 'Europe/Dublin', 'Europe/Lisbon'
  ];
  
  return euTimezones.includes(timezone);
};
