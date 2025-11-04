import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import SolutionsAndFeatures from './components/SolutionsAndFeatures';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0F1E] font-[Inter] text-[#E8ECF7]">
      {/* Layered gradient ribbons */}
      <div className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2">
        <div className="h-24 w-[120vw] bg-gradient-to-r from-transparent via-[#4C7EFF]/10 to-transparent blur-2xl" />
      </div>

      <HeroSection />
      <PainPointsSection />
      <SolutionsAndFeatures />
      <PricingSection />

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Cloud Hosting by Ragil — Fokus ke bisnis, teknis biar kami yang urus.
      </footer>
    </div>
  );
}

export default App;
