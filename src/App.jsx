import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight,
  Building2, DraftingCompass, Hammer, House, Menu, X, MapPin, Phone,
  Mail, MessageCircle, ShieldCheck, Ruler, KeyRound, Layers3, Instagram
} from 'lucide-react'

const A = '/images/'
const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22, 1, .36, 1] } }
}
const gallery = [
  { src: 'living-room.webp', title: 'Living room', category: 'Interiors' },
  { src: 'modular-kitchen.webp', title: 'Modular kitchen', category: 'Interiors' },
  { src: 'bedroom-interior.webp', title: 'Bedroom details', category: 'Interiors' },
  { src: 'project-exterior.webp', title: 'Project exterior', category: 'Architecture' },
  { src: 'living-space-wide.webp', title: 'Living space', category: 'Interiors' },
  { src: 'building-entry.webp', title: 'Entrance & approach', category: 'Architecture' },
  { src: 'feature-wall.webp', title: 'Feature wall', category: 'Interiors' },
  { src: 'bathroom.webp', title: 'Bathroom finish', category: 'Interiors' },
  { src: 'interior-bedroom.webp', title: 'Bedroom', category: 'Interiors' },
  { src: 'kitchen-finish.webp', title: 'Kitchen finish', category: 'Interiors' },
]
const services = [
  { icon: DraftingCompass, no: '01', title: 'Planning & design', desc: 'Thoughtful layouts and design coordination shaped around your requirements.' },
  { icon: Building2, no: '02', title: 'Structure & civil work', desc: 'End-to-end construction support, from foundation through structural execution.' },
  { icon: House, no: '03', title: 'Custom-built homes', desc: 'Personalised homes with careful attention to space, function and finish.' },
  { icon: Layers3, no: '04', title: 'Interior & exterior finishing', desc: 'Finishing details that bring a project together and make it feel complete.' },
  { icon: KeyRound, no: '05', title: 'Real estate', desc: 'Support with residential properties, open plots and property enquiries.' },
  { icon: ShieldCheck, no: '06', title: 'Project coordination', desc: 'A coordinated approach to materials, workmanship and project communication.' },
]

function App() {
  const [menu, setMenu] = useState(false)
  const [activeImage, setActiveImage] = useState(null)
  const [sent, setSent] = useState(false)
  const [filter, setFilter] = useState('All')
  const visibleGallery = filter === 'All' ? gallery : gallery.filter(x => x.category === filter)
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false) }
  const sendEnquiry = e => { e.preventDefault(); setSent(true); e.currentTarget.reset() }

  return <div className="app">
    <div className="topline"><span className="gold-dot" /> KNS CONSTRUCTION & REAL ESTATE <span className="topline-sep" /> RAGHAVENDRA COLONY, KONDAPUR, HYDERABAD</div>
    <header className="header">
      <a href="#home" className="logo" aria-label="KNS home">
        <span className="logo-symbol"><span className="logo-building">▰</span>KNS</span>
        <span className="logo-sub">CONSTRUCTION & REAL ESTATE</span>
      </a>
      <nav className={menu ? 'nav nav-open' : 'nav'}>
        {['About','Services','Projects','Gallery','Contact'].map((n,i)=><a key={n} href={'#'+['about','services','projects','gallery','contact'][i]} onClick={()=>setMenu(false)}>{n}</a>)}
        <button className="nav-mobile-cta" onClick={()=>go('contact')}>Discuss your project <ArrowUpRight size={15}/></button>
      </nav>
      <button className="header-cta" onClick={()=>go('contact')}>Discuss your project <ArrowUpRight size={16}/></button>
      <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-photo" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.div initial="hidden" animate="show" variants={reveal} className="eyebrow"><i/> BUILDING DREAMS, BRICK BY BRICK</motion.div>
          <motion.h1 initial="hidden" animate="show" transition={{delay:.08}} variants={reveal}>Built with purpose.<br/><em>Made for living.</em></motion.h1>
          <motion.p initial="hidden" animate="show" transition={{delay:.16}} variants={reveal}>From thoughtful planning to the final finish, KNS brings care, precision and a personal touch to every space we build.</motion.p>
          <motion.div initial="hidden" animate="show" transition={{delay:.24}} variants={reveal} className="hero-buttons">
            <button className="btn-gold" onClick={()=>go('projects')}>Explore our work <ArrowUpRight size={17}/></button>
            <button className="hero-text-btn" onClick={()=>go('about')}>Discover KNS <ArrowDown size={16}/></button>
          </motion.div>
        </div>
        <div className="hero-bottom"><span><MapPin size={14}/> HYDERABAD, TELANGANA</span><span>DESIGN <b>·</b> BUILD <b>·</b> LIVE</span></div>
        <div className="hero-side">KNS / EST. IN BUILDING YOUR FUTURE</div>
      </section>

      <section className="about section" id="about">
        <div className="section-tag"><span>01</span> / WHO WE ARE</div>
        <div className="about-grid">
          <motion.h2 initial="hidden" whileInView="show" viewport={{once:true}} variants={reveal}>A foundation<br/>for <em>what's next.</em></motion.h2>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={reveal} className="about-copy">
            <p className="large-copy">At KNS, we believe every great space starts with a clear vision and is realised through thoughtful execution.</p>
            <p>Based in Kondapur, Hyderabad, KNS Construction & Real Estate works across planning, design, construction and property services. Our approach brings together practical thinking, quality-focused work and attention to the details that make a space feel like yours.</p>
            <button className="under-link" onClick={()=>go('services')}>What we do <ArrowUpRight size={16}/></button>
          </motion.div>
        </div>
        <div className="about-photo"><img src={A+'project-exterior.webp'} alt="KNS residential building exterior"/><div className="photo-stamp"><span>KNS</span><small>CRAFTING SPACES<br/>WITH CARE</small></div></div>
      </section>

      <section className="services section" id="services">
        <div className="services-head"><div><div className="section-tag light-tag"><span>02</span> / OUR EXPERTISE</div><h2>From first sketch<br/>to <em>final finish.</em></h2></div><p>One team. A considered process. A commitment to making your vision take shape.</p></div>
        <div className="service-grid">{services.map((s,i)=>{const Icon=s.icon;return <motion.article key={s.no} className="service-card" initial="hidden" whileInView="show" viewport={{once:true}} variants={reveal} transition={{delay:i*.05}}><div className="service-top"><Icon size={24}/><span>{s.no}</span></div><h3>{s.title}</h3><p>{s.desc}</p><div className="service-rule"/></motion.article>})}</div>
        <div className="service-banner"><img src={A+'living-space-wide.webp'} alt="Finished KNS living room"/><div><span>DETAILS MAKE THE DIFFERENCE</span><strong>Spaces shaped around<br/><em>the way you live.</em></strong></div></div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-tag"><span>03</span> / FEATURED PROJECT</div>
        <div className="project-heading"><h2>Considered homes.<br/><em>Connected living.</em></h2><p>A residential project in Raghavendra Colony, Kondapur, created with a focus on space, comfort and everyday convenience.</p></div>
        <div className="featured-project">
          <div className="featured-image"><img src={A+'project-exterior.webp'} alt="Residential project exterior"/></div>
          <div className="featured-info">
            <span className="project-label">RESIDENTIAL / KONDAPUR</span>
            <h3>Premium 3BHK<br/><em>residences.</em></h3>
            <p>Premium 3BHK apartment project on an east-facing 600 sq. yard site in Raghavendra Colony, Kondapur, Hyderabad.</p>
            <div className="project-facts"><div><strong>10</strong><span>PREMIUM UNITS</span></div><div><strong>1,650</strong><span>SFT EACH</span></div><div><strong>600</strong><span>SQ. YARDS SITE</span></div></div>
            <button className="under-link" onClick={()=>go('contact')}>Enquire about this project <ArrowUpRight size={16}/></button>
          </div>
        </div>
        <p className="fine-print">Project information is based on details supplied for this website draft. Availability, construction status, specifications and approvals should be confirmed directly with KNS before publication.</p>
      </section>

      <section className="gallery-section section" id="gallery">
        <div className="gallery-head"><div><div className="section-tag light-tag"><span>04</span> / SELECTED WORK</div><h2>Real spaces.<br/><em>Real details.</em></h2></div><p>A selection of client-supplied project photographs, showing exterior work and interior finishes.</p></div>
        <div className="gallery-filters">{['All','Interiors','Architecture'].map(x=><button key={x} className={filter===x?'filter-active':''} onClick={()=>setFilter(x)}>{x}</button>)}</div>
        <div className="gallery-grid">{visibleGallery.map((item,i)=><motion.button layout key={item.src} className={'gallery-item gallery-item-'+i} onClick={()=>setActiveImage(item)} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><img src={A+item.src} alt={item.title}/><span className="gallery-caption"><small>{item.category}</small><strong>{item.title}</strong><ArrowUpRight size={17}/></span></motion.button>)}</div>
        <p className="gallery-note">Photographs supplied for the KNS project. Images are presented as a portfolio gallery and are not intended to imply that every pictured space belongs to the featured apartment project.</p>
      </section>

      <section className="process section">
        <div className="process-left"><div className="section-tag"><span>05</span> / HOW WE WORK</div><h2>Clarity at every<br/><em>stage.</em></h2><p>Good construction is a series of considered decisions. We focus on clear communication and coordinated execution from the first conversation onward.</p><button className="under-link" onClick={()=>go('contact')}>Start a conversation <ArrowUpRight size={16}/></button></div>
        <div className="process-list">{[{n:'01',t:'Understand',d:'We listen to your needs, site conditions and priorities.'},{n:'02',t:'Plan & design',d:'We shape the scope, layout and design direction.'},{n:'03',t:'Build & coordinate',d:'We coordinate construction activities and key details.'},{n:'04',t:'Finish & hand over',d:'We focus on the final touches and project close-out.'}].map(x=><div className="process-row" key={x.n}><span>{x.n}</span><div><h3>{x.t}</h3><p>{x.d}</p></div><ArrowUpRight size={17}/></div>)}</div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy"><div className="section-tag light-tag"><span>06</span> / GET IN TOUCH</div><h2>Let's build<br/><em>something lasting.</em></h2><p>Have a site, a project idea or a property enquiry? Speak with Kiran and the KNS team.</p>
          <div className="contact-lines">
            <a href="tel:+919100425645"><Phone size={17}/><span>+91 91004 25645</span></a>
            <a href="tel:+919246563397"><Phone size={17}/><span>+91 92465 63397</span></a>
            <a href="mailto:knsconstructions@gmail.com"><Mail size={17}/><span>knsconstructions@gmail.com</span></a>
            <div><MapPin size={17}/><span>Raghavendra Colony, Kondapur,<br/>Hyderabad – 500084, Telangana</span></div>
          </div>
          <a className="whatsapp-link" href="https://wa.me/919100425645" target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat with KNS on WhatsApp <ArrowUpRight size={15}/></a>
        </div>
        <form className="contact-form" onSubmit={sendEnquiry}>
          <div className="form-heading">TELL US ABOUT YOUR PROJECT <ArrowUpRight size={18}/></div>
          <label>YOUR NAME<input name="name" required placeholder="Full name"/></label>
          <div className="form-two"><label>PHONE NUMBER<input name="phone" type="tel" required placeholder="+91"/></label><label>EMAIL ADDRESS<input name="email" type="email" placeholder="you@example.com"/></label></div>
          <label>WHAT CAN WE HELP WITH?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Planning & design</option><option>Construction</option><option>Interior / exterior finishing</option><option>Residential property</option><option>Open plots</option><option>Other enquiry</option></select></label>
          <label>MESSAGE<textarea name="message" rows="3" placeholder="A few details about your project..."/></label>
          <button className="btn-gold form-submit" type="submit">Send enquiry <ArrowUpRight size={17}/></button>
          {sent&&<p className="success"><Check size={15}/> Thanks. Your enquiry form is working in demo mode; connect a backend to receive submissions.</p>}
          <p className="form-small">This website form is a front-end demonstration and does not send or store enquiries yet.</p>
        </form>
      </section>
    </main>

    <footer className="footer"><a className="logo footer-logo" href="#home"><span className="logo-symbol">KNS</span><span className="logo-sub">CONSTRUCTION & REAL ESTATE</span></a><div className="footer-motto">BUILDING DREAMS, BRICK BY BRICK.</div><div className="footer-bottom"><span>© 2026 KNS Construction & Real Estate</span><span>HYDERABAD, INDIA</span><a href="#home">BACK TO TOP ↑</a></div></footer>

    <AnimatePresence>{activeImage&&<motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setActiveImage(null)}><button className="lightbox-close" onClick={()=>setActiveImage(null)} aria-label="Close image"><X/></button><button className="lightbox-prev" onClick={e=>{e.stopPropagation();const i=gallery.findIndex(x=>x.src===activeImage.src);setActiveImage(gallery[(i-1+gallery.length)%gallery.length])}} aria-label="Previous image"><ChevronLeft/></button><img src={A+activeImage.src} alt={activeImage.title} onClick={e=>e.stopPropagation()}/><button className="lightbox-next" onClick={e=>{e.stopPropagation();const i=gallery.findIndex(x=>x.src===activeImage.src);setActiveImage(gallery[(i+1)%gallery.length])}} aria-label="Next image"><ChevronRight/></button><div className="lightbox-title">{activeImage.title}</div></motion.div>}</AnimatePresence>
  </div>
}
export default App
