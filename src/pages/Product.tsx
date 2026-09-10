import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Cpu,
  ExternalLink,
  GitBranch,
  HardDrive,
  Lock,
  Network,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';
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
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { blue, chartData, cyan } from '../data/constants';

type PipelineStatus = 'All' | 'Running' | 'Complete';

interface PipelineItem {
  id: string;
  name: string;
  status: 'Running' | 'Complete';
  records: string;
  latency: string;
  engine: string;
}

const pipelinesData: PipelineItem[] = [
  { id: '1', name: 'ERP & CRM Unified Ingest', status: 'Running', records: '1.2M', latency: '4ms', engine: 'RAPIDS cuDF' },
  { id: '2', name: 'Customer 360 Semantic Mesh', status: 'Running', records: '842K', latency: '6ms', engine: 'NeMo LLM' },
  { id: '3', name: 'Real-Time Anomaly Scoring', status: 'Running', records: '3.4M', latency: '3ms', engine: 'cuML Detector' },
  { id: '4', name: 'AI Dataset Prep / Cluster 042', status: 'Complete', records: '4.8M', latency: '2ms', engine: 'Triton Server' },
  { id: '5', name: 'Cross-Cloud Lakehouse Sync', status: 'Running', records: '640K', latency: '8ms', engine: 'Zero-Copy Fabric' },
  { id: '6', name: 'Vector Knowledge Enrichment', status: 'Complete', records: '2.4M', latency: '5ms', engine: 'NeMo Semantic' },
];

export default function Product() {
  const [filter, setFilter] = useState<PipelineStatus>('All');

  const filteredPipelines = pipelinesData.filter(
    (item) => filter === 'All' || item.status === filter
  );

  return (
    <div className="product-page">
      {/* Top Navigation Bar */}
      <header className="product-nav">
        <div className="product-nav-left">
          <Mark compact />
          <span className="product-nav-badge">
            <span className="status-dot" /> WeaveCore OS v2.4
          </span>
        </div>

        <nav className="product-nav-links">
          <a href="#overview">Overview</a>
          <a href="#pillars">Operating Pillars</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#acceleration">Accelerated Engine</a>
          <a href="#operations">Operations Center</a>
          <a href="#compare">Comparison</a>
        </nav>

        <div className="product-nav-actions">
          <Link to="/" className="button button-quiet">
            Back to Home
          </Link>
          <a
            href="https://workspace.dataweavex.net"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Launch Workspace <ExternalLink size={14} />
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="product-hero" id="overview">
          <div className="product-hero-glow" />
          <div className="product-hero-inner">
            <Reveal>
              <span className="eyebrow cyan-text">
                WEAVECORE OS // THE AUTONOMOUS DATA OPERATING SYSTEM
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1>
                WeaveCore OS
                <span>The Autonomous Intelligence Kernel for Enterprise Data Fabrics</span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="product-lead">
                WeaveCore OS unifies distributed enterprise storage, executes microsecond
                in-memory transformations, and continuously synthesizes pristine, verified datasets
                engineered directly for enterprise AI and large language models.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="product-hero-actions">
                <a
                  href="https://workspace.dataweavex.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary hero-live-btn"
                >
                  Launch Live Workspace <ExternalLink size={16} />
                </a>
                <a href="#pillars" className="button button-quiet">
                  Explore Operating Pillars <ArrowRight size={16} />
                </a>
                <a href="#acceleration" className="button button-quiet">
                  Accelerated Engine <Cpu size={15} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Scannable Kernel Telemetry Strip */}
          <Reveal delay={0.25}>
            <div className="product-telemetry-strip">
              <div className="telemetry-col">
                <span className="telemetry-label">Connected Fabric</span>
                <span className="telemetry-val">128<em>+</em></span>
                <span className="telemetry-desc">Universal zero-copy adapters across databases, lakes & ERPs</span>
              </div>
              <div className="telemetry-col">
                <span className="telemetry-label">Transformation Speed</span>
                <span className="telemetry-val">Sub<em>-sec</em></span>
                <span className="telemetry-desc">Direct GPU in-memory schema normalization & type casting</span>
              </div>
              <div className="telemetry-col">
                <span className="telemetry-label">AI Readiness SLA</span>
                <span className="telemetry-val">96.4<em>%</em></span>
                <span className="telemetry-desc">Continuous multi-point verification before model consumption</span>
              </div>
              <div className="telemetry-col">
                <span className="telemetry-label">Daily Throughput</span>
                <span className="telemetry-val">8.4 <em>TB</em></span>
                <span className="telemetry-desc">Active real-time telemetry streaming through WeaveCore Kernel</span>
              </div>
            </div>
          </Reveal>

          {/* Interactive Kernel Terminal Card */}
          <Reveal delay={0.3}>
            <div className="kernel-terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="terminal-title">WeaveCore OS Kernel Console — Telemetry Feed</span>
                <span className="terminal-status-tag">
                  <span className="status-dot" /> ACTIVE KERNEL
                </span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">weavecore-kernel --status --active-fabric</span>
                </div>
                <div className="terminal-line">
                  <span className="t-muted">[08:42:01.104]</span>
                  <span>Kernel Status:</span>
                  <span className="t-val">ONLINE (Node Cluster 04 - GPU In-Memory Pooling)</span>
                </div>
                <div className="terminal-line">
                  <span className="t-muted">[08:42:01.218]</span>
                  <span>Engine Acceleration:</span>
                  <span className="t-val">RAPIDS cuDF / cuML + NeMo LLM + Triton Server Attached</span>
                </div>
                <div className="terminal-line">
                  <span className="t-muted">[08:42:01.340]</span>
                  <span>Active Pipelines:</span>
                  <span className="t-val">42 concurrent workflows · 0 schema drift faults detected</span>
                </div>
                <div className="terminal-line">
                  <span className="t-muted">[08:42:01.490]</span>
                  <span>Serving Target:</span>
                  <span className="t-val">https://workspace.dataweavex.net [READY FOR INFERENCE]</span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION 1: THE CORE OPERATING PILLARS */}
        <section className="product-section" id="pillars">
          <div className="product-section-header">
            <Reveal>
              <span className="eyebrow cyan-text">01 // ARCHITECTURAL SUBSYSTEMS</span>
              <h2>
                Four Operating Pillars.<br />
                <em>One Autonomous System.</em>
              </h2>
              <p>
                WeaveCore OS replaces fragile point-to-point ETL scripts with an integrated
                operating foundation. Each subsystem works in harmony to guarantee data velocity,
                governance, and continuous model readiness.
              </p>
            </Reveal>
          </div>

          <div className="pillars-grid">
            <Reveal delay={0.06}>
              <div className="pillar-card">
                <span className="pillar-num">Pillar 01</span>
                <div className="pillar-icon-box">
                  <Network size={22} />
                </div>
                <h3>Universal Fabric Virtualization</h3>
                <p>
                  Zero-gravity abstraction layer spanning 128+ heterogeneous enterprise data stores.
                  WeaveCore OS creates a single governed query plane without duplicating data or
                  forcing complex database migrations.
                </p>
                <ul className="pillar-features">
                  <li><Check size={14} /> Direct zero-copy query federation across multi-cloud stores</li>
                  <li><Check size={14} /> Instant connectors for Snowflake, BigQuery, S3, SAP & Postgres</li>
                  <li><Check size={14} /> Automated metadata cataloging with semantic relationships</li>
                </ul>
                <div className="pillar-tags">
                  <span className="pillar-tag">128+ Source Connectors</span>
                  <span className="pillar-tag">Zero Duplication</span>
                  <span className="pillar-tag">Global Logical Catalog</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="pillar-card">
                <span className="pillar-num">Pillar 02</span>
                <div className="pillar-icon-box">
                  <Cpu size={22} />
                </div>
                <h3>Autonomous Transformation Engine</h3>
                <p>
                  Ultra-fast in-memory normalization kernel that resolves schema conflicts, date/time
                  discrepancies, and field mismatches at hardware wire speed before data ever hits
                  storage bottlenecks.
                </p>
                <ul className="pillar-features">
                  <li><Check size={14} /> High-speed schema normalization and type reconciliation</li>
                  <li><Check size={14} /> Automated schema drift detection and dynamic self-healing</li>
                  <li><Check size={14} /> Microsecond data filtering and multi-source join pipelines</li>
                </ul>
                <div className="pillar-tags">
                  <span className="pillar-tag">In-Memory Engine</span>
                  <span className="pillar-tag">Sub-Second Latency</span>
                  <span className="pillar-tag">Schema Self-Healing</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="pillar-card">
                <span className="pillar-num">Pillar 03</span>
                <div className="pillar-icon-box">
                  <Sparkles size={22} />
                </div>
                <h3>Cognitive Semantic Enrichment</h3>
                <p>
                  Transforms dark, unorganized enterprise text and relational records into rich,
                  context-aware features. WeaveCore OS extracts named entities, generates embeddings,
                  and attaches business signals automatically.
                </p>
                <ul className="pillar-features">
                  <li><Check size={14} /> Automatic entity resolution across disparate customer records</li>
                  <li><Check size={14} /> Unstructured text parsing from PDFs, contracts, and transcripts</li>
                  <li><Check size={14} /> High-dimensional semantic feature generation for RAG models</li>
                </ul>
                <div className="pillar-tags">
                  <span className="pillar-tag">Entity Resolution</span>
                  <span className="pillar-tag">Semantic Signal Layer</span>
                  <span className="pillar-tag">Knowledge Graph Mesh</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="pillar-card">
                <span className="pillar-num">Pillar 04</span>
                <div className="pillar-icon-box">
                  <Zap size={22} />
                </div>
                <h3>Deterministic Serving & Model Delivery</h3>
                <p>
                  Production-grade pipeline serving layer orchestrating concurrent data delivery to
                  vector repositories, inference endpoints, and downstream analytics dashboards
                  under strict SLA guarantees.
                </p>
                <ul className="pillar-features">
                  <li><Check size={14} /> Concurrent multi-pipeline execution with dynamic batching</li>
                  <li><Check size={14} /> Real-time feature store delivery with low millisecond latency</li>
                  <li><Check size={14} /> Cryptographic end-to-end lineage and compliance audit trails</li>
                </ul>
                <div className="pillar-tags">
                  <span className="pillar-tag">Dynamic Batching</span>
                  <span className="pillar-tag">Cryptographic Lineage</span>
                  <span className="pillar-tag">High-Concurrency Serving</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 2: ENTERPRISE WORKFLOWS & CAPABILITIES */}
        <section className="product-section" id="capabilities">
          <div className="product-section-header">
            <Reveal>
              <span className="eyebrow cyan-text">02 // ENTERPRISE CAPABILITIES</span>
              <h2>
                Engineered for Reliability.<br />
                <em>Proven in Production.</em>
              </h2>
              <p>
                Explore the operational workflows that allow enterprise data engineering and AI
                teams to scale data preparation without increasing administrative overhead.
              </p>
            </Reveal>
          </div>

          <div className="capabilities-grid">
            <Reveal delay={0.06}>
              <div className="capability-card">
                <div className="cap-icon">
                  <RefreshCw size={19} />
                </div>
                <h4>Self-Healing Data Pipelines</h4>
                <p>
                  When upstream APIs or databases alter column types or payload keys, WeaveCore OS
                  detects the variance, isolates anomalous rows, and adapts normalization rules
                  without halting the entire pipeline.
                </p>
                <span className="cap-stat">Zero Pipeline Downtime</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="capability-card">
                <div className="cap-icon">
                  <CheckCircle2 size={19} />
                </div>
                <h4>Continuous AI-Readiness Scoring</h4>
                <p>
                  Every dataset passing through the platform receives a real-time quality
                  certification based on schema completeness, entity consistency, and anomaly
                  scores, ensuring models only receive high-signal data.
                </p>
                <span className="cap-stat">96.4% Verified Quality SLA</span>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="capability-card">
                <div className="cap-icon">
                  <ShieldCheck size={19} />
                </div>
                <h4>End-to-End Cryptographic Lineage</h4>
                <p>
                  Every transformation, merge, and enrichment operation is stamped with a tamper-proof
                  audit signature. Trace any AI prediction or vector embedding back to its exact
                  source record in seconds.
                </p>
                <span className="cap-stat">Full Compliance & Audit</span>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="capability-card">
                <div className="cap-icon">
                  <HardDrive size={19} />
                </div>
                <h4>Sovereign & Hybrid Deployment</h4>
                <p>
                  Deploy WeaveCore OS within your existing AWS, GCP, or Azure VPC, or on-premise
                  air-gapped bare metal hardware. Your data never leaves your security perimeter.
                </p>
                <span className="cap-stat">Air-Gapped & VPC Native</span>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="capability-card">
                <div className="cap-icon">
                  <Workflow size={19} />
                </div>
                <h4>Event-Driven Pipeline DAGs</h4>
                <p>
                  Visual directed acyclic graph (DAG) workflow builder with event-based triggers,
                  micro-batch schedules, and automated checkpoint recovery to manage complex data
                  topologies seamlessly.
                </p>
                <span className="cap-stat">Sub-millisecond Triggers</span>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="capability-card">
                <div className="cap-icon">
                  <Lock size={19} />
                </div>
                <h4>Granular Role-Based Access (RBAC)</h4>
                <p>
                  Column-level encryption, dynamic privacy masking, and multi-tenant isolation
                  built directly into the query execution kernel to comply with strict SOC2, HIPAA,
                  and GDPR policies.
                </p>
                <span className="cap-stat">Enterprise Security Model</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 3: ACCELERATED COMPUTING FOUNDATION (TECHNICAL ARCHITECTURE) */}
        <section className="product-section nvidia-section" id="acceleration">
          <div className="product-section-header">
            <Reveal>
              <div className="nvidia-banner">
                <i /> ACCELERATED HARDWARE FOUNDATION
              </div>
              <h2>
                Accelerated Computing.<br />
                <em>Extreme Throughput at Scale.</em>
              </h2>
              <p>
                WeaveCore OS harnesses accelerated data science and AI SDKs to deliver
                unprecedented processing speeds across enterprise workloads. Built to bypass CPU
                memory bottlenecks, the engine runs directly on dedicated compute hardware:
              </p>
            </Reveal>
          </div>

          <div className="nvidia-grid">
            {/* NVIDIA RAPIDS (cuDF & cuML) */}
            <Reveal delay={0.08}>
              <div className="nvidia-card">
                <div className="nvidia-card-tag">Core Data Science & Transformation</div>
                <h3>NVIDIA RAPIDS (cuDF & cuML)</h3>
                <p>
                  The foundational data science and transformation engine directly powering
                  WeaveCore's Transformation Engine and unified Data Fabric.
                </p>
                <ul className="nvidia-feature-list">
                  <li>
                    <strong>GPU-Accelerated cuDF</strong>
                    <span>
                      Executes high-speed schema normalization, data type reconciliation, and
                      multi-source joins directly in GPU memory across 128+ connected data sources.
                    </span>
                  </li>
                  <li>
                    <strong>Intelligent cuML Checks</strong>
                    <span>
                      Powers automated Data Quality checks with GPU machine learning algorithms to
                      detect anomalies and score dataset quality in real time.
                    </span>
                  </li>
                </ul>
                <div className="nvidia-card-foot">
                  <span className="nvidia-chip">cuDF & cuML Engine</span>
                  <span className="nvidia-metric">100x Acceleration</span>
                </div>
              </div>
            </Reveal>

            {/* NVIDIA NeMo Framework */}
            <Reveal delay={0.16}>
              <div className="nvidia-card">
                <div className="nvidia-card-tag">Language & Semantic Enrichment</div>
                <h3>NVIDIA NeMo Framework</h3>
                <p>
                  The language and semantic enrichment engine powering the platform's Data Enrichment
                  and AI Data Preparation modules.
                </p>
                <ul className="nvidia-feature-list">
                  <li>
                    <strong>Enterprise LLM Fine-Tuning</strong>
                    <span>
                      Provides the enterprise-grade toolchain required to fine-tune specialized Large
                      Language Models tailored to your domain vocabulary.
                    </span>
                  </li>
                  <li>
                    <strong>Contextual Metadata & Signals</strong>
                    <span>
                      Extracts structured metadata, identifies entities, and enriches unstructured
                      enterprise records with semantic signals before downstream AI delivery.
                    </span>
                  </li>
                </ul>
                <div className="nvidia-card-foot">
                  <span className="nvidia-chip">NeMo Enterprise</span>
                  <span className="nvidia-metric">Semantic Signals</span>
                </div>
              </div>
            </Reveal>

            {/* NVIDIA Triton Inference Server */}
            <Reveal delay={0.24}>
              <div className="nvidia-card">
                <div className="nvidia-card-tag">Production Serving & Deployment</div>
                <h3>NVIDIA Triton Inference Server</h3>
                <p>
                  The production serving and deployment backend orchestrating multi-model data
                  preparation pipelines at enterprise scale.
                </p>
                <ul className="nvidia-feature-list">
                  <li>
                    <strong>Concurrent Model Orchestration</strong>
                    <span>
                      Manages concurrent model execution and multi-framework workloads across dozens
                      of active data preparation pipelines simultaneously.
                    </span>
                  </li>
                  <li>
                    <strong>Dynamic Batching Optimization</strong>
                    <span>
                      Optimizes GPU throughput and eliminates latency spikes by batching incoming
                      enrichment and classification requests on the fly.
                    </span>
                  </li>
                </ul>
                <div className="nvidia-card-foot">
                  <span className="nvidia-chip">Triton Backend</span>
                  <span className="nvidia-metric">Dynamic Batching</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE OPERATIONS CENTER */}
        <section className="product-section" id="operations">
          <div className="product-section-header">
            <Reveal>
              <span className="eyebrow cyan-text">04 // MISSION CONTROL</span>
              <h2>
                Live Data Fabric<br />
                <em>Operations Center.</em>
              </h2>
              <p>
                Monitor real-time pipeline execution, topology routes, and processing volumes in
                the live operational control plane.
              </p>
            </Reveal>
          </div>

          {/* KPI Cards */}
          <Reveal delay={0.06}>
            <div className="product-kpis">
              <div>
                <span>Connected sources</span>
                <strong>128</strong>
                <small>+12.4% this month</small>
              </div>
              <div>
                <span>Active pipelines</span>
                <strong>42</strong>
                <small>38 running · 4 queued</small>
              </div>
              <div>
                <span>Daily throughput</span>
                <strong>8.4 TB</strong>
                <small>Sub-second streaming</small>
              </div>
              <div>
                <span>Data quality score</span>
                <strong>96.4%</strong>
                <small>+2.1% verified</small>
              </div>
              <div>
                <span>AI ready datasets</span>
                <strong>86</strong>
                <small>+8 this week</small>
              </div>
              <div>
                <span>Failed jobs</span>
                <strong>00</strong>
                <small>Self-healed</small>
              </div>
            </div>
          </Reveal>

          {/* Grid: Live Graph + Charts & Table */}
          <div className="product-grid">
            {/* Fabric Graph Panel */}
            <Reveal delay={0.12} className="product-panel graph-panel">
              <div className="panel-heading">
                <div>
                  <span className="eyebrow">DATA FABRIC GRAPH</span>
                  <strong>Live System Topology</strong>
                </div>
                <span className="pill running">
                  <i /> Live Flow
                </span>
              </div>
              <div className="fabric-graph">
                <svg viewBox="0 0 800 410">
                  <defs>
                    <linearGradient id="productLine">
                      <stop stopColor={cyan} />
                      <stop offset="1" stopColor={blue} />
                    </linearGradient>
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
                  ].map((path) => (
                    <path key={path} d={path} />
                  ))}
                </svg>
                <div className="graph-core">
                  <Network size={22} />
                  <span>WEAVECORE OS</span>
                  <small>KERNEL</small>
                </div>
                {[
                  'ERP',
                  'CRM',
                  'DATABASE',
                  'API',
                  'CLOUD',
                  'DATA LAKE',
                  'RAPIDS cuDF',
                  'AI / MODELS',
                ].map((node, index) => (
                  <div key={node} className={`graph-node graph-${index}`}>
                    <i />
                    {node}
                  </div>
                ))}
              </div>
              <div className="graph-legend">
                <span>
                  <i className="dot-cyan" /> In-Memory Ingest
                </span>
                <span>
                  <i className="dot-blue" /> AI-Ready Stream
                </span>
                <span>
                  <i className="dot-muted" /> Active Connection
                </span>
              </div>
            </Reveal>

            {/* Recharts Volume Chart */}
            <Reveal delay={0.16} className="product-panel product-chart">
              <div className="panel-heading">
                <div>
                  <span className="eyebrow">PROCESSING VOLUME</span>
                  <strong>8.4 TB <small>processed today</small></strong>
                </div>
                <BarChart3 size={17} />
              </div>
              <ResponsiveContainer width="100%" height={170}>
                <LineChart data={chartData}>
                  <CartesianGrid stroke="#263337" strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="day"
                    tick={{ fill: '#748284', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      background: '#101719',
                      border: '1px solid #263337',
                      borderRadius: 8,
                      color: '#f5f7f6',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={cyan}
                    strokeWidth={2}
                    dot={{ fill: cyan, r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="chart-foot">
                <span>+18.2%</span>
                <small>vs previous 7-day period</small>
              </div>
            </Reveal>

            {/* Interactive Pipelines Table */}
            <Reveal delay={0.2} className="product-panel pipeline-table">
              <div className="panel-heading">
                <div>
                  <span className="eyebrow">PIPELINE TELEMETRY</span>
                  <strong>Live Execution Queue</strong>
                </div>
                <GitBranch size={17} />
              </div>

              {/* Filter Buttons */}
              <div className="ops-filter-bar" style={{ marginTop: '16px' }}>
                <div className="ops-filters">
                  {(['All', 'Running', 'Complete'] as PipelineStatus[]).map((st) => (
                    <button
                      key={st}
                      type="button"
                      className={`ops-filter-btn ${filter === st ? 'active' : ''}`}
                      onClick={() => setFilter(st)}
                    >
                      {st}
                    </button>
                  ))}
                </div>
                <span className="eyebrow" style={{ color: '#68787a' }}>
                  {filteredPipelines.length} PIPELINES
                </span>
              </div>

              <div className="table-head">
                <span>Pipeline</span>
                <span>Status</span>
                <span>Records</span>
              </div>
              {filteredPipelines.map((item) => (
                <div key={item.id} className="table-row">
                  <div>
                    <span style={{ display: 'block', fontWeight: 600 }}>{item.name}</span>
                    <small style={{ color: '#6c7c7e', fontSize: '9px', fontFamily: 'DM Mono' }}>
                      {item.engine} · {item.latency}
                    </small>
                  </div>
                  <span
                    className={
                      item.status === 'Running' ? 'table-status' : 'table-status complete'
                    }
                  >
                    <i />
                    {item.status}
                  </span>
                  <span>{item.records}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* SECTION 5: TRADITIONAL STACK VS. WEAVECORE OS */}
        <section className="product-section" id="compare">
          <div className="product-section-header">
            <Reveal>
              <span className="eyebrow cyan-text">05 // ARCHITECTURE COMPARISON</span>
              <h2>
                Legacy ETL Stacks vs.<br />
                <em>WeaveCore OS.</em>
              </h2>
              <p>
                Compare the architectural limitations of conventional data engineering stacks
                against WeaveCore's accelerated, autonomous operating approach:
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="comparison-wrap">
              <div className="comp-row comp-head">
                <span>Dimension</span>
                <span>Traditional ETL / ELT</span>
                <span>WeaveCore OS</span>
              </div>
              <div className="comp-row">
                <span className="comp-feature">Data Connectivity</span>
                <span className="comp-legacy">Brittle point-to-point connectors, fragmented pipelines</span>
                <span className="comp-weavecore">
                  <CheckCircle2 size={16} /> 128+ native zero-copy adapters across clouds & on-prem
                </span>
              </div>
              <div className="comp-row">
                <span className="comp-feature">Processing Speed</span>
                <span className="comp-legacy">CPU-bound batch jobs, disk read/write bottlenecks</span>
                <span className="comp-weavecore">
                  <CheckCircle2 size={16} /> GPU in-memory cuDF transforms & wire-speed joins
                </span>
              </div>
              <div className="comp-row">
                <span className="comp-feature">Schema Management</span>
                <span className="comp-legacy">Breaks on schema drift, requires manual engineer triage</span>
                <span className="comp-weavecore">
                  <CheckCircle2 size={16} /> Autonomous self-healing normalization without downtime
                </span>
              </div>
              <div className="comp-row">
                <span className="comp-feature">Semantic Enrichment</span>
                <span className="comp-legacy">Basic regex tagging, disconnected text processing</span>
                <span className="comp-weavecore">
                  <CheckCircle2 size={16} /> NeMo LLM-powered entity resolution & metadata vectors
                </span>
              </div>
              <div className="comp-row">
                <span className="comp-feature">Serving & Inference</span>
                <span className="comp-legacy">Disparate microservices, manual batching</span>
                <span className="comp-weavecore">
                  <CheckCircle2 size={16} /> Triton Server concurrent execution & dynamic batching
                </span>
              </div>
              <div className="comp-row">
                <span className="comp-feature">Data Lineage & Trust</span>
                <span className="comp-legacy">Partial query logs, opaque transformation history</span>
                <span className="comp-weavecore">
                  <CheckCircle2 size={16} /> Cryptographic audit trail from raw source to model output
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION 6: CLOSING CONVERSION CTA */}
        <section className="product-closing-banner">
          <Reveal>
            <span className="eyebrow cyan-text">START WEAVING // LIVE WORKSPACE</span>
            <h2>
              Ready to Experience<br />
              <em>WeaveCore OS?</em>
            </h2>
            <p>
              Launch the live interactive workspace now or speak with our solutions architecture
              team to deploy WeaveCore OS in your enterprise infrastructure.
            </p>
            <div className="product-closing-actions">
              <a
                href="https://workspace.dataweavex.net"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Launch Live Workspace <ExternalLink size={16} />
              </a>
              <Link to="/#contact" className="button button-quiet">
                Request Architecture Briefing <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Global Site Footer */}
      <Footer />
    </div>
  );
}