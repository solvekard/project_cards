import Header from './components/Header';
import FloatingShapes from './components/FloatingShapes';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ComingSoonSection from './components/ComingSoonSection';
import Footer from './components/Footer';

export default function Home() {
  return (
  <>
    <>
    <Header />
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <FloatingShapes />
      </div>
      <main className="relative z-10">
        <HeroSection />
        <ComingSoonSection />
        <FeaturesSection />
        <Footer />
        </main>
      </div>
    </>
  </>
  );
} 