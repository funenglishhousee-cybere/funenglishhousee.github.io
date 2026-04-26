import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MessageCircle, Instagram, Facebook, Mail, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Footer = () => (
  <footer className="bg-soft-beige mt-20 pt-16 pb-8 px-6 border-t border-pastel-pink/30">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-4">
        <Link to="/" className="text-2xl font-display font-bold text-gray-800 flex items-center gap-2">
          <span className="text-3xl">🌸</span> Fun English House
        </Link>
        <p className="text-gray-600 leading-relaxed">
          Learning English with fun and confidence! Founded by Hiba, Khadija & Roumaisa.
        </p>
        <div className="flex gap-4">
          <a href="https://wa.me/212631488611" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-green-600 hover:scale-110 transition-transform">
            <MessageCircle size={20} />
          </a>
          <a href="https://www.instagram.com/funenglishhouse_/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-pink-600 hover:scale-110 transition-transform">
            <Instagram size={20} />
          </a>
          <a href="https://web.facebook.com/profile.php?id=61576521525950" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-blue-600 hover:scale-110 transition-transform">
            <Facebook size={20} />
          </a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-6 text-gray-800">Quick Links</h4>
        <ul className="space-y-3">
          <li><Link to="/" className="text-gray-600 hover:text-pastel-pink transition-colors">Home</Link></li>
          <li><Link to="/about" className="text-gray-600 hover:text-pastel-pink transition-colors">About Us</Link></li>
          <li><Link to="/lessons" className="text-gray-600 hover:text-pastel-pink transition-colors">Lessons</Link></li>
          <li><Link to="/games" className="text-gray-600 hover:text-pastel-pink transition-colors">Games</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6 text-gray-800">Resources</h4>
        <ul className="space-y-3">
          <li><Link to="/pricing" className="text-gray-600 hover:text-pastel-pink transition-colors">Pricing</Link></li>
          <li><Link to="/contact" className="text-gray-600 hover:text-pastel-pink transition-colors">Contact</Link></li>
          <li className="text-gray-600">FAQ</li>
          <li className="text-gray-600">Privacy Policy</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6 text-gray-800">Contact Us</h4>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-600">
            <Mail size={18} className="text-pastel-pink" />
            <a href="mailto:funenglishhousee@gmail.com" className="hover:underline">funenglishhousee@gmail.com</a>
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <Phone size={18} className="text-pastel-pink" />
            <a href="https://wa.me/212631488611" className="hover:underline">+212 631488611</a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
      <p>© 2026 Fun English House – Made with 💗 by Hiba, Khadija & Roumaisa</p>
    </div>
  </footer>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Lessons', path: '/lessons' },
    { name: 'Games', path: '/games' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-lavender px-8 py-2 flex justify-between items-center text-sm font-semibold text-slate-600">
        <div className="flex gap-4">
          <span className="flex items-center gap-2">📧 funenglishhousee@gmail.com</span>
          <span className="hidden sm:flex items-center gap-2">📱 WhatsApp: +212 631488611</span>
        </div>
        <div className="flex gap-6 uppercase tracking-wider text-[10px]">
          <a href="https://web.facebook.com/profile.php?id=61576521525950" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Facebook</a>
          <a href="https://www.instagram.com/funenglishhouse_/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">Instagram</a>
        </div>
      </div>
      
      {/* Global Navigation */}
      <div className="bg-white px-8 py-4 flex justify-between items-center shadow-sm">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-pastel-pink w-10 h-10 rounded-full flex items-center justify-center text-white text-xl shadow-sm">
            🏠
          </div>
          <span className="text-2xl font-bold text-slate-800 tracking-tight">Fun English House</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-bold text-slate-700">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/212631488611" target="_blank" rel="noopener noreferrer" className="hidden lg:block bg-pastel-pink text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all hover:-translate-y-0.5">
            Join Community 🌸
          </a>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-pastel-pink/20 px-6 py-8 shadow-xl"
          >
            <div className="flex flex-col gap-6 font-bold text-lg">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-slate-700 hover:text-pastel-pink ${isActive ? 'text-pastel-pink' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a href="https://wa.me/212631488611" onClick={() => setIsOpen(false)} className="bg-pastel-pink text-white py-4 rounded-2xl text-center font-bold">
                Join Community 🌸
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col pt-32 selection:bg-pastel-pink selection:text-gray-900">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
