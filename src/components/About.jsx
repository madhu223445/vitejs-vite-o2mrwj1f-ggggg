import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-spice-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg mb-6">
              With over two decades of experience in the spice trade, we are
              committed to bringing the finest Indian spices to Singapore. Our
              products are carefully sourced from the best spice gardens in
              India and processed using modern techniques while preserving
              traditional quality.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-spice-500 mr-2">✓</span>
                Premium Quality Assurance
              </li>
              <li className="flex items-center">
                <span className="text-spice-500 mr-2">✓</span>
                Direct Sourcing from Farmers
              </li>
              <li className="flex items-center">
                <span className="text-spice-500 mr-2">✓</span>
                Modern Processing Facilities
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="src/assets/log.png"
              alt="Our Spice Processing"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
