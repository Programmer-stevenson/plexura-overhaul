import { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import TechnologyPartners from './TechnologyPartners';
import HeroCanvas from './heroCanvas';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    const onResize = () => {
      if (window.innerWidth > 900) closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [closeMenu]);

  return (
    <section
      className={`hero hero--between-content${
        menuOpen ? ' mobile-menu-open' : ''
      }`}
    >
      <style>{`
        .hero.hero--between-content {
          position: relative;
          height: auto;
          min-height: 100svh;
          isolation: isolate;
        }

        .hero--between-content > .frame {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          min-height: 100svh;
          box-sizing: border-box;
        }

        .hero--between-content .copy {
          position: relative;
          inset: auto;
          display: block;
          flex: none;
          width: 100%;
          max-width: none;
          min-width: 0;
          margin: 0;
          padding: 130px 0 40px;
          box-sizing: border-box;
          transform: none;
          text-align: center;
        }

        .hero--between-content .copy h1 {
          position: relative;
          margin: 0;
          text-align: center;
          z-index: 1;
        }

        .hero--between-content .hero-cube-slot {
          position: relative;
          width: 100%;
          height: 260px;
          margin: 24px 0;
          overflow: visible;
          pointer-events: none;
          user-select: none;
        }

        .hero--between-content .hero-cube-art {
          position: absolute;
          top: 50%;
          left: 50%;
          width: min(360px, 100%);
          height: 320px;
          transform: translate(-50%, -50%);
          overflow: visible;
        }

        .hero--between-content .hero-cube-art .plexura-cube {
          --cube-size: 120px;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          min-height: 0;
          overflow: visible;
        }

        .hero--between-content
          .hero-cube-art
          .plexura-cube__stage {
          min-height: 0;
        }

        .hero--between-content .copy .intro {
          position: relative;
          max-width: 640px;
          margin: 0 auto 24px;
          text-align: center;
          z-index: 1;
        }

        .hero--between-content .copy .actions {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin: 0;
          z-index: 1;
        }

        .hero--between-content .footer-note {
          position: relative;
          inset: auto;
          transform: none;
          margin-top: 24px;
          margin-bottom: 24px;
        }

        /* Tablet */
        @media (max-width: 1023px) {
          .hero--between-content .copy {
            padding-top: 120px;
          }

          .hero--between-content .hero-cube-slot {
            height: 288px;
            margin: 24px 0;
          }

          .hero--between-content .hero-cube-art {
            width: min(340px, 100%);
            height: 288px;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .hero--between-content .copy {
            padding-top: 110px;
            padding-bottom: 32px;
          }

          .hero--between-content .hero-cube-art .plexura-cube {
            --cube-size: 130px;
          }
        }

        @media (max-width: 380px) {
          .hero--between-content .hero-cube-art .plexura-cube {
            --cube-size: 115px;
          }
        }

        /* Desktop: left-aligned content with a 40px inset. */
        @media (min-width: 1024px) {
          .hero--between-content > .frame {
            width: 100%;
            max-width: none;
            margin-left: 0;
            margin-right: 0;
            padding-left: 40px;
            padding-right: 40px;
            box-sizing: border-box;
          }

          .hero--between-content .copy {
            padding-left: 0;
            padding-right: 0;
            margin-left: 0;
            text-align: left;
          }

          .hero--between-content .copy h1 {
            text-align: left;
            margin-left: 0;
            margin-right: auto;
          }

          .hero--between-content .hero-cube-slot {
            width: 280px;
            margin-left: 0;
            margin-right: auto;
          }

          .hero--between-content .hero-cube-art {
            width: 280px;
            height: 280px;
          }

          .hero--between-content .hero-cube-art .plexura-cube {
            --cube-size: 100px;
          }

          .hero--between-content .copy .intro {
            margin-left: 0;
            margin-right: auto;
            text-align: left;
          }

          .hero--between-content .copy .actions {
            justify-content: flex-start;
            margin-left: 0;
            margin-right: auto;
          }
        }
      `}</style>

      <div className="frame">
        <Header
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((open) => !open)}
        />

        <MobileMenu
          open={menuOpen}
          onClose={closeMenu}
        />

        <main className="copy">
          <h1>
            Digital
            <br />
            Experiences
            <br />
            That <span className="orange">Grow</span>
          </h1>

          <div className="hero-cube-slot" aria-hidden="true">
            <div className="hero-cube-art">
              <HeroCanvas
                texture="/texture2.png"
                speed={15}
                showParticles
                showOrbit
                showGlow
              />
            </div>
          </div>

          <p className="intro" style={{ visibility: 'hidden' }}>
            High-performance websites for ambitious brands.
            <br />
            Built for what’s next.
          </p>

          <div className="actions">
            <a className="btn btn-primary" href="#contact">
              Start Your Project{' '}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>

            <a className="btn btn-secondary" href="#work">
              View Our Work
            </a>
          </div>
        </main>

        <TechnologyPartners />

        <div className="footer-note" style={{ visibility: 'hidden' }}>
          More than websites.
          <br />
          A foundation for what’s next.
        </div>
      </div>
    </section>
  );
}