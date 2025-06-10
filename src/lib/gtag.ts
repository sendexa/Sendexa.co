// lib/gtag.ts

declare global {
    interface Window {
      gtag: (...args: unknown[]) => void;
    }
  }
  
  export const GA_MEASUREMENT_ID = 'G-PYNJBR4HZL';
  
  export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  };
  
  export const event = ({ action, category, label, value }: {
    action: string;
    category: string;
    label: string;
    value?: number;
  }) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
      });
    }
  };
  