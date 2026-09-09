import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  AlertCircle,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Database,
  Terminal,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { chartData, healthData, sourceData, cyan, logTemplates, type LogLevel, type LogEntry } from '../data/constants';
import Reveal from './Reveal';

export default function Dashboard() {
  const [metrics, setMetrics] = useState({ sources: 128, pipelines: 42, volume: 8.4, datasets: 86 });
  const [liveChart, setLiveChart] = useState(chartData);
  const [health, setHealth] = useState(healthData);
  const [logs, setLogs] = useState<LogEntry[]>(() => logTemplates.slice(0, 6).map((t, i) => ({ ...t, id: i, time: new Date(Date.now() - i * 15000) })));
  const [clock, setClock] = useState(new Date());
  const logId = useRef(100);

  useEffect(() => {
    const metricTimer = setInterval(() => {
      setMetrics(prev => ({
        sources: Math.max(120, Math.min(140, prev.sources + Math.floor(Math.random() * 3) - 1)),
        pipelines: Math.max(38, Math.min(48, prev.pipelines + Math.floor(Math.random() * 3) - 1)),
        volume: +Math.max(7, Math.min(12, prev.volume + (Math.random() - 0.4) * 0.4)).toFixed(1),
        datasets: Math.max(80, Math.min(95, prev.datasets + (Math.random() > 0.7 ? 1 : 0) - (Math.random() > 0.8 ? 1 : 0))),
      }));
    }, 3000);
    return () => clearInterval(metricTimer);
  }, []);

  useEffect(() => {
    const chartTimer = setInterval(() => {
      setLiveChart(prev => [...prev.slice(1), { day: 'Now', value: Math.floor(35 + Math.random() * 65) }]);
    }, 2500);
    return () => clearInterval(chartTimer);
  }, []);

  useEffect(() => {
    const healthTimer = setInterval(() => {
      setHealth(prev => prev.map(h => ({ ...h, value: Math.max(0, h.value + Math.floor(Math.random() * 5) - 2) })));
    }, 4000);
    return () => clearInterval(healthTimer);
  }, []);

  useEffect(() => {
    const logTimer = setInterval(() => {
      const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
      setLogs(prev => [{ ...template, id: logId.current++, time: new Date() }, ...prev].slice(0, 7));
    }, 2200);
    return () => clearInterval(logTimer);
  }, []);

  useEffect(() => {
    const clockTimer = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(clockTimer);
  }, []);

  const formatTime = (d: Date) => d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const logIcon = (level: LogLevel) => level === 'success' ? <CheckCircle2 size={14} /> : level === 'warning' ? <AlertCircle size={14} /> : <Activity size={14} />;

  return (
    <section className="section-pad dashboard-section" id="dashboard">
      <Reveal><div className="section-heading"><div><span className="eyebrow">04 / DATA OPERATIONS</span><h2>Your data.<br /><span>Visible. Operational.</span></h2></div><p>Make every pipeline measurable. Give teams a live, shared understanding of what is moving, what is ready and what needs attention.</p></div></Reveal>
      <Reveal delay={0.08}>
        <div className="dashboard-shell">
          <div className="dashboard-header">
            <div><span className="eyebrow">DATA OPERATIONS CENTER</span><strong>Good morning, your fabric is healthy.</strong></div>
            <div className="dashboard-live">
              <span className="live-clock">{formatTime(clock)}</span>
              <span className="pill running"><i /> All systems operational</span>
            </div>
          </div>
          <div className="dashboard-metrics">
            <div><span>Data sources</span><motion.strong key={metrics.sources} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>{metrics.sources}</motion.strong><small>+12.4%</small></div>
            <div><span>Active pipelines</span><motion.strong key={metrics.pipelines} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>{metrics.pipelines}</motion.strong><small>38 running</small></div>
            <div><span>Processing volume</span><motion.strong key={metrics.volume} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>{metrics.volume} TB</motion.strong><small>Today</small></div>
            <div><span>AI ready datasets</span><motion.strong key={metrics.datasets} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>{metrics.datasets}</motion.strong><small>+8 this week</small></div>
          </div>
          <div className="charts-grid">
            <div className="chart-card chart-wide">
              <div className="chart-title"><span>Processing volume <span className="live-badge"><span className="live-dot" /> LIVE</span></span><b>Last 7 days <ChevronDown size={14} /></b></div>
              <ResponsiveContainer width="100%" height="90%"><LineChart data={liveChart}><CartesianGrid stroke="#263337" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="day" tick={{ fill: '#748284', fontSize: 10 }} axisLine={false} tickLine={false} /><YAxis hide /><Tooltip contentStyle={{ background: '#101719', border: '1px solid #263337', borderRadius: 8, color: '#f5f7f6' }} /><Line type="monotone" dataKey="value" stroke={cyan} strokeWidth={2} dot={{ r: 3, fill: cyan, strokeWidth: 0 }} isAnimationActive animationDuration={600} /></LineChart></ResponsiveContainer>
            </div>
            <div className="chart-card">
              <div className="chart-title"><span>Pipeline health</span><BarChart3 size={15} /></div>
              <ResponsiveContainer width="100%" height="82%"><BarChart data={health}><XAxis dataKey="name" tick={{ fill: '#748284', fontSize: 9 }} axisLine={false} tickLine={false} /><YAxis hide /><Bar dataKey="value" radius={[3, 3, 0, 0]} isAnimationActive animationDuration={500}>{health.map((entry) => <Cell key={entry.name} fill={entry.name === 'Healthy' ? cyan : entry.name === 'Warning' ? '#d2a657' : '#b55c6c'} />)}</Bar></BarChart></ResponsiveContainer>
            </div>
            <div className="chart-card donut-card">
              <div className="chart-title"><span>Data sources</span><Database size={15} /></div>
              <div className="donut-wrap"><ResponsiveContainer width="60%" height="100%"><PieChart><Pie data={sourceData} dataKey="value" innerRadius={42} outerRadius={58} paddingAngle={3}>{sourceData.map((entry, index) => <Cell key={entry.name} fill={[cyan, '#315cff', '#79a5ff', '#455559'][index]} />)}</Pie></PieChart></ResponsiveContainer><div><strong>128</strong><small>connected</small></div></div>
            </div>
          </div>
          <div className="dashboard-log">
            <div className="log-header"><div className="log-header-left"><Terminal size={15} /><span className="eyebrow">LIVE ACTIVITY STREAM</span></div><span className="log-count">{logs.length} events</span></div>
            <div className="log-list">
              <AnimatePresence initial={false}>
                {logs.map((log) => (
                  <motion.div key={log.id} className={`log-entry log-${log.level}`} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
                    <span className="log-time">{formatTime(log.time)}</span>
                    <span className="log-icon">{logIcon(log.level)}</span>
                    <span className="log-source">{log.source}</span>
                    <span className="log-message">{log.message}</span>
                    <span className="log-records">{log.records}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
