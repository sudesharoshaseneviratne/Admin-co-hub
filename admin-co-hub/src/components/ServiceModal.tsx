'use client';

import { useEffect } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    icon: string;
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

  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    green: "bg-green-50 border-green-200 text-green-600", 
    purple: "bg-purple-50 border-purple-200 text-purple-600",
    orange: "bg-orange-50 border-orange-200 text-orange-600"
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
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
              <span className="text-2xl">{service.icon}</span>
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
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <p className="text-2xl font-bold text-blue-600 mb-2">{details.pricing}</p>
              <p className="text-sm text-gray-600">
                Final pricing depends on specific requirements and volume. Contact us for a detailed quote.
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/quote" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center flex-1"
            >
              Get Custom Quote
            </a>
            <a 
              href="/contact" 
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-center flex-1"
            >
              Discuss Requirements
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}