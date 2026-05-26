import * as fs from 'fs';

const filePath = 'E:/Internship Projects/Softcreater Website/softcr8ers/app/about/page.tsx';

let content = fs.readFileSync(filePath, 'utf8');

// Add the import for ContactSection
if (!content.includes('ContactSection')) {
    content = content.replace(
        'import { CinematicFooter } from "@/components/ui/motion-footer";',
        'import { CinematicFooter } from "@/components/ui/motion-footer";\nimport { ContactSection } from "@/components/ContactSection";\nimport { Globe } from "lucide-react";'
    );
}

// Find the end of the Hero section and insert the ContactSection and a new section
const heroEndString = '      </section>';
const heroEndIndex = content.indexOf(heroEndString, content.indexOf('<!-- HERO / INTRO SECTION -->') === -1 ? content.indexOf('HERO / INTRO SECTION') : content.indexOf('<!-- HERO / INTRO SECTION -->'));

if (heroEndIndex !== -1) {
    const insertionPoint = heroEndIndex + heroEndString.length;
    const newSections = `

      {/* ── CONTACT SECTION (As Requested) ── */}
      <section className="relative z-20 py-12 md:py-16 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/80 backdrop-blur-2xl border border-slate-200/60 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
              <ContactSection isModal={true} iconColor="#14b8a6" />
            </div>
        </div>
      </section>

      {/* ── GLOBAL PRESENCE ── */}
      <section className="py-20 md:py-28 relative z-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase flex items-center gap-2">
              <Globe className="w-4 h-4" /> Global Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mt-4 text-slate-900 leading-tight">
              We operate without borders.
            </h2>
            <p className="text-slate-600 text-sm md:text-lg mt-6 leading-relaxed max-w-lg">
              Our engineering hubs and design studios span across multiple continents. This global perspective allows us to integrate the best cultural design nuances and maintain a 24/7 development cycle.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-3xl font-extrabold text-teal-600">14+</h4>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Countries</span>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-teal-600">3</h4>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Continents</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/5 border border-slate-200/60"
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Global Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>
`;

    content = content.substring(0, insertionPoint) + newSections + content.substring(insertionPoint);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated the about page!');
} else {
    console.log('Could not find the end of the Hero section.');
}
