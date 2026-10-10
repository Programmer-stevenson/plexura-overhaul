export default function ProcessSection() {
  return (
    <div className="enterprise-web__process">
      <div className="enterprise-web__process-head">
        <div className="enterprise-web__process-copy">
          <p className="enterprise-web__eyebrow">Our Process</p>
          <h3>Enterprise discipline without enterprise friction.</h3>
        </div>
      </div>

      <div className="enterprise-web__process-layout">
        <div className="enterprise-web__process-visual">
          <img
            className="enterprise-web__process-image"
            src="/assets/process-strategy.png"
            alt="Modern glass office strategy meeting with a large customer journey and analytics display"
          />
          <div className="enterprise-web__process-caption">Strategy, design, technology, growth</div>
        </div>

        <div className="enterprise-web__process-grid">
          <div className="enterprise-web__step">
            <div><strong>Discover</strong><p>Goals, audience, positioning, scope, and technical requirements.</p></div>
          </div>
          <div className="enterprise-web__step">
            <div><strong>Design</strong><p>Information architecture, UX, visual direction, and conversion paths.</p></div>
          </div>
          <div className="enterprise-web__step">
            <div><strong>Build</strong><p>Front end, CMS, integrations, responsive QA, and performance tuning.</p></div>
          </div>
          <div className="enterprise-web__step">
            <div><strong>Launch &amp; Optimize</strong><p>Deployment, measurement, refinement, and continued improvement.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
