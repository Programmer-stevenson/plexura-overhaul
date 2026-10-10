import { useCallback, useEffect, useState } from 'react';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import TeamSection from '../components/TeamSection';

export default function TeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <main className={`team-page${menuOpen ? ' mobile-menu-open' : ''}`}>
      <div className="team-page__header">
        <Header
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((open) => !open)}
        />

        <MobileMenu open={menuOpen} onClose={closeMenu} />
      </div>

      <TeamSection />
    </main>
  );
}