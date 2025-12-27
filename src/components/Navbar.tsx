import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'About', path: '/about' },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 mix-blend-difference">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div
          onClick={() => navigate('/')}
          className="text-2xl font-bold font-display tracking-widest text-white cursor-pointer hover:opacity-70 transition-opacity"
        >
          PORTFOLIO
        </div>

        <ul className="flex space-x-12">
          {navItems.map((item) => (
            <li key={item.path}>
              <div
                onClick={() => navigate(item.path)}
                className="relative group cursor-pointer font-tech"
              >
                <div className="flex items-center gap-1">
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400 font-bold">[</span>
                  <span className={`text-sm tracking-widest uppercase transition-colors duration-300 ${location.pathname === item.path ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}>
                    {item.name}
                  </span>
                  <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400 font-bold">]</span>
                </div>

                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 w-full h-px bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
