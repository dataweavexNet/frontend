import { productCards } from '../data/constants';
import Reveal from './Reveal';

export default function ProductCards() {
  return (
    <section className="product-cards-section" id="features">
      <Reveal><div className="section-heading"><div><span className="eyebrow">THE PLATFORM</span><h2>Three pillars.<br /><span>One data journey.</span></h2></div><p>From connection to transformation to integration — each pillar builds on the last to turn fragmented enterprise data into AI-ready intelligence.</p></div></Reveal>
      <div className="product-cards-grid">
        {productCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.08}>
            <div className="product-image-card">
              <div className="product-card-img" style={{ backgroundImage: `url(${card.img})` }}>
                <span className="product-card-tag">{card.tag}</span>
              </div>
              <div className="product-card-body">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
