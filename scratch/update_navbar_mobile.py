import re

with open('components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add ChevronDown import
content = content.replace(
    'import { Menu, X, Globe, Smartphone, Cpu, Palette, Video, Sparkles, Briefcase, Zap, ArrowRight } from "lucide-react";',
    'import { Menu, X, Globe, Smartphone, Cpu, Palette, Video, Sparkles, Briefcase, Zap, ArrowRight, ChevronDown } from "lucide-react";'
)

# Add mobileExpandedMenu state
content = content.replace(
    'const [isAtChat, setIsAtChat] = useState(false);',
    'const [isAtChat, setIsAtChat] = useState(false);\n  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);'
)

# Replace the mobile menu Nav Links loop
old_nav_links = '''            {/* Nav Links */}
            <div className="flex flex-col">
              {navLinksData.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    className={cn(
                      "px-2 py-2 font-medium text-[16px] font-sans border-b border-slate-50 last:border-0 transition-colors",
                      isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] to-[#a906c9] font-bold"
                        : "text-slate-500 hover:text-slate-900"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(link.key)}
                  </a>
                );
              })}
            </div>'''

new_nav_links = '''            {/* Nav Links */}
            <div className="flex flex-col max-h-[65vh] overflow-y-auto no-scrollbar pb-4">
              {navLinksData.map((link) => {
                const isActive = pathname === link.href;
                const isServices = link.key === "nav.services";
                const isWork = link.key === "nav.work";
                
                if (isServices || isWork) {
                  const isExpanded = mobileExpandedMenu === link.key;
                  const data = isServices ? servicesData.slice(0, 6) : ourWorkData;
                  const sectionTitle = isServices ? "OUR SERVICES" : "OUR WORK";
                  const sectionDesc = isServices 
                    ? "Transform your business ideas into reality with our tailored software development services."
                    : "Explore our portfolio of cutting-edge digital transformations.";
                    
                  return (
                    <div key={link.key} className="flex flex-col border-b border-slate-50 last:border-0">
                      <button
                        onClick={() => setMobileExpandedMenu(isExpanded ? null : link.key)}
                        className="flex items-center justify-between px-2 py-4 font-medium text-[17px] font-sans text-slate-700 hover:text-slate-900 w-full text-left transition-colors"
                      >
                        {t(link.key)}
                        <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300", isExpanded && "rotate-180")} />
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-5 py-4 px-2 mb-2 bg-slate-50/50 rounded-2xl border border-slate-100">
                              <div className="px-2">
                                <h5 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-1">{sectionTitle}</h5>
                                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                  {sectionDesc}
                                </p>
                              </div>
                              
                              <div className="flex flex-col gap-1">
                                {data.map((item: any, idx: number) => {
                                  const title = isServices ? t(item.titleKey) : item.title;
                                  const desc = isServices ? t(item.descKey) : item.desc;
                                  
                                  return (
                                    <a
                                      key={title}
                                      href={item.href}
                                      onClick={() => setMenuOpen(false)}
                                      className="flex items-start gap-3 p-3 rounded-[16px] active:bg-white transition-colors"
                                    >
                                      <div className={cn("w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 shadow-sm bg-white border border-slate-100", item.bg || "bg-white")}>
                                        <div className="[&>svg]:w-5 [&>svg]:h-5">
                                          {item.icon}
                                        </div>
                                      </div>
                                      <div className="flex flex-col pt-0.5">
                                        <span className="text-[14px] font-bold text-slate-800 leading-tight mb-1">
                                          {title}
                                        </span>
                                        <span className="text-[12px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                                          {desc}
                                        </span>
                                      </div>
                                    </a>
                                  )
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.key}
                    href={link.href}
                    className={cn(
                      "px-2 py-4 font-medium text-[17px] font-sans border-b border-slate-50 last:border-0 transition-colors",
                      isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] to-[#a906c9] font-bold"
                        : "text-slate-700 hover:text-slate-900"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(link.key)}
                  </a>
                );
              })}
            </div>'''

content = content.replace(old_nav_links, new_nav_links)

with open('components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated mobile menu')
