import { useState, useRef } from "react";
import SectionHero from "./SectionHero";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", type: "", subject: "", message: "" });
  const [priority, setPriority] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.type || !formData.subject || formData.message.length < 10) return;
    setLoading(true);

    const subject = `[${formData.type.toUpperCase()}] ${formData.subject}`;
    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0AType: ${formData.type}%0APriority: ${priority || "normal"}%0A%0A${formData.message}`;
    const mailtoLink = `mailto:developers.izyl@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    setTimeout(() => {
      window.open(mailtoLink, "_blank");
      setLoading(false);
      const tid = "SKS-" + String(Math.floor(Math.random() * 90000) + 10000);
      setTicketId(tid);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", type: "", subject: "", message: "" });
    setPriority("");
    setSubmitted(false);
    setFileName("");
  };

  const faqs = [
    { q: "How long until you respond?", a: "We aim to respond within 24 hours on business days. Critical security issues are addressed within 4 hours." },
    { q: "How do I report a security bug?", a: 'Please select "Security Issue" in the report type. Do not post security vulnerabilities publicly.' },
    { q: "Can I request a new feature?", a: 'Yes! Select "Feature Request" and describe your idea clearly.' },
    { q: "Is my message encrypted?", a: "This form is sent over HTTPS. For sensitive information, please use our security email." },
  ];

  const priorities = [
    { val: "low", label: "Low", cls: "border-[hsl(var(--blue)/0.3)] text-s-blue bg-[hsl(var(--blue)/0.08)]" },
    { val: "normal", label: "Normal", cls: "border-[hsl(var(--safe)/0.3)] text-safe bg-[hsl(var(--safe)/0.08)]" },
    { val: "high", label: "High", cls: "border-amber/30 text-amber bg-amber/[0.08]" },
    { val: "critical", label: "Critical", cls: "border-rose/30 text-rose bg-rose/[0.08]" },
  ];

  return (
    <section>
      <SectionHero
        badge="Get in Touch"
        title={<>We're Here to <span className="text-s-blue">Help</span></>}
        subtitle="Got a question, bug report, or feature idea? We're listening."
      />
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Form */}
          <div className="animate-fade-up bg-card border border-border rounded-[20px] p-6 md:p-9 relative overflow-hidden">
            {!submitted ? (
              <div>
                <div className="mb-7">
                  <h2 className="font-heading text-2xl font-extrabold mb-2">Send us a Message</h2>
                  <p className="text-sm text-muted leading-relaxed">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-muted tracking-wide">Your Name <span className="text-rose">*</span></label>
                    <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-border rounded-[10px] text-foreground text-sm focus:outline-none focus:border-rose focus:bg-[rgba(255,255,255,0.05)] transition-all" placeholder="Enter your full name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-muted tracking-wide">Email <span className="text-rose">*</span></label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-border rounded-[10px] text-foreground text-sm focus:outline-none focus:border-rose focus:bg-[rgba(255,255,255,0.05)] transition-all" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-xs font-semibold text-muted tracking-wide">Report Type <span className="text-rose">*</span></label>
                  <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-border rounded-[10px] text-foreground text-sm focus:outline-none focus:border-rose transition-all">
                    <option value="">Select a category</option>
                    <option value="bug">🐛 Bug Report</option>
                    <option value="feature">✨ Feature Request</option>
                    <option value="security">🔒 Security Issue</option>
                    <option value="feedback">💬 General Feedback</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-xs font-semibold text-muted tracking-wide">Subject <span className="text-rose">*</span></label>
                  <input value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-border rounded-[10px] text-foreground text-sm focus:outline-none focus:border-rose focus:bg-[rgba(255,255,255,0.05)] transition-all" placeholder="Brief description" />
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-xs font-semibold text-muted tracking-wide">Message <span className="text-rose">*</span></label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} maxLength={1000}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-border rounded-[10px] text-foreground text-sm focus:outline-none focus:border-rose focus:bg-[rgba(255,255,255,0.05)] transition-all resize-y min-h-[140px]" placeholder="Describe your issue..." />
                  <div className="text-[11px] text-muted text-right">{formData.message.length} / 1000</div>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-xs font-semibold text-muted tracking-wide">Priority Level</label>
                  <div className="flex gap-2.5">
                    {priorities.map((p) => (
                      <button key={p.val} onClick={() => setPriority(p.val)}
                        className={`flex-1 py-2.5 rounded-[10px] text-xs font-medium border transition-all cursor-pointer ${priority === p.val ? p.cls : "bg-[rgba(255,255,255,0.03)] border-border text-muted hover:bg-[rgba(255,255,255,0.06)]"}`}>
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div onClick={() => fileRef.current?.click()}
                  className="border-2 border-dashed border-border rounded-xl p-7 text-center cursor-pointer transition-all hover:border-border-hover hover:bg-[rgba(255,255,255,0.02)] mb-6">
                  <div className="text-3xl mb-2">{fileName ? "✅" : "📎"}</div>
                  <div className="text-[13px] text-muted">{fileName || "Drop screenshot here or tap to browse"}</div>
                  <div className="text-[11px] text-muted/70">{fileName ? "File attached" : "PNG, JPG up to 5MB"}</div>
                  <input ref={fileRef} type="file" className="hidden" accept="image/*" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
                </div>
                <button onClick={handleSubmit} disabled={loading}
                  className="w-full py-3.5 px-6 bg-gradient-to-br from-crimson to-rose border-none rounded-xl font-heading text-[15px] font-bold text-primary-foreground cursor-pointer flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_16px_hsl(var(--rose-glow))] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(var(--rose-glow))] disabled:opacity-70 disabled:pointer-events-none relative overflow-hidden">
                  <span>{loading ? "Transmitting…" : "Transmit Message"}</span>
                  <span>{loading ? "⏳" : "→"}</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 gap-4 animate-fade-up">
                <div className="text-6xl animate-[success-pop_0.5s_ease]">✅</div>
                <div className="font-heading text-2xl font-extrabold text-safe">Message Received!</div>
                <p className="text-sm text-muted text-center leading-relaxed max-w-[400px]">Thank you for reaching out. We'll respond within 24 hours.</p>
                <div className="font-heading text-base font-bold text-rose px-4 py-2 bg-rose/10 border border-rose/20 rounded-lg">Ticket #{ticketId}</div>
                <button onClick={resetForm} className="mt-2 px-8 py-3 bg-gradient-to-br from-crimson to-rose rounded-xl font-heading text-sm font-bold text-primary-foreground">Send Another</button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            {/* Status */}
            <div className="animate-fade-up delay-300 bg-card border border-border rounded-2xl p-5">
              <div className="font-heading text-sm font-bold mb-3 flex items-center gap-2"><span>⚡</span> System Status</div>
              {[
                { label: "App Servers", status: "Operational", dot: "bg-safe" },
                { label: "SOS Alerts", status: "Operational", dot: "bg-safe" },
                { label: "Chat Service", status: "Operational", dot: "bg-safe" },
                { label: "Live Location", status: "Monitoring", dot: "bg-s-blue" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between items-center py-2.5 border-b border-border last:border-b-0">
                  <span className="text-xs text-muted">{s.label}</span>
                  <span className="text-xs font-semibold flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full animate-pulse ${s.dot}`} />
                    {s.status}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2.5">
                <span className="text-xs text-muted">Response Time</span>
                <span className="text-xs font-semibold text-safe">~24 hrs</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up delay-400 bg-card border border-border rounded-2xl p-5">
              <div className="font-heading text-sm font-bold mb-4">📡 Reach Us Directly</div>
              {[
                { icon: "📧", title: "Support Email", detail: "izylsupport@gmail.com", sub: "Bugs & general help", color: "bg-rose/10" },
                { icon: "🔒", title: "Security Issues", detail: "developers.izyl@gmail.com", sub: "Responsible disclosure", color: "bg-[hsl(var(--blue)/0.1)]" },
              ].map((c) => (
                <div key={c.title} className="flex gap-3 mb-4 last:mb-0">
                  <div className={`w-9 h-9 rounded-lg ${c.color} flex items-center justify-center text-base shrink-0`}>{c.icon}</div>
                  <div>
                    <h4 className="text-[13px] font-semibold mb-1">{c.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">
                      <a href={`mailto:${c.detail}`} className="text-rose no-underline hover:underline">{c.detail}</a><br />{c.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="animate-fade-up delay-500 bg-card border border-border rounded-2xl p-5">
              <div className="font-heading text-sm font-bold mb-4">❓ Quick FAQ</div>
              {faqs.map((f, i) => (
                <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="py-3.5 border-b border-border last:border-b-0 cursor-pointer">
                  <div className="text-[13px] font-semibold flex justify-between items-center">
                    {f.q}
                    <span className={`text-muted transition-transform ${openFaq === i ? "rotate-180" : ""}`}>▾</span>
                  </div>
                  <div className={`text-xs text-muted leading-relaxed mt-2 overflow-hidden transition-all ${openFaq === i ? "max-h-[200px]" : "max-h-0"}`}>
                    {f.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
