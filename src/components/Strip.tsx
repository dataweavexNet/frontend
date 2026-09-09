import aiPowered from '../assets/AI-POWERED.png';
import enterprise from '../assets/ENTERPRISE.png';
import highSpeed from '../assets/HIGH-SPEED.png';
import aiReady from '../assets/AI-READY.png';

export default function Strip() {
  return <div className="signal-strip"><div><img src={aiPowered} alt="" /><span><b>AI-POWERED</b> DATA TRANSFORMATION</span></div><div><img src={enterprise} alt="" /><span><b>ENTERPRISE</b> DATA FABRIC</span></div><div><img src={highSpeed} alt="" /><span><b>HIGH-SPEED</b> PROCESSING</span></div><div><img src={aiReady} alt="" /><span><b>AI-READY</b> DATA</span></div></div>;
}
