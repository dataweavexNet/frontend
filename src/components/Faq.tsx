import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { faqs } from '../data/constants';
import Reveal from './Reveal';

export default function Faq() {
  const [active, setActive] = useState(0);
  return <section className="section-pad faq-section" id="faq"><Reveal><div className="section-heading"><div><span className="eyebrow">09 / QUESTIONS, ANSWERED</span><h2>Clarity before<br /><span>complexity.</span></h2></div><p>Still exploring the shape of your data future? Here are a few useful starting points.</p></div></Reveal><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${active === index ? 'active' : ''}`} key={question}><button onClick={() => setActive(active === index ? -1 : index)}><span><i>{String(index + 1).padStart(2, '0')}</i>{question}</span>{active === index ? <X size={18} /> : <ChevronDown size={18} />}</button><AnimatePresence initial={false}>{active === index && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{answer}</p></motion.div>}</AnimatePresence></div>)}</div></section>;
}
