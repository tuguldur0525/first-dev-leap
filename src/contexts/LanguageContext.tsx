import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "en" | "mn";

interface LanguageContextValue {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  // Load saved preference (or fall back to browser language) on mount
  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "mn" || stored === "en") {
      setLang(stored);
      document.documentElement.setAttribute("lang", stored);
      return;
    }
    const browserLang = navigator.language?.toLowerCase().startsWith("mn") ? "mn" : "en";
    setLang(browserLang);
    document.documentElement.setAttribute("lang", browserLang);
  }, []);

  const setLanguage = (next: Language) => {
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.setAttribute("lang", next);
  };

  const toggleLanguage = () => setLanguage(lang === "en" ? "mn" : "en");

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
