'use client';

import { useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import FloatingElements from '@/components/FloatingElements';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollToTop from '@/components/ScrollToTop';
import Navigation from '@/components/Navigation';

export default function Home() {
  useEffect(() => {
    // Handle smooth scrolling when landing on homepage with hash
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1000); // Wait for loading screen to finish
    }
  }, []);
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32 relative overflow-hidden">
          <ParticleBackground />
          <FloatingElements />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
                  🇦🇺 Australian-Based • Global Reach
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Streamlined Outsourcing with an
                  <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse"> Australian Touch</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Focus on growing your business while we handle your administrative operations.
                  Trusted local expertise with global efficiency and scalability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/quote" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group text-center">
                    <span className="inline-block group-hover:animate-pulse">🚀</span> Get Started Today
                  </a>
                  <a href="#how-it-works" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-lg text-center">
                    Learn How It Works
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight" delay={300}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-blue-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <svg className="w-8 h-8 text-blue-600 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Trusted by <AnimatedCounter end={200} suffix="+" /> Businesses
                    </h3>
                    <p className="text-gray-600">From startups to enterprises across Australia</p>

                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          <AnimatedCounter end={99} suffix="%" />
                        </div>
                        <div className="text-xs text-gray-500">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                Why Choose Admin & Co Hub?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine Australian business standards with global efficiency to deliver exceptional BPO services
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInUp" delay={100} className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
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
        <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50 border-y relative overflow-hidden">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">🛡️</div>
                  <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">ISO 27001 Certified</div>
                </div>
                <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">🇦🇺</div>
                  <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Australian Privacy Act Compliant</div>
                </div>
                <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">⭐</div>
                  <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    <AnimatedCounter end={200} suffix="+" /> Happy Clients
                  </div>
                </div>
                <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">🕐</div>
                  <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">24/7 Support</div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 group-hover:animate-spin">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <div className="text-blue-600 font-bold text-sm mb-2 animate-pulse">STEP 01</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Discovery</h3>
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-6 group-hover:animate-spin">
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mb-6 group-hover:animate-spin">
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mb-6 group-hover:animate-spin">
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
              <a href="/quote" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group inline-block">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">{service.desc}</p>
                    <a href="/services" className="text-blue-600 font-medium hover:text-blue-700 transition-colors group-hover:animate-pulse">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trusted by businesses across Australia
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInLeft" delay={100} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-blue-100">
                  <div className="text-blue-600 text-5xl mb-4 group-hover:animate-pulse">&ldquo;</div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors">
                    Admin & Co Hub transformed our back-office operations. Their Australian-based team understands our business culture while delivering global-standard efficiency.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4 group-hover:animate-spin">
                      <span className="text-blue-600 font-semibold">SM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Sarah Mitchell</div>
                      <div className="text-sm text-gray-600">CEO, TechStart Melbourne</div>
                      <div className="text-sm text-blue-600 font-medium">TechStart</div>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-4 group-hover:animate-spin">
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
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4 group-hover:animate-spin">
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
        <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
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
                <a href="/quote" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group text-center">
                  <span className="inline-block group-hover:animate-bounce mr-2">📞</span>
                  Get Your Free Consultation
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg font-semibold transform hover:scale-105 text-center">
                  <span className="inline-block group-hover:animate-bounce mr-2">📧</span>
                  Contact Us Today
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <AnimatedSection animation="fadeInLeft">
                <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  <span className="inline-block animate-pulse mr-2">⚡</span>
                  Admin & Co Hub
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Your trusted Australian BPO partner for streamlined business operations.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={100}>
                <h3 className="text-lg font-semibold mb-4 text-blue-400">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/services" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Virtual Assistance</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Back-Office Operations</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Data Management</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Customer Support</a></li>
                </ul>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={200}>
                <h3 className="text-lg font-semibold mb-4 text-green-400">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">About Us</a></li>
                  <li><a href="#testimonials" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Success Stories</a></li>
                  <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Careers</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Contact</a></li>
                </ul>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight" delay={300}>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white transition-colors cursor-pointer">📧 hello@adminco.com.au</li>
                  <li className="hover:text-white transition-colors cursor-pointer">� 1e300 ADMIN CO</li>
                  <li className="hover:text-white transition-colors cursor-pointer">� Syd0ney, Australia</li>
                </ul>
              </AnimatedSection>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <AnimatedSection animation="fadeInUp" delay={400}>
                <p className="hover:text-white transition-colors">
                  &copy; 2025 Admin & Co Hub. All rights reserved.
                  <span className="inline-block animate-pulse ml-2">🇦🇺</span>
                </p>
              </AnimatedSection>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </>
  );
}