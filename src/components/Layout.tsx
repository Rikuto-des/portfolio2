import { MinimalBackground } from './MinimalBackground';
import { CustomCursor } from './CustomCursor';
import { Navbar } from './Navbar';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { Skills } from '../pages/Skills';
import { About } from '../pages/About';

export const Layout = () => {
  return (
    <div className="relative w-full min-h-screen text-minimal-text font-sans">
      <CustomCursor />
      <MinimalBackground />

      <div className="relative z-10 w-full">
        <Navbar />

        <main className="w-full">
          <section id="home">
            <Home />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="about">
            <About />
          </section>
        </main>
      </div>
    </div>
  );
};
