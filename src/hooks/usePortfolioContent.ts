import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/data/portfolio";
import { ui, type UI } from "@/lib/i18n/ui";

/**
 * Returns the portfolio data (profile, projects, etc.) and UI strings
 * for the currently selected language, so components don't need to
 * juggle `content[lang]` and `ui[lang]` separately.
 */
export function usePortfolioContent() {
  const { lang } = useLanguage();
  return { lang, data: content[lang], t: ui[lang] as UI };
}
