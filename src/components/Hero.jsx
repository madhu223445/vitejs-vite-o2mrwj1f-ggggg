import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { CTAButton } from './ui/CTAButton';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-spice-100"
    >
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Premium Indian Spices
              <span className="text-green-600"> for Singapore</span>
            </h1>
            <p className="text-xl mb-8">
              Experience the authentic taste of India with our premium quality
              masalas and spices.
            </p>
            <CTAButton to="products" text="Explore Products" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="relative flex justify-center items-center"
          >
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-white p-4"
            >
              <img
                src="src/assets/log.png"
                alt="Colorful Indian Spices"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}