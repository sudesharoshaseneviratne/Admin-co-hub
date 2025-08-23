'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About' },
    { href: '/testimonials', label: 'Success Stories' },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };



  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b fixed w-full top-0 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <span className="inline-block animate-pulse">⚡</span>
              Admin & Co Hub
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                    isActive(item.href)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:scale-105 group'
                  }`}
                >
                  {item.label}
                  {!isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 w-0 group-hover:w-full"></span>
                  )}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-full"></span>
                  )}
                </a>
              ))}
              <a 
                href="/quote" 
                className={`px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
                  pathname === '/quote'
                    ? 'bg-blue-700 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Quote
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors rounded-lg ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="/quote" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                pathname === '/quote'
                  ? 'bg-blue-700 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}