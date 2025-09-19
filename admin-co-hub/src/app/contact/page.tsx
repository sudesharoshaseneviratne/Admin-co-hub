import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/Navigation';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Contact Section */}
      <section className="pt-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: 'rgb(120, 179, 173)' }}>Get In Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(120, 179, 173, 0.1)' }}>
                    <svg className="w-6 h-6" style={{ color: 'rgb(120, 179, 173)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: 'rgb(120, 179, 173)' }}>Phone</h3>
                    <p className="text-gray-600">+0620 0000 0000</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM AEST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(80, 135, 137, 0.1)' }}>
                    <svg className="w-6 h-6" style={{ color: 'rgb(80, 135, 137)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: 'rgb(80, 135, 137)' }}>Email</h3>
                    <p className="text-gray-600">contact@admincohub.au</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(202, 176, 154, 0.1)' }}>
                    <svg className="w-6 h-6" style={{ color: 'rgb(202, 176, 154)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: 'rgb(202, 176, 154)' }}>Office</h3>
                    <p className="text-gray-600">Perth, Australia.</p>
                    <p className="text-gray-600">160, Avissawella Rd, Wellampitiya,<br /> Sri Lanka. 10600.</p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 p-6 rounded-xl" style={{ backgroundColor: 'rgba(120, 179, 173, 0.1)' }}>
                <h3 className="text-lg font-semibold text-gray-600 mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: 'rgb(120, 179, 173)' }}>200+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: 'rgb(120, 179, 173)' }}>24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: 'rgb(120, 179, 173)' }}>99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: 'rgb(120, 179, 173)' }}>5★</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'rgb(120, 179, 173)' }}>Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}