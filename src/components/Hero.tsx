import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="experience"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-violet-light/30 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-magenta-light/40 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium">
              <Sparkles className="w-4 h-4 text-gold" />
              Virtual Try-On Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-6"
          >
            Experience Jewellery{" "}
            <span className="italic text-primary">Like Never Before</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            For generations, Gujjadi Swarna Jewellers has crafted timeless pieces 
            that celebrate life's precious moments. Now, bring that magic home with 
            our immersive virtual try-on experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#collections"
              className="px-8 py-4 text-base font-medium cta-gradient text-primary-foreground rounded-full shadow-card hover:shadow-hover transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Collections
            </motion.a>
            <motion.a
              href="https://shop.swarna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-base font-medium bg-transparent border-2 border-primary/30 text-foreground rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Visit Our Store
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-8 text-center"
          >
            <div>
              <p className="font-serif text-3xl md:text-4xl font-semibold text-gold">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Years of Legacy</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-serif text-3xl md:text-4xl font-semibold text-gold">10K+</p>
              <p className="text-sm text-muted-foreground mt-1">Happy Families</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-serif text-3xl md:text-4xl font-semibold text-gold">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Certified Gold</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
