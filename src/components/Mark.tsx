import { Link } from 'react-router-dom';
import logo from '../assets/2.png';

export default function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className={`brand ${compact ? 'brand-compact' : ''}`}>
      <img src={logo} alt="DataWeaveX logo" className="brand-logo" />
    </Link>
  );
}
