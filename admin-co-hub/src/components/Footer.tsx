import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-white py-8 relative overflow-hidden" style={{ backgroundColor: 'rgb(80, 135, 137)' }}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(to right, rgb(120, 179, 173), rgb(80, 135, 137))' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <AnimatedSection animation="fadeInLeft">
            <div className="flex items-center mb-3">
              <Image
                src="/logo-transparent.png"
                alt="Admin & Co. Hub Logo"
                width={32}
                height={32}
                className="mr-2"
                style={{ filter: 'drop-shadow(0.25px 0.25px 0px black) drop-shadow(-0.25px -0.25px 0px black) drop-shadow(0.25px -0.25px 0px black) drop-shadow(-0.25px 0.25px 0px black)' }}
              />
              <div className="text-xl font-bold" style={{ color: 'rgb(202, 176, 154)' }}>
                Admin & Co. Hub
              </div>
            </div>
            <p className="text-gray-100 text-sm leading-relaxed">
              Your trusted Australian BPO partner for streamlined business operations.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={100}>
            <h3 className="text-base font-semibold mb-3 text-white">Services</h3>
            <ul className="space-y-1 text-gray-100 text-sm">
              <li><a href="/services" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Virtual Assistance</a></li>
              <li><a href="/services" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Back-Office Operations</a></li>
              <li><a href="/services" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Data Management</a></li>
              <li><a href="/services" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Customer Support</a></li>
            </ul>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={200}>
            <h3 className="text-base font-semibold mb-3 text-white">Company</h3>
            <ul className="space-y-1 text-gray-100 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Contact</a></li>
            </ul>
          </AnimatedSection>
          <AnimatedSection animation="fadeInRight" delay={300}>
            <h3 className="text-base font-semibold mb-3 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-100 text-sm">
              <li className="flex items-center hover:text-white transition-colors cursor-pointer group">
                <div className="w-4 h-4 mr-2 flex-shrink-0">
                  <svg className="w-4 h-4 text-white group-hover:text-gray-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>contact@admincohub.au</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer group">
                <div className="w-4 h-4 mr-2 flex-shrink-0">
                  <svg className="w-4 h-4 text-white group-hover:text-gray-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+0620 0000 0000</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer group">
                <div className="w-4 h-4 mr-2 flex-shrink-0">
                  <svg className="w-4 h-4 text-white group-hover:text-gray-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Perth, Australia.</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer group">
                <div className="w-4 h-4 mr-2 flex-shrink-0">
                  <svg className="w-4 h-4 text-white group-hover:text-gray-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>160, Avissawella Rd, Wellampitiya,<br /> Sri Lanka. 10600.</span>
              </li>
            </ul>
          </AnimatedSection>


        </div>
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-100">
          <AnimatedSection animation="fadeInUp" delay={400}>
            <p className="text-sm hover:text-white transition-colors">
              &copy; 2025 Admin & Co. Hub. All rights reserved.
              <span className="inline-block animate-pulse ml-2">🇦🇺</span>
            </p>
            <p className="text-xs text-gray-200 mt-1 hover:text-white transition-colors">
              Powered by BuildUps
            </p>
          </AnimatedSection>
        </div>
      </div>
    </footer>
  );
}