import re

with open('components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

replacement = '''
const ourWorkData = [
  { title: "Fintech Dashboard", desc: "Real-time financial analytics platform.", href: "/work/fintech", icon: <Briefcase className="w-5 h-5 text-blue-600" />, bg: "bg-blue-50" },
  { title: "HealthCare App", desc: "Patient management & telemedicine.", href: "/work/healthcare", icon: <Smartphone className="w-5 h-5 text-pink-600" />, bg: "bg-pink-50" },
  { title: "E-Commerce Platform", desc: "High-conversion online retail store.", href: "/work/ecommerce", icon: <Globe className="w-5 h-5 text-purple-600" />, bg: "bg-purple-50" },
  { title: "AI SaaS Product", desc: "Machine learning powered generator.", href: "/work/ai-saas", icon: <Cpu className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50" },
  { title: "Real Estate Portal", desc: "Property listing and management.", href: "/work/real-estate", icon: <Palette className="w-5 h-5 text-orange-600" />, bg: "bg-orange-50" },
  { title: "Logistics System", desc: "Supply chain tracking optimization.", href: "/work/logistics", icon: <Zap className="w-5 h-5 text-indigo-600" />, bg: "bg-indigo-50" },
];

function OurWorkDropdown({ isDocked }: { isDocked: boolean }) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "absolute z-[100] w-[880px] bg-white/95 backdrop-blur-2xl border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] p-5 top-full mt-2 font-sans transition-all duration-300 pointer-events-auto rounded-[2rem]",
        isDocked ? "left-[-350px] mt-1" : "left-[-450px] mt-2"
      )}
    >
      <div className="flex gap-6">
        {/* Left Side: Image Banner */}
        <div className="w-[320px] rounded-[1.5rem] p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-inner shrink-0 group/banner">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
            alt="Our Work" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-[#a906c9]/20 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-sm">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-[22px] font-bold mb-2 tracking-tight text-white">Our Work</h4>
            <p className="text-[14px] text-slate-200 leading-relaxed font-medium">
              Explore our portfolio of cutting-edge digital transformations.
            </p>
          </div>
          
          <a href="/work" className="relative z-10 mt-8 flex items-center gap-2 text-[13px] font-bold hover:text-white transition-colors group/btn text-slate-300 uppercase tracking-wider">
            View Portfolio
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>

        {/* Right Side: Grid of Projects */}
        <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-4 py-2 pr-2">
          {ourWorkData.map((work) => (
            <a
              key={work.title}
              href={work.href}
              className="group/item flex items-start gap-4 p-4 rounded-[1.25rem] hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300"
            >
              <div className={cn("w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110 duration-300 shadow-sm", work.bg)}>
                {work.icon}
              </div>
              <div className="flex flex-col pt-0.5">
                <span className="text-[15px] font-bold text-slate-900 group-hover/item:text-[#a906c9] transition-colors leading-tight mb-1.5">
                  {work.title}
                </span>
                <span className="text-[13px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                  {work.desc}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ServicesDropdown({ isDocked }: { isDocked: boolean }) {
  const { t } = useTranslation();
  const displayServices = servicesData.slice(0, 6);

  const bgColors = ["bg-blue-50", "bg-pink-50", "bg-purple-50", "bg-sky-50", "bg-red-50", "bg-amber-50"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "absolute z-[100] w-[880px] bg-white/95 backdrop-blur-2xl border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] p-5 top-full mt-2 font-sans transition-all duration-300 pointer-events-auto rounded-[2rem]",
        isDocked ? "left-[-150px] mt-1" : "left-[-250px] mt-2"
      )}
    >
      <div className="flex gap-6">
        {/* Left Side: Image Banner */}
        <div className="w-[320px] rounded-[1.5rem] p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-inner shrink-0 group/banner">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Services" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-[#1620f0]/20 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-[22px] font-bold mb-2 tracking-tight text-white">Our Services</h4>
            <p className="text-[14px] text-slate-200 leading-relaxed font-medium">
              We architect, design, and engineer world-class digital products that scale.
            </p>
          </div>
          
          <a href="/services" className="relative z-10 mt-8 flex items-center gap-2 text-[13px] font-bold hover:text-white transition-colors group/btn text-slate-300 uppercase tracking-wider">
            EXPLORE SERVICES
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>

        {/* Right Side: Grid of Services */}
        <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-4 py-2 pr-2">
          {displayServices.map((srv, idx) => (
            <a
              key={srv.titleKey}
              href={srv.href}
              className="group/item flex items-start gap-4 p-4 rounded-[1.25rem] hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300"
            >
              <div className={cn("w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110 duration-300 shadow-sm", bgColors[idx])}>
                <div className="[&>svg]:w-5 [&>svg]:h-5">
                  {srv.icon}
                </div>
              </div>
              <div className="flex flex-col pt-0.5">
                <span className="text-[15px] font-bold text-slate-900 group-hover/item:text-[#1620f0] transition-colors leading-tight mb-1.5">
                  {t(srv.titleKey)}
                </span>
                <span className="text-[13px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                  {t(srv.descKey)}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
'''

pattern = re.compile(r'const ourWorkData.*?\n}\n\nfunction ServicesDropdown.*?\n}\n', re.DOTALL)
content = re.sub(pattern, replacement, content)

with open('components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated Navbar with Image menus')
