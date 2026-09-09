import { Link } from 'react-router-dom';
import { Youtube, Linkedin } from 'lucide-react';
import Mark from './Mark';

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/@dataweavex', Icon: Youtube },
  { label: 'X (Twitter)', href: 'https://x.com/dataweavex', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/dataweavex/', Icon: Linkedin },
];

export default function Footer() {
  return <footer className="footer"><div className="footer-top"><div><Mark /><p>AI data fabric<br />& transformation platform</p><div className="footer-socials">{socials.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon size={16} /></a>)}</div></div><div className="footer-links"><div><span className="eyebrow">Platform</span><a href="#features">Features</a><a href="#features">Capabilities</a><a href="#pricing">Pricing</a></div><div><span className="eyebrow">Explore</span><a href="#faq">FAQ</a><a href="#about">About</a><a href="#contact">Contact</a></div><div><span className="eyebrow">Elsewhere</span><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div></div><div className="footer-maps"><div className="footer-map"><span className="eyebrow">HQ — SRI LANKA</span><iframe title="DataWeaveX Sri Lanka HQ" src="https://www.google.com/maps?q=No%2002%20Union%20Place%2C%20Colombo%2000200%2C%20Sri%20Lanka&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><small>No. 02 Union Place, Colombo 00200</small></div><div className="footer-map"><span className="eyebrow">SUB BRANCH — USA</span><iframe title="DataWeaveX USA Sub Branch" src="https://www.google.com/maps?q=24%20Waverly%20Pl%2C%20New%20York%2C%20NY%2010003%2C%20USA&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><small>24 Waverly Pl, New York, NY 10003, USA</small></div></div></div><div className="footer-bottom"><span>© 2026 DataWeaveX. All rights reserved.</span><span>WEAVING THE ENTERPRISE DATA FABRIC FOR THE AI ERA.</span></div></footer>;
}