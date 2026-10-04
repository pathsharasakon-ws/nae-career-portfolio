import Image from 'next/image';
import MusicCue from './MusicCue';

const methodology = [
  ['01', 'Discover', 'Understand the request, context and people involved.'],
  ['02', 'Analyze', 'Separate the underlying need from the first solution idea.'],
  ['03', 'Define', 'Translate the need into clear scope and requirements.'],
  ['04', 'Prioritize', 'Balance user value with sprint, team and technical constraints.'],
  ['05', 'Validate', 'Review and manually test delivered behaviour, then adapt.'],
];

const journey = [
  ['2026', 'Junior Software Developer Bootcamp', 'Generation Thailand · JSD13 Graduate', 'Completed full-time MERN training, serving as Team Leader, Scrum Master and Product Owner in a five-person product team.'],
  ['2023–2025', 'Marketing, Events & Facilitator', 'Progression Vertical', 'Coordinated people, partners and moving parts from planning through on-site delivery and post-event review.'],
  ['ONGOING', 'Online Piano Instructor', 'Independent', 'Design personalised learning journeys, explain complexity clearly and improve through continuous feedback.'],
  ['FOUNDATION', 'Master’s & Bachelor’s in Music', 'Payap University', 'A foundation in discipline, deep listening, preparation and performance under pressure.'],
];

const skills = [
  ['01 · DISCOVERY', 'Requirements Elicitation', 'Use stakeholder interviews, questions and contextual research to clarify the need behind an initial request.'],
  ['02 · ANALYSIS', 'Process & Workflow Analysis', 'Break product and admin workflows into clear scope, system behaviour and actionable requirements.'],
  ['03 · DELIVERY', 'Backlog Prioritization', 'Balance user value, delivery constraints and sprint goals in an Agile/Scrum team.'],
  ['04 · COORDINATION', 'Cross-functional Coordination', 'Align contributors, partners and delivery details from planning through review.'],
  ['05 · TECHNICAL', 'SQL, REST APIs & Data', 'Use software-development training to discuss interfaces, business logic and data with developers.'],
];

export default function Home() {
  return (
    <main id="top">
      <a className="skipLink" href="#main-content">Skip to case studies</a>

      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top"><b>N/</b> NAE PATHSHARASAKON</a>
        <div className="navLinks">
          <a href="#work">Case studies</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="availability"><i aria-hidden="true" /> Open to work</span>
      </nav>

      <header className="hero">
        <div className="heroCopy">
          <p className="kicker">JUNIOR IT BUSINESS ANALYST · PROJECT COORDINATOR · PRODUCT OPERATIONS</p>
          <h1>PEOPLE <span>→</span><br />SYSTEMS <span>→</span><br /><em>PROGRESS.</em></h1>
          <p className="lead">I turn user and stakeholder needs into clear requirements, prioritized work and collaborative delivery—combining Agile leadership with hands-on MERN, REST API, database and SQL foundations.</p>
          <p className="thaiLine" lang="th">เข้าใจคน · มองเห็นระบบ · พาทีมไปข้างหน้า</p>
          <div className="actions">
            <a className="btn dark" href="#occasion">View OCCASION case ↓</a>
            <a className="btn line" href="#sela">View SELA case ↓</a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Portrait and visual notes connecting music, community and technology">
          <span className="scribble scribbleArrow" aria-hidden="true">↝</span>
          <span className="scribble scribbleStar" aria-hidden="true">✳</span>
          <span className="scribble scribbleNote" aria-hidden="true">listen first!</span>
          <div className="imageFrame portraitFrame">
            <Image src="/nae-portrait-retouched.png" alt="Nae Pathsharasakon beside a piano" fill priority sizes="(max-width: 900px) 90vw, 40vw" />
          </div>
          <div className="sticker stickerOne">FAST<br />LEARNER</div>
          <div className="sticker stickerTwo">DETAIL<br />MINDED</div>
          <div className="note">MUSIC → COMMUNITY → TECH<br /><b>Not a straight line. A useful one.</b></div>
        </div>
      </header>

      <div className="ticker" aria-hidden="true"><span>ELICIT REQUIREMENTS</span><b>✦</b><span>ANALYZE WORKFLOWS</span><b>✦</b><span>PRIORITIZE THE BACKLOG</span><b>✦</b><span>VALIDATE DELIVERY</span></div>

      <section className="recruiterSnapshot" aria-labelledby="snapshot-title">
        <div><p className="label">RECRUITER SNAPSHOT</p><h2 id="snapshot-title">Who → target role → proof.</h2></div>
        <dl>
          <div><dt>WHO</dt><dd>Career-transition professional with music, community coordination and software-delivery experience.</dd></div>
          <div><dt>TARGET</dt><dd>Junior IT Business Analyst, IT Project Coordinator and Product Operations roles.</dd></div>
          <div><dt>PROOF</dt><dd>Two BA-oriented cases, a deployed five-person MERN project and stakeholder-facing event delivery.</dd></div>
        </dl>
      </section>

      <div id="main-content" />
      <section className="feature" id="work" aria-labelledby="occasion-title">
        <div id="occasion" className="anchorTarget" />
        <div className="sectionIntro"><p className="label">01 / CASE STUDY</p><p className="statusPill">COMPLETED · TEAM PROJECT</p></div>
        <div className="featureTitle">
          <div className="featureHeading"><span className="caseIndex">OCCASION · CASE 01</span><h2 id="occasion-title">From an outfit idea<br />to a <em>working system.</em></h2><p className="projectMeta">FASHION E-COMMERCE · MERN · 5-PERSON TEAM · 2026</p></div>
          <aside className="featureAside">
            <div className="productQuestion"><small>USER NEED</small><p>Make outfit inspiration a clear, useful buying journey.</p></div>
            <div className="lookbookArt"><Image src="/illustration-lookbook.png" alt="Illustration of a fashion Lookbook connected to an admin system and database" fill sizes="(max-width: 900px) 90vw, 28vw" /></div>
          </aside>
        </div>

        <div className="roleSplit" aria-label="Project role and team delivery">
          <article><p className="label">MY CONTRIBUTION</p><h3>Analysis, prioritization and delivery leadership</h3><ul><li>Served as Team Leader, Scrum Master and Product Owner</li><li>Broke down requirements and prioritized the backlog</li><li>Facilitated sprint planning and team coordination</li><li>Owned admin product, variant, validation and authentication flows</li><li>Reviewed AI-supported implementation and manually tested behaviour</li></ul></article>
          <article><p className="label">TEAM DELIVERY</p><h3>A deployed, connected commerce experience</h3><ul><li>Customer e-commerce and admin experiences</li><li>React interface connected to an Express REST API and MongoDB</li><li>Product catalogue, authentication, cart and order flows</li><li>Lookbook and complete-set discovery</li><li>Five-person collaborative delivery</li></ul></article>
        </div>

        <div className="casePath" aria-label="OCCASION business analysis case study">
          <article><span>01</span><p className="label">PROBLEM / USER NEED</p><h3>Buying one item is simple. Building a complete look takes more confidence.</h3><p>The team explored how a fashion store could connect outfit inspiration with a usable path to browse and buy complete sets.</p></article>
          <article><span>02</span><p className="label">STAKEHOLDERS / DISCOVERY</p><h3>Shared product framing inside a five-person bootcamp team.</h3><p>Discovery focused on aligning the team around the customer journey, product concept and delivery constraints. No external customer research is claimed.</p></article>
          <article><span>03</span><p className="label">REQUIREMENTS</p><h3>Protect the core commerce journey.</h3><p>Requirements covered product catalogue, authentication, cart, order and admin management flows, with Lookbook albums and complete-set discovery as the differentiating experience.</p></article>
          <article><span>04</span><p className="label">PRIORITIZATION</p><h3>Balance the differentiator with achievable delivery.</h3><p>I helped break down and prioritize the backlog around sprint goals, team capacity and technical constraints while coordinating ownership across the team.</p></article>
          <article><span>05</span><p className="label">SOLUTION / DELIVERY</p><h3>Connect the customer, business logic and data layers.</h3><p>The team delivered React interfaces backed by an Express REST API and MongoDB. My implementation scope centered on admin flows plus security and size-recommendation enhancements.</p></article>
          <article><span>06</span><p className="label">VALIDATION</p><h3>Review behaviour before integration.</h3><p>I reviewed AI-supported implementation decisions and manually tested the resulting behaviour. No external usability study or measured business impact is claimed.</p></article>
        </div>

        <div className="method"><div className="methodHead"><p className="label">BA-ORIENTED METHOD</p><h3>From request to testable delivery.</h3><p>This reflects how I approached the two cases shown here—not a claim of formal artifacts beyond the evidence presented.</p></div><div className="methodSteps">{methodology.map(([no,title,text]) => <article key={no}><span>{no}</span><h4>{title}</h4><p>{text}</p></article>)}</div></div>

        <div className="system"><div><p className="label">SOLUTION OVERVIEW</p><h3>One experience,<br />three connected layers.</h3></div><div className="systemFlow"><article><span>01</span><b>React interface</b><small>Browse · Lookbook · Admin</small></article><i aria-hidden="true">→</i><article><span>02</span><b>Express REST API</b><small>Business logic · Data flow</small></article><i aria-hidden="true">→</i><article><span>03</span><b>MongoDB</b><small>Products · Users · Orders</small></article></div></div>

        <div className="outcomes"><div className="outcomeCopy"><p className="label">DELIVERED OUTCOME</p><h3>Evidence of delivery—<br />not invented impact.</h3><p>The project is completed and deployed. These are product outputs; no sales, conversion or customer-impact metrics are claimed.</p></div><div className="outcomeList"><p><b>01</b> Deployed customer e-commerce experience</p><p><b>02</b> Deployed admin dashboard</p><p><b>03</b> Connected React, REST API and MongoDB system</p><p><b>04</b> Admin product, variant and authentication flows</p><p><b>05</b> Rate limiting, file-upload and input validation</p><p><b>06</b> Rule-based personalised size recommendation</p></div></div>

        <div className="projectProof">
          <div><p className="label">PROJECT PROOF</p><h3>Inspect the delivered work.</h3></div>
          <div className="proofActions"><a href="https://jsd13-group3-hydra-ranger.vercel.app/" target="_blank" rel="noreferrer">Customer experience ↗</a><a href="https://occasion-admin-dashboard.vercel.app/login" target="_blank" rel="noreferrer">Admin dashboard ↗</a><a href="https://github.com/Bell914/jsd13-group3-HydraRanger" target="_blank" rel="noreferrer">Main team repository ↗</a><a href="https://github.com/pathsharasakon-ws/group-project-3" target="_blank" rel="noreferrer">Sprint 1 repository ↗</a></div>
          <div className="contributors"><b>CONTRIBUTORS</b><a href="https://github.com/pathsharasakon-ws" target="_blank" rel="noreferrer">Nae</a><a href="https://github.com/drimmonline" target="_blank" rel="noreferrer">Mos</a><a href="https://github.com/Luknok-tky" target="_blank" rel="noreferrer">Luknok</a><a href="https://github.com/Bell914" target="_blank" rel="noreferrer">BM</a><a href="https://github.com/bird-sitthan" target="_blank" rel="noreferrer">Bird</a></div>
        </div>
      </section>

      <section className="selaCase" id="sela" aria-labelledby="sela-title">
        <div className="selaHead"><p className="label">02 / CASE STUDY</p><span className="statusPill">BA CASE NOTE · F11AA</span><h2 id="sela-title">SELA Chiang Mai<br /><em>AI Review Intelligence.</em></h2><p>A discovery-led proof-of-concept recommendation grounded in an interview with the hotel owner and contextual research.</p></div>
        <div className="selaGrid">
          <article><span>01</span><h3>Initial context</h3><p>Explore how AI could support the hotel’s use of guest reviews.</p></article>
          <article><span>02</span><h3>Stakeholder discovery</h3><p>Interviewed the hotel owner and researched hotel operations, guest feedback and marketing needs.</p></article>
          <article><span>03</span><h3>Reframed problem</h3><p>The opportunity was not simply to collect reviews, but to turn fragmented feedback into useful marketing insight and decision support.</p></article>
          <article><span>04</span><h3>Requirements focus</h3><p>Consolidate review information and make patterns in guest feedback more useful for marketing decisions.</p></article>
          <article><span>05</span><h3>PoC recommendation</h3><p>Frame a focused AI Review Intelligence proof of concept around the clarified business need.</p></article>
          <article><span>06</span><h3>Next steps</h3><p>Validate the proposed direction with the stakeholder before expanding scope or implementation.</p></article>
        </div>
        <p className="evidenceNote"><b>Evidence boundary:</b> This case demonstrates interview, research, problem definition and PoC framing. It does not claim a deployed production system or measured business impact.</p>
      </section>

      <section className="senseStrip" aria-label="Career story from music to systems">
        <article><Image className="storyIllustration" src="/illustration-music-v2.png" alt="Illustration of Nae listening beside a piano" width={520} height={390} /><div className="storyCopy"><small>CHAPTER 01 · MUSIC</small><b>First, I learned<br />to listen.</b><p>Music built discipline, preparation and attention to what is not being said.</p></div></article>
        <article><Image className="storyIllustration" src="/illustration-community-v2b.png" alt="Illustration of five teammates aligning on a plan" width={520} height={390} /><div className="storyCopy"><small>CHAPTER 02 · COMMUNITY</small><b>Then, I learned<br />to align people.</b><p>Teaching and events turned listening into coordination across different needs.</p></div></article>
        <article><Image className="storyIllustration" src="/illustration-technology.png" alt="Illustration of a human need becoming a digital system" width={520} height={390} /><div className="storyCopy"><small>CHAPTER 03 · TECHNOLOGY</small><b>Now, I turn needs<br />into systems.</b><p>Software training added requirements, data and technical delivery to that foundation.</p></div></article>
      </section>

      <section className="storyBridge"><p>THE CAREER CHANGE ISN’T A RESET.</p><h2>It is the next movement<br />of the <em>same story.</em></h2><div><span>LISTEN TO THE NEED</span><i>→</i><span>MAKE IT CLEAR</span><i>→</i><span>MOVE IT FORWARD</span></div></section>

      <MusicCue />

      <section className="community" id="experience"><div className="communityVisual metricVisual"><strong>≈200</strong><span>ATTENDEES</span><div><b>10</b> VENDORS</div><div><b>50+</b> SPONSORS</div></div><div className="communityCopy"><p className="label">03 / EXPERIENCE IN ACTION</p><h2>Coordinating a community—<em>not just an event.</em></h2><p>Led two consecutive annual editions of Community Crank at Progression Vertical, coordinating planning, promotion, sponsors, vendors, instructors, community partners, on-site facilitation and post-event review.</p><p className="metricContext">Across the experience: nearly 200 attendees, 10 vendors and 50+ sponsors.</p><div className="tags"><span>Stakeholder alignment</span><span>Event operations</span><span>Cross-functional coordination</span><span>Feedback review</span></div><small>Also supported Gear Swap and Ladies Night as separate community initiatives.</small></div></section>

      <section className="skillsSpotlight" id="skills" aria-labelledby="skills-title"><div className="skillsIntro"><p className="label">04 / CORE SKILLS</p><h2 id="skills-title">What I bring<br />to the team.</h2><p>BA and delivery capabilities supported by the case studies and experience above.</p></div><div className="skillCards">{skills.map(([label,title,text]) => <article key={title}><span>{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="journey" id="journey"><div className="journeyHeader"><p className="label">05 / THE UNCONVENTIONAL ROUTE</p><h2>Different chapters.<br /><em>One consistent pattern.</em></h2><p>Listening carefully, creating structure and helping people make progress.</p></div><div className="timeline">{journey.map(([year,role,org,text]) => <article key={role}><span>{year}</span><div><h3>{role}</h3><h4>{org}</h4><p>{text}</p></div></article>)}</div></section>

      <section className="credentials"><p className="label">06 / CREDENTIALS & TOOLKIT</p><div className="credentialGrid"><article><span>01</span><h3>Google Project Management</h3><p>Professional Certificate · 2026</p></article><article><span>02</span><h3>Junior Software Developer</h3><p>Generation Thailand · JSD13 Graduate · 2026</p></article><article><span>03</span><h3>Data Visualization</h3><p>TPQI · 2026</p></article><article><span>04</span><h3>SQL & MongoDB</h3><p>Codecademy</p></article></div><div className="toolRow"><b>WORKING TOOLKIT</b><span>Agile / Scrum</span><span>Requirements</span><span>Stakeholder Interviews</span><span>Backlog Prioritization</span><span>Trello</span><span>Miro</span><span>Figma</span><span>Google Sheets</span><span>SQL</span><span>REST APIs</span><span>GitHub</span></div></section>

      <footer id="contact"><p className="label">07 / LET’S WORK TOGETHER</p><h2>Need someone who can<br /><em>hear the problem</em><br />and move it forward?</h2><div className="contactRow"><div><p>Open to Junior IT Business Analyst, IT Project Coordinator, Product Operations and Junior Implementation roles.</p><p className="thaiLine" lang="th">พร้อมเริ่มงาน · Bangkok · Remote preferred / Hybrid & Onsite welcome</p></div><div className="contactActions"><a className="email" href="mailto:pathsharasakon@gmail.com">pathsharasakon@gmail.com ↗</a><a className="btn dark" href="#occasion">Review case studies ↑</a></div></div><div className="footerBar"><span>NAE PATHSHARASAKON PO · © 2026</span><div><a href="https://www.linkedin.com/in/pathsharasakon-po-6902b029b" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/pathsharasakon-ws/nae-career-portfolio" target="_blank" rel="noreferrer">Portfolio source ↗</a><a href="#top">Top ↑</a></div></div></footer>
    </main>
  );
}
