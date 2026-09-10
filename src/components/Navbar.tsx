import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Mark from './Mark';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const location = useLocation();
  const items = [['Feature', '#features'], ['How it works', '#about'], ['Pricing', '#pricing'], ['FAQ', '#faq'], ['Contact', '#contact']];

  useEffect(() => {
    if (location.pathname !== '/') {
      setActive('');
      return;
    }
    const ids = items.map(([, href]) => href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const offset = 140;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 40) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const getHref = (href: string) => (location.pathname === '/' ? href : `/${href}`);

  return (
    <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="nav-shell">
        <Mark compact />
        <div className={`nav-links ${open ? 'nav-open' : ''}`}>
          {items.map(([label, href]) => (
            <a
              key={label}
              href={getHref(href)}
              className={active === href.slice(1) && location.pathname === '/' ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <Link
            to="/product"
            className="nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            WeaveCore OS <ArrowUpRight size={14} />
          </Link>
        </div>
        <Link to="/product" className="nav-product">
          WeaveCore OS <ArrowUpRight size={15} />
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>
  );
}
