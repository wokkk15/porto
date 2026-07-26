import { ThemeProvider } from '@/context/ThemeContext';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Timeline } from '@/components/Timeline';
import { Organizations } from '@/components/Organizations';
import { Certificates } from '@/components/Certificates';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-x-hidden selection:bg-[#FFD93D] selection:text-black">
        {/* Top Reading Progress Bar */}
        <ScrollProgress />

        {/* Custom Trailing Neubrutalist Cursor */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="space-y-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Organizations />
          <Certificates />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
