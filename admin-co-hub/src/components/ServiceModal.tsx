'use client';

import { useEffect } from 'react';
import type { MouseEvent } from 'react';
import type { IconType } from 'react-icons';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    icon: IconType;
    color: string;
    detailedDescription?: string;
    benefits?: string[];
    pricing?: string;
  };
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getColorStyles = (color: string) => {
    switch(color) {
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

  const serviceDetails = {
    "Virtual Assistance": {
      detailedDescription: "Our virtual assistants are skilled professionals who can handle a wide range of administrative tasks, allowing you to focus on core business activities. They work as an extension of your team, providing reliable support across multiple time zones.",
      benefits: [
        "Reduce operational costs by up to 60%",
        "Access to skilled professionals without hiring overhead",
        "Flexible scaling based on business needs",
        "24/7 availability across different time zones",
        "Improved work-life balance for your core team"
      ],
      pricing: "Starting from $25/hour"
    },
    "Back-Office Operations": {
      detailedDescription: "Streamline your internal processes with our comprehensive back-office support. We optimize workflows, implement quality controls, and provide detailed reporting to help you make informed business decisions.",
      benefits: [
        "Improved operational efficiency",
        "Standardized processes and procedures",
        "Real-time performance monitoring",
        "Cost reduction through automation",
        "Enhanced data accuracy and compliance"
      ],
      pricing: "Custom pricing based on scope"
    },
    "Data Management": {
      detailedDescription: "Secure, accurate, and efficient data handling services that ensure your business information is properly organized, validated, and accessible when you need it. We follow strict security protocols to protect your sensitive data.",
      benefits: [
        "99.9% data accuracy guarantee",
        "GDPR and Australian Privacy Act compliant",
        "Advanced security measures and encryption",
        "Real-time data processing and reporting",
        "Scalable solutions for growing data needs"
      ],
      pricing: "Starting from $20/hour"
    },
    "Customer Support": {
      detailedDescription: "Professional customer service that represents your brand with excellence. Our trained support agents provide multi-channel support, ensuring your customers receive timely and helpful assistance around the clock.",
      benefits: [
        "24/7 customer support coverage",
        "Multi-language support available",
        "Advanced ticketing and CRM integration",
        "Detailed performance analytics",
        "Brand-consistent communication"
      ],
      pricing: "Starting from $30/hour"
    }
  };

  const details = serviceDetails[service.title as keyof typeof serviceDetails] || {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 border-2" style={getColorStyles(service.color)}>
              <service.icon className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Overview</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            {details.detailedDescription && (
              <p className="text-gray-600">{details.detailedDescription}</p>
            )}
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgb(80, 135, 137)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          {details.benefits && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0" style={{ backgroundColor: 'rgba(120, 179, 173, 0.2)' }}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgb(120, 179, 173)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing */}
          {details.pricing && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
              <p className="text-2xl font-bold mb-2" style={{ color: 'rgb(120, 179, 173)' }}>{details.pricing}</p>
              <p className="text-sm text-gray-600">
                Final pricing depends on specific requirements and volume. Contact us for a detailed quote.
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/quote" 
              className="text-white px-6 py-3 rounded-lg transition-colors font-semibold text-center flex-1"
              style={{ backgroundColor: 'rgb(120, 179, 173)' }}
              onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(100, 159, 153)'}
              onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(120, 179, 173)'}
            >
              Get Custom Quote
            </a>
            <a 
              href="/contact" 
              className="border-2 px-6 py-3 rounded-lg transition-colors font-semibold text-center flex-1"
              style={{ borderColor: 'rgb(120, 179, 173)', color: 'rgb(120, 179, 173)' }}
              onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = 'rgb(120, 179, 173)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'rgb(120, 179, 173)';
              }}
            >
              Discuss Requirements
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}