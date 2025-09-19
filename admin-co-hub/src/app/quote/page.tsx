'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    employees: '',
    services: [] as string[],
    timeline: '',
    budget: '',
    description: '',
    currentChallenges: '',
    goals: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Virtual Assistance',
    'Back-Office Operations',
    'Data Management',
    'Customer Support',
    'Document Processing',
    'Lead Generation',
    'Social Media Management',
    'Bookkeeping & Accounting',
    'Custom Solution'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (service: string) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];

    setFormData({
      ...formData,
      services: updatedServices
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-green-800 mb-4">Quote Request Submitted!</h1>
              <p className="text-xl text-green-700 mb-6">
                Thank you for your detailed information. Our team will analyze your requirements and
                prepare a customized proposal for your business.
              </p>
              <div className="bg-white rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: 'rgba(120, 179, 173, 0.1)' }}>
                      <span className="font-semibold text-sm" style={{ color: 'rgb(120, 179, 173)' }}>1</span>
                    </div>
                    <span className="text-gray-700">Our team reviews your requirements (within 2 hours)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: 'rgba(120, 179, 173, 0.1)' }}>
                      <span className="font-semibold text-sm" style={{ color: 'rgb(120, 179, 173)' }}>2</span>
                    </div>
                    <span className="text-gray-700">We prepare a detailed proposal and pricing (within 24 hours)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: 'rgba(120, 179, 173, 0.1)' }}>
                      <span className="font-semibold text-sm" style={{ color: 'rgb(120, 179, 173)' }}>3</span>
                    </div>
                    <span className="text-gray-700">Schedule a consultation call to discuss details</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="text-white px-8 py-3 rounded-lg transition-colors font-semibold"
                  style={{ backgroundColor: 'rgb(120, 179, 173)' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(100, 159, 153)'}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(120, 179, 173)'}
                >
                  Return Home
                </Link>
                <a
                  href="/services"
                  className="border-2 px-8 py-3 rounded-lg transition-colors font-semibold"
                  style={{ borderColor: 'rgb(120, 179, 173)', color: 'rgb(120, 179, 173)' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = 'rgb(120, 179, 173)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'rgb(120, 179, 173)';
                  }}
                >
                  Learn More About Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />


      {/* Quote Form */}
      <section className="pt-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${currentStep >= step
                    ? 'text-white'
                    : 'bg-gray-200 text-gray-600'
                    }`} style={currentStep >= step ? { backgroundColor: 'rgb(120, 179, 173)' } : {}}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${currentStep > step ? '' : 'bg-gray-200'
                      }`} style={currentStep > step ? { backgroundColor: 'rgb(120, 179, 173)' } : {}}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Step {currentStep} of 3: {
                  currentStep === 1 ? 'Basic Information' :
                    currentStep === 2 ? 'Service Requirements' :
                      'Project Details'
                }
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <AnimatedSection animation="fadeInUp">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Basic Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                      onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                      onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                      onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                      onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                      onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                      onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                      onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                      onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                      placeholder="+61 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                      onFocus={(e: React.FocusEvent<HTMLSelectElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                      onBlur={(e: React.FocusEvent<HTMLSelectElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                    >
                      <option value="">Select your industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                      onFocus={(e: React.FocusEvent<HTMLSelectElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                      onBlur={(e: React.FocusEvent<HTMLSelectElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Step 2: Service Requirements */}
            {currentStep === 2 && (
              <AnimatedSection animation="fadeInUp">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Requirements</h2>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Which services are you interested in? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <div key={service} className="relative">
                        <input
                          type="checkbox"
                          id={service}
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="sr-only"
                        />
                        <label
                          htmlFor={service}
                          className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.services.includes(service)
                            ? 'text-white'
                            : 'border-gray-200'
                            }`}
                          style={formData.services.includes(service) 
                            ? { 
                                borderColor: 'rgb(120, 179, 173)', 
                                backgroundColor: 'rgba(120, 179, 173, 0.1)',
                                color: 'rgb(120, 179, 173)'
                              }
                            : {}}
                          onMouseEnter={(e: React.MouseEvent<HTMLLabelElement>) => {
                            if (!formData.services.includes(service)) {
                              e.currentTarget.style.borderColor = 'rgba(120, 179, 173, 0.5)';
                            }
                          }}
                          onMouseLeave={(e: React.MouseEvent<HTMLLabelElement>) => {
                            if (!formData.services.includes(service)) {
                              e.currentTarget.style.borderColor = 'rgb(229, 231, 235)';
                            }
                          }}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${formData.services.includes(service)
                              ? 'text-white'
                              : 'border-gray-300'
                              }`}
                              style={formData.services.includes(service) 
                                ? { 
                                    borderColor: 'rgb(120, 179, 173)', 
                                    backgroundColor: 'rgb(120, 179, 173)' 
                                  }
                                : {}}>
                              {formData.services.includes(service) && (
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <span className="font-medium">{service}</span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                      onFocus={(e: React.FocusEvent<HTMLSelectElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                      onBlur={(e: React.FocusEvent<HTMLSelectElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Within 1 week)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months+">6+ months</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                      onFocus={(e: React.FocusEvent<HTMLSelectElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                      onBlur={(e: React.FocusEvent<HTMLSelectElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Step 3: Project Details */}
            {currentStep === 3 && (
              <AnimatedSection animation="fadeInUp">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Details</h2>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                    onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                    onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                    placeholder="Describe your project requirements, goals, and any specific needs..."
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Challenges
                  </label>
                  <textarea
                    name="currentChallenges"
                    rows={3}
                    value={formData.currentChallenges}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                    onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                    onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                    placeholder="What challenges are you currently facing that you'd like us to help solve?"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Success Goals
                  </label>
                  <textarea
                    name="goals"
                    rows={3}
                    value={formData.goals}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': 'rgba(120, 179, 173, 0.5)' } as React.CSSProperties}
                    onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => e.currentTarget.style.borderColor = 'rgb(120, 179, 173)'}
                    onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
                    placeholder="What would success look like for this project? What are your key objectives?"
                  />
                </div>
              </AnimatedSection>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                style={currentStep !== 1 ? { color: 'rgb(120, 179, 173)' } : {}}
                disabled={currentStep === 1}
              >
                Previous
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                  style={{ backgroundColor: 'rgb(120, 179, 173)' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = 'rgb(100, 159, 153)'}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = 'rgb(120, 179, 173)'}
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white px-8 py-3 rounded-lg transition-colors font-semibold"
                  style={{ 
                    backgroundColor: isSubmitting ? 'rgba(120, 179, 173, 0.6)' : 'rgb(120, 179, 173)' 
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = 'rgb(100, 159, 153)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = 'rgb(120, 179, 173)';
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}