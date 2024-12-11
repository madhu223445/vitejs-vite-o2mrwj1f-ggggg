import { Link } from 'react-scroll';

export function CTAButton({ to, text }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      className="bg-spice-500 text-white px-8 py-3 rounded-full hover:bg-spice-600 transition-colors inline-block"
    >
      {text}
    </Link>
  );
}