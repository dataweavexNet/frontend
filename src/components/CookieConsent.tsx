import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'dataweavex-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const decide = (value: 'all' | 'essential') => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <p>We use cookies to improve your experience, analyze site usage and keep things secure. You can accept all or only the essential cookies.</p>
      <div className="cookie-actions">
        <Link to="/privacy">Privacy Policy</Link>
        <button className="button button-quiet" type="button" onClick={() => decide('essential')}>Essential only</button>
        <button className="button button-primary" type="button" onClick={() => decide('all')}>Accept all</button>
      </div>
    </div>
  );
}