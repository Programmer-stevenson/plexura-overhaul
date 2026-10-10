function PartnerSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="partners-set" aria-hidden={hidden || undefined}>
      <span className="stripe">stripe</span>
      <span className="webflow">webflow</span>
      <span className="wordpress"><i className="wp-mark" aria-hidden="true">W</i>WordPress</span>
      <span className="shopify"><i className="shop-bag" aria-hidden="true"></i>shopify</span>
      <span className="vercel"><i className="vercel-triangle" aria-hidden="true"></i>VERCEL</span>
      <span className="gcloud"><i className="cloud-icon" aria-hidden="true"></i>Google Cloud</span>
    </div>
  );
}

export default function TechnologyPartners() {
  return (
    <section className="partners" aria-label="Technology partners">
      <p className="partners-title">Built for ambitious brands</p>
      <div className="partners-row" aria-label="Technology stack">
        <div className="partners-track">
          <PartnerSet />
          <PartnerSet hidden />
        </div>
      </div>
    </section>
  );
}
