import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Products', to: 'products' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg"
            >
              <img
                src="src/assets/log.png"
                alt="Sunbrand Logo"
                className="w-full h-full object-contain p-1"
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-green-600"
            >
              SUNBRAND
            </motion.h1>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="text-lg font-medium cursor-pointer hover:text-green-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}