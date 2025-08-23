export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                Admin & Co Hub
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">How It Works</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Success Stories</a>
                <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🇦🇺 Australian-Based • Global Reach
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Streamlined Outsourcing with an
                <span className="text-blue-600"> Australian Touch</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Focus on growing your business while we handle your administrative operations.
                Trusted local expertise with global efficiency and scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                  Get Started Today
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-lg font-semibold">
                  Learn How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted by 200+ Businesses</h3>
                  <p className="text-gray-600">From startups to enterprises across Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Admin & Co Hub?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine Australian business standards with global efficiency to deliver exceptional BPO services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Accountability</h3>
              <p className="text-gray-600">
                Australian-based management and oversight ensuring quality standards and timezone alignment
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Flexible services that grow with your business, from startup to enterprise scale
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security and compliance with Australian data protection standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <div className="text-sm font-medium text-gray-700">ISO 27001 Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🇦🇺</div>
              <div className="text-sm font-medium text-gray-700">Australian Privacy Act Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⭐</div>
              <div className="text-sm font-medium text-gray-700">200+ Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🕐</div>
              <div className="text-sm font-medium text-gray-700">24/7 Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Admin & Co Hub Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures smooth integration and measurable results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div className="text-blue-600 font-bold text-sm mb-2">STEP 01</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery</h3>
                  <p className="text-gray-600">We analyze your current processes and identify optimization opportunities</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div className="text-blue-600 font-bold text-sm mb-2">STEP 02</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy</h3>
                  <p className="text-gray-600">Custom solution design tailored to your business needs and goals</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div className="text-blue-600 font-bold text-sm mb-2">STEP 03</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
                  <p className="text-gray-600">Seamless transition with dedicated project management and training</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div className="text-blue-600 font-bold text-sm mb-2">STEP 04</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Optimization</h3>
                  <p className="text-gray-600">Continuous improvement and scaling based on performance metrics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive BPO solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Virtual Assistance", desc: "Dedicated admin support", icon: "👥" },
              { title: "Back-Office Operations", desc: "Process optimization", icon: "⚙️" },
              { title: "Data Management", desc: "Secure data processing", icon: "📊" },
              { title: "Customer Support", desc: "24/7 client services", icon: "🎧" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses across Australia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-blue-600 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                Admin & Co Hub transformed our back-office operations. Their Australian-based team understands our business culture while delivering global-standard efficiency.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                  <div className="text-sm text-gray-600">CEO, TechStart Melbourne</div>
                  <div className="text-sm text-blue-600">TechStart</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-blue-600 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                The scalability and reliability of their services allowed us to focus on growth while they handled our administrative complexities seamlessly.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">DC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">David Chen</div>
                  <div className="text-sm text-gray-600">Operations Director</div>
                  <div className="text-sm text-blue-600">GrowthCorp</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-blue-600 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                Outstanding customer service and attention to detail. They feel like an extension of our team rather than an external provider.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">ET</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Emma Thompson</div>
                  <div className="text-sm text-gray-600">Founder</div>
                  <div className="text-sm text-blue-600">InnovateLab</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Australian businesses that trust Admin & Co Hub for their outsourcing needs
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
            Get Your Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Admin & Co Hub</div>
              <p className="text-gray-400">
                Your trusted Australian BPO partner for streamlined business operations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Virtual Assistance</a></li>
                <li><a href="#" className="hover:text-white">Back-Office Operations</a></li>
                <li><a href="#" className="hover:text-white">Data Management</a></li>
                <li><a href="#" className="hover:text-white">Customer Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 hello@adminco.com.au</li>
                <li>📞 1300 ADMIN CO</li>
                <li>📍 Sydney, Australia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Admin & Co Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
