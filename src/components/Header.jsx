import { Link } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className="bg-[#1A1A23] border-b border-[#2A2A35]">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-14 sm:h-16">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#7C3AED] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <BoltIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white group-hover:text-[#7C3AED] transition-colors">
              Distill
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}