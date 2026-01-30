import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={logo} 
              alt="Gujjadi Swarna Jewellers" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Crafting timeless treasures for generations. Experience the perfect 
              blend of tradition and innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#experience" className="text-background/70 hover:text-background transition-colors text-sm">
                  Virtual Try-On
                </a>
              </li>
              <li>
                <a href="#collections" className="text-background/70 hover:text-background transition-colors text-sm">
                  Collections
                </a>
              </li>
              <li>
                <a href="https://shop.swarna.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors text-sm">
                  Online Store
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-medium mb-4">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Gujjadi Swarna Jewellers, Vijayawada, Andhra Pradesh</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-background transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@swarna.com" className="hover:text-background transition-colors">
                  info@swarna.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2026 Gujjadi Swarna Jewellers. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Crafted with ❤️ for generations of trust
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
