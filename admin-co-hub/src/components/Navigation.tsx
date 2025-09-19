'use client';

import { useState } from 'react';
import type { MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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
    <nav className="bg-white/90 backdrop-blur-md shadow-xl border-b fixed w-full top-0 z-40 transition-all duration-500" style={{ borderBottomColor: 'rgba(120, 179, 173, 0.2)' }}>
      {/* Gradient accent line */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3 text-4xl font-bold hover:scale-105 transition-all duration-300 cursor-pointer" style={{ color: 'rgb(120, 179, 173)' }}>
              <div className="flex flex-col">
                <span className="text-[rgb(202,176,154)]">
                  Admin & Co. Hub
                </span>
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
                    className={`px-4 py-3 text-sm font-medium transition-all duration-300 relative rounded-xl group ${isActive(item.href)
                      ? 'shadow-sm'
                      : 'text-gray-700'
                      }`}
                    style={isActive(item.href) 
                      ? { color: 'rgb(120, 179, 173)', backgroundColor: 'rgba(120, 179, 173, 0.1)' }
                      : {}
                    }
                    onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
                      if (!isActive(item.href)) {
                        e.currentTarget.style.color = 'rgb(120, 179, 173)';
                        e.currentTarget.style.backgroundColor = 'rgba(120, 179, 173, 0.05)';
                      }
                    }}
                    onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
                      if (!isActive(item.href)) {
                        e.currentTarget.style.color = 'rgb(55, 65, 81)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>

                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(to right, rgba(120, 179, 173, 0.15), rgba(80, 135, 137, 0.15))' }}></div>
                    )}

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${isActive(item.href) ? 'w-8' : 'w-0 group-hover:w-6'
                      }`} style={{ background: 'linear-gradient(to right, rgb(120, 179, 173), rgb(80, 135, 137))' }}></div>
                  </a>
                </div>
              ))}

              {/* CTA Button */}
              <div className="ml-6">
                <a
                  href="/quote"
                  className="px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform text-white"
                  style={{
                    backgroundColor: pathname === '/quote' ? 'rgb(15, 27, 65)' : 'rgb(19, 34, 81)'
                  }}
                  onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(15, 27, 65)'}
                  onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = pathname === '/quote' ? 'rgb(15, 27, 65)' : 'rgb(19, 34, 81)'}
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
              className="relative p-2 text-gray-700 transition-colors rounded-xl group"
              onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.color = 'rgb(120, 179, 173)';
                e.currentTarget.style.backgroundColor = 'rgba(120, 179, 173, 0.05)';
              }}
              onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.color = 'rgb(55, 65, 81)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="bg-white/95 backdrop-blur-md border-t shadow-xl" style={{ borderTopColor: 'rgba(120, 179, 173, 0.2)' }}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl relative group ${isActive(item.href)
                  ? 'shadow-sm'
                  : 'text-gray-700'
                  }`}
                style={isActive(item.href) 
                  ? { 
                      color: 'rgb(120, 179, 173)', 
                      background: 'linear-gradient(to right, rgba(120, 179, 173, 0.1), rgba(80, 135, 137, 0.1))',
                      animationDelay: `${index * 50}ms`
                    }
                  : { animationDelay: `${index * 50}ms` }
                }
                onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.color = 'rgb(120, 179, 173)';
                    e.currentTarget.style.background = 'linear-gradient(to right, rgba(120, 179, 173, 0.05), rgba(80, 135, 137, 0.05))';
                  }
                }}
                onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.color = 'rgb(55, 65, 81)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <span className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive(item.href)
                    ? ''
                    : 'bg-gray-300'
                    }`}
                    style={isActive(item.href) 
                      ? { background: 'linear-gradient(to right, rgb(120, 179, 173), rgb(80, 135, 137))' }
                      : {}
                    }></div>
                  <span>{item.label}</span>
                </span>
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200/50">
              <a
                href="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-lg transition-colors text-white"
                style={{
                  backgroundColor: pathname === '/quote' ? 'rgb(15, 27, 65)' : 'rgb(19, 34, 81)'
                }}
                onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(15, 27, 65)'}
                onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = pathname === '/quote' ? 'rgb(15, 27, 65)' : 'rgb(19, 34, 81)'}
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