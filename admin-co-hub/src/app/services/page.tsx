'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ServiceModal from '@/components/ServiceModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };
  const services = [
    {
      title: "Virtual Assistance",
      description: "Dedicated administrative support tailored to your business needs",
      features: ["Email management", "Calendar scheduling", "Document preparation", "Client communication"],
      icon: "👥",
      color: "blue"
    },
    {
      title: "Back-Office Operations", 
      description: "Streamline your internal processes with expert operational support",
      features: ["Process optimization", "Workflow automation", "Quality assurance", "Performance reporting"],
      icon: "⚙️",
      color: "green"
    },
    {
      title: "Data Management",
      description: "Secure and efficient handling of your business data",
      features: ["Data entry & validation", "Database management", "Analytics & reporting", "Data security"],
      icon: "📊",
      color: "purple"
    },
    {
      title: "Customer Support",
      description: "Professional customer service that represents your brand",
      features: ["24/7 support coverage", "Multi-channel support", "Ticket management", "Customer satisfaction tracking"],
      icon: "🎧",
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    green: "bg-green-50 border-green-200 text-green-600", 
    purple: "bg-purple-50 border-purple-200 text-purple-600",
    orange: "bg-orange-50 border-orange-200 text-orange-600"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Comprehensive BPO Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From virtual assistance to complex back-office operations, we provide scalable solutions 
            that grow with your business needs.
          </p>
          <a href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold inline-block">
            Discuss Your Needs
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => openModal(service)}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                >
                  Learn More About {service.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can be tailored to your specific business requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold text-center">
              Schedule Consultation
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold text-center">
              Download Service Guide
            </a>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          service={selectedService}
        />
      )}
    </div>
  );
}