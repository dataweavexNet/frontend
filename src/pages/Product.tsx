import { useNavigate } from 'react-router-dom';
import { BarChart3, GitBranch, Network, X } from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Mark from '../components/Mark';
import { cyan, blue, chartData } from '../data/constants';

export default function Product() {
  const navigate = useNavigate();
  const pipelines: [string, string, string][] = [
    ['Customer Sync', 'Running', '842K'],
    ['Finance ETL', 'Running', '1.2M'],
    ['Product Enrichment', 'Complete', '523K'],
    ['AI Dataset Prep', 'Complete', '4.8M'],
    ['ERP Connector', 'Running', '640K'],
    ['Cloud Sync', 'Complete', '2.4M'],
  ];
  return (
    <div className="product-page">
      <header className="product-nav">
        <Mark compact />
        <div className="product-nav-links">
          <span className="selected">Overview</span>
          <span>Data sources</span>
          <span>Pipelines</span>
          <span>Transformations</span>
          <span>Datasets</span>
          <span>Analytics</span>
        </div>
        <button className="icon-button" onClick={() => navigate('/')}><X size={18} /></button>
      </header>
      <main className="product-main">
        <div className="product-heading">
          <div>
            <span className="eyebrow cyan-text">DATA OPERATIONS CENTER / OVERVIEW</span>
            <h1>Good morning,<br /><span>your fabric is healthy.</span></h1>
          </div>
          <div className="product-date">
            <span className="status-dot" /> Live environment<br />
            <small>03 Sep 2026 · 08:42 UTC</small>
          </div>
        </div>
        <div className="product-kpis">
          {([
            ['Connected sources', '128', '+12.4%'],
            ['Active pipelines', '42', '38 running'],
            ['Processing volume', '8.4 TB', 'Today'],
            ['Data quality', '96.4%', '+2.1%'],
            ['AI ready datasets', '86', '+8 this week'],
            ['Failed jobs', '03', 'Needs attention'],
          ] as [string, string, string][]).map(([label, value, note], index) => (
            <div key={label} className={index === 5 ? 'warning-kpi' : ''}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{note}</small>
            </div>
          ))}
        </div>
        <div className="product-grid">
          <section className="product-panel graph-panel">
            <div className="panel-heading">
              <div><span className="eyebrow">DATA FABRIC GRAPH</span><strong>Live system topology</strong></div>
              <span className="pill running"><i /> Live</span>
            </div>
            <div className="fabric-graph">
              <svg viewBox="0 0 800 410">
                <defs>
                  <linearGradient id="productLine"><stop stopColor={cyan} /><stop offset="1" stopColor={blue} /></linearGradient>
                </defs>
                {[
                  'M 120 80 Q 300 50 400 205',
                  'M 680 80 Q 500 50 400 205',
                  'M 100 205 Q 280 180 400 205',
                  'M 700 205 Q 520 180 400 205',
                  'M 150 330 Q 310 330 400 205',
                  'M 650 330 Q 490 330 400 205',
                  'M 400 205 L 240 360',
                  'M 400 205 L 560 360',
                ].map((path) => <path key={path} d={path} />)}
              </svg>
              <div className="graph-core">
                <Network size={22} />
                <span>DATAWEAVEX</span>
                <small>FABRIC</small>
              </div>
              {['ERP', 'CRM', 'DATABASE', 'API', 'CLOUD', 'DATA LAKE', 'ANALYTICS', 'AI / APPS'].map((node, index) => (
                <div key={node} className={`graph-node graph-${index}`}><i />{node}</div>
              ))}
            </div>
            <div className="graph-legend">
              <span><i className="dot-cyan" /> Live data flow</span>
              <span><i className="dot-blue" /> AI-ready route</span>
              <span><i className="dot-muted" /> Idle connection</span>
            </div>
          </section>

          <section className="product-panel product-chart">
            <div className="panel-heading">
              <div><span className="eyebrow">PROCESSING VOLUME</span><strong>8.4 TB <small>this week</small></strong></div>
              <BarChart3 size={17} />
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={chartData}>
                <CartesianGrid stroke="#263337" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: '#748284', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip contentStyle={{ background: '#101719', border: '1px solid #263337', borderRadius: 8, color: '#f5f7f6' }} />
                <Line type="monotone" dataKey="value" stroke={cyan} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="chart-foot">
              <span>+18.2%</span>
              <small>vs previous period</small>
            </div>
          </section>

          <section className="product-panel pipeline-table">
            <div className="panel-heading">
              <div><span className="eyebrow">PIPELINE MONITORING</span><strong>Latest activity</strong></div>
              <GitBranch size={17} />
            </div>
            <div className="table-head">
              <span>Pipeline</span>
              <span>Status</span>
              <span>Records</span>
            </div>
            {pipelines.map(([name, status, records]) => (
              <div key={name} className="table-row">
                <span>{name}</span>
                <span className={status === 'Running' ? 'table-status' : 'table-status complete'}><i />{status}</span>
                <span>{records}</span>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}