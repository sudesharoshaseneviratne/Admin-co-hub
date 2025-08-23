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
    <nav className="bg-white/90 backdrop-blur-md shadow-xl border-b border-blue-100/50 fixed w-full top-0 z-40 transition-all duration-500">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3 text-2xl font-bold text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12">
                  <span className="text-white text-lg animate-pulse">⚡</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
              </div>
              <div className="flex flex-col">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Admin & Co Hub
                </span>
                <span className="text-xs text-gray-500 font-normal -mt-1">BPO Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <a
                    href={item.href}
                    className={`px-4 py-3 text-sm font-medium transition-all duration-300 relative rounded-xl group ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50/80 shadow-sm'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 rounded-xl"></div>
                    )}
                    
                    {/* Hover effect */}
                    {!isActive(item.href) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/80 group-hover:to-indigo-50/80 rounded-xl transition-all duration-300"></div>
                    )}
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
                      isActive(item.href) ? 'w-8' : 'w-0 group-hover:w-6'
                    }`}></div>
                  </a>
                </div>
              ))}
              
              {/* CTA Button */}
              <div className="ml-6">
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-xl hover:bg-blue-50/50 group"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-blue-100/50 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl relative group ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
                      : 'bg-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400'
                  }`}></div>
                  <span>{item.label}</span>
                </span>
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200/50">
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
        </div>
      </div>
    </nav>
  );
}