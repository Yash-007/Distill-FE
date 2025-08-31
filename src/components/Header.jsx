import { Link } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className="bg-[#1A1A23] border-b border-[#2A2A35]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-[#7C3AED] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <BoltIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-[#7C3AED] transition-colors">Distill</span>
          </Link>
        </div>
      </div>
    </header>
  );
}