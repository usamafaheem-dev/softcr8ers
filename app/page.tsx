import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <HeroSection />

      {/* About / Below Hero Content */}
      <section
        id="about"
        className="min-h-screen bg-white flex flex-col items-center justify-center px-10"
      >
        <div className="max-w-4xl text-center">
          <span className="text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase">Our Story</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mt-6 tracking-tight">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl text-slate-500 mt-8 leading-relaxed max-w-2xl mx-auto font-medium">
            We are a collective of designers and developers dedicated to building products that define the next generation of the web.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
            {[
              { title: "Design", desc: "Minimalist and functional interfaces." },
              { title: "AI Setup", desc: "Automating your business logic." },
              { title: "Scale", desc: "Built for millions of users." }
            ].map((item) => (
              <div key={item.title} className="text-left border-l-2 border-slate-100 pl-6">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-500 mt-2 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
