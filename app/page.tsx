const strengths = [
  ['01', 'Structured execution', 'เปลี่ยนเป้าหมายที่กว้างให้เป็นแผนงาน ลำดับความสำคัญ และ next step ที่ทีมลงมือทำต่อได้'],
  ['02', 'Human communication', 'สื่อสารกับผู้เรียน ลูกค้า พาร์ตเนอร์ และทีมงานต่างบทบาทด้วยความเข้าใจและชัดเจน'],
  ['03', 'Ownership mindset', 'ดูแลงานตั้งแต่ไอเดีย การประสานงาน ไปจนถึงวันส่งมอบ พร้อมรับมือกับการเปลี่ยนแปลงหน้างาน'],
];

const experience = [
  { period: 'Current', role: 'Online Piano Instructor', org: 'Independent', detail: 'ออกแบบบทเรียนเฉพาะบุคคล ติดตามพัฒนาการ และทำให้เรื่องซับซ้อนเข้าใจง่าย — ประสบการณ์ตรงด้าน user empathy และ feedback loop' },
  { period: 'Experience', role: 'Marketing & Events', org: 'Chiang Mai Rock Climbing Adventures', detail: 'ประสานงานกิจกรรม การสื่อสารการตลาด และผู้มีส่วนเกี่ยวข้องหลายฝ่ายในสภาพแวดล้อมที่ต้องตัดสินใจและแก้ปัญหาอย่างรวดเร็ว' },
  { period: 'Foundation', role: 'Master’s & Bachelor’s in Music', org: 'Music Performance & Education', detail: 'ฝึกวินัย การเตรียมตัวอย่างเป็นระบบ การรับ feedback และการทำงานภายใต้กำหนดเวลา — ทักษะพื้นฐานที่นำมาใช้กับงานผลิตภัณฑ์และโครงการ' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Back to top"><span>△</span> PORTFOLIO / 2026</a>
        <div className="navLinks"><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
        <span className="status"><i /> Open to work</span>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">CAREER TRANSITION · PRODUCT & TECHNOLOGY</div>
        <h1>I turn <em>complexity</em><br />into clear action.</h1>
        <p className="heroLead">จากนักดนตรีและผู้จัดอีเวนต์ สู่คนทำงานที่เชื่อม “คน · เป้าหมาย · การลงมือทำ” เข้าด้วยกัน</p>
        <div className="roleRow" aria-label="Roles of interest"><span>Technical Project Manager</span><b>•</b><span>Product Owner</span><b>•</b><span>IT Business Analyst</span></div>
        <div className="heroActions"><a className="button primary" href="#experience">Explore my journey ↓</a><a className="button ghost" href="#contact">Let’s talk ↗</a></div>
        <div className="heroMark" aria-hidden="true"><span>PLAN</span><span>ALIGN</span><span>DELIVER</span></div>
      </section>

      <section className="intro" id="about">
        <p className="sectionTag">01 / PROFILE</p>
        <div>
          <h2>A different background.<br /><em>A useful perspective.</em></h2>
          <p className="bigCopy">ฉันอาจไม่ได้เริ่มต้นจากสายเทค แต่ตลอดเส้นทางที่ผ่านมา ฉันทำงานเดียวกันมาตลอด: ฟังให้เข้าใจ มองเห็นภาพรวม วางโครงสร้าง และพาคนไปถึงเป้าหมายร่วมกัน</p>
          <p className="bodyCopy">พื้นฐานดนตรีระดับปริญญาตรีและโทสร้างวินัยและความละเอียด การสอนเปียโนฝึกให้ฉันเข้าใจความต้องการของแต่ละคน ส่วนงาน Marketing & Events ที่ Chiang Mai Rock Climbing Adventures ทำให้ฉันคุ้นเคยกับการประสานงานหลายฝ่าย การจัดการข้อจำกัด และการส่งมอบประสบการณ์ที่ดีให้ลูกค้า</p>
        </div>
      </section>

      <section className="strengthSection">
        <p className="sectionTag">02 / TRANSFERABLE SKILLS</p>
        <div className="strengthGrid">{strengths.map(([no, title, text]) => <article className="strength" key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="journey" id="experience">
        <div className="journeyHead"><p className="sectionTag">03 / JOURNEY</p><h2>Experience that<br /><em>travels well.</em></h2></div>
        <div className="timeline">{experience.map((item) => <article key={item.role}><div className="period">{item.period}</div><div><h3>{item.role}</h3><h4>{item.org}</h4><p>{item.detail}</p></div></article>)}</div>
      </section>

      <section className="fit">
        <p className="sectionTag">04 / WHAT I BRING</p>
        <h2>Ready to learn fast.<br />Ready to <em>own the outcome.</em></h2>
        <div className="fitGrid"><p>ฉันกำลังมองหา Tech Startup หรือ Software House ที่ให้คุณค่ากับศักยภาพ ความรับผิดชอบ และมุมมองใหม่ ๆ พร้อมเปิดโอกาสให้คนย้ายสายเติบโตผ่านการทำงานจริง</p><ul><li>Stakeholder communication</li><li>Planning & coordination</li><li>User empathy</li><li>Problem framing</li><li>Continuous learning</li></ul></div>
      </section>

      <footer id="contact">
        <p className="sectionTag">05 / CONTACT</p>
        <h2>Let’s build something<br /><em>meaningful.</em></h2>
        <p>สนใจพูดคุยเรื่องโอกาสงาน โปรเจกต์ หรือเส้นทางการเปลี่ยนสายงาน ยินดีแลกเปลี่ยนกันค่ะ</p>
        <a className="button light" href="mailto:your.email@example.com">your.email@example.com ↗</a>
        <div className="footerLine"><span>BASED IN THAILAND · OPEN TO OPPORTUNITIES</span><span>© 2026</span></div>
      </footer>
    </main>
  );
}
