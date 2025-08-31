import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[20px] blur-xl opacity-20 animate-float" />
        <div className="w-24 h-24 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-[20px] mb-8 flex items-center justify-center relative">
          <BoltIcon className="w-12 h-12 text-white" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="heading-xl text-center mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
      >
        Distill
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="body-lg text-gray-400 text-center max-w-2xl mb-8"
      >
        Transform your tech newsletter overload into digestible insights.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
        <Link
          to="/sample"
          className="relative btn-primary text-lg group"
        >
          View Sample Digest
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 16 16" 
            fill="none" 
            className="transition-transform group-hover:translate-x-1"
          >
            <path 
              d="M6 12L10 8L6 4" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-32 text-center"
      >
        <h2 className="heading-lg mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="body-base text-gray-400 max-w-2xl">
          Three simple steps to transform information overload into actionable insights
        </p>
      </motion.div>
    </div>
  );
}