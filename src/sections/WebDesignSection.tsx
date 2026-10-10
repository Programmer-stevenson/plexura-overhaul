import { useEffect, useState } from 'react';

import ProcessSection from './ProcessSection';

const showcaseSlides = [

  {

    src: '/assets/laptop-showcase.png',

    alt: 'Plexura laptop mockup showing a custom web development experience',

  },

  {

    src: '/assets/phone-tab.png',

    alt: 'Plexura tablet and smartphone mockup showing a responsive web development experience',

  },

  {

    src: '/assets/phone-dash.png',

    alt: 'Plexura phone and analytics dashboard mockup showing digital growth insights',

  },

];

export default function WebDesignSection() {

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {

    const interval = window.setInterval(() => {

      setActiveSlide((current) => (current + 1) % showcaseSlides.length);

    }, 4000);

    return () => window.clearInterval(interval);

  }, []);

  return (

    <>

      <style>{`
        #services .enterprise-web__cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }
        #services .enterprise-web__card {
          min-width: 0;
        }
        #services .enterprise-web__rail {
          display: flex;
          flex-wrap: wrap;
        }
        @media (max-width: 620px) {
          #services .enterprise-web__cards {
            grid-template-columns: minmax(0, 1fr);
          }
        }


        .enterprise-web__showcase {

          position: relative;

          width: 100%;

          min-height: 560px;

          display: flex;

          align-items: center;

          justify-content: center;

        }

        .enterprise-web__showcase-laptop,

        .enterprise-web__showcase-devices {

          position: absolute;

          display: block;

          height: auto;

          object-fit: contain;

          filter: drop-shadow(0 26px 34px rgba(6, 25, 44, 0.16));

          transition: transform 0.45s ease;

        }

        .enterprise-web__showcase-laptop {

          width: min(72%, 620px);

          left: 0;

          top: 18px;

          z-index: 1;

        }

        .enterprise-web__showcase-devices {

          width: min(67%, 580px);

          right: -2%;

          bottom: 4px;

          z-index: 2;

        }

        .enterprise-web__showcase:hover .enterprise-web__showcase-laptop {

          transform: translate(-5px, -5px);

        }

        .enterprise-web__showcase:hover .enterprise-web__showcase-devices {

          transform: translate(5px, 5px);

        }

        .enterprise-web__mobile-showcase {

          display: none;

        }

        @media (max-width: 1200px) and (min-width: 901px) {

          .enterprise-web__showcase {

            min-height: 500px;

          }

          .enterprise-web__showcase-laptop {

            width: 70%;

          }

          .enterprise-web__showcase-devices {

            width: 64%;

          }

        }

        @media (max-width: 900px) {

          .enterprise-web__visual {

            width: 100%;

          }

          .enterprise-web__showcase {

            display: none;

          }

          .enterprise-web__mobile-laptop {

            display: none !important;

          }

          .enterprise-web__mobile-showcase {

            position: relative;

            display: block;

            width: 100%;

            min-height: 320px;

            margin-top: 30px;

            overflow: hidden;

          }

          .enterprise-web__mobile-slide {

            position: absolute;

            inset: 0;

            display: flex;

            align-items: center;

            justify-content: center;

            opacity: 0;

            transform: translateX(34px) scale(.98);

            pointer-events: none;

            transition:

              opacity .65s ease,

              transform .65s cubic-bezier(.2,.7,.2,1);

          }

          .enterprise-web__mobile-slide.is-active {

            opacity: 1;

            transform: translateX(0) scale(1);

            pointer-events: auto;

          }

          .enterprise-web__mobile-slide img {

            display: block;

            width: min(94%, 570px);

            max-height: 310px;

            object-fit: contain;

            filter: drop-shadow(0 22px 28px rgba(7,25,42,.16));

          }

          .enterprise-web__mobile-dots {

            position: absolute;

            left: 50%;

            bottom: 0;

            z-index: 4;

            display: flex;

            gap: 8px;

            transform: translateX(-50%);

          }

          .enterprise-web__mobile-dot {

            width: 7px;

            height: 7px;

            padding: 0;

            border: 0;

            border-radius: 999px;

            background: rgba(7,25,44,.18);

            cursor: pointer;

            transition:

              width .25s ease,

              background .25s ease;

          }

          .enterprise-web__mobile-dot.is-active {

            width: 24px;

            background: #ff7334;

          }

        }

        @media (max-width: 620px) {

          .enterprise-web__mobile-showcase {

            min-height: 265px;

            margin-top: 24px;

          }

          .enterprise-web__mobile-slide img {

            width: 100%;

            max-height: 250px;

          }

        }

        @media (max-width: 430px) {

          .enterprise-web__mobile-showcase {

            min-height: 235px;

          }

          .enterprise-web__mobile-slide img {

            max-height: 218px;

          }

        }

        @media (prefers-reduced-motion: reduce) {

          .enterprise-web__showcase-laptop,

          .enterprise-web__showcase-devices,

          .enterprise-web__mobile-slide,

          .enterprise-web__mobile-dot {

            transition: none;

          }

        }

      `}</style>

      <section className="enterprise-web" id="services" aria-labelledby="enterprise-web-title">

        <div className="enterprise-web__inner">

          <div className="enterprise-web__top">

            <div>

              <p className="enterprise-web__eyebrow">Technology Consulting &amp; Services</p>

              <h2 id="enterprise-web-title">

                Technology built for <span>your entire business.</span>

              </h2>

              <div className="enterprise-web__mobile-showcase" aria-label="Responsive website showcase">

                {showcaseSlides.map((slide, index) => (

                  <div

                    className={`enterprise-web__mobile-slide${activeSlide === index ? ' is-active' : ''}`}

                    key={slide.src}

                    aria-hidden={activeSlide !== index}

                  >

                    <img src={slide.src} alt={slide.alt} />

                  </div>

                ))}

                <div className="enterprise-web__mobile-dots" aria-label="Showcase slides">

                  {showcaseSlides.map((slide, index) => (

                    <button

                      type="button"

                      className={`enterprise-web__mobile-dot${activeSlide === index ? ' is-active' : ''}`}

                      key={slide.src}

                      onClick={() => setActiveSlide(index)}

                      aria-label={`Show image ${index + 1}`}

                    />

                  ))}

                </div>

              </div>

            </div>

            <div className="enterprise-web__top-copy">

              <p>

                Plexura brings together web design and development, IT consulting, infrastructure, enterprise networking,
                and cloud and AI services to help your business connect its systems, improve operations, and grow.

              </p>

              <a className="enterprise-web__top-link" href="#enterprise-web-feature">

                Explore our approach <span aria-hidden="true">↗</span>

              </a>

            </div>

          </div>

          <nav className="enterprise-web__rail" aria-label="Technology services">

            <a className="enterprise-web__rail-item is-active" href="#enterprise-web-feature">

              Web Design &amp; Development

            </a>

            <a className="enterprise-web__rail-item" href="#infrastructure-card">

              IT Consulting &amp; Infrastructure

            </a>

            <a className="enterprise-web__rail-item" href="#networking-card">

              Enterprise Networking

            </a>

            <a className="enterprise-web__rail-item" href="#cloud-card">

              Cloud Consulting &amp; Services

            </a>

            <a className="enterprise-web__rail-item" href="#ai-card">
              AI Consulting &amp; Services
            </a>

          </nav>

          <div className="enterprise-web__feature" id="enterprise-web-feature">

            <div className="enterprise-web__feature-copy">

              <p className="enterprise-web__label">Custom Web Experiences</p>

              <h3>More Than A Good-Looking Website.</h3>

              <p className="enterprise-web__feature-text">

                We design and build polished digital experiences around your brand, your customers, and the actions

                that matter most — from first visit to qualified lead.

              </p>

              <ul className="enterprise-web__bullets">

                <li>Custom responsive UX and visual design</li>

                <li>React, Next.js, and modern front-end development</li>

                <li>Conversion-focused lead capture and user journeys</li>

                <li>Built to scale into CRM, booking, and automation workflows</li>

              </ul>

              <a className="enterprise-web__cta" href="#contact">

                Discuss your website <span aria-hidden="true">→</span>

              </a>

            </div>

            <div className="enterprise-web__visual">

              <div className="enterprise-web__showcase">

                <img

                  className="enterprise-web__showcase-laptop"

                  src="/assets/laptop-showcase.png"

                  alt="Plexura laptop mockup showing a custom web development experience"

                />

                <img

                  className="enterprise-web__showcase-devices"

                  src="/assets/phone-tab.png"

                  alt="Plexura tablet and smartphone mockup showing a responsive web development experience"

                />

              </div>

            </div>

          </div>

          <div className="enterprise-web__cards">

            <article className="enterprise-web__card" id="infrastructure-card">

              <div className="enterprise-web__card-top">

                <span className="enterprise-web__icon" aria-hidden="true">

                  <svg viewBox="0 0 24 24">

                    <rect x="4" y="4" width="16" height="16" rx="3"></rect>

                    <path d="M8 9h8M8 13h5M8 17h7"></path>

                  </svg>

                </span>

              </div>

              <h4>IT Consulting &amp; Infrastructure</h4>

              <p>

                Plan, implement, and support the technology your business depends on. We help with IT strategy,
                servers, workstations, virtualization, and infrastructure improvements tailored to your operations.

              </p>

              <a href="#contact">

                Talk to our team <span aria-hidden="true">→</span>

              </a>

            </article>

            <article className="enterprise-web__card" id="networking-card">

              <div className="enterprise-web__card-top">

                <span className="enterprise-web__icon" aria-hidden="true">

                  <svg viewBox="0 0 24 24">

                    <circle cx="7" cy="7" r="2.5"></circle>

                    <circle cx="17" cy="7" r="2.5"></circle>

                    <circle cx="12" cy="17" r="2.5"></circle>

                    <path d="M9 8.3 11 15M15 8.3 13 15M9.5 7h5"></path>

                  </svg>

                </span>

              </div>

              <h4>Enterprise Networking</h4>

              <p>

                Connect your people, devices, and locations with network design, switching, routing, wireless,
                firewalls, and VPN solutions built around your business requirements.

              </p>

              <a href="#contact">

                Talk to our team <span aria-hidden="true">→</span>

              </a>

            </article>

            <article className="enterprise-web__card" id="cloud-card">
              <div className="enterprise-web__card-top">
                <span className="enterprise-web__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 19a4 4 0 0 1-.7-7.94A7 7 0 0 1 19 9.5a4.75 4.75 0 0 1-.75 9.5H6Z" />
                  </svg>
                </span>
              </div>
              <h4>Cloud Consulting &amp; Services</h4>
              <p>
                Plan, deploy, and improve your cloud environment. We help with migration planning,
                cloud infrastructure, and hybrid connectivity built around your business needs.
              </p>
              <a href="#contact">
                Discuss your cloud needs <span aria-hidden="true">→</span>
              </a>
            </article>

            <article className="enterprise-web__card" id="ai-card">
              <div className="enterprise-web__card-top">
                <span className="enterprise-web__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="6" y="6" width="12" height="12" rx="3" />
                    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
                    <path d="M10 10h4v4h-4z" />
                  </svg>
                </span>
              </div>
              <h4>AI Consulting &amp; Services</h4>
              <p>
                Put AI to practical use with use-case planning, AI integrations, intelligent assistants,
                and workflow automation that help your team reduce repetitive work.
              </p>
              <a href="#contact">
                Explore AI for your business <span aria-hidden="true">→</span>
              </a>
            </article>

          </div>

          <ProcessSection />

        </div>

      </section>

    </>

  );

}
