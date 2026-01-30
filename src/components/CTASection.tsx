import { motion } from "framer-motion";
import { Heart, Gem, Award } from "lucide-react";

const CTASection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-light/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-magenta-light/20 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <TrustBadge
            icon={<Gem className="w-8 h-8" />}
            title="Certified Purity"
            description="Every piece comes with BIS hallmark certification, guaranteeing authentic gold purity."
          />
          <TrustBadge
            icon={<Heart className="w-8 h-8" />}
            title="Family Legacy"
            description="Three generations of master craftsmen dedicated to creating timeless treasures."
          />
          <TrustBadge
            icon={<Award className="w-8 h-8" />}
            title="Lifetime Trust"
            description="Transparent pricing, lifetime exchange policy, and dedicated after-sales care."
          />
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
            Your Perfect Piece Awaits
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Every piece of jewellery tells a story — of love, celebration, and cherished memories. 
            Begin your journey with Gujjadi Swarna Jewellers today, and discover the treasure 
            that's meant for you.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#collections"
              className="px-8 py-4 text-base font-medium cta-gradient text-primary-foreground rounded-full shadow-card hover:shadow-hover transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Experience
            </motion.a>
            <motion.a
              href="https://shop.swarna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-base font-medium border-2 border-gold text-gold rounded-full hover:bg-gold hover:text-accent-foreground transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Shop Full Collection
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBadge = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl card-gradient shadow-soft hover:shadow-card transition-all duration-300 text-center"
  >
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-gold mb-4">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-medium text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default CTASection;
