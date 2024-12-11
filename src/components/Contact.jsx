import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { ContactForm } from './ui/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Contact Us"
          subtitle="Get in touch for bulk orders and inquiries"
        />
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}