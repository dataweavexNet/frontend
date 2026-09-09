import { Sparkles } from 'lucide-react';
import { testimonials } from '../data/constants';
import Reveal from './Reveal';

export default function Testimonials() {
  return <section className="section-pad testimonials-section"><Reveal><div className="section-heading"><div><span className="eyebrow">VOICES FROM THE FIELD</span><h2>Trusted by data<br /><span>teams who build.</span></h2></div><p>Real outcomes from teams who replaced fragmented tooling with a unified data fabric.</p></div></Reveal><div className="testimonial-grid">{testimonials.map((item, index) => <Reveal key={item.name} delay={index * 0.08}><div className="testimonial-card"><div className="testimonial-quote-icon"><Sparkles size={18} /></div><p>"{item.quote}"</p><div className="testimonial-author"><div className="testimonial-avatar" style={{ backgroundImage: `url(${item.img})` }} /><div><strong>{item.name}</strong><small>{item.role}</small><span>{item.company}</span></div></div></div></Reveal>)}</div></section>;
}
