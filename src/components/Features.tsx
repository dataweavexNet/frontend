import { features } from '../data/constants';
import Reveal from './Reveal';

export default function Features() {
  return <section className="section-pad features-section"><Reveal><span className="eyebrow">07 / PLATFORM CAPABILITIES</span><div className="section-heading"><h2>One platform.<br /><span>Multiple data workflows.</span></h2><p>From first connection to production-ready intelligence, DataWeaveX brings the entire journey into focus.</p></div></Reveal><div className="feature-grid">{features.map(([number, title, text, img], index) => <Reveal key={title} delay={(index % 4) * 0.04}><div className="feature-card"><div><span className="feature-number">{number}</span><img src={img} alt="" className="feature-icon" /></div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></section>;
}
