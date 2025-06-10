// context/CookiesContext.tsx

'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type CookiesContextType = {
  cookiesAccepted: boolean | null;
  setCookiesAccepted: (accepted: boolean) => void;
};

const CookiesContext = createContext<CookiesContextType>({
  cookiesAccepted: null,
  setCookiesAccepted: () => {},
});

export const CookiesProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    // Check localStorage for existing preference
    const savedPreference = localStorage.getItem('cookiesAccepted');
    if (savedPreference) {
      setCookiesAccepted(savedPreference === 'true');
    }
  }, []);

  const handleSetCookiesAccepted = (accepted: boolean) => {
    setCookiesAccepted(accepted);
    localStorage.setItem('cookiesAccepted', String(accepted));
  };

  return (
    <CookiesContext.Provider 
      value={{ 
        cookiesAccepted, 
        setCookiesAccepted: handleSetCookiesAccepted 
      }}
    >
      {children}
    </CookiesContext.Provider>
  );
};

export const useCookies = () => useContext(CookiesContext);