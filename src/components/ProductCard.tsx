import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  tryOnLink: string;
  index: number;
}

const ProductCard = ({ name, description, image, tryOnLink, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl card-gradient shadow-card hover:shadow-hover transition-all duration-500">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* CTA Button on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <motion.a
              href={`https://${tryOnLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-4 h-4" />
              Launch the Experience
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 bg-background/50 backdrop-blur-sm">
          <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-20 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default ProductCard;
