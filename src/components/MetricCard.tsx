import { motion } from 'framer-motion';

export default function MetricCard({ label, value, note, className }: { label: string; value: string; note: string; className: string }) {
  return <motion.div className={`float-card ${className}`} animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><span className="eyebrow">{label}</span><strong>{value}</strong><small>{note}</small></motion.div>;
}
