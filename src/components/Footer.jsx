import { motion } from 'framer-motion';
import { SocialIcon } from './ui/SocialIcon';

export default function Footer() {
  const socialLinks = [
    { icon: 'instagram', url: 'https://instagram.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'whatsapp', url: 'https://whatsapp.com' },
    { icon: 'facebook', url: 'https://facebook.com' },
  ];

  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social) => (
              <SocialIcon key={social.icon} type={social.icon} url={social.url} />
            ))}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 text-center"
          >
            © {new Date().getFullYear()} Sunbrand. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}