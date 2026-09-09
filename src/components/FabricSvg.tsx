import { cyan, blue } from '../data/constants';

export default function FabricSvg({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`fabric-visual ${compact ? 'fabric-compact' : ''}`}>
      <div className="fabric-grid" />
      <svg viewBox="0 0 800 520" role="img" aria-label="Animated data fabric network">
        <defs>
          <linearGradient id="flow" x1="0" x2="1"><stop offset="0" stopColor={cyan} stopOpacity=".15" /><stop offset=".5" stopColor={cyan} /><stop offset="1" stopColor={blue} stopOpacity=".2" /></linearGradient>
          <radialGradient id="core"><stop stopColor={cyan} stopOpacity=".65" /><stop offset=".35" stopColor={blue} stopOpacity=".22" /><stop offset="1" stopColor="#071114" stopOpacity="0" /></radialGradient>
          <filter id="blur"><feGaussianBlur stdDeviation="18" /></filter>
        </defs>
        <circle cx="400" cy="260" r="165" fill="url(#core)" filter="url(#blur)" />
        {Array.from({ length: 9 }).map((_, index) => {
          const y = 102 + index * 20;
          return <path key={index} className="flow-line" d={`M 40 ${y + (index % 3) * 8} C 180 ${y - 35}, 230 ${175 + index * 8}, 400 260 S 610 ${340 - index * 9}, 760 ${y + 12}`} />;
        })}
        {Array.from({ length: 7 }).map((_, index) => <ellipse key={`e${index}`} className="orbit" cx="400" cy="260" rx={105 + index * 18} ry={32 + index * 15} transform={`rotate(${index * 24} 400 260)`} />)}
        <circle className="core-ring" cx="400" cy="260" r="72" />
        <circle className="core-dot" cx="400" cy="260" r="10" />
        <text x="400" y="246" textAnchor="middle" className="svg-label">DATAWEAVE</text>
        <text x="400" y="272" textAnchor="middle" className="svg-sub">FABRIC CORE</text>
      </svg>
      {!compact && <>
        <div className="source-tag tag-a"><span className="status-dot" /> ERP / CRM</div>
        <div className="source-tag tag-b"><span className="status-dot" /> CLOUD</div>
        <div className="source-tag tag-c"><span className="status-dot" /> API LAYER</div>
        <div className="source-tag tag-d"><span className="status-dot" /> DATA LAKE</div>
      </>}
    </div>
  );
}
