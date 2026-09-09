import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { IMG } from '../data/constants';
import Reveal from './Reveal';
import MetricCard from './MetricCard';

export default function Hero() {
  return (
    <section className="hero-image">
      <div className="hero-bg" style={{ backgroundImage: `url(${IMG.hero})` }} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <Reveal><span className="eyebrow cyan-text">ONE INTELLIGENT FABRIC FOR YOUR ENTIRE DATA LANDSCAPE</span></Reveal>
        <Reveal delay={0.08}><h1>Weave your data into<br /><em>something smarter.</em></h1></Reveal>
        <Reveal delay={0.16}><p className="hero-lead">One intelligent fabric for your entire data landscape.</p></Reveal>
        <Reveal delay={0.16}><p>Data lives everywhere — across databases, cloud platforms, applications, APIs, warehouses, and data lakes. DataWeaveX brings it together, transforms it, enriches it, and makes it ready for the analytics and AI that move your business forward.</p></Reveal>
        <Reveal delay={0.22}><span className="hero-tagline"><b>Connect.</b><b>Transform.</b><b>Enrich.</b><b>Accelerate.</b></span></Reveal>
        <Reveal delay={0.22}><div className="hero-actions"><a className="button button-primary" href="#features">Explore the Platform <ArrowRight size={16} /></a><Link className="button button-quiet" to="/product"><Play size={15} /> See How It Works</Link></div></Reveal>
        <Reveal delay={0.28}><div className="hero-stats"><span>10+ Data Sources</span><i /><span>Real-Time Pipelines</span><i /><span>AI-Ready Data</span></div></Reveal>
      </div>
      <div className="hero-floats">
        <MetricCard className="metric-a" label="Connected sources" value="128" note="↑ 12.4% this month" />
        <MetricCard className="metric-b" label="Active pipelines" value="42" note="38 running · 4 processing" />
        <MetricCard className="metric-c" label="Data readiness" value="94.8%" note="AI ready" />
        <MetricCard className="metric-d" label="Processing today" value="8.4 TB" note="+18.2% volume" />
      </div>
      <div className="hero-scroll"><span>SCROLL</span><i /></div>
    </section>
  );
}
