'use client';

import { useState } from 'react';
import type { MouseEvent } from 'react';
import Navigation from '@/components/Navigation';
import ServiceModal from '@/components/ServiceModal';
import AnimatedSection from '@/components/AnimatedSection';
import { MdPeople, MdSettings, MdBarChart, MdHeadset } from 'react-icons/md';

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
      icon: MdPeople,
      color: "blue"
    },
    {
      title: "Back-Office Operations",
      description: "Streamline your internal processes with expert operational support",
      features: ["Process optimization", "Workflow automation", "Quality assurance", "Performance reporting"],
      icon: MdSettings,
      color: "green"
    },
    {
      title: "Data Management",
      description: "Secure and efficient handling of your business data",
      features: ["Data entry & validation", "Database management", "Analytics & reporting", "Data security"],
      icon: MdBarChart,
      color: "purple"
    },
    {
      title: "Customer Support",
      description: "Professional customer service that represents your brand",
      features: ["24/7 support coverage", "Multi-channel support", "Ticket management", "Customer satisfaction tracking"],
      icon: MdHeadset,
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: "border-2",
    green: "border-2",
    purple: "border-2",
    orange: "border-2"
  };

  const getColorStyles = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          backgroundColor: 'rgba(120, 179, 173, 0.1)',
          borderColor: 'rgba(120, 179, 173, 0.3)',
          color: 'rgb(120, 179, 173)'
        };
      case 'green':
        return {
          backgroundColor: 'rgba(80, 135, 137, 0.1)',
          borderColor: 'rgba(80, 135, 137, 0.3)',
          color: 'rgb(80, 135, 137)'
        };
      case 'purple':
        return {
          backgroundColor: 'rgba(202, 176, 154, 0.1)',
          borderColor: 'rgba(202, 176, 154, 0.3)',
          color: 'rgb(202, 176, 154)'
        };
      case 'orange':
        return {
          backgroundColor: 'rgba(100, 116, 139, 0.1)',
          borderColor: 'rgba(100, 116, 139, 0.3)',
          color: 'rgb(100, 116, 139)'
        };
      default:
        return {};
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className=" pt-28 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgb(120, 179, 173), rgb(240, 253, 250), rgb(245, 240, 235))' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(120, 179, 173)' }}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full animate-pulse delay-1000" style={{ backgroundColor: 'rgb(80, 135, 137)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, rgb(120, 179, 173), rgb(80, 135, 137))', WebkitBackgroundClip: 'text' }}>
              Comprehensive BPO Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              From virtual assistance to complex back-office operations, we provide scalable solutions
              that grow with your business needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${colorClasses[service.color as keyof typeof colorClasses]}`} style={getColorStyles(service.color)}>
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgb(80, 135, 137)' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => openModal(service)}
                    className="w-full text-white py-3 rounded-lg transition-colors font-semibold"
                    style={{ backgroundColor: 'rgb(120, 179, 173)' }}
                    onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = 'rgb(100, 159, 153)'}
                    onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = 'rgb(120, 179, 173)'}
                  >
                    Learn More About {service.title}
                  </button>
                </div>
              );
            })}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our services can be tailored to your specific business requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group text-center flex items-center justify-center" style={{ color: 'rgb(15, 27, 65)' }}>
                Schedule Consultation
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 text-lg font-semibold transform hover:scale-105 text-center flex items-center justify-center group" style={{ '--hover-text-color': 'rgb(15, 27, 65)' } as React.CSSProperties} onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgb(15, 27, 65)'} onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'white'}>
                Download Service Guide
              </a>
            </div>
          </AnimatedSection>
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