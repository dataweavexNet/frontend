import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function Turnstile({ siteKey, onToken }: { siteKey: string; onToken?: (token: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useEffect(() => {
    let disposed = false;

    const ensureScript = () =>
      new Promise<void>((resolve, reject) => {
        if (window.turnstile) return resolve();
        const existing = document.querySelector<HTMLScriptElement>('script[src*="challenges.cloudflare.com/turnstile"]');
        if (existing) {
          if (existing.dataset.loaded) return resolve();
          existing.addEventListener('load', () => resolve(), { once: true });
          existing.addEventListener('error', () => reject(new Error('Turnstile script failed to load')), { once: true });
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.addEventListener('load', () => {
          script.dataset.loaded = 'true';
          resolve();
        }, { once: true });
        script.addEventListener('error', () => reject(new Error('Turnstile script failed to load')), { once: true });
        document.head.appendChild(script);
      });

    (async () => {
      try {
        await ensureScript();
        if (disposed || !containerRef.current || !window.turnstile) return;
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          size: 'flexible',
          callback: (token: string) => onTokenRef.current?.(token),
          'expired-callback': () => onTokenRef.current?.(''),
        });
      } catch {
        onTokenRef.current?.('');
      }
    })();

    return () => {
      disposed = true;
      if (widgetIdRef.current && window.turnstile) window.turnstile.reset(widgetIdRef.current);
    };
  }, [siteKey]);

  return <div ref={containerRef} className="turnstile-widget" aria-label="Security check" />;
}