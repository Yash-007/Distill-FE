import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DigestViewer({ digest, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-16 h-16 border-4 border-[#2A2A35] border-t-[#7C3AED] rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-400">Processing your digest...</p>
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-[#2A1A22] border-l-4 border-red-500 p-6 rounded-lg"
      >
        <div className="flex items-start">
          <div className="ml-3">
            <h3 className="text-lg font-medium text-red-400">Error Loading Digest</h3>
            <div className="mt-2 text-gray-300">{error}</div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!digest?.articles?.length) {
    return null;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto px-4"
    >
      <div className="card mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Your Newsletter Digest</h1>
        <p className="text-gray-400">
          We've processed your newsletter and extracted the key information from {digest.articles.length} articles.
        </p>
      </div>

      <div className="space-y-6">
        {digest.articles.map((article, index) => (
          <motion.article
            key={index}
            variants={item}
            className="card hover:border-[#7C3AED] transition-colors duration-300"
          >
            <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
              {article.title}
            </h2>
            
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 mb-4">
              {article.summary}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#2A2A35]">
              {article.source && (
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#2A2A35] text-gray-300">
                  {article.source}
                </span>
              )}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#7C3AED] hover:text-[#6D28D9] font-medium text-sm"
              >
                Read Full Article
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}