export const trackLanguageChange = (fromLocale: string, toLocale: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'language_change', {
      from_language: fromLocale,
      to_language: toLocale,
      event_category: 'internationalization'
    });
  }
};

export const trackPageView = (locale: string, path: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        'language': locale,
        'page_path': path
      }
    });
  }
}; 