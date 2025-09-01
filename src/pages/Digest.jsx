import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, DocumentTextIcon, ChevronDownIcon, InboxIcon } from '@heroicons/react/24/outline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const isValidUUID = (uuid) => {
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regex.test(uuid);
};

export default function Digest() {
  const { messageId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDigest = async () => {
      if (!isValidUUID(messageId)) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://distill-dmoq.onrender.com/summaries/?msgId=${messageId}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error('Error fetching digest:', err);
      }
      setIsLoading(false);
    };

    fetchDigest();
  }, [messageId]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#2A2A35] border-t-[#7C3AED] rounded-full animate-spin" />
          <div className="absolute inset-0 border-4 border-[#2A2A35] rounded-full blur opacity-20" />
        </div>
        <p className="mt-4 text-gray-400 font-medium">Processing your digest...</p>
      </div>
    );
  }

  if (!isValidUUID(messageId) || !data?.summaries?.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-4 py-12 sm:py-16"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#2A2A35] rounded-full flex items-center justify-center mb-6">
            <InboxIcon className="w-10 h-10 text-[#7C3AED]" />
          </div>
          <h2 className="heading-md text-white mb-3">No Summaries Found</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            {!isValidUUID(messageId) 
              ? "The provided message ID is not valid. Please check the URL and try again."
              : "We couldn't find any summaries for this digest. The content might still be processing."}
          </p>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#2A2A35] text-white hover:bg-[#7C3AED] transition-colors font-medium"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto px-4 py-6 sm:py-8"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl blur-xl" />
        <div className="relative bg-[#1A1A23] rounded-xl p-6 sm:p-8 border border-[#2A2A35] backdrop-blur-sm mb-6 sm:mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Your Tech Digest</h1>
              <p className="text-sm sm:text-base text-gray-400">
                {data.total} articles summarized and ready for you
              </p>
            </div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden md:block text-gray-400"
            >
              <ChevronDownIcon className="w-6 h-6" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {data.summaries.map((article, index) => (
          <motion.article
            key={index}
            variants={item}
            className="group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-[#1A1A23] rounded-xl p-4 sm:p-6 border border-[#2A2A35] group-hover:border-[#7C3AED] transition-colors duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#2A2A35] rounded-xl flex items-center justify-center group-hover:bg-[#7C3AED]/20 transition-colors">
                    <DocumentTextIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#7C3AED]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-white/90 transition-colors">
                      {article.headline}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                      {article.summary}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-[#2A2A35]">
                      <span className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#2A2A35] text-gray-300 whitespace-nowrap">
                        {article.wordCount} words
                      </span>
                      <a
                        href={article.sourceArticle.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#2A2A35] text-white hover:bg-[#7C3AED] transition-colors font-medium text-sm group/link"
                      >
                        Read Full Article
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}