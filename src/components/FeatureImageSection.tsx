import { IMG } from '../data/constants';
import Reveal from './Reveal';

export default function FeatureImageSection() {
  return (
    <section className="feature-image-section">
      <div className="feature-image-bg" style={{ backgroundImage: `url(${IMG.feature})` }} />
      <div className="feature-image-overlay" />
      <div className="feature-image-content">
        <Reveal><span className="eyebrow cyan-text">CONNECT / TRANSFORM / ENRICH / UNIFY</span></Reveal>
        <Reveal delay={0.08}><h2>From fragmented<br />data to <em>AI-ready<br />intelligence.</em></h2></Reveal>
        <Reveal delay={0.16}><p>The journey from scattered enterprise sources to structured, governed, AI-ready data — visualized, automated and operational.</p></Reveal>
        <Reveal delay={0.22}><div className="journey-flow"><span>FRAGMENTED DATA</span><i /><span>CONNECT</span><i /><span>TRANSFORM</span><i /><span>ENRICH</span><i /><span>UNIFY</span><i /><span className="cyan-text">AI-READY</span></div></Reveal>
      </div>
    </section>
  );
}
