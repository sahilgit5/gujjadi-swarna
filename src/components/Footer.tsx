import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="Gujjadi Swarna Jewellers" 
              className="h-24 md:h-32 w-auto brightness-0 invert"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <a 
              href="https://shop.swarna.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Us: shop.swarna.com
            </a>
            <a 
              href="tel:+919900046609" 
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              +91 99000 46609
            </a>
          </motion.div>
        </div>

        <div className="pt-8 mt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © 2026 Gujjadi Swarna Jewellers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
