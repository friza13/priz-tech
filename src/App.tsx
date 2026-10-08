import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsStrip from './components/MetricsStrip';
import ProjectsShowcase from './components/ProjectsShowcase';
import CapabilitiesMatrix from './components/CapabilitiesMatrix';
import InfrastructureDiagram from './components/InfrastructureDiagram';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <MetricsStrip />
        <ProjectsShowcase />
        <CapabilitiesMatrix />
        <TechStackSection />
        <InfrastructureDiagram />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
