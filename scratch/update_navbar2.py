import re

with open('components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

our_work_dropdown = '''
const ourWorkData = [
  { title: "Fintech Dashboard", desc: "A scalable financial dashboard with real-time analytics.", href: "/work/fintech", icon: <Briefcase className="w-6 h-6 text-[#1620f0]" /> },
  { title: "HealthCare App", desc: "Modern mobile application for patient management.", href: "/work/healthcare", icon: <Smartphone className="w-6 h-6 text-[#f016da]" /> },
  { title: "E-Commerce Platform", desc: "High-conversion online store with advanced features.", href: "/work/ecommerce", icon: <Globe className="w-6 h-6 text-[#a906c9]" /> },
  { title: "AI SaaS Product", desc: "Machine learning powered text generation tool.", href: "/work/ai-saas", icon: <Cpu className="w-6 h-6 text-blue-500" /> },
  { title: "Real Estate Portal", desc: "Property listing and management system.", href: "/work/real-estate", icon: <Palette className="w-6 h-6 text-pink-500" /> },
  { title: "Logistics System", desc: "Supply chain tracking and optimization.", href: "/work/logistics", icon: <Zap className="w-6 h-6 text-purple-500" /> },
];

function OurWorkDropdown({ isDocked }: { isDocked: boolean }) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "absolute z-[100] w-[1050px] bg-white border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] p-10 flex gap-10 top-full mt-2 font-sans transition-all duration-300 pointer-events-auto rounded-3xl",
        isDocked ? "left-[-400px] mt-1" : "left-[-500px] mt-2"
      )}
    >
      {/* Left panel */}
      <div className="w-[30%] flex flex-col pt-2">
        <h4 className="text-[20px] font-bold text-slate-800 mb-4 tracking-wide">
          OUR WORK
        </h4>
        <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
          Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals.
        </p>
      </div>

      {/* Right grid - 3 Columns */}
      <div className="flex-1 grid grid-cols-3 gap-x-8 gap-y-10">
        {ourWorkData.map((work) => (
          <a
            key={work.title}
            href={work.href}
            className="group/item flex gap-4 transition-all items-start hover:bg-slate-50 p-2 -m-2 rounded-2xl"
          >
            <div className="mt-1 transition-transform group-hover/item:scale-110 duration-300">
              {work.icon}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[16px] font-bold text-slate-800 group-hover/item:text-[#1620f0] transition-colors leading-tight">
                {work.title}
              </span>
              <p className="text-[13px] text-slate-500 font-normal leading-relaxed">
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

services_dropdown = '''
function ServicesDropdown({ isDocked }: { isDocked: boolean }) {
  const { t } = useTranslation();

  const displayServices = servicesData.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "absolute z-[100] w-[1050px] bg-white border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] p-10 flex gap-10 top-full mt-2 font-sans transition-all duration-300 pointer-events-auto rounded-3xl",
        isDocked ? "left-[-250px] mt-1" : "left-[-350px] mt-2"
      )}
    >
      {/* Left panel */}
      <div className="w-[30%] flex flex-col pt-2">
        <h4 className="text-[20px] font-bold text-slate-800 mb-4 tracking-wide">
          OUR SERVICES
        </h4>
        <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
          Transform your business ideas into reality with our tailored software development services.
        </p>
      </div>

      {/* Right grid - 3 Columns */}
      <div className="flex-1 grid grid-cols-3 gap-x-8 gap-y-10">
        {displayServices.map((srv) => (
          <a
            key={srv.titleKey}
            href={srv.href}
            className="group/item flex gap-4 transition-all items-start hover:bg-slate-50 p-2 -m-2 rounded-2xl"
          >
            <div className="mt-1 [&>svg]:w-6 [&>svg]:h-6 transition-transform group-hover/item:scale-110 duration-300">
              {srv.icon}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[16px] font-bold text-slate-800 group-hover/item:text-[#a906c9] transition-colors leading-tight">
                {t(srv.titleKey)}
              </span>
              <p className="text-[13px] text-slate-500 font-normal leading-relaxed">
                {t(srv.descKey)}
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
'''

# Replace old ServicesDropdown and OurWorkDropdown
pattern = re.compile(r'const ourWorkData.*?\n}\n\n\nfunction ServicesDropdown.*?\n}\n', re.DOTALL)
content = re.sub(pattern, our_work_dropdown + '\n\n' + services_dropdown + '\n', content)

with open('components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated Navbar with premium dropdowns')
