import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { IMG } from '../data/constants';
import Reveal from './Reveal';

export default function FinalCta() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-bg" style={{ backgroundImage: `url(${IMG.cta})` }} />
      <div className="final-cta-glow" />
      <div className="section-pad final-cta-inner">
        <Reveal>
          <span className="eyebrow cyan-text">11 / READY WHEN YOU ARE</span>
          <h2>Your data future<br /><em>starts now.</em></h2>
          <p>Stop wrestling with fragmented pipelines and disconnected tools. Bring every source, transformation and AI workflow under one operational fabric.</p>
          <div className="final-cta-actions">
            <a href="#contact" className="button button-primary">Start a conversation <ArrowUpRight size={16} /></a>
            <Link to="/product" className="button button-ghost">Explore the product <ArrowRight size={16} /></Link>
          </div>
          <div className="final-cta-stats">
            <div><strong>128+</strong><span>Data sources connected</span></div>
            <div><strong>42</strong><span>Active pipelines</span></div>
            <div><strong>96.4%</strong><span>Data quality</span></div>
            <div><strong>8.4 TB</strong><span>Processed today</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
