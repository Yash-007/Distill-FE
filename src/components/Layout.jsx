import { motion } from 'framer-motion';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        {children}
      </motion.main>
    </div>
  );
}