import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";
import product7 from "@/assets/product-7.png";

const products = [
  {
    name: "Emerald Temple Necklace",
    description: "A majestic statement piece featuring intricate gold filigree work adorned with vivid emeralds, inspired by ancient temple architecture.",
    image: product1,
    tryOnLink: "nzgvg.zappar-us.io/961274949322777611/",
  },
  {
    name: "Rose Gold Diamond Bangle",
    description: "Exquisite rose gold bangle encrusted with brilliant-cut diamonds in a delicate floral lattice pattern, perfect for modern elegance.",
    image: product2,
    tryOnLink: "nzgvg.zappar-us.io/7829824357721472481/",
  },
  {
    name: "Sapphire Cascade Set",
    description: "A breathtaking ensemble of necklace and earrings featuring Ceylon sapphires set in white gold with diamond accents.",
    image: product3,
    tryOnLink: "nzgvg.zappar-us.io/6523368261116845264/",
  },
  {
    name: "Diamond Starburst Ring",
    description: "A spectacular cocktail ring with diamonds arranged in a radiant starburst pattern, set in lustrous rose gold.",
    image: product4,
    tryOnLink: "nzgvg.zappar-us.io/1500638722002459469/",
  },
  {
    name: "Pink Tourmaline Heritage Set",
    description: "Traditional craftsmanship meets contemporary design in this stunning necklace and earring set featuring rare pink tourmalines.",
    image: product5,
    tryOnLink: "nzgvg.zappar-us.io/8321433767419361666/",
  },
  {
    name: "Lakshmi Emerald Pendant",
    description: "A devotional masterpiece featuring Goddess Lakshmi in antique gold, adorned with emerald beads and baroque pearls.",
    image: product6,
    tryOnLink: "nzgvg.zappar-us.io/723532358394550775/",
  },
  {
    name: "Royal Peacock Haar",
    description: "An heirloom-worthy creation inspired by royal peacock motifs, featuring rubies, emeralds, and uncut diamonds in 22k gold.",
    image: product7,
    tryOnLink: "nzgvg.zappar-us.io/1573046451029366405/",
  },
];

const Products = () => {
  return (
    <section id="collections" className="py-24 luxury-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Our Collections
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4">
            Try Before You <span className="italic text-primary">Treasure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Select any piece below to begin your immersive virtual try-on experience. 
            See how each creation complements your unique beauty from the comfort of your home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              image={product.image}
              tryOnLink={product.tryOnLink}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Click on any piece to launch the immersive experience • Best viewed on mobile devices
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
