import { motion } from 'framer-motion';

const inputClasses = `
  mt-1 block w-full rounded-md border-gray-300 shadow-sm
  focus:border-spice-500 focus:ring focus:ring-spice-500 focus:ring-opacity-50
  transition-all duration-300
`;

export function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <motion.input
            type="text"
            whileFocus={{ scale: 1.02 }}
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <motion.input
            type="email"
            whileFocus={{ scale: 1.02 }}
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <motion.textarea
          rows={4}
          whileFocus={{ scale: 1.02 }}
          className={inputClasses}
        ></motion.textarea>
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <button
          type="submit"
          className="w-full bg-spice-500 text-white px-6 py-3 rounded-md hover:bg-spice-600 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </motion.div>
    </motion.form>
  );
}