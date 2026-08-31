import ScrollOrb from './ScrollOrb';
import MusicCue from './MusicCue';

const methodology = [
  ['01', 'Discover', 'Explore the business context, user needs and technical constraints.'],
  ['02', 'Define', 'Turn broad ideas into a shared problem statement and clear requirements.'],
  ['03', 'Plan', 'Break work into priorities, backlog items, owners and sprint goals.'],
  ['04', 'Build', 'Support delivery while developing admin backend, database, APIs and mock data.'],
  ['05', 'Review', 'Check progress together, surface constraints and adapt the next iteration.'],
];

const journey = [
  ['2026 · NOW', 'Junior Software Developer Bootcamp', 'Generation Thailand', 'Full-time MERN training. Project Lead and Backend Developer in a five-person product team.'],
  ['2023–2025', 'Marketing, Events & Facilitator', 'Progression Vertical', 'Coordinated people, partners and moving parts from planning through on-site delivery and post-event review.'],
  ['ONGOING', 'Online Piano Instructor', 'Independent', 'Design personalised learning journeys, explain complexity clearly and improve through continuous feedback.'],
  ['FOUNDATION', 'Master’s & Bachelor’s in Music', 'Payap University', 'A foundation in discipline, deep listening, preparation and performance under pressure.'],
];

export default function Home() {
  return (
    <main id="top">
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top"><b>N/</b> NAE PATHSHARASAKON</a>
        <div className="navLinks"><a href="#work">Work</a><a href="#journey">Journey</a><a href="#contact">Contact</a></div>
        <span className="availability"><i /> Open to work</span>
      </nav>

      <header className="hero">
        <ScrollOrb />
        <div className="heroCopy">
          <p className="kicker">ASPIRING IT BUSINESS ANALYST · BANGKOK / REMOTE</p>
          <h1>PEOPLE <span>→</span><br />SYSTEMS <span>→</span><br /><em>PROGRESS.</em></h1>
          <p className="lead">I connect user needs, system thinking and collaborative execution—currently leading a five-person MERN project at Generation Thailand.</p>
          <p className="thaiLine">เข้าใจคน · มองเห็นระบบ · พาทีมไปข้างหน้า</p>
          <div className="actions"><a className="btn dark" href="#work">Explore my work ↓</a><a className="btn line" href="#contact">Let’s connect ↗</a></div>
        </div>
        <div className="heroVisual" aria-label="A creative workspace representing the connection between people and systems">
          <span className="scribble scribbleArrow" aria-hidden="true">↝</span>
          <span className="scribble scribbleStar" aria-hidden="true">✳</span>
          <span className="scribble scribbleNote" aria-hidden="true">listen first!</span>
          <div className="imageFrame portraitFrame"><img src="/nae-portrait.png" alt="Portrait of Nae Pathsharasakon beside a piano" /></div>
          <div className="sticker stickerOne">FAST<br />LEARNER</div>
          <div className="sticker stickerTwo">DETAIL<br />MINDED</div>
          <div className="note">MUSIC → EVENTS → TECH<br /><b>Not a straight line. A useful one.</b></div>
        </div>
      </header>

      <div className="ticker" aria-hidden="true"><span>LISTEN DEEPLY</span><b>✦</b><span>FRAME THE PROBLEM</span><b>✦</b><span>ALIGN THE TEAM</span><b>✦</b><span>DELIVER & LEARN</span></div>

      <section className="senseStrip" aria-label="My story from music to systems">
        <article><span className="senseFace" aria-hidden="true">♪</span><small>CHAPTER 01 · MUSIC</small><b>First, I learned<br />to listen.</b><p>Years of music taught me that progress begins before the first note—with attention, patience and an ear for what is not being said.</p></article>
        <article><span className="senseLink" aria-hidden="true">●●●</span><small>CHAPTER 02 · COMMUNITY</small><b>Then, I learned<br />to align people.</b><p>Teaching and events turned listening into action: understand different needs, coordinate moving parts and help people arrive at one shared moment.</p></article>
        <article><span className="senseMove" aria-hidden="true">↗</span><small>CHAPTER 03 · TECHNOLOGY</small><b>Now, I turn needs<br />into systems.</b><p>At Generation Thailand, I found the bridge—requirements, data and delivery give structure to the human problems I have always enjoyed solving.</p></article>
      </section>

      <section className="storyBridge">
        <p>SO THE CAREER CHANGE ISN’T A RESET.</p>
        <h2>It is the next movement<br />of the <em>same story.</em></h2>
        <div><span>LISTEN TO THE NEED</span><i>→</i><span>MAKE IT CLEAR</span><i>→</i><span>MOVE IT FORWARD</span></div>
      </section>

      <MusicCue />

      <section className="beliefs">
        <div className="beliefsHead"><p>3 THINGS I STRONGLY BELIEVE IN</p><h2>The principles behind<br />how I <em>show up.</em></h2></div>
        <div className="beliefCollage">
          <article className="beliefOne"><span>01</span><h3>Listen before<br />you define.</h3><p>The first request is rarely the whole problem. Better questions create better requirements.</p></article>
          <article className="beliefTwo"><span>02</span><h3>Clarity is<br />a team sport.</h3><p>A plan only works when people share the same picture, language and next step.</p></article>
          <article className="beliefThree"><span>03</span><h3>Progress beats<br />perfect plans.</h3><p>Make the smallest useful move, learn from reality and improve the next iteration.</p></article>
          <div className="beliefDoodle" aria-hidden="true">♪ → ● → ↗</div>
        </div>
      </section>

      <section className="feature" id="work">
        <div className="sectionIntro"><p className="label">01 / FEATURED CASE STUDY</p><p className="statusPill">SPRINT 2 · IN PROGRESS</p></div>
        <div className="featureTitle">
          <div className="featureHeading"><span className="caseIndex">CASE 01</span><h2>From an outfit idea<br />to a <em>working system.</em></h2><p className="projectMeta">FASHION E-COMMERCE · MERN · 5-PERSON TEAM · 2026</p></div>
          <aside className="featureAside">
            <div className="productQuestion"><small>THE PRODUCT QUESTION</small><p>How might outfit inspiration become a clear, useful buying journey?</p></div>
            <div className="lookbookArt" aria-hidden="true"><span className="shirt">01</span><span className="pants">02</span><span className="bag">03</span><b>LOOK<br />BOOK</b></div>
            <div className="caseFacts"><span><b>MY ROLE</b>Project Lead + Backend</span><span><b>STATUS</b>Sprint 2 · In progress</span></div>
          </aside>
        </div>

        <div className="executive panel"><p className="label">PROJECT BRIEF</p><div><p className="summaryLead">A five-person team is building a fashion e-commerce app that turns outfit inspiration into a useful buying journey through a Mix & Match Lookbook.</p><p>As Project Lead and Backend Developer, I translate the concept into clear requirements, priorities and an achievable system—while helping the team keep moving together. The project is currently in Sprint 2.</p></div></div>

        <div className="projectProof">
          <div><p className="label">PROJECT PROOF</p><h3>Built with a five-person team.<br />Visible while it evolves.</h3></div>
          <div className="proofActions"><a href="https://github.com/pathsharasakon-ws/group-project-3" target="_blank" rel="noreferrer">View source repository ↗</a><span>LIVE DEMO · AFTER SPRINT 3</span></div>
          <div className="contributors"><b>CONTRIBUTORS</b><a href="https://github.com/pathsharasakon-ws" target="_blank" rel="noreferrer">Nae</a><a href="https://github.com/drimmonline" target="_blank" rel="noreferrer">Mos</a><a href="https://github.com/Luknok-tky" target="_blank" rel="noreferrer">Luknok</a><a href="https://github.com/Bell914" target="_blank" rel="noreferrer">BM</a><a href="https://github.com/bird-sitthan" target="_blank" rel="noreferrer">Bird</a></div>
        </div>

        <div className="method"><div className="methodHead"><p className="label">METHODOLOGY</p><h3>A practical loop from ambiguity to delivery.</h3><p>Our process is collaborative, lightweight and shaped around the realities of a learning team.</p></div><div className="methodSteps">{methodology.map(([no,title,text]) => <article key={no}><span>{no}</span><h4>{title}</h4><p>{text}</p></article>)}</div></div>

        <div className="system"><div><p className="label">SOLUTION & SYSTEM OVERVIEW</p><h3>One experience,<br />three connected layers.</h3></div><div className="systemFlow"><article><span>01</span><b>React interface</b><small>Browse · Lookbook · Admin</small></article><i>→</i><article><span>02</span><b>Express REST API</b><small>Business logic · Data flow</small></article><i>→</i><article><span>03</span><b>MongoDB</b><small>Products · Users · Orders</small></article></div></div>

        <div className="outcomes"><div className="outcomeCopy"><p className="label">CURRENT OUTCOMES</p><h3>Evidence of progress,<br />without pretending it is impact.</h3><p>Because the product is still in Sprint 2, I separate completed delivery work from future business hypotheses.</p></div><div className="outcomeList"><p><b>01</b> Shared product concept and core customer journey</p><p><b>02</b> Requirements, wireframes, diagrams and prioritised backlog</p><p><b>03</b> Delivery rhythm adapted around a five-person team’s constraints</p><p><b>04</b> Backend, database, API and admin work in progress</p></div></div>

        <blockquote>“A compelling feature idea is not enough on its own. It must connect to a genuine user problem, translate into clear requirements and fit real technical and team constraints.”<cite>— Reflection from Sprint 2</cite></blockquote>
      </section>

      <section className="projectShelf">
        <div className="shelfHead"><p className="label">02 / SUPPORTING WORK</p><h2>Two smaller signals<br />of <em>how I think.</em></h2><p>Compact learning notes that connect business intent to system structure.</p></div>
        <div className="projectFolders">
          <article className="folder folderCream"><div className="folderTab">INDIVIDUAL CONCEPT</div><span className="folderNo">01</span><div className="musicStamp" aria-hidden="true">♪</div><h3>Piano Practice<br />E-commerce Concept</h3><p>Translating an educator’s insight into a business model, use cases and data structure.</p><span className="coming">CASE NOTE · JSD13</span></article>
          <article className="folder folderCoral"><div className="folderTab">INDIVIDUAL EXERCISE</div><span className="folderNo">02</span><div className="routeStamp" aria-hidden="true">REQ<br />↓<br />API</div><h3>Requirements-to-System<br />Breakdown</h3><p>Mapping requirements into routes, components, state and API responsibilities.</p><span className="coming">CASE NOTE · JSD13</span></article>
        </div>
        <p className="shelfNote">Enough to show range—without turning the portfolio into a course archive.</p>
      </section>

      <section className="community"><div className="communityVisual"><span>PLAN</span><b>ALIGN · FACILITATE · REVIEW</b><div className="crowd" aria-hidden="true">● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●</div></div><div className="communityCopy"><p className="label">03 / EXPERIENCE IN ACTION</p><h2>Coordinating a community—<em>not just an event.</em></h2><p>Led two consecutive annual editions of Community Crank at Progression Vertical, coordinating planning, promotion, sponsors, vendors, instructors, community partners, on-site facilitation and post-event review.</p><div className="tags"><span>Stakeholder alignment</span><span>Event operations</span><span>Community insight</span><span>Feedback review</span></div><small>Also supported Gear Swap and Ladies Night as separate community initiatives.</small></div></section>

      <section className="journey" id="journey"><div className="journeyHeader"><p className="label">03 / THE UNCONVENTIONAL ROUTE</p><h2>Different chapters.<br /><em>One consistent pattern.</em></h2><p>Listening carefully, creating structure and helping people make progress.</p></div><div className="timeline">{journey.map(([year,role,org,text]) => <article key={role}><span>{year}</span><div><h3>{role}</h3><h4>{org}</h4><p>{text}</p></div></article>)}</div></section>

      <section className="credentials"><p className="label">04 / CREDENTIALS & TOOLKIT</p><div className="credentialGrid"><article><span>01</span><h3>Google Project Management</h3><p>Professional Certificate · 2026</p></article><article><span>02</span><h3>Junior Software Developer</h3><p>Generation Thailand · In progress</p></article><article><span>03</span><h3>Data Visualization</h3><p>TPQI · 2026</p></article><article><span>04</span><h3>SQL & MongoDB</h3><p>Codecademy</p></article></div><div className="toolRow"><b>WORKING TOOLKIT</b><span>Agile / Scrum</span><span>Trello</span><span>Miro</span><span>Figma</span><span>Google Sheets</span><span>SQL</span><span>GitHub</span></div></section>

      <footer id="contact"><p className="label">05 / LET’S WORK TOGETHER</p><h2>Need someone who can<br /><em>hear the problem</em><br />and move it forward?</h2><div className="contactRow"><div><p>Open to Junior IT Business Analyst, IT Project Coordinator, Product Operations and Junior Implementation roles.</p><p className="thaiLine">พร้อมเริ่มงาน · Bangkok · Remote preferred / Hybrid & Onsite welcome</p></div><a className="email" href="mailto:pathsharasakon@gmail.com">pathsharasakon@gmail.com ↗</a></div><div className="footerBar"><span>NAE PATHSHARASAKON PO · © 2026</span><div><a href="https://www.linkedin.com/in/pathsharasakon-po-6902b029b" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/pathsharasakon-ws" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Top ↑</a></div></div></footer>
    </main>
  );
}
