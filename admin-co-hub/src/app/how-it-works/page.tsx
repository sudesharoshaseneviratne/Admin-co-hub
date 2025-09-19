'use client';

import type { MouseEvent } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import { MdSearch, MdDescription, MdBolt, MdTrendingUp, MdAnalytics, MdDesignServices, MdRocketLaunch, MdAutoGraph } from 'react-icons/md';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgb(120, 179, 173), rgb(240, 253, 250), rgb(245, 240, 235))' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(120, 179, 173)' }}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full animate-pulse delay-1000" style={{ backgroundColor: 'rgb(80, 135, 137)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, rgb(120, 179, 173), rgb(80, 135, 137))', WebkitBackgroundClip: 'text' }}>
              How Admin & Co. Hub Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven 4-step process ensures smooth integration and measurable results for your business
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="scaleIn" delay={100} className="relative group">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform group-hover:scale-105 border" style={{ borderColor: 'rgba(120, 179, 173, 0.2)' }}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.2), rgba(120, 179, 173, 0.3))' }}>
                    <MdSearch className="text-2xl" style={{ color: 'rgb(120, 179, 173)' }} />
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
                    <MdDescription className="text-2xl" style={{ color: 'rgb(80, 135, 137)' }} />
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
                    <MdBolt className="text-2xl" style={{ color: 'rgb(202, 176, 154)' }} />
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
                    <MdTrendingUp className="text-2xl text-slate-600" />
                  </div>
                  <div className="text-slate-600 font-bold text-sm mb-2 animate-pulse">STEP 04</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-slate-600 transition-colors">Optimization</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Continuous improvement and scaling based on performance metrics</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgb(249, 250, 251), rgba(120, 179, 173, 0.1))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, rgb(17, 24, 39), rgb(120, 179, 173))', WebkitBackgroundClip: 'text' }}>
              Detailed Process Breakdown
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding each step in detail helps you see how we deliver exceptional results
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {/* Step 1 Details */}
            <AnimatedSection animation="fadeInLeft" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(120, 179, 173, 0.1)', color: 'rgb(120, 179, 173)' }}>
                  <MdSearch className="mr-2" /> Discovery Phase
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Business</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We start by conducting a comprehensive analysis of your current operations, identifying pain points,
                  inefficiencies, and opportunities for improvement. Our team works closely with your stakeholders to
                  understand your unique business requirements.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(120, 179, 173)' }}>✓</span>
                    Process mapping and documentation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(120, 179, 173)' }}>✓</span>
                    Stakeholder interviews and requirements gathering
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(120, 179, 173)' }}>✓</span>
                    Current system and workflow analysis
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(120, 179, 173)' }}>✓</span>
                    Opportunity identification and prioritization
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border" style={{ borderColor: 'rgba(120, 179, 173, 0.2)' }}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.2), rgba(120, 179, 173, 0.3))' }}>
                    <MdAnalytics className="text-4xl" style={{ color: 'rgb(120, 179, 173)' }} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Discovery Timeline</h4>
                  <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(120, 179, 173)' }}>1-2 Weeks</div>
                  <p className="text-gray-600">Comprehensive business analysis</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 2 Details */}
            <AnimatedSection animation="fadeInRight" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-xl p-8 shadow-lg border" style={{ borderColor: 'rgba(80, 135, 137, 0.2)' }}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, rgba(80, 135, 137, 0.2), rgba(80, 135, 137, 0.3))' }}>
                    <MdDesignServices className="text-4xl" style={{ color: 'rgb(80, 135, 137)' }} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Strategy Timeline</h4>
                  <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(80, 135, 137)' }}>1-2 Weeks</div>
                  <p className="text-gray-600">Custom solution design</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(80, 135, 137, 0.1)', color: 'rgb(80, 135, 137)' }}>
                  <MdDesignServices className="mr-2" /> Strategy Phase
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Crafting Your Solution</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Based on our discovery findings, we design a customized solution that addresses your specific needs.
                  This includes defining service levels, establishing KPIs, and creating a detailed implementation roadmap.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(80, 135, 137)' }}>✓</span>
                    Custom solution architecture design
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(80, 135, 137)' }}>✓</span>
                    Service level agreement definition
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(80, 135, 137)' }}>✓</span>
                    KPI and metrics framework setup
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(80, 135, 137)' }}>✓</span>
                    Implementation timeline and milestones
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Step 3 Details */}
            <AnimatedSection animation="fadeInLeft" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(202, 176, 154, 0.1)', color: 'rgb(202, 176, 154)' }}>
                  <MdRocketLaunch className="mr-2" /> Implementation Phase
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Seamless Transition</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our experienced project managers ensure a smooth transition with minimal disruption to your operations.
                  We provide comprehensive training and support throughout the implementation process.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(202, 176, 154)' }}>✓</span>
                    Dedicated project management
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(202, 176, 154)' }}>✓</span>
                    Team training and onboarding
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(202, 176, 154)' }}>✓</span>
                    System integration and testing
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: 'rgb(202, 176, 154)' }}>✓</span>
                    Phased rollout and go-live support
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border" style={{ borderColor: 'rgba(202, 176, 154, 0.2)' }}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, rgba(202, 176, 154, 0.2), rgba(202, 176, 154, 0.3))' }}>
                    <MdRocketLaunch className="text-4xl" style={{ color: 'rgb(202, 176, 154)' }} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Implementation Timeline</h4>
                  <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(202, 176, 154)' }}>2-4 Weeks</div>
                  <p className="text-gray-600">Seamless transition process</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 4 Details */}
            <AnimatedSection animation="fadeInRight" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MdAutoGraph className="text-4xl text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Optimization Timeline</h4>
                  <div className="text-3xl font-bold text-slate-600 mb-2">Ongoing</div>
                  <p className="text-gray-600">Continuous improvement</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <MdAutoGraph className="mr-2" /> Optimization Phase
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Continuous Improvement</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We continuously monitor performance metrics and implement improvements to ensure optimal results.
                  Regular reviews and optimizations help scale your operations as your business grows.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2">✓</span>
                    Performance monitoring and reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2">✓</span>
                    Regular review meetings and feedback
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2">✓</span>
                    Process optimization and refinement
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-600 mr-2">✓</span>
                    Scaling support as business grows
                  </li>
                </ul>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our proven process can transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group text-center flex items-center justify-center" style={{ color: 'rgb(15, 27, 65)' }}>
                Get Started Today
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 text-lg font-semibold transform hover:scale-105 text-center flex items-center justify-center group" style={{ '--hover-text-color': 'rgb(15, 27, 65)' } as React.CSSProperties} onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgb(15, 27, 65)'} onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'white'}>
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}