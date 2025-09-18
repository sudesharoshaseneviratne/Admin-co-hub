'use client';

import { useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import FloatingElements from '@/components/FloatingElements';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollToTop from '@/components/ScrollToTop';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
        <section className="bg-gradient-to-br from-teal-50 to-emerald-100 py-20 pt-32 relative overflow-hidden">
          <ParticleBackground />
          <FloatingElements />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft">
                <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
                  🇦🇺 Australian-Based • Global Reach
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Streamlined Outsourcing with an
                  <span className="text-teal-600 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent animate-pulse"> Australian Touch</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Focus on growing your business while we handle your administrative operations.
                  Trusted local expertise with global efficiency and scalability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/quote" className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group text-center">
                    Get Started Today
                  </a>
                  <a href="/how-it-works" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-lg text-center">
                    Learn How It Works
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight" delay={300}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-teal-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <svg className="w-8 h-8 text-teal-600 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Trusted by <AnimatedCounter end={200} suffix="+" /> Businesses
                    </h3>
                    <p className="text-gray-600">From startups to enterprises across Australia</p>

                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-600">
                          <AnimatedCounter end={99} suffix="%" />
                        </div>
                        <div className="text-xs text-gray-500">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-600">
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-text-teal-600 bg-clip-text text-transparent">
                Why Choose Admin & Co Hub?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine Australian business standards with global efficiency to deliver exceptional BPO services
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInUp" delay={100} className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-text-teal-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">Local Accountability</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Australian-based management and oversight ensuring quality standards and timezone alignment
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={200} className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Scalable Solutions</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Flexible services that grow with your business, from startup to enterprise scale
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={300} className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">Trusted Security</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Enterprise-grade security and compliance with Australian data protection standards
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 bg-gradient-to-r from-gray-50 via-blue-50 to-indigo-50 border-y relative overflow-hidden">
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-10 w-16 h-16 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-10 w-12 h-12 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-text-teal-600 bg-clip-text text-transparent">
                Trusted & Certified
              </h2>
              <p className="text-gray-600">Your security and satisfaction are our top priorities</p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-blue-100 group-hover:border-blue-300 h-40 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <svg className="w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">ISO 27001</h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">Certified</p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-green-100 group-hover:border-green-300 h-40 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                      <svg className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">Australian Privacy</h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">Act Compliant</p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-yellow-100 group-hover:border-yellow-300 h-40 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-yellow-200 group-hover:to-yellow-300 transition-all duration-300">
                      <svg className="w-8 h-8 text-yellow-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                      <AnimatedCounter end={200} suffix="+" />
                    </h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">Happy Clients</p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-purple-100 group-hover:border-purple-300 h-40 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                      <svg className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">24/7</h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">Support</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-indigo-300 rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-text-teal-600 to-indigo-600 bg-clip-text text-transparent">
                How Admin & Co Hub Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our proven 4-step process ensures smooth integration and measurable results for your business
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="scaleIn" delay={100} className="relative group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform group-hover:scale-105 border border-blue-100">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <div className="text-teal-600 font-bold text-sm mb-2 animate-pulse">STEP 01</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">Discovery</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">We analyze your current processes and identify optimization opportunities</p>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={200} className="relative group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform group-hover:scale-105 border border-green-100">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-6">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div className="text-green-600 font-bold text-sm mb-2 animate-pulse">STEP 02</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Strategy</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Custom solution design tailored to your business needs and goals</p>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={300} className="relative group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform group-hover:scale-105 border border-purple-100">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mb-6">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div className="text-purple-600 font-bold text-sm mb-2 animate-pulse">STEP 03</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Implementation</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Seamless transition with dedicated project management and training</p>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={400} className="relative group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform group-hover:scale-105 border border-orange-100">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mb-6">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div className="text-orange-600 font-bold text-sm mb-2 animate-pulse">STEP 04</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Optimization</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Continuous improvement and scaling based on performance metrics</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fadeInUp" delay={500} className="text-center mt-12">
              <a href="/quote" className="bg-gradient-to-r from-text-teal-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group inline-block">
                <span className="inline-block group-hover:animate-bounce mr-2">🚀</span>
                Start Your Journey Today
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-text-teal-600 bg-clip-text text-transparent">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive BPO solutions tailored to your business needs
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Virtual Assistance", desc: "Dedicated admin support", icon: "👥", color: "blue" },
                { title: "Back-Office Operations", desc: "Process optimization", icon: "⚙️", color: "green" },
                { title: "Data Management", desc: "Secure data processing", icon: "📊", color: "purple" },
                { title: "Customer Support", desc: "24/7 client services", icon: "🎧", color: "orange" }
              ].map((service, index) => (
                <AnimatedSection
                  key={index}
                  animation="scaleIn"
                  delay={index * 100}
                  className="group"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100">
                    <div className="text-4xl mb-4 group-hover:animate-bounce transition-all duration-300">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">{service.desc}</p>
                    <a href="/services" className="text-teal-600 font-medium hover:text-teal-700 transition-colors group-hover:animate-pulse">
                      Learn More →
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-indigo-50/30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-text-teal-600 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trusted by businesses across Australia
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInLeft" delay={100} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-blue-100">
                  <div className="text-teal-600 text-5xl mb-4 group-hover:animate-pulse">&ldquo;</div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors">
                    Admin & Co Hub transformed our back-office operations. Their Australian-based team understands our business culture while delivering global-standard efficiency.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-teal-600 font-semibold">SM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">Sarah Mitchell</div>
                      <div className="text-sm text-gray-600">CEO, TechStart Melbourne</div>
                      <div className="text-sm text-teal-600 font-medium">TechStart</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={200} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-green-100">
                  <div className="text-green-600 text-5xl mb-4 group-hover:animate-pulse">&ldquo;</div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors">
                    The scalability and reliability of their services allowed us to focus on growth while they handled our administrative complexities seamlessly.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-semibold">DC</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">David Chen</div>
                      <div className="text-sm text-gray-600">Operations Director</div>
                      <div className="text-sm text-green-600 font-medium">GrowthCorp</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={300} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-purple-100">
                  <div className="text-purple-600 text-5xl mb-4 group-hover:animate-pulse">&ldquo;</div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors">
                    Outstanding customer service and attention to detail. They feel like an extension of our team rather than an external provider.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-semibold">ET</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Emma Thompson</div>
                      <div className="text-sm text-gray-600">Founder</div>
                      <div className="text-sm text-purple-600 font-medium">InnovateLab</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-800 relative overflow-hidden">
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
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of Australian businesses that trust Admin & Co Hub for their outsourcing needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/quote" className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group text-center flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Get Your Free Consultation
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-300 text-lg font-semibold transform hover:scale-105 text-center flex items-center justify-center group">
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

        <ScrollToTop />
      </div>
    </>
  );
}