import { ArrowUpRight } from 'lucide-react';
import { IMG } from '../data/constants';
import Reveal from './Reveal';

export default function Performance() {
  return <section className="performance-section"><div className="performance-bg" style={{ backgroundImage: `url(${IMG.perfServer})` }} /><div className="performance-overlay" /><div className="section-pad" style={{ position: 'relative', zIndex: 1 }}><Reveal><span className="eyebrow">06 / THE DATAWEAVEX DIFFERENCE</span><h2>More data.<br /><em>Less friction.</em></h2></Reveal><div className="performance-grid">{([['128+', 'Data sources'], ['42', 'Active pipelines'], ['8.4 TB', 'Processed today'], ['96.4%', 'Data quality']] as [string, string][]).map(([value, label], index) => <Reveal key={label} delay={index * 0.07}><div><strong>{value}</strong><span>{label}</span><ArrowUpRight size={16} /></div></Reveal>)}</div></div></section>;
}
