type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div className="mobile-menu" id="mobile-menu" aria-hidden={!open}>
      <div className="mobile-menu__glow mobile-menu__glow--one"></div>
      <div className="mobile-menu__glow mobile-menu__glow--two"></div>

      <div className="mobile-menu__brand" aria-hidden="true">
        <img className="mobile-menu__brand-logo" src="/assets/plexura-logo.png" alt="" />
        <div className="mobile-menu__brand-name">Plexura</div>
      </div>

      <nav className="mobile-menu__nav" aria-label="Mobile navigation">
  <a href="/#work" onClick={onClose}>Work</a>
  <a href="/#services" onClick={onClose}>Services</a>
  <a href="/#about" onClick={onClose}>About</a>
  <a href="/team" onClick={onClose}>Meet the Team</a>
  <a href="/#insights" onClick={onClose}>Insights</a>
</nav>

      <div className="mobile-menu__footer">
        <span>Digital experiences that grow.</span>
        <a href="#contact" onClick={onClose}>Start a Project <b>→</b></a>
      </div>
    </div>
  );
}
