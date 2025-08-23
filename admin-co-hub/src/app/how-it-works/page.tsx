'use client';

import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-indigo-300 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              How Admin & Co Hub Works
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
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform group-hover:scale-105 border border-blue-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6">
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
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
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
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  🔍 Discovery Phase
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Business</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We start by conducting a comprehensive analysis of your current operations, identifying pain points, 
                  inefficiencies, and opportunities for improvement. Our team works closely with your stakeholders to 
                  understand your unique business requirements.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Process mapping and documentation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Stakeholder interviews and requirements gathering
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Current system and workflow analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Opportunity identification and prioritization
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🔍</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Discovery Timeline</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">1-2 Weeks</div>
                  <p className="text-gray-600">Comprehensive business analysis</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 2 Details */}
            <AnimatedSection animation="fadeInRight" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-xl p-8 shadow-lg border border-green-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">📋</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Strategy Timeline</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">1-2 Weeks</div>
                  <p className="text-gray-600">Custom solution design</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  📋 Strategy Phase
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Crafting Your Solution</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Based on our discovery findings, we design a customized solution that addresses your specific needs. 
                  This includes defining service levels, establishing KPIs, and creating a detailed implementation roadmap.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Custom solution architecture design
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Service level agreement definition
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    KPI and metrics framework setup
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Implementation timeline and milestones
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Step 3 Details */}
            <AnimatedSection animation="fadeInLeft" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  ⚡ Implementation Phase
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Seamless Transition</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our experienced project managers ensure a smooth transition with minimal disruption to your operations. 
                  We provide comprehensive training and support throughout the implementation process.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Dedicated project management
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Team training and onboarding
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    System integration and testing
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Phased rollout and go-live support
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Implementation Timeline</h4>
                  <div className="text-3xl font-bold text-purple-600 mb-2">2-4 Weeks</div>
                  <p className="text-gray-600">Seamless transition process</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 4 Details */}
            <AnimatedSection animation="fadeInRight" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-xl p-8 shadow-lg border border-orange-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">📈</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Optimization Timeline</h4>
                  <div className="text-3xl font-bold text-orange-600 mb-2">Ongoing</div>
                  <p className="text-gray-600">Continuous improvement</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  📈 Optimization Phase
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Continuous Improvement</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We continuously monitor performance metrics and implement improvements to ensure optimal results. 
                  Regular reviews and optimizations help scale your operations as your business grows.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Performance monitoring and reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Regular review meetings and feedback
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Process optimization and refinement
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Scaling support as business grows
                  </li>
                </ul>
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
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our proven process can transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group text-center">
                <span className="inline-block group-hover:animate-bounce mr-2">🚀</span>
                Get Started Today
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg font-semibold transform hover:scale-105 text-center">
                <span className="inline-block group-hover:animate-bounce mr-2">📧</span>
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}