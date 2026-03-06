"use client";
import { useState, useEffect, useRef } from "react";

const BRAND = "#FF4201";
const BRAND_LIGHT = "#FFF4F0";
const BRAND_DARK = "#E63A00";
const DARK = "#0A0A0A";
const GRAY = "#6B7280";
const LIGHT_GRAY = "#F9FAFB";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>{children}</div>
  );
}

function BrandLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill={BRAND}/>
      <path d="M30 74C29 76.5 30.5 79 33 79C35.5 79 37.5 77.5 38.5 75L52 40L58 56C58.5 57.2 57.8 58.5 56.5 59L50 62L45 75C44 77.5 41.5 79 39 79" fill="white" opacity="0"/>
      <path d="M28 75L46 28C47 25 49.5 23 52 23C54.5 23 57 25 58 28L67 53L52 46L42 73C41 76 38 78 35 78C32 78 29.5 77 28 75Z" fill="white"/>
      <path d="M57 50L73 78C74 80 72 82 69.5 81C67.5 80.5 66 78.5 65 76.5L54 54L57 50Z" fill="white"/>
      <circle cx="73" cy="73" r="5.5" fill="white"/>
    </svg>
  );
}

const navLinks = ["How It Works", "Results", "FAQ"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #eee" : "none",
      transition: "all 0.3s ease",
      padding: "0 max(24px, calc((100% - 1200px)/2))",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <BrandLogo size={36} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 20, color: DARK, letterSpacing: "-0.5px" }}>Easy Clones</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {navLinks.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: GRAY,
              textDecoration: "none", transition: "color 0.2s",
            }} onMouseEnter={e => e.target.style.color = DARK} onMouseLeave={e => e.target.style.color = GRAY}>{l}</a>
          ))}
          <a href="#book" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
            background: BRAND, color: "white", padding: "10px 24px", borderRadius: 50,
            textDecoration: "none", transition: "all 0.2s",
          }} onMouseEnter={e => e.target.style.background = BRAND_DARK} onMouseLeave={e => e.target.style.background = BRAND}>Get Your FREE Clone</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ paddingTop: 140, paddingBottom: 80, background: "white", textAlign: "center", padding: "140px max(24px, calc((100% - 1000px)/2)) 80px" }}>
      <FadeIn>
        <div style={{ display: "inline-block", background: BRAND_LIGHT, borderRadius: 50, padding: "6px 18px", marginBottom: 24 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: BRAND, letterSpacing: "0.5px" }}>AI CLONES, DONE FOR YOU</span>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400, color: DARK, lineHeight: 1.08, margin: "0 0 24px", letterSpacing: "-2px" }}>
          Your AI Clone,<br/>Built and <span style={{ color: BRAND, fontStyle: "italic" }}>Delivered</span>.
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: GRAY, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px" }}>
          Stop wasting months on tutorials and DIY tools. We build your production-ready AI clone and deliver it in days. You describe it. We build it. You own it.
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#book" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
            background: BRAND, color: "white", padding: "16px 40px", borderRadius: 50,
            textDecoration: "none", transition: "all 0.25s", boxShadow: `0 4px 24px ${BRAND}44`,
          }} onMouseEnter={e => { e.target.style.background = BRAND_DARK; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.background = BRAND; e.target.style.transform = "translateY(0)"; }}>
            Get Your FREE Clone
          </a>
          <a href="#vsl" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
            background: "transparent", color: DARK, padding: "16px 40px", borderRadius: 50,
            textDecoration: "none", border: "2px solid #E5E7EB", transition: "all 0.25s",
          }} onMouseEnter={e => e.target.style.borderColor = BRAND}
            onMouseLeave={e => e.target.style.borderColor = "#E5E7EB"}>
            Watch How It Works →
          </a>
        </div>
      </FadeIn>
      <FadeIn delay={0.45}>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 64, flexWrap: "wrap" }}>
          {[["$527B+", "AI Avatar Market by 2030"], ["90%", "Cost Reduction"], ["5 Days", "Average Delivery"]].map(([num, label]) => (
            <div key={num} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 32, fontWeight: 700, color: DARK }}>{num}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

function VSL() {
  return (
    <section id="vsl" style={{ padding: "80px max(24px, calc((100% - 900px)/2))", background: LIGHT_GRAY }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-block", background: "white", borderRadius: 50, padding: "6px 18px", marginBottom: 16, border: "1px solid #E5E7EB" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: BRAND }}>WATCH THE VIDEO</span>
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", color: DARK, fontWeight: 400, margin: "0 0 12px", letterSpacing: "-1px" }}>
            See How Easy Clones <span style={{ color: BRAND, fontStyle: "italic" }}>Works</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, maxWidth: 500, margin: "0 auto" }}>
            3 minutes that could change the way your business creates content forever.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div style={{
          position: "relative", width: "100%", maxWidth: 800, margin: "0 auto",
          aspectRatio: "16/9", borderRadius: 20, overflow: "hidden",
          background: DARK, border: "2px solid #222",
          boxShadow: "0 24px 64px rgba(0,0,0,0.15)", cursor: "pointer",
        }}>
          <div style={{
            position: "absolute", inset: 0, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 16,
            background: `linear-gradient(135deg, ${DARK} 0%, #1a1a1a 100%)`,
          }}>
            <div style={{
              width: 80, height: 80, borderRadius: "50%", background: BRAND,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 8px 40px ${BRAND}66`, transition: "transform 0.3s",
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><polygon points="8,5 20,12 8,19" /></svg>
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#9CA3AF", letterSpacing: "0.5px" }}>CLICK TO PLAY</div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${BRAND} 0%, ${BRAND} 33%, #333 33%)` }} />
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, textAlign: "center", marginTop: 24, fontStyle: "italic" }}>
          Featuring Cassie Onaley — Easy Clones Brand Ambassador
        </p>
      </FadeIn>
    </section>
  );
}

function Problem() {
  const cards = [
    { title: "Videographers & Crew", cost: "$2K–$6K/mo", icon: "🎥" },
    { title: "Models & Talent", cost: "$800–$3K/mo", icon: "👤" },
    { title: "Studios & Travel", cost: "$1.5K–$5K/mo", icon: "✈️" },
    { title: "Editing & Post", cost: "$500–$2K/mo", icon: "✂️" },
  ];
  return (
    <section style={{ padding: "100px max(24px, calc((100% - 1100px)/2))", background: DARK }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", color: "white", fontWeight: 400, margin: "0 0 20px", letterSpacing: "-1px" }}>
            Content Creation is <span style={{ color: BRAND, fontStyle: "italic" }}>Bleeding</span> Your Budget.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#9CA3AF", lineHeight: 1.7, maxWidth: 660, margin: "0 auto" }}>
            Every month you're paying for videographers, models, studios, editors, and travel — just to keep your feed alive. A basic monthly content package runs $5,000–$18,000.
          </p>
        </div>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
        {cards.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.1}>
            <div style={{
              background: "#141414", borderRadius: 16, padding: 28,
              border: "1px solid #222", transition: "border-color 0.3s",
            }} onMouseEnter={e => e.currentTarget.style.borderColor = BRAND}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#222"}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: "white", marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 24, fontWeight: 700, color: BRAND }}>{c.cost}</div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.4}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#6B7280", textAlign: "center", marginTop: 40, fontStyle: "italic" }}>
          And none of that guarantees the content will even perform.
        </p>
      </FadeIn>
    </section>
  );
}

function Solution() {
  const steps = [
    { n: "01", title: "Discovery Call", desc: "Tell us your goals, brand, and use cases." },
    { n: "02", title: "Asset Collection", desc: "We gather your reference videos, photos, and voice samples." },
    { n: "03", title: "Clone Building", desc: "Our team trains voice, generates avatar, produces variations." },
    { n: "04", title: "Quality Review", desc: "Internal QA + your preview with unlimited revisions." },
    { n: "05", title: "Delivery", desc: "Final files in all formats. Ready to deploy everywhere." },
  ];
  return (
    <section id="how-it-works" style={{ padding: "100px max(24px, calc((100% - 1100px)/2))", background: "white" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: BRAND_LIGHT, borderRadius: 50, padding: "6px 18px", marginBottom: 16 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: BRAND }}>HOW IT WORKS</span>
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", color: DARK, fontWeight: 400, margin: "0 0 20px", letterSpacing: "-1px" }}>
            We Build It. You Use It. <span style={{ color: BRAND, fontStyle: "italic" }}>That's It.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: GRAY, lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            Easy Clones is a done-for-you AI clone service. No courses. No DIY tools. No figuring it out yourself.
          </p>
        </div>
      </FadeIn>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 700, margin: "0 auto" }}>
        {steps.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.08}>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start", padding: "28px 0", borderBottom: i < steps.length - 1 ? "1px solid #F3F4F6" : "none" }}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: BRAND,
                background: BRAND_LIGHT, borderRadius: 8, padding: "6px 12px", flexShrink: 0,
              }}>{s.n}</div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Results() {
  const testimonials = [
    { quote: "Rafael and his team built our AI clone system that powers our entire content operation. The quality is indistinguishable from real footage and the turnaround is unbelievable.", name: "Antonio Monteiro", role: "CEO & Founder, ClickToClose", initials: "AM" },
    { quote: "We needed high-volume content across multiple channels without slowing down our marketing. Easy Clones delivered exactly that — fast, professional, and scalable.", name: "Adam Godrosi", role: "CEO & Founder, Gymnastics Method", initials: "AG" },
    { quote: "At our scale, content production was one of our biggest bottlenecks. Easy Clones cut our content costs dramatically while increasing our output tenfold.", name: "Nick Daniels", role: "CEO, VShred", initials: "ND" },
    { quote: "As someone who needs to be everywhere at once — podcasts, social, ads — having a clone that looks and sounds like me has been a complete game-changer for my brand.", name: "Mark Moss", role: "CEO & Founder, Market Disruptors", initials: "MM" },
  ];
  return (
    <section id="results" style={{ padding: "100px max(24px, calc((100% - 1100px)/2))", background: LIGHT_GRAY }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", background: "white", borderRadius: 50, padding: "6px 18px", marginBottom: 16, border: "1px solid #E5E7EB" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: BRAND }}>TRUSTED BY INDUSTRY LEADERS</span>
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", color: DARK, fontWeight: 400, margin: 0, letterSpacing: "-1px" }}>
            What Our <span style={{ color: BRAND, fontStyle: "italic" }}>Clients</span> Say
          </h2>
        </div>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{
              background: "white", borderRadius: 20, padding: 32, border: "1px solid #E5E7EB",
              height: "100%", display: "flex", flexDirection: "column", transition: "box-shadow 0.3s",
            }} onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.06)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#FBBF24", fontSize: 16 }}>★</span>)}
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#374151", lineHeight: 1.7, flex: 1, margin: "0 0 24px" }}>"{t.quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", background: BRAND,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "white",
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: DARK }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY }}>{t.role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function WhoItsFor() {
  const segments = [
    { icon: "🎬", title: "Content Creators", desc: "Scale content 10x without filming daily" },
    { icon: "🛒", title: "E-Commerce Sellers", desc: "AI clone presents products 24/7 in multiple languages" },
    { icon: "🎓", title: "Coaches & Brands", desc: "Clone delivers ads, testimonials, and course previews" },
    { icon: "🏢", title: "Agencies", desc: "White-label clone creation for your own clients" },
  ];
  return (
    <section style={{ padding: "100px max(24px, calc((100% - 1100px)/2))", background: "white" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", color: DARK, fontWeight: 400, margin: "0 0 20px", letterSpacing: "-1px" }}>
            Built for Creators, Sellers, and <span style={{ color: BRAND, fontStyle: "italic" }}>Brands</span>
          </h2>
        </div>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        {segments.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1}>
            <div style={{
              background: LIGHT_GRAY, borderRadius: 20, padding: 32, textAlign: "center",
              border: "1px solid transparent", transition: "all 0.3s",
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = BRAND; e.currentTarget.style.background = BRAND_LIGHT; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.background = LIGHT_GRAY; }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    ["What exactly is an AI clone?", "It's a digital version of a person — their face, voice, and mannerisms — powered by AI. It can speak, present products, and create content autonomously."],
    ["Do I need to be on camera?", "We'll need some reference footage or photos to build the clone, but after that, your clone does the work — you don't need to film again."],
    ["How long does it take?", "Standard delivery is 5–7 business days. Rush delivery (48 hours) is available for an additional fee."],
    ["Can my clone speak other languages?", "Yes! Multi-language clones are available. Your clone can present in English, Spanish, Portuguese, French, Arabic, and more."],
    ["Is this legal?", "Absolutely. We only create clones with the full written consent of the person being cloned. Our terms of service ensure ethical use."],
    ["What if I'm not happy with the result?", "Every package includes revision rounds. We work with you until you're satisfied."],
    ["How is this different from HeyGen or Synthesia?", "Those are DIY tools — you still have to figure everything out yourself. Easy Clones is a done-for-you service. We handle all the technical work and deliver production-ready content."],
  ];
  return (
    <section id="faq" style={{ padding: "100px max(24px, calc((100% - 750px)/2))", background: LIGHT_GRAY }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", color: DARK, fontWeight: 400, margin: 0, letterSpacing: "-1px" }}>
            Frequently Asked <span style={{ color: BRAND, fontStyle: "italic" }}>Questions</span>
          </h2>
        </div>
      </FadeIn>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {faqs.map(([q, a], i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div style={{ background: "white", borderRadius: 12, overflow: "hidden" }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "22px 28px", textAlign: "left",
              }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: DARK }}>{q}</span>
                <span style={{
                  fontSize: 22, color: BRAND, transition: "transform 0.3s", flexShrink: 0, marginLeft: 16,
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}>+</span>
              </button>
              <div style={{
                maxHeight: open === i ? 200 : 0, overflow: "hidden",
                transition: "max-height 0.4s ease, opacity 0.3s ease",
                opacity: open === i ? 1 : 0,
              }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.7, margin: "0 28px 22px", paddingRight: 20 }}>{a}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="book" style={{ padding: "100px max(24px, calc((100% - 900px)/2))", background: "white" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        {/* Left: Copy */}
        <FadeIn>
          <div>
            <div style={{ display: "inline-block", background: BRAND_LIGHT, borderRadius: 50, padding: "6px 18px", marginBottom: 20 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: BRAND, letterSpacing: "0.5px" }}>LIMITED SPOTS</span>
            </div>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 4vw, 44px)", color: DARK, fontWeight: 400, margin: "0 0 20px", letterSpacing: "-1px", lineHeight: 1.15 }}>
              Book a Discovery Call and See if Your Company is a Fit to Get a <span style={{ color: BRAND, fontStyle: "italic" }}>FREE</span> Clone.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: GRAY, lineHeight: 1.7, margin: "0 0 32px" }}>
              Fill out the application below. Our team will personally review your submission and determine if your company qualifies for a free test drive of our AI clone technology. If you're a fit, we'll build your first clone at zero cost — so you can see the results before you invest a single dollar.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["✓", "100% free — no credit card, no commitment"],
                ["✓", "Personal review by our team within 24 hours"],
                ["✓", "If approved, your clone is built and delivered in days"],
              ].map(([icon, text], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: BRAND, fontSize: 18, fontWeight: 700 }}>{icon}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#374151" }}>{text}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#9CA3AF", marginTop: 32, fontStyle: "italic" }}>
              Easy to clone, easy to play.
            </p>
          </div>
        </FadeIn>

        {/* Right: Jotform Embed Area */}
        <FadeIn delay={0.15}>
          <div style={{
            background: LIGHT_GRAY, borderRadius: 24, border: "1px solid #E5E7EB",
            padding: 8, minHeight: 600,
            boxShadow: "0 12px 48px rgba(0,0,0,0.06)",
          }}>
            {/* ── JOTFORM EMBED GOES HERE ── */}
            {/* Replace the placeholder below with your Jotform iframe, e.g.: */}
            {/* <iframe src="https://form.jotform.com/YOUR_FORM_ID" style={{ width: "100%", height: 600, border: "none", borderRadius: 20 }} /> */}
            <div style={{
              width: "100%", height: 580, borderRadius: 20, background: "white",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 16, border: "2px dashed #E5E7EB",
            }}>
              <BrandLogo size={48} />
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: DARK, textAlign: "center" }}>
                Application Form
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, textAlign: "center", maxWidth: 280, lineHeight: 1.6 }}>
                Embed your Jotform here by replacing the placeholder in the code with your form's iframe URL.
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#9CA3AF",
                background: "#F3F4F6", padding: "8px 16px", borderRadius: 8, marginTop: 8,
              }}>
                {'<iframe src="jotform.com/..." />'}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "48px max(24px, calc((100% - 1100px)/2))", background: "#050505", borderTop: "1px solid #1A1A1A" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <BrandLogo size={28} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>Easy Clones</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Instagram", "TikTok", "YouTube"].map(s => (
            <a key={s} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#6B7280", textDecoration: "none" }}>{s}</a>
          ))}
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#4B5563" }}>© 2026 Easy Clones. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function EasyClones() {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Instrument+Serif:ital@0;1&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
      `}</style>
      <Navbar />
      <Hero />
      <VSL />
      <Problem />
      <Solution />
      <Results />
      <WhoItsFor />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
