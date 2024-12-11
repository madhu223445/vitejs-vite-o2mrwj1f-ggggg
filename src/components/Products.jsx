import { motion } from 'framer-motion';
import { ProductCard } from './ui/ProductCard';
import { SectionTitle } from './ui/SectionTitle';

const products = [
  {
    name: 'Garam Masala',
    description: 'A blend of ground spices used extensively in Indian cuisine',
    image: 'src/assets/P00438.jpeg',
  },
  {
    name: 'Turmeric Powder',
    description: 'High-quality ground turmeric with intense color and flavor',
    image: 'src/assets/P01225.jpeg',
  },
  {
    name: 'Chili Powder',
    description: 'Premium quality red chili powder for the perfect heat',
    image: 'src/assets/log.png',
  },
  {
    name: 'Cumin Powder',
    description: 'Freshly ground cumin seeds with rich aroma',
    image: 'src/assets/log.png',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Our Premium Products"
          subtitle="Discover our range of authentic Indian spices"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
