'use client';

import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Admin & Co Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your trusted Australian BPO partner, combining local accountability with global efficiency 
              to deliver exceptional business process outsourcing services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, Admin & Co Hub emerged from a simple observation: Australian businesses 
                needed outsourcing solutions that understood their unique market requirements while 
                delivering world-class efficiency.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We bridge the gap between local accountability and global scalability, ensuring your 
                business operations run seamlessly while you focus on growth and innovation.
              </p>
              <p className="text-lg text-gray-600">
                Today, we proudly serve over 200 businesses across Australia, from innovative startups 
                to established enterprises, helping them streamline operations and achieve their goals.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight" delay={300}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      <AnimatedCounter end={200} suffix="+" />
                    </div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      <AnimatedCounter end={6} suffix=" Years" />
                    </div>
                    <div className="text-gray-600">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      <AnimatedCounter end={99} suffix=".9%" />
                    </div>
                    <div className="text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      <AnimatedCounter end={24} suffix="/7" />
                    </div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeInUp" delay={100}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trust & Transparency</h3>
                <p className="text-gray-600">
                  We build lasting partnerships through honest communication, clear processes, 
                  and reliable delivery on our commitments.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence in Execution</h3>
                <p className="text-gray-600">
                  We strive for perfection in every task, continuously improving our processes 
                  and exceeding client expectations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation & Growth</h3>
                <p className="text-gray-600">
                  We embrace new technologies and methodologies to help our clients stay 
                  ahead in their competitive markets.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind Admin & Co Hub</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeInLeft" delay={100}>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-blue-600">👨‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
                <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600">
                  15+ years in business operations and process optimization. Former McKinsey consultant 
                  with expertise in scaling Australian businesses.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-green-600">👩‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Williams</h3>
                <p className="text-green-600 font-medium mb-3">COO</p>
                <p className="text-gray-600">
                  Operations expert with 12+ years managing large-scale BPO implementations. 
                  Specializes in quality assurance and client success.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={300}>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-purple-600">👨‍💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">David Kumar</h3>
                <p className="text-purple-600 font-medium mb-3">CTO</p>
                <p className="text-gray-600">
                  Technology leader with expertise in automation, AI integration, and secure 
                  data management systems for enterprise clients.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the growing number of Australian businesses that trust Admin & Co Hub 
              for their outsourcing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold inline-block"
              >
                Get Started Today
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold inline-block"
              >
                View Our Services
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}