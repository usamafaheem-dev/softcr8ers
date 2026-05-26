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
        "absolute z-[100] w-[750px] bg-white/90 backdrop-blur-2xl border border-white/50 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12)] p-4 top-full mt-2 font-sans transition-all duration-300 pointer-events-auto rounded-[2rem]",
        isDocked ? "left-[-350px] mt-1" : "left-[-450px] mt-2"
      )}
    >
      <div className="flex gap-4">
        {/* Left Side: Modern Banner */}
        <div className="w-[280px] bg-gradient-to-br from-slate-900 via-[#a906c9] to-[#f016da] rounded-3xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-inner shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-[40px] rounded-full translate-x-10 -translate-y-10"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-[14px] flex items-center justify-center mb-6 border border-white/20 shadow-sm">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-[22px] font-extrabold mb-2 tracking-tight">Our Work</h4>
            <p className="text-[14px] text-white/80 leading-relaxed font-medium">
              Explore our portfolio of cutting-edge digital transformations.
            </p>
          </div>
          
          <a href="/work" className="relative z-10 mt-8 flex items-center gap-2 text-[13px] font-bold hover:text-white/80 transition-colors group/btn">
            VIEW PORTFOLIO
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>

        {/* Right Side: Grid of Projects */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {ourWorkData.map((work) => (
            <a
              key={work.title}
              href={work.href}
              className="group/item flex items-start gap-3 p-3 rounded-[20px] hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-slate-100 transition-all duration-300"
            >
              <div className={cn("w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110 duration-300 shadow-sm", work.bg)}>
                {work.icon}
              </div>
              <div className="flex flex-col pt-0.5">
                <span className="text-[15px] font-bold text-slate-800 group-hover/item:text-[#a906c9] transition-colors leading-tight mb-1">
                  {work.title}
                </span>
                <span className="text-[13px] text-slate-500 font-medium leading-snug line-clamp-2">
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
        "absolute z-[100] w-[750px] bg-white/90 backdrop-blur-2xl border border-white/50 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12)] p-4 top-full mt-2 font-sans transition-all duration-300 pointer-events-auto rounded-[2rem]",
        isDocked ? "left-[-150px] mt-1" : "left-[-250px] mt-2"
      )}
    >
      <div className="flex gap-4">
        {/* Left Side: Modern Banner */}
        <div className="w-[280px] bg-gradient-to-br from-slate-900 via-[#1620f0] to-[#a906c9] rounded-3xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-inner shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-[40px] rounded-full translate-x-10 -translate-y-10"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-[14px] flex items-center justify-center mb-6 border border-white/20 shadow-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-[22px] font-extrabold mb-2 tracking-tight">Our Services</h4>
            <p className="text-[14px] text-white/80 leading-relaxed font-medium">
              We architect, design, and engineer world-class digital products.
            </p>
          </div>
          
          <a href="/services" className="relative z-10 mt-8 flex items-center gap-2 text-[13px] font-bold hover:text-white/80 transition-colors group/btn">
            EXPLORE SERVICES
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>

        {/* Right Side: Grid of Services */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {displayServices.map((srv, idx) => (
            <a
              key={srv.titleKey}
              href={srv.href}
              className="group/item flex items-start gap-3 p-3 rounded-[20px] hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-slate-100 transition-all duration-300"
            >
              <div className={cn("w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110 duration-300 shadow-sm", bgColors[idx])}>
                <div className="[&>svg]:w-5 [&>svg]:h-5">
                  {srv.icon}
                </div>
              </div>
              <div className="flex flex-col pt-0.5">
                <span className="text-[15px] font-bold text-slate-800 group-hover/item:text-[#1620f0] transition-colors leading-tight mb-1">
                  {t(srv.titleKey)}
                </span>
                <span className="text-[13px] text-slate-500 font-medium leading-snug line-clamp-2">
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

pattern = re.compile(r'const ourWorkData.*?\n}\n+function ServicesDropdown.*?\n}\n', re.DOTALL)
content = re.sub(pattern, replacement, content)

with open('components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated Navbar with super premium dropdowns')
