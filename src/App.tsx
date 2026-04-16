import { motion } from "motion/react";
import { 
  ArrowDown, 
  ClipboardCheck, 
  Archive, 
  GraduationCap, 
  ShieldCheck, 
  Cloud, 
  ExternalLink,
  FileText
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="selection:bg-primary/30 min-h-screen">
      {/* Navigation */}
      <nav className="w-full top-0 sticky z-50 bg-background/90 backdrop-blur-md border-b border-border-muted px-[10%]">
        <div className="flex justify-between items-center py-6">
          <div className="flex flex-col">
            <span className="text-xl font-header font-bold tracking-widest uppercase text-primary">D. Hewage</span>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-60">Technical Memorandum</span>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <a className="text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors font-medium" href="#audit-logs">Audit</a>
            <a className="text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors font-medium" href="#capabilities">Core</a>
            <a className="text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors font-medium" href="#experience">Praxis</a>
            <a className="text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors font-medium" href="#verification">Verification</a>
            <a className="text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors font-medium border-l border-border-muted pl-12" href="#contact">Inquiry</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center px-[10%] whitepaper-grid relative overflow-hidden">
          <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-16 items-start py-20">
            <motion.div 
              className="md:col-span-7 space-y-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-4">
                <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase block">Ref. No: QA-2024-DH</span>
                <h1 className="text-8xl md:text-9xl leading-[0.85] font-header font-bold text-on-surface">
                  Diyana<br />Hewage<span className="text-primary italic">.</span>
                </h1>
              </div>
              <div className="max-w-xl">
                <p className="text-2xl font-body font-light text-accent/80 leading-snug italic">
                  Documentation of Senior Quality Assurance Engineering methodologies, focused on high-integrity system architectures and autonomous verification protocols.
                </p>
              </div>
              <div className="flex items-center gap-12 pt-8">
                <a className="group flex items-center gap-4" href="#audit-logs">
                  <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] font-bold">Review Dossier</span>
                </a>
                <div className="h-px w-24 bg-border-muted hidden sm:block"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Verified: ISO/IEC 25010</span>
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="aspect-[3/4] overflow-hidden border border-border-muted technical-image shadow-2xl">
                <img 
                  alt="Technical abstract" 
                  className="object-cover h-full w-full" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPIDtozuGDQNIzpo8kcxBMR7dYn2DR_ggOcnQz8800nSnidlv0MZYwrvpDrURyOz3EkQ3hBGBHDXhLsI_O3nZw1d0xAtEr1UQLslvpYpxw_rjHYWz8UkwnaBEgp-9QKb6gHgqxyySVJll4UNmtoMQE_PxRFS0P1mePtvwaKjMd2kBjt0HQkW0ESTYGE9hDmfqRHZdWBCeRJ_N0fp4QdKAFkf1tldrgL4RCoP22-Ip92dWWjCFMRKgK809byP-KeHEm0B3NRpu9BOvw" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-surface p-10 border border-border-muted shadow-2xl max-w-xs">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-4 font-bold">Abstract</p>
                <p className="text-sm font-body text-accent leading-relaxed">Systematic elimination of non-deterministic behavior in large-scale distributed systems through rigorous regression cycles.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Audit Logs Section */}
        <section className="py-40 bg-on-surface text-background" id="audit-logs">
          <div className="px-[10%] max-w-7xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-12 gap-16 mb-32 items-baseline"
              {...fadeIn}
            >
              <div className="md:col-span-3">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-background/40">Section 01</span>
                <h2 className="text-5xl mt-4">Audit Logs</h2>
              </div>
              <div className="md:col-span-9">
                <p className="text-xl font-body leading-relaxed text-background/70 max-w-2xl drop-cap">
                  The following chronological record details the systematic oversight and architectural improvements facilitated within prestigious technological environments. Each entry signifies a commitment to the "Shift-Left" philosophy in the software development lifecycle.
                </p>
              </div>
            </motion.div>

            <div className="space-y-px bg-background/10">
              <motion.div 
                className="bg-white p-16 grid md:grid-cols-12 gap-12 group hover:bg-primary/5 transition-colors"
                {...fadeIn}
              >
                <div className="md:col-span-3">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-40 mb-2 block">Fiscal Years</span>
                  <p className="text-2xl font-header font-bold italic">2022 — Present</p>
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-3xl mb-6">Senior QA Automation Lead</h3>
                  <p className="text-lg font-body leading-relaxed mb-8 text-background/80">TechVanguard Solutions</p>
                  <ul className="space-y-6 list-none">
                    <li className="pl-8 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-primary">
                      Architected end-to-end automation framework reducing regression expenditure by 75% across three legacy product lines.
                    </li>
                    <li className="pl-8 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-primary">
                      Orchestrated CI/CD integration protocols utilizing Jenkins for real-time diagnostic reporting.
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-3 flex flex-col justify-between items-end">
                  <span className="px-4 py-2 border border-background/20 text-[10px] font-bold tracking-[0.3em] uppercase">Active Status</span>
                  <ClipboardCheck className="w-24 h-24 text-background/10 group-hover:text-primary/20 transition-all stroke-[1]" />
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-16 grid md:grid-cols-12 gap-12 group hover:bg-primary/5 transition-colors border-t border-background/5"
                {...fadeIn}
              >
                <div className="md:col-span-3">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-40 mb-2 block">Fiscal Years</span>
                  <p className="text-2xl font-header font-bold italic">2020 — 2022</p>
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-3xl mb-6">QA Engineer</h3>
                  <p className="text-lg font-body leading-relaxed mb-8 text-background/80">FinSecure Systems</p>
                  <ul className="space-y-6 list-none">
                    <li className="pl-8 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-primary">
                      Directed a comprehensive security audit for mobile banking assets, identifying 40+ critical vulnerabilities.
                    </li>
                    <li className="pl-8 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-primary">
                      Standardized test suites using Selenium WebDriver and TestNG for cross-jurisdictional compliance.
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-3 flex flex-col justify-between items-end">
                  <span className="px-4 py-2 border border-background/20 text-[10px] font-bold tracking-[0.3em] uppercase">Archived</span>
                  <Archive className="w-24 h-24 text-background/10 group-hover:text-primary/20 transition-all stroke-[1]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capability Spectrum Section */}
        <section className="py-40 bg-background" id="capabilities">
          <div className="px-[10%] max-w-7xl mx-auto">
            <motion.div className="text-center mb-32 space-y-4" {...fadeIn}>
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-primary">Technical Proficiency Matrix</span>
              <h2 className="text-6xl text-on-surface">Capability Spectrum</h2>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-0 border border-border-muted divide-y md:divide-y-0 md:divide-x divide-border-muted"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Automation",
                  skills: [
                    { name: "Selenium / Playwright", level: "Senior", percent: "95%" },
                    { name: "Cypress Integration", level: "Advanced", percent: "88%" }
                  ],
                  tags: ["Java", "Python", "TS/JS"]
                },
                {
                  title: "Protocols",
                  skills: [
                    { name: "API Validation", level: "Senior", percent: "92%" },
                    { name: "Database Integrity", level: "Expert", percent: "85%" }
                  ],
                  tags: ["GraphQL", "REST", "SQL"]
                },
                {
                  title: "Ecosystem",
                  skills: [
                    { name: "CI/CD Pipelines", level: "Senior", percent: "80%" },
                    { name: "Infrastructure", level: "Advanced", percent: "75%" }
                  ],
                  tags: ["Docker", "AWS", "Kubernetes"]
                }
              ].map((category, idx) => (
                <motion.div key={idx} className="p-16 space-y-12 hover:bg-surface transition-all" variants={fadeIn}>
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-primary border-b border-border-muted pb-6">{category.title}</h3>
                  <div className="space-y-8">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-3">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-60">
                          <span>{skill.name}</span>
                          <span>Level: {skill.level}</span>
                        </div>
                        <div className="h-1 bg-border-muted overflow-hidden">
                          <motion.div 
                            className="h-full bg-primary" 
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.percent }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {category.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 border border-border-muted text-accent">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-40 bg-surface border-y border-border-muted" id="experience">
          <div className="px-[10%] max-w-7xl mx-auto">
            <h2 className="text-4xl font-header mb-20 italic">Accreditations & Certifications</h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-muted"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { 
                  name: "ISTQB Certified", 
                  type: "Foundation Level", 
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe_LiN9aIJ_Vu8sqpOYEncK6AGtrYwzV_ARtUkiRDBLNPYsHVi4twNq2nP0OJCs18ZlrSUnpB0ITtRZIT6kQ1uJKpguUnEaN06I4oVbQbPTvZl8uVdQR1H2mk0zy2BEvyG13G0_3aQgp_4q6wm9oycRUukIg_CUQc-lP6L-fjHiDwxjClPCIvOm3e5xvMvWlPrYsPrA-I1Q19hyIu3p2FIdB0BrC-mMoo0QTQsTFB7jCiYN0MP1WMQi6lDo3UA9N_Gx2xHCT06Ao-0",
                  icon: null 
                },
                { name: "B.Sc. Comp Science", type: "High Honors", icon: GraduationCap },
                { name: "CompTIA Security+", type: "Cybersecurity Spec.", icon: ShieldCheck },
                { name: "AWS Practitioner", type: "Certified Cloud", icon: Cloud }
              ].map((cert, idx) => (
                <motion.div key={idx} className="bg-surface p-12 text-center space-y-6 hover:bg-background transition-colors group" variants={fadeIn}>
                  <div className="w-20 h-20 mx-auto border-2 border-primary/20 flex items-center justify-center p-2 group-hover:border-primary transition-all">
                    {cert.img ? (
                      <img alt={cert.name} className="w-full grayscale group-hover:grayscale-0" src={cert.img} referrerPolicy="no-referrer" />
                    ) : cert.icon && (
                      <cert.icon className="w-8 h-8 text-primary/40 group-hover:text-primary" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-header font-bold text-on-surface">{cert.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">{cert.type}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Intellectual Sponsorship Section */}
        <section className="py-40 px-[10%]" id="verification">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
            <motion.div className="space-y-12" {...fadeIn}>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Civic Integration</span>
              <h2 className="text-7xl font-header leading-[1.1] text-on-surface">Intellectual<br />Sponsorship.</h2>
              <p className="text-xl font-body text-accent/80 leading-relaxed italic">
                Commitment to the technical ecosystem through rigorous mentorship and knowledge transfer within the QA community.
              </p>
              <div className="space-y-10 border-l border-border-muted pl-12 py-4">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-on-surface">QA Consortium Lead</h4>
                  <p className="text-sm text-accent/60 leading-relaxed">Directing monthly pedagogical sessions on autonomous testing benchmarks.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-on-surface">Undergraduate Mentor</h4>
                  <p className="text-sm text-accent/60 leading-relaxed">Fostering systemic excellence in emerging software engineers at leading institutions.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="relative group"
              {...fadeIn}
            >
              <img 
                alt="Community workshop" 
                className="w-full border border-border-muted grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArUTsDQFP4p_s2wrk62z3095CixB2t_k7JGvkL8z7ocZr7AEK-zqfHhlGpvAQxSYm1PZzNGk9_Kpe2GF8rpBV85nWJk9JnuJronalPw-eoog_YJamJA8z6n5EySyXinVetpQuYQrfCgf63Rf9TR6FuWQR_xi0m0fpcoiHT3OccIC54CPgJywHOSCJDjtl7pAn4Aj8DrH3Em15Sa-tQENwHvgamt5nmicIqD8euRboeNiQEnX-TOpG7UOSImSZlzJFeEKMWhHOoeFIF" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-12 -left-12 bg-primary p-12 text-background shadow-2xl hidden lg:block">
                <p className="text-5xl font-header font-bold mb-2">150+</p>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] leading-tight">Systemic Impact<br />Cases Documented</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-60 px-[10%] bg-on-surface text-background text-center" id="contact">
          <motion.div className="max-w-4xl mx-auto space-y-16" {...fadeIn}>
            <h2 className="text-7xl font-header leading-tight italic">Formal Inquiry</h2>
            <p className="text-2xl font-body text-background/60 leading-relaxed">
              Accepting select requests for high-stakes system audits, senior consultancy, and institutional engineering roles.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-12 pt-12">
              <a className="text-3xl font-header border-b-2 border-primary/40 hover:border-primary transition-all pb-2 italic" href="mailto:diy2hewage@gmail.com">
                diyana.h@institution.io
              </a>
              <a className="text-xs uppercase tracking-[0.4em] flex items-center gap-4 hover:text-primary transition-colors font-bold" href="#">
                Digital Signature / LinkedIn
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-20 px-[10%] border-t border-border-muted bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary">© MMXXIV DIYANA HEWAGE</p>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">Precision QA Documentation Series // Issue 04</p>
          </div>
          <div className="flex flex-wrap gap-12 text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
            <a className="hover:text-primary transition-colors" href="#">Privacy Charter</a>
            <a className="hover:text-primary transition-colors" href="#">Technical Spec</a>
            <a className="hover:text-primary transition-colors" href="#">Audit Trail</a>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-30">
            COORD: 6.9271° N, 79.8612° E
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-12 right-12 z-[60]">
        <motion.div 
          className="w-16 h-16 rounded-full border border-primary/20 bg-background flex items-center justify-center text-primary group hover:bg-primary hover:text-background transition-all cursor-pointer shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FileText className="w-6 h-6" />
        </motion.div>
      </div>
    </div>
  );
}
