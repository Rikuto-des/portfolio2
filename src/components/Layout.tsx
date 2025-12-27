import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MinimalBackground } from './MinimalBackground';
import { Navbar } from './Navbar';

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative w-full h-screen overflow-hidden text-minimal-text font-sans">
      <MinimalBackground />
      
      <div className="relative z-10 w-full h-full flex flex-col">
        <Navbar />
        
        <main className="flex-grow relative overflow-hidden">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};
