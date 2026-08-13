import { useLanguage } from '@/contexts/LanguageContext';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';

export function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();
  const { t } = usePortfolioContent();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={lang === 'en' ? (t['switchToMongolian'] ?? '') : (t['switchToEnglish'] ?? '')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
    >
      {lang === 'en' ? 'MN' : 'EN'}
    </button>
  );
}
