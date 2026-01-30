import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img 
              src={logo} 
              alt="Gujjadi Swarna Jewellers" 
              className="h-16 md:h-24 w-auto"
            />
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="#experience">Experience</NavItem>
            <NavItem href="#collections">Collections</NavItem>
            <NavItem href="#about">About</NavItem>
          </div>

          <motion.a
            href="https://shop.swarna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full shadow-soft hover:shadow-hover transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Visit Store
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
    whileHover={{ y: -2 }}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
  </motion.a>
);

export default Navbar;
