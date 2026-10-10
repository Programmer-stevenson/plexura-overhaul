type ExpertiseItem = {
  title: string;
  summary: string;
  tags: string[];
};

type TeamMember = {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  photo: string;
  linkedin: string;
  expertise?: ExpertiseItem[];
};

const teamMembers: TeamMember[] = [
  {
    name: 'Daniel Velez',
    role: 'Sales Engineer',
    discipline: 'Growth & Client Strategy',
    bio: 'Connects client goals with practical technical solutions, helping shape the commercial strategy behind every engagement.',
    photo: '/assets/daniel.png',
    linkedin: 'https://www.linkedin.com/in/daniel-velez-898195208/',
    expertise: [
      {
        title: 'Enterprise Sales & Business Development',
        summary:
          'Experienced in full-cycle B2B sales, prospecting, discovery, proposals, negotiation, and closing complex engagements with executive decision-makers.',
        tags: ['B2B Sales', 'Enterprise Sales', 'Pipeline', 'Negotiation'],
      },
      {
        title: 'Growth Strategy & Go-to-Market',
        summary:
          'Builds practical growth strategies around positioning, pricing, client acquisition, partnerships, and repeatable sales processes.',
        tags: ['Go-to-Market', 'Pricing', 'Partnerships', 'Growth Strategy'],
      },
      {
        title: 'Technical Solution Selling',
        summary:
          'Translates digital, AI, SEO, automation, and software capabilities into clear business outcomes that clients can understand and buy into.',
        tags: ['Solution Selling', 'AI', 'SEO', 'SaaS'],
      },
      {
        title: 'Executive Communication',
        summary:
          'Comfortable presenting complex solutions to owners, operators, directors, CFOs, and other business leaders in consultative sales environments.',
        tags: ['Discovery', 'Demos', 'Proposals', 'Executive Sales'],
      },
    ],
  },
  {
    name: 'Brandon Stevenson',
    role: 'Software Engineer — Product Development',
    discipline: 'Product Engineering',
    bio: 'Builds Plexura product experiences, integrations, and technical systems across web, automation, infrastructure, and application delivery.',
    photo: '/assets/brandon.jpg',
    linkedin: 'https://www.linkedin.com/in/brandonstevensonprograms/',
    expertise: [
      {
        title: 'Full-Stack Product Development',
        summary:
          'Builds modern web applications and product experiences across React, Node.js, APIs, databases, deployment, and end-to-end application delivery.',
        tags: ['React', 'Node.js', 'REST APIs', 'Full Stack'],
      },
      {
        title: 'IT Infrastructure & Systems',
        summary:
          'Hands-on experience with enterprise servers, networking equipment, firmware, RAID, remote management platforms, hardware diagnostics, and infrastructure validation.',
        tags: ['Servers', 'Networking', 'iDRAC / iLO', 'RAID'],
      },
      {
        title: 'Endpoint & Microsoft Administration',
        summary:
          'Works across Intune, Entra ID, Active Directory, Microsoft 365, Autopilot, BitLocker, endpoint deployment, and device lifecycle operations.',
        tags: ['Intune', 'Entra ID', 'M365', 'Autopilot'],
      },
      {
        title: 'Automation & Technical Tooling',
        summary:
          'Uses PowerShell, Microsoft Graph, APIs, scripting, and internal tooling to reduce repetitive work and improve technical workflows.',
        tags: ['PowerShell', 'Microsoft Graph', 'Automation', 'APIs'],
      },
    ],
  },
  {
    name: 'Edward Oconnell',
    role: 'Support Analyst',
    discipline: 'Client Operations',
    bio: 'Supports client-facing systems and day-to-day technical operations, troubleshooting issues and helping keep service reliable.',
    photo: '/assets/Ed.jpg',
    linkedin: 'https://www.linkedin.com/in/edwardcoconnelliii/',
  },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m7 9 5 5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.37 3.5A2.37 2.37 0 1 1 .63 3.5a2.37 2.37 0 0 1 4.74 0ZM1.03 8.01h4.69V23H1.03V8.01Zm7.64 0h4.5v2.05h.06c.63-1.19 2.16-2.44 4.45-2.44 4.76 0 5.64 3.13 5.64 7.2V23h-4.69v-7.26c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.89-2.79 3.84V23H8.67V8.01Z"
      />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <>
      <style>{`
        .px-team {
          --px-orange: #ff7334;
          --px-white: #f8fbff;
          --px-muted: #9eacba;
          --px-line: rgba(255, 255, 255, 0.11);

          position: relative;
          overflow: hidden;
          padding: 112px 6%;
          color: var(--px-white);
          background:
            radial-gradient(circle at 18% 4%, rgba(255, 115, 52, 0.09), transparent 26%),
            radial-gradient(circle at 86% 44%, rgba(56, 132, 201, 0.08), transparent 30%),
            linear-gradient(180deg, #081a2d 0%, #061522 100%);
        }

        .px-team::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.12;
          background-image:
            linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px);
          background-size: 84px 84px;
        }

        .px-team-shell {
          position: relative;
          z-index: 1;
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .px-team-head {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(320px, .8fr);
          gap: 70px;
          align-items: end;
          margin-bottom: 58px;
        }

        .px-team-kicker {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 18px;
          color: var(--px-orange);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .27em;
          text-transform: uppercase;
        }

        .px-team-kicker::before {
          content: "";
          width: 34px;
          height: 1px;
          background: currentColor;
        }

        .px-team-title {
          margin: 0;
          max-width: 780px;
          font-size: clamp(52px, 5.8vw, 80px);
          line-height: .96;
          letter-spacing: -.055em;
          font-weight: 600;
        }

        .px-team-title span {
          color: var(--px-orange);
        }

        .px-team-intro {
          margin: 0;
          max-width: 470px;
          color: #afbdc9;
          font-size: 18px;
          line-height: 1.65;
        }

        .px-team-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          align-items: start;
        }

        .px-team-card {
          min-width: 0;
          padding: 34px 26px 28px;
          border: 1px solid var(--px-line);
          border-radius: 26px;
          background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.025));
          box-shadow: 0 28px 70px rgba(0,0,0,.22);
          backdrop-filter: blur(14px);
          transition: transform .3s ease, border-color .3s ease, background .3s ease;
        }

        .px-team-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 115, 52, .30);
          background: linear-gradient(180deg, rgba(255,255,255,.065), rgba(255,255,255,.03));
        }

        .px-team-avatar-shell {
          width: 144px;
          height: 144px;
          margin: 0 auto 26px;
          padding: 5px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,115,52,.95), rgba(255,255,255,.20) 48%, rgba(60,140,210,.72));
          box-shadow: 0 0 0 1px rgba(255,255,255,.05), 0 18px 42px rgba(0,0,0,.28);
        }

        .px-team-avatar {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 5px solid #0a1b2b;
        }

        .px-team-card-copy {
          text-align: left;
        }

        .px-team-discipline {
          display: inline-block;
          margin-bottom: 12px;
          color: var(--px-orange);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .px-team-name {
          margin: 0;
          font-size: 28px;
          line-height: 1.05;
          letter-spacing: -.035em;
          font-weight: 600;
        }

        .px-team-role {
          margin: 8px 0 0;
          min-height: 38px;
          color: #dfe7ee;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 650;
        }

        .px-team-bio {
          margin: 18px 0 0;
          min-height: 116px;
          color: var(--px-muted);
          font-size: 14px;
          line-height: 1.65;
        }

        .px-team-actions {
          display: grid;
          gap: 10px;
          margin-top: 22px;
        }

        .px-team-expertise {
          width: 100%;
        }

        .px-team-expertise summary {
          list-style: none;
          width: 100%;
          min-height: 48px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          cursor: pointer;
          border: 1px solid rgba(255, 115, 52, .24);
          border-radius: 13px;
          color: #fff;
          background: rgba(255, 115, 52, .065);
          font-size: 13px;
          font-weight: 700;
          user-select: none;
          transition: background .2s ease, border-color .2s ease;
        }

        .px-team-expertise summary::-webkit-details-marker {
          display: none;
        }

        .px-team-expertise summary:hover {
          background: rgba(255, 115, 52, .10);
          border-color: rgba(255, 115, 52, .42);
        }

        .px-team-expertise summary svg {
          width: 17px;
          height: 17px;
          color: var(--px-orange);
          transition: transform .22s ease;
        }

        .px-team-expertise[open] summary svg {
          transform: rotate(180deg);
        }

        .px-team-expertise-panel {
          margin-top: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 14px;
          background: rgba(3, 14, 24, .48);
        }

        .px-team-expertise-item {
          padding: 17px 16px;
          border-bottom: 1px solid rgba(255,255,255,.075);
        }

        .px-team-expertise-item:last-child {
          border-bottom: 0;
        }

        .px-team-expertise-item strong {
          color: #f4f8fb;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
        }

        .px-team-expertise-item p {
          margin: 7px 0 0;
          color: #98a8b5;
          font-size: 11px;
          line-height: 1.55;
        }

        .px-team-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
        }

        .px-team-tags span {
          padding: 5px 7px;
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 999px;
          color: #c8d4df;
          background: rgba(255,255,255,.025);
          font-size: 9px;
          font-weight: 650;
          letter-spacing: .03em;
        }

        .px-team-linkedin {
          width: 100%;
          min-height: 48px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(255,255,255,.10);
          border-radius: 13px;
          color: #eef4f8;
          background: rgba(255,255,255,.03);
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
          transition: background .2s ease, border-color .2s ease;
        }

        .px-team-linkedin:hover {
          background: rgba(255,255,255,.055);
          border-color: rgba(255,255,255,.20);
        }

        .px-team-linkedin svg:first-child {
          width: 16px;
          height: 16px;
          color: var(--px-orange);
        }

        .px-team-linkedin span {
          flex: 1;
        }

        .px-team-linkedin svg:last-child {
          width: 15px;
          height: 15px;
          color: var(--px-orange);
        }

        @media (max-width: 980px) {
          .px-team {
            padding: 94px 5.5%;
          }

          .px-team-head {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .px-team-intro {
            max-width: 650px;
          }

          .px-team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .px-team-card:nth-child(3) {
            grid-column: 1 / -1;
            width: calc(50% - 11px);
            justify-self: center;
          }
        }

        @media (max-width: 620px) {
          .px-team {
            padding: 78px 5% 82px;
          }

          .px-team-head {
            margin-bottom: 36px;
          }

          .px-team-title {
            font-size: clamp(42px, 12vw, 54px);
          }

          .px-team-intro {
            font-size: 15px;
            line-height: 1.6;
          }

          .px-team-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .px-team-card,
          .px-team-card:nth-child(3) {
            width: 100%;
            grid-column: auto;
            padding: 24px 20px 22px;
          }

          .px-team-avatar-shell {
            width: 112px;
            height: 112px;
            margin-bottom: 18px;
          }

          .px-team-card-copy {
            text-align: center;
          }

          .px-team-discipline {
            margin-bottom: 8px;
          }

          .px-team-name {
            font-size: 23px;
          }

          .px-team-role {
            min-height: 0;
            margin-top: 6px;
            font-size: 12px;
          }

          .px-team-bio {
            min-height: 0;
            max-width: 420px;
            margin: 14px auto 0;
            font-size: 13px;
            line-height: 1.58;
          }

          .px-team-actions {
            margin-top: 18px;
          }

          .px-team-expertise,
          .px-team-linkedin {
            text-align: left;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .px-team-card,
          .px-team-expertise summary,
          .px-team-expertise summary svg,
          .px-team-linkedin {
            transition: none;
          }
        }
      `}</style>

      <section className="px-team" id="team">
        <div className="px-team-shell">
          <header className="px-team-head">
            <div>
              <span className="px-team-kicker">Meet the Team</span>
              <h2 className="px-team-title">
                Strategy, engineering, and support under <span>one roof.</span>
              </h2>
            </div>

            <p className="px-team-intro">
              A compact team with complementary expertise across sales,
              product development, enterprise IT, and client support.
            </p>
          </header>

          <div className="px-team-grid">
            {teamMembers.map((member) => (
              <article className="px-team-card" key={member.name}>
                <div className="px-team-avatar-shell">
                  <img
                    className="px-team-avatar"
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                  />
                </div>

                <div className="px-team-card-copy">
                  <span className="px-team-discipline">{member.discipline}</span>

                  <h3 className="px-team-name">{member.name}</h3>
                  <p className="px-team-role">{member.role}</p>
                  <p className="px-team-bio">{member.bio}</p>

                  <div className="px-team-actions">
                    {member.expertise && (
                      <details className="px-team-expertise">
                        <summary>
                          <span>View expertise</span>
                          <Chevron />
                        </summary>

                        <div className="px-team-expertise-panel">
                          {member.expertise.map((item) => (
                            <div
                              className="px-team-expertise-item"
                              key={`${member.name}-${item.title}`}
                            >
                              <strong>{item.title}</strong>
                              <p>{item.summary}</p>

                              <div className="px-team-tags">
                                {item.tags.map((tag) => (
                                  <span key={tag}>{tag}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </details>
                    )}

                    <a
                      className="px-team-linkedin"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                      <span>LinkedIn</span>
                      <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}