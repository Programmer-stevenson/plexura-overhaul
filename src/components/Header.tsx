import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export default function Header({
  menuOpen,
  onToggleMenu,
}: HeaderProps) {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <>
      <style>{`
        .header.header--floating {
          position: fixed;
          inset: 0 0 auto;
          z-index: 1000;

          width: 100%;
          max-width: none;
          margin: 0;
          box-sizing: border-box;

          background: transparent;
          border-bottom: 1px solid transparent;
          box-shadow: none;

          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);

          transition:
            background-color 300ms ease,
            backdrop-filter 300ms ease,
            -webkit-backdrop-filter 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .header.header--floating.header--dark {
          background: rgba(30, 32, 36, 0.88);
          border-bottom-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .header.header--floating .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;

          transition: gap 350ms ease;
        }

        .header.header--floating .brand > img {
          flex-shrink: 0;
          margin-right: 0;
        }

        .header.header--floating .brand-name,
        .header.header--floating.header--scrolled .brand-name {
          display: inline-flex;
          align-items: baseline;
          margin: 0;
          padding: 0;

          color: #f5f5f5;
          white-space: nowrap;

          opacity: 1;
          visibility: visible;
          transform: none;
          pointer-events: auto;
        }

        .header.header--floating .brand-initial {
          display: inline-grid;
          grid-template-columns: 1fr;
          opacity: 1;

          transition:
            grid-template-columns 350ms ease,
            opacity 200ms ease;
        }

        .header.header--floating .brand-initial > span {
          min-width: 0;
          overflow: hidden;
        }

        .header.header--floating .brand-rest {
          display: inline-block;
          transform: translateX(0);
          transition: transform 350ms ease;
        }

        .header.header--floating.header--scrolled .brand {
          gap: 0;
        }

        .header.header--floating.header--scrolled .brand-initial {
          grid-template-columns: 0fr;
          opacity: 0;
        }

        .header.header--floating.header--scrolled .brand-rest {
          transform: translateX(-6px);
        }

        .header.header--floating .nav a {
          color: #f5f5f5;
          transition: color 200ms ease;
        }

        .header.header--floating .nav a:hover {
          color: #edc76a;
        }

        .header.header--floating .menu-line {
          background-color: #f5f5f5;
        }

        .header.header--floating a:focus-visible,
        .header.header--floating button:focus-visible {
          outline: 2px solid #edc76a;
          outline-offset: 5px;
        }

        @media (prefers-reduced-motion: reduce) {
          .header.header--floating,
          .header.header--floating .brand,
          .header.header--floating .brand-initial,
          .header.header--floating .brand-rest,
          .header.header--floating .nav a {
            transition: none;
          }
        }
      `}</style>

      <header
        className={[
          'header',
          'header--floating',
          scrolled || menuOpen ? 'header--dark' : '',
          scrolled ? 'header--scrolled' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <a
          className="brand"
          href="/"
          aria-label="Plexura home"
        >
          <img
            src="/assets/plexura-logo.png"
            alt=""
          />

          <span className="brand-name" aria-hidden="true">
            <span className="brand-initial">
              <span>P</span>
            </span>
            <span className="brand-rest">lexura</span>
          </span>
        </a>

        <nav
          className="nav"
          aria-label="Main navigation"
        >
          <a href="/#work">Work</a>
          <a href="/#services">Services</a>
          <a href="/#about">About</a>
          <a href="/team">Meet the Team</a>
          <a href="/#insights">Insights</a>
        </nav>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-label={
            menuOpen ? 'Close navigation' : 'Open navigation'
          }
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onToggleMenu();
          }}
        >
          <span className="menu-line" />
          <span className="menu-line" />
          <span className="menu-line" />
        </button>
      </header>
    </>,
    document.body,
  );
}