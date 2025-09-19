'use client';

import { useEffect } from 'react';
import type { MouseEvent } from 'react';
import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import FloatingElements from '@/components/FloatingElements';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { MdSecurity, MdGavel, MdStar, MdAccessTime, MdPeople, MdSettings, MdBarChart, MdHeadset, MdSearch, MdDescription, MdBolt, MdTrendingUp } from 'react-icons/md';

export default function Home() {
  useEffect(() => {
    // Handle smooth scrolling when landing on homepage with hash
    const hash = window.location.hash;
    if (hash) {
      // Check if this is an initial load or navigation from another page
      const isInitialLoad = !sessionStorage.getItem('hasVisited');
      const delay = isInitialLoad ? 2500 : 100; // Wait for loading screen if initial load

      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, delay);
    }
  }, []);
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 pt-32 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgb(120, 179, 173), rgb(240, 253, 250), rgb(245, 240, 235))' }}>
          <ParticleBackground />
          <FloatingElements />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce" style={{ backgroundColor: 'rgba(120, 179, 173, 0.1)', color: 'rgb(80, 135, 137)' }}>
                  🇦🇺 Australian-Based • Global Reach
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Streamlined Outsourcing with an
                  <span className="animate-pulse" style={{ color: 'rgb(80, 135, 137)' }}> Australian Touch</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Focus on growing your business while we handle your administrative operations.
                  Trusted local expertise with global efficiency and scalability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/quote"
                    className="text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group text-center"
                    style={{ backgroundColor: 'rgb(19, 34, 81)' }}
                    onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(15, 27, 65)'}
                    onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(19, 34, 81)'}
                  >
                    Get Started Today
                  </a>
                  <a href="/how-it-works" className="border-2 border-gray-500 text-gray-500 px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-lg text-center"
                    onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.borderColor = 'rgb(120, 179, 173)';
                      e.currentTarget.style.color = 'rgb(120, 179, 173)';
                    }}
                    onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.borderColor = 'rgb(107, 114, 128)';
                      e.currentTarget.style.color = 'rgb(107, 114, 128)';
                    }}>
                    Learn How It Works
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight" delay={300}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border" style={{ borderColor: 'rgba(120, 179, 173, 0.2)' }}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse" style={{ background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.2), rgba(80, 135, 137, 0.2))' }}>
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-rgb(15, 27, 65)">
                      Trusted by <AnimatedCounter end={200} suffix="+" /> Businesses
                    </h3>
                    <p className="text-gray-600">From startups to enterprises across Australia</p>

                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold" style={{ color: 'rgb(120, 179, 173)' }}>
                          <AnimatedCounter end={99} suffix="%" />
                        </div>
                        <div className="text-xs text-gray-500">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold" style={{ color: 'rgb(202, 176, 154)' }}>
                          <AnimatedCounter end={24} suffix="/7" />
                        </div>
                        <div className="text-xs text-gray-500">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section id="about" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(120, 179, 173, 0.05), transparent)' }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(80, 135, 137)' }}>
                Why Choose Admin & Co. Hub?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine Australian business standards with global efficiency to deliver exceptional BPO services
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInUp" delay={100}>
                <div className="text-center p-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl group" style={{ background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.1), rgba(120, 179, 173, 0.2))' }} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.2), rgba(120, 179, 173, 0.3))'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.1), rgba(120, 179, 173, 0.2))'}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce" style={{ background: 'linear-gradient(to bottom right, rgb(120, 179, 173), rgb(80, 135, 137))' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-gray-900">Local Accountability</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Australian-based management and oversight ensuring quality standards and timezone alignment
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="text-center p-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl group" style={{ background: 'linear-gradient(to bottom right, rgba(80, 135, 137, 0.1), rgba(80, 135, 137, 0.2))' }} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(80, 135, 137, 0.2), rgba(80, 135, 137, 0.3))'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(80, 135, 137, 0.1), rgba(80, 135, 137, 0.2))'}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce" style={{ background: 'linear-gradient(to bottom right, rgb(80, 135, 137), rgb(120, 179, 173))' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-gray-900">Scalable Solutions</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Flexible services that grow with your business, from startup to enterprise scale
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="text-center p-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl group" style={{ background: 'linear-gradient(to bottom right, rgba(202, 176, 154, 0.1), rgba(202, 176, 154, 0.2))' }} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(202, 176, 154, 0.2), rgba(202, 176, 154, 0.3))'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(202, 176, 154, 0.1), rgba(202, 176, 154, 0.2))'}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce" style={{ background: 'linear-gradient(to bottom right, rgb(202, 176, 154), rgb(180, 156, 134))' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-gray-900">Trusted Security</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Enterprise-grade security and compliance with Australian data protection standards
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(to right, rgb(249, 250, 251), rgba(120, 179, 173, 0.1), rgba(80, 135, 137, 0.1))' }}>
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-10 w-16 h-16 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(120, 179, 173)' }}></div>
            <div className="absolute bottom-4 right-10 w-12 h-12 rounded-full animate-pulse delay-1000" style={{ backgroundColor: 'rgb(80, 135, 137)' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(80, 135, 137)' }}>
                Trusted & Certified
              </h2>
              <p className="text-xl text-gray-600">Your security and satisfaction are our top priorities</p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border h-40 flex flex-col justify-center" style={{ borderColor: 'rgba(120, 179, 173, 0.2)' }} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.borderColor = 'rgba(120, 179, 173, 0.5)'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.borderColor = 'rgba(120, 179, 173, 0.2)'}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.2), rgba(120, 179, 173, 0.3))' }} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.3), rgba(120, 179, 173, 0.4))'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.2), rgba(120, 179, 173, 0.3))'}>
                      <MdSecurity className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" style={{ color: 'rgb(120, 179, 173)' }} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 transition-colors group-hover:text-gray-900" onMouseEnter={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(120, 179, 173)'} onMouseLeave={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(17, 24, 39)'}>ISO 27001</h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">Certified</p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border h-40 flex flex-col justify-center" style={{ borderColor: 'rgba(80, 135, 137, 0.2)' }} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.borderColor = 'rgba(80, 135, 137, 0.5)'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.borderColor = 'rgba(80, 135, 137, 0.2)'}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(80, 135, 137, 0.2), rgba(80, 135, 137, 0.3))' }} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(80, 135, 137, 0.3), rgba(80, 135, 137, 0.4))'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(80, 135, 137, 0.2), rgba(80, 135, 137, 0.3))'}>
                      <MdGavel className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" style={{ color: 'rgb(80, 135, 137)' }} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 transition-colors group-hover:text-gray-900" onMouseEnter={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(80, 135, 137)'} onMouseLeave={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(17, 24, 39)'}>Australian Privacy</h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">Act Compliant</p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border h-40 flex flex-col justify-center" style={{ borderColor: 'rgba(202, 176, 154, 0.2)' }} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.borderColor = 'rgba(202, 176, 154, 0.5)'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.borderColor = 'rgba(202, 176, 154, 0.2)'}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(202, 176, 154, 0.2), rgba(202, 176, 154, 0.3))' }} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(202, 176, 154, 0.3), rgba(202, 176, 154, 0.4))'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(202, 176, 154, 0.2), rgba(202, 176, 154, 0.3))'}>
                      <MdStar className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" style={{ color: 'rgb(202, 176, 154)' }} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 transition-colors group-hover:text-gray-900" onMouseEnter={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(202, 176, 154)'} onMouseLeave={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(17, 24, 39)'}>
                      <AnimatedCounter end={200} suffix="+" />
                    </h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">Happy Clients</p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-slate-100 group-hover:border-slate-300 h-40 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300">
                      <MdAccessTime className="w-8 h-8 text-slate-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-slate-600 transition-colors">24/7</h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">Support</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.1), rgba(80, 135, 137, 0.1))' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(120, 179, 173)' }}></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full animate-pulse delay-1000" style={{ backgroundColor: 'rgb(80, 135, 137)' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(80, 135, 137)' }}>
                How Admin & Co. Hub Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our proven 4-step process ensures smooth integration and measurable results for your business
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="scaleIn" delay={100} className="relative group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform group-hover:scale-105 border" style={{ borderColor: 'rgba(120, 179, 173, 0.2)' }}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.2), rgba(120, 179, 173, 0.3))' }}>
                      <MdSearch className="w-8 h-8" style={{ color: 'rgb(120, 179, 173)' }} />
                    </div>
                    <div className="font-bold text-sm mb-2 animate-pulse" style={{ color: 'rgb(120, 179, 173)' }}>STEP 01</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-gray-900" onMouseEnter={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(120, 179, 173)'} onMouseLeave={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(17, 24, 39)'}>Discovery</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">We analyze your current processes and identify optimization opportunities</p>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: 'rgb(120, 179, 173)' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={200} className="relative group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform group-hover:scale-105 border" style={{ borderColor: 'rgba(80, 135, 137, 0.2)' }}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'linear-gradient(to bottom right, rgba(80, 135, 137, 0.2), rgba(80, 135, 137, 0.3))' }}>
                      <MdDescription className="w-8 h-8" style={{ color: 'rgb(80, 135, 137)' }} />
                    </div>
                    <div className="font-bold text-sm mb-2 animate-pulse" style={{ color: 'rgb(80, 135, 137)' }}>STEP 02</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-gray-900" onMouseEnter={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(80, 135, 137)'} onMouseLeave={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(17, 24, 39)'}>Strategy</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Custom solution design tailored to your business needs and goals</p>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: 'rgb(80, 135, 137)' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={300} className="relative group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform group-hover:scale-105 border" style={{ borderColor: 'rgba(202, 176, 154, 0.2)' }}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'linear-gradient(to bottom right, rgba(202, 176, 154, 0.2), rgba(202, 176, 154, 0.3))' }}>
                      <MdBolt className="w-8 h-8" style={{ color: 'rgb(202, 176, 154)' }} />
                    </div>
                    <div className="font-bold text-sm mb-2 animate-pulse" style={{ color: 'rgb(202, 176, 154)' }}>STEP 03</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-gray-900" onMouseEnter={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(202, 176, 154)'} onMouseLeave={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(17, 24, 39)'}>Implementation</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Seamless transition with dedicated project management and training</p>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: 'rgb(202, 176, 154)' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={400} className="relative group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform group-hover:scale-105 border border-slate-100">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mb-6">
                      <MdTrendingUp className="w-8 h-8 text-slate-600" />
                    </div>
                    <div className="text-slate-600 font-bold text-sm mb-2 animate-pulse">STEP 04</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-slate-600 transition-colors">Optimization</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Continuous improvement and scaling based on performance metrics</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fadeInUp" delay={500} className="text-center mt-12">
              <a href="/quote" className="text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group inline-block" style={{ backgroundColor: 'rgb(15, 27, 65)' }} onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(12, 22, 52)'} onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(15, 27, 65)'}>
                Start Your Journey Today
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgb(249, 250, 251), rgba(120, 179, 173, 0.1))' }}>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(120, 179, 173)' }}></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full animate-pulse delay-1000" style={{ backgroundColor: 'rgb(80, 135, 137)' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(80, 135, 137)' }}>
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive BPO solutions tailored to your business needs
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Virtual Assistance", desc: "Dedicated admin support", icon: MdPeople, color: "primary" },
                { title: "Back-Office Operations", desc: "Process optimization", icon: MdSettings, color: "secondary" },
                { title: "Data Management", desc: "Secure data processing", icon: MdBarChart, color: "accent" },
                { title: "Customer Support", desc: "24/7 client services", icon: MdHeadset, color: "tertiary" }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <AnimatedSection
                    key={index}
                    animation="scaleIn"
                    delay={index * 100}
                    className="group"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.2), rgba(120, 179, 173, 0.3))' }} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.3), rgba(120, 179, 173, 0.4))'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.2), rgba(120, 179, 173, 0.3))'}>
                        <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" style={{ color: 'rgb(120, 179, 173)' }} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors group-hover:text-gray-900" onMouseEnter={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(120, 179, 173)'} onMouseLeave={(e: MouseEvent<HTMLHeadingElement>) => e.currentTarget.style.color = 'rgb(17, 24, 39)'}>{service.title}</h3>
                      <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">{service.desc}</p>
                      <a href="/services" className="font-medium transition-colors group-hover:animate-pulse" style={{ color: 'rgb(120, 179, 173)' }} onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgb(100, 159, 153)'} onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgb(120, 179, 173)'}>
                        Learn More →
                      </a>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(120, 179, 173, 0.05), transparent, rgba(80, 135, 137, 0.05))' }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(80, 135, 137)' }}>
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trusted by businesses across Australia
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <AnimatedSection animation="fadeInLeft" delay={100} className="group h-full">
                <div className="rounded-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border h-full flex flex-col" style={{ background: 'linear-gradient(to bottom right, rgb(249, 250, 251), rgba(120, 179, 173, 0.1))', borderColor: 'rgba(120, 179, 173, 0.2)' }}>
                  <div className="text-5xl mb-4 group-hover:animate-pulse" style={{ color: 'rgb(120, 179, 173)' }}>&ldquo;</div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors flex-grow">
                    Admin & Co. Hub transformed our back-office operations. Their Australian-based team understands our business culture while delivering global-standard efficiency.&rdquo;
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 transition-all" style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.3)' } as React.CSSProperties} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => (e.currentTarget.style as any)['--tw-ring-color'] = 'rgba(120, 179, 173, 0.5)'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => (e.currentTarget.style as any)['--tw-ring-color'] = 'rgba(120, 179, 173, 0.3)'}>
                      <Image
                        src="/testimonials/sarah-mitchell.jpg"
                        alt="Sarah Mitchell"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 transition-colors group-hover:text-gray-900" onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.color = 'rgb(120, 179, 173)'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.color = 'rgb(17, 24, 39)'}>Sarah Mitchell</div>
                      <div className="text-sm text-gray-600">CEO, TechStart Melbourne</div>
                      <div className="text-sm font-medium" style={{ color: 'rgb(120, 179, 173)' }}>TechStart</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={200} className="group h-full">
                <div className="rounded-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border h-full flex flex-col" style={{ background: 'linear-gradient(to bottom right, rgb(249, 250, 251), rgba(80, 135, 137, 0.1))', borderColor: 'rgba(80, 135, 137, 0.2)' }}>
                  <div className="text-5xl mb-4 group-hover:animate-pulse" style={{ color: 'rgb(80, 135, 137)' }}>&ldquo;</div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors flex-grow">
                    The scalability and reliability of their services allowed us to focus on growth while they handled our administrative complexities seamlessly.&rdquo;
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 transition-all" style={{ '--tw-ring-color': 'rgba(80, 135, 137, 0.3)' } as React.CSSProperties} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => (e.currentTarget.style as any)['--tw-ring-color'] = 'rgba(80, 135, 137, 0.5)'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => (e.currentTarget.style as any)['--tw-ring-color'] = 'rgba(80, 135, 137, 0.3)'}>
                      <Image
                        src="/testimonials/david-chen.jpg"
                        alt="David Chen"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 transition-colors group-hover:text-gray-900" onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.color = 'rgb(80, 135, 137)'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.color = 'rgb(17, 24, 39)'}>David Chen</div>
                      <div className="text-sm text-gray-600">Operations Director</div>
                      <div className="text-sm font-medium" style={{ color: 'rgb(80, 135, 137)' }}>GrowthCorp</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={300} className="group h-full">
                <div className="rounded-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border h-full flex flex-col" style={{ background: 'linear-gradient(to bottom right, rgb(249, 250, 251), rgba(202, 176, 154, 0.1))', borderColor: 'rgba(202, 176, 154, 0.2)' }}>
                  <div className="text-5xl mb-4 group-hover:animate-pulse" style={{ color: 'rgb(202, 176, 154)' }}>&ldquo;</div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors flex-grow">
                    Outstanding customer service and attention to detail. They feel like an extension of our team rather than an external provider.&rdquo;
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 transition-all" style={{ '--tw-ring-color': 'rgba(202, 176, 154, 0.3)' } as React.CSSProperties} onMouseEnter={(e: MouseEvent<HTMLDivElement>) => (e.currentTarget.style as any)['--tw-ring-color'] = 'rgba(202, 176, 154, 0.5)'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => (e.currentTarget.style as any)['--tw-ring-color'] = 'rgba(202, 176, 154, 0.3)'}>
                      <Image
                        src="/testimonials/emma-thompson.jpg"
                        alt="Emma Thompson"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 transition-colors group-hover:text-gray-900" onMouseEnter={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.color = 'rgb(202, 176, 154)'} onMouseLeave={(e: MouseEvent<HTMLDivElement>) => e.currentTarget.style.color = 'rgb(17, 24, 39)'}>Emma Thompson</div>
                      <div className="text-sm text-gray-600">Founder</div>
                      <div className="text-sm font-medium" style={{ color: 'rgb(202, 176, 154)' }}>InnovateLab</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'rgb(15, 27, 65)' }}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection animation="fadeInUp">
              <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
                Ready to Streamline Your Operations?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of Australian businesses that trust Admin & Co. Hub for their outsourcing needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/quote" className="bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group text-center flex items-center justify-center" style={{ color: 'rgb(15, 27, 65)' }}>
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Get Your Free Consultation
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 text-lg font-semibold transform hover:scale-105 text-center flex items-center justify-center group" style={{ '--hover-text-color': 'rgb(15, 27, 65)' } as React.CSSProperties} onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgb(15, 27, 65)'} onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'white'}>
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us Today
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />

        <Chatbot />
      </div>
    </>
  );
}