import re

with open('components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# First, define OurWorkDropdown
our_work_dropdown = '''
const ourWorkData = [
  { title: "Fintech Dashboard", desc: "A scalable financial dashboard with real-time analytics.", href: "/work/fintech", icon: <Briefcase className="w-5 h-5" /> },
  { title: "HealthCare App", desc: "Modern mobile application for patient management.", href: "/work/healthcare", icon: <Smartphone className="w-5 h-5" /> },
  { title: "E-Commerce Platform", desc: "High-conversion online store with advanced features.", href: "/work/ecommerce", icon: <Globe className="w-5 h-5" /> },
  { title: "AI SaaS Product", desc: "Machine learning powered text generation tool.", href: "/work/ai-saas", icon: <Cpu className="w-5 h-5" /> },
  { title: "Real Estate Portal", desc: "Property listing and management system.", href: "/work/real-estate", icon: <Palette className="w-5 h-5" /> },
  { title: "Logistics System", desc: "Supply chain tracking and optimization.", href: "/work/logistics", icon: <Zap className="w-5 h-5" /> },
];

function OurWorkDropdown({ isDocked }: { isDocked: boolean }) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "absolute z-[100] w-[900px] bg-white border-t-2 border-[#0ba5ec] shadow-2xl p-8 flex gap-8 top-full mt-2 font-sans transition-all duration-300 pointer-events-auto rounded-b-xl",
        isDocked ? "left-[-350px] mt-1" : "left-[-450px] mt-2"
      )}
    >
      {/* Left panel */}
      <div className="w-1/4 flex flex-col pt-2 pr-6 border-r border-slate-100">
        <h4 className="text-[17px] font-bold text-slate-700 uppercase mb-4 tracking-wide">
          OUR WORK
        </h4>
        <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
          Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals.
        </p>
      </div>

      {/* Right grid */}
      <div className="w-3/4 grid grid-cols-2 gap-x-8 gap-y-8">
        {ourWorkData.map((work) => (
          <a
            key={work.title}
            href={work.href}
            className="group/item flex gap-4 transition-colors items-start"
          >
            <div className="text-[#0ba5ec] mt-1">
              {work.icon}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[15px] font-bold text-[#0ba5ec] leading-tight">
                {work.title}
              </span>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                {work.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
'''

# New ServicesDropdown
services_dropdown = '''
function ServicesDropdown({ isDocked }: { isDocked: boolean }) {
  const { t } = useTranslation();

  const displayServices = servicesData.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "absolute z-[100] w-[900px] bg-white border-t-2 border-[#0ba5ec] shadow-2xl p-8 flex gap-8 top-full mt-2 font-sans transition-all duration-300 pointer-events-auto rounded-b-xl",
        isDocked ? "left-[-150px] mt-1" : "left-[-250px] mt-2"
      )}
    >
      {/* Left panel */}
      <div className="w-1/4 flex flex-col pt-2 pr-6 border-r border-slate-100">
        <h4 className="text-[17px] font-bold text-slate-700 uppercase mb-4 tracking-wide">
          OUR SERVICES
        </h4>
        <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
          Transform your business ideas into reality with our tailored software development services.
        </p>
      </div>

      {/* Right grid */}
      <div className="w-3/4 grid grid-cols-2 gap-x-8 gap-y-8">
        {displayServices.map((srv) => (
          <a
            key={srv.titleKey}
            href={srv.href}
            className="group/item flex gap-4 transition-colors items-start"
          >
            <div className="text-[#0ba5ec] mt-1 [&>svg]:w-6 [&>svg]:h-6">
              {srv.icon}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[15px] font-bold text-[#0ba5ec] leading-tight">
                {t(srv.titleKey)}
              </span>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                {t(srv.descKey)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
'''

# Replace old ServicesDropdown
pattern_services = re.compile(r'function ServicesDropdown.*?\n}\n', re.DOTALL)
content = re.sub(pattern_services, our_work_dropdown + '\n' + services_dropdown + '\n', content)

# Inject hovering logic for "Our Work"
content = content.replace(
    '''const isServices = link.key === "nav.services";''',
    '''const isServices = link.key === "nav.services";\n            const isWork = link.key === "nav.work";'''
)

content = content.replace(
    '''onMouseEnter={() => isServices && setHoveredLink("services")}
                onMouseLeave={() => isServices && setHoveredLink(null)}''',
    '''onMouseEnter={() => { if(isServices) setHoveredLink("services"); if(isWork) setHoveredLink("work"); }}
                onMouseLeave={() => { if(isServices) setHoveredLink(null); if(isWork) setHoveredLink(null); }}'''
)

content = content.replace(
    '''{isServices && (
                  <AnimatePresence>
                    {hoveredLink === "services" && <ServicesDropdown isDocked={isDocked} />}
                  </AnimatePresence>
                )}''',
    '''{isServices && (
                  <AnimatePresence>
                    {hoveredLink === "services" && <ServicesDropdown isDocked={isDocked} />}
                  </AnimatePresence>
                )}
                {isWork && (
                  <AnimatePresence>
                    {hoveredLink === "work" && <OurWorkDropdown isDocked={isDocked} />}
                  </AnimatePresence>
                )}'''
)

with open('components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated Navbar with new dropdowns')
