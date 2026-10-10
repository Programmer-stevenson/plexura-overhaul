import { useId } from 'react';

const faces = [
  ['front', 'translateZ(var(--cube-half))'],
  ['back', 'rotateY(180deg) translateZ(var(--cube-half))'],
  ['right', 'rotateY(90deg) translateZ(var(--cube-half))'],
  ['left', 'rotateY(-90deg) translateZ(var(--cube-half))'],
  ['top', 'rotateX(90deg) translateZ(var(--cube-half))'],
  ['bottom', 'rotateX(-90deg) translateZ(var(--cube-half))'],
];

export default function HeroCanvas({
  className = '',
  texture = '/texture2.png',
  textures = null,
  size,
  speed = 15,
  showParticles = true,
  showOrbit = false,
  showGlow = true,
}) {
  const gradientId = useId().replace(/:/g, '');

  return (
    <div
      className={`plexura-cube ${className}`}
      role="img"
      aria-label="Rotating Plexura cube"
      style={{
        ...(size ? { '--cube-size': `${size}px` } : {}),
        '--cube-speed': `${Math.max(1, speed)}s`,
      }}
    >
      <style>{`
        .plexura-cube {
          --cube-size: 180px;
          --cube-half: calc(var(--cube-size) / 2);

          position: relative;
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          min-height: 360px;
          isolation: isolate;
          pointer-events: none;
        }

        .plexura-cube__stage {
          position: relative;
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          perspective: 1000px;
          z-index: 2;
        }

        .plexura-cube__tilt {
          transform-style: preserve-3d;
          transform: rotateX(-35deg) rotateZ(45deg);
        }

        .plexura-cube__rotor {
          position: relative;
          width: var(--cube-size);
          height: var(--cube-size);
          transform-style: preserve-3d;
          animation: plexura-cube-spin var(--cube-speed) linear infinite;
          will-change: transform;
        }

        .plexura-cube__face {
          position: absolute;
          inset: 0;
          box-sizing: border-box;
          overflow: hidden;
          backface-visibility: hidden;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: linear-gradient(135deg, #26364a, #0a1022);
          box-shadow: inset 0 0 24px rgba(186, 230, 253, 0.12);
        }

        .plexura-cube__face img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .plexura-cube__glow {
          position: absolute;
          width: 58%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(237, 199, 106, 0.18),
            rgba(56, 189, 248, 0.06) 45%,
            transparent 70%
          );
          filter: blur(20px);
          animation: plexura-cube-glow 5s ease-in-out infinite;
          z-index: 0;
        }

        .plexura-cube__orbit {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          z-index: 1;
        }

        .plexura-cube__orbit circle {
          transform-origin: 200px 200px;
          animation: plexura-cube-orbit 30s linear infinite;
        }

        .plexura-cube__particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ffffff;
          opacity: 0.4;
          animation: plexura-cube-particle 4s ease-in-out infinite;
          z-index: 1;
        }

        .plexura-cube__particle:nth-child(3n) {
          background: #edc76a;
        }

        @keyframes plexura-cube-spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        @keyframes plexura-cube-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes plexura-cube-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes plexura-cube-particle {
          0%, 100% {
            opacity: 0.25;
            transform: translateY(0);
          }
          50% {
            opacity: 0.75;
            transform: translateY(-12px);
          }
        }

        @media (max-width: 900px) {
          .plexura-cube {
            --cube-size: 140px;
            min-height: 310px;
          }

          .plexura-cube__particle--extra {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .plexura-cube .plexura-cube__rotor,
          .plexura-cube .plexura-cube__orbit circle,
          .plexura-cube .plexura-cube__particle,
          .plexura-cube .plexura-cube__glow {
            animation: none !important;
            will-change: auto;
          }
        }
      `}</style>

      {showGlow && <div className="plexura-cube__glow" />}

      <div className="plexura-cube__stage">
        <div className="plexura-cube__tilt">
          <div className="plexura-cube__rotor">
            {faces.map(([name, transform], index) => {
              const faceTexture = textures?.[index] || texture;

              return (
                <div
                  key={name}
                  className="plexura-cube__face"
                  style={{ transform }}
                >
                  {faceTexture && (
                    <img
                      src={faceTexture}
                      alt=""
                      draggable={false}
                      decoding="async"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {showParticles &&
        Array.from({ length: 8 }, (_, index) => {
          const angle = (index / 8) * Math.PI * 2;

          return (
            <span
              key={index}
              className={`plexura-cube__particle${
                index % 2 ? ' plexura-cube__particle--extra' : ''
              }`}
              style={{
                top: `${50 + 38 * Math.sin(angle)}%`,
                left: `${50 + 38 * Math.cos(angle)}%`,
                animationDelay: `${index * -0.45}s`,
                animationDuration: `${3 + index * 0.3}s`,
              }}
            />
          );
        })}

      
    </div>
  );
}