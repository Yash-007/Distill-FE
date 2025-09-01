import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BoltIcon, ForwardIcon, DocumentTextIcon, EnvelopeIcon, ClipboardIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const steps = [
  {
    icon: ForwardIcon,
    title: "Forward Newsletter",
    description: "When you receive a tech newsletter, forward it to distillhq@gmail.com"
  },
  {
    icon: DocumentTextIcon,
    title: "AI Processing",
    description: "Our AI will process the newsletter"
  },
  {
    icon: EnvelopeIcon,
    title: "Get Your Digest",
    description: "We'll email you back with a link to your processed digest"
  }
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('distillhq@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[20px] blur-xl opacity-20 animate-float" />
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-[20px] mb-6 sm:mb-8 flex items-center justify-center relative">
          <BoltIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl sm:text-5xl text-center font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-4"
      >
        Distill
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg sm:text-xl text-gray-400 text-center max-w-2xl mb-8 px-4"
      >
        Save time by transforming your newsletter overload into digestible insights.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center space-y-4 w-full max-w-md px-4"
      >
        <div className="relative w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg blur-lg" />
          <div className="relative bg-[#1A1A23] rounded-lg border border-[#2A2A35] p-4 flex items-center justify-between">
            <span className="text-gray-300 font-mono">distillhq@gmail.com</span>
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-[#2A2A35] hover:bg-[#7C3AED] transition-colors"
              title="Copy email address"
            >
              <ClipboardIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-[#7C3AED]"
          >
            Email copied to clipboard!
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-24 sm:mt-32 w-full max-w-4xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-[#1A1A23] rounded-xl p-6 border border-[#2A2A35] h-full">
                <div className="w-12 h-12 bg-[#2A2A35] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/20 transition-colors">
                  <step.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <Link
            to="/c56f06dc-f00b-483e-bf4c-67cb1ab58511"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#2A2A35] text-white hover:bg-[#7C3AED] transition-colors font-medium"
          >
            View Example Digest
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}