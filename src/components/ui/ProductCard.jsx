import { motion } from 'framer-motion';

export function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <motion.div 
        className="aspect-w-1 aspect-h-1 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-spice-500 bg-opacity-20 flex items-center justify-center"
        >
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-white font-semibold text-lg"
          >
            View Details
          </motion.span>
        </motion.div>
      </motion.div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-spice-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </motion.div>
  );
}