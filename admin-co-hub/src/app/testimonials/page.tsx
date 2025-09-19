'use client';

import Image from 'next/image';
import type { MouseEvent } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import { MdSentimentSatisfiedAlt, MdHandshake, MdSchedule, MdEmojiEvents, MdTrendingUp } from 'react-icons/md';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      position: "CEO",
      company: "TechStart Melbourne",
      image: "/testimonials/sarah-mitchell.jpg",
      rating: 5,
      text: "Admin & Co. Hub transformed our back-office operations. Their Australian-based team understands our business culture while delivering global-standard efficiency. We&apos;ve seen a 40% reduction in administrative overhead since partnering with them.",
      results: ["40% cost reduction", "3x faster processing", "99.9% accuracy rate"],
      industry: "Technology",
      color: "blue"
    },
    {
      name: "David Chen",
      position: "Operations Director",
      company: "GrowthCorp",
      image: "/testimonials/david-chen.jpg",
      rating: 5,
      text: "The scalability and reliability of their services allowed us to focus on growth while they handled our administrative complexities seamlessly. Their 24/7 support has been invaluable for our expanding operations.",
      results: ["24/7 support coverage", "50% faster response times", "Zero downtime"],
      industry: "Professional Services",
      color: "green"
    },
    {
      name: "Emma Thompson",
      position: "Founder",
      company: "InnovateLab",
      image: "/testimonials/emma-thompson.jpg",
      rating: 5,
      text: "Outstanding customer service and attention to detail. They feel like an extension of our team rather than an external provider. The quality of work and communication has exceeded our expectations.",
      results: ["98% client satisfaction", "30% productivity increase", "Same-day turnaround"],
      industry: "Healthcare",
      color: "purple"
    },
    {
      name: "Michael Rodriguez",
      position: "Managing Director",
      company: "Retail Solutions AU",
      image: "/testimonials/michael-rodriguez.jpg",
      rating: 5,
      text: "Admin & Co. Hub's data management services have revolutionized how we handle customer information. Their security protocols and accuracy standards are exactly what we needed for compliance.",
      results: ["100% compliance rate", "60% faster data processing", "Zero security incidents"],
      industry: "Retail",
      color: "orange"
    },
    {
      name: "Lisa Wang",
      position: "COO",
      company: "FinanceFirst",
      image: "/testimonials/lisa-wang.jpg",
      rating: 5,
      text: "Their virtual assistance team has become an integral part of our operations. The level of professionalism and expertise they bring is remarkable. We couldn't imagine running our business without them now.",
      results: ["5 dedicated VAs", "35% cost savings", "24/7 availability"],
      industry: "Finance",
      color: "indigo"
    },
    {
      name: "James Patterson",
      position: "CEO",
      company: "PropertyPro",
      image: "/testimonials/james-patterson.jpg",
      rating: 5,
      text: "The customer support services provided by Admin & Co. Hub have significantly improved our client satisfaction scores. Their team represents our brand perfectly and handles complex queries with expertise.",
      results: ["95% satisfaction score", "50% faster resolution", "Multi-channel support"],
      industry: "Real Estate",
      color: "teal"
    }
  ];

  const stats = [
    { number: 200, suffix: "+", label: "Happy Clients", icon: MdSentimentSatisfiedAlt },
    { number: 99, suffix: ".9%", label: "Client Retention", icon: MdHandshake },
    { number: 24, suffix: "/7", label: "Support Available", icon: MdSchedule },
    { number: 6, suffix: " Years", label: "Industry Experience", icon: MdEmojiEvents }
  ];

  const colorClasses = {
    blue: "border-opacity-20",
    green: "border-opacity-20", 
    purple: "border-opacity-20",
    orange: "from-slate-50 to-slate-100 border-slate-200",
    indigo: "border-opacity-20",
    teal: "border-opacity-20"
  };

  const getColorStyles = (color: string) => {
    switch(color) {
      case 'blue':
        return { 
          background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.1), rgba(120, 179, 173, 0.2))',
          borderColor: 'rgba(120, 179, 173, 0.2)'
        };
      case 'green':
        return { 
          background: 'linear-gradient(to bottom right, rgba(80, 135, 137, 0.1), rgba(80, 135, 137, 0.2))',
          borderColor: 'rgba(80, 135, 137, 0.2)'
        };
      case 'purple':
        return { 
          background: 'linear-gradient(to bottom right, rgba(202, 176, 154, 0.1), rgba(202, 176, 154, 0.2))',
          borderColor: 'rgba(202, 176, 154, 0.2)'
        };
      case 'indigo':
        return { 
          background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.1), rgba(80, 135, 137, 0.1))',
          borderColor: 'rgba(120, 179, 173, 0.2)'
        };
      case 'teal':
        return { 
          background: 'linear-gradient(to bottom right, rgba(80, 135, 137, 0.1), rgba(120, 179, 173, 0.1))',
          borderColor: 'rgba(80, 135, 137, 0.2)'
        };
      default:
        return {};
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgb(120, 179, 173), rgb(240, 253, 250), rgb(245, 240, 235))' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(120, 179, 173)' }}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full animate-pulse delay-1000" style={{ backgroundColor: 'rgb(80, 135, 137)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, rgb(120, 179, 173), rgb(80, 135, 137))', WebkitBackgroundClip: 'text' }}>
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how Australian businesses have transformed their operations
              and achieved remarkable results with Admin & Co. Hub.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border text-center" style={{ borderColor: 'rgba(120, 179, 173, 0.2)' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(120, 179, 173, 0.1)' }}>
                    <stat.icon className="text-2xl" style={{ color: 'rgb(120, 179, 173)' }} />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(120, 179, 173)' }}>
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real businesses across Australia
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 100}
                className="group"
              >
                <div className="rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border h-full flex flex-col" style={getColorStyles(testimonial.color)}>
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{testimonial.industry}</span>
                  </div>

                  {/* Quote */}
                  <div className="text-gray-700 mb-6 italic leading-relaxed flex-grow">
                    &ldquo;{testimonial.text}&rdquo;
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      {testimonial.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-gray-600 font-semibold">${testimonial.name.split(' ').map(n => n[0]).join('')}</span>`;
                          }
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm font-medium" style={{ color: 'rgb(120, 179, 173)' }}>{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Case Study
            </h2>
            <p className="text-xl text-gray-600">
              Deep dive into how we helped TechStart Melbourne scale their operations
            </p>
          </AnimatedSection>

          <div className="rounded-2xl p-8 lg:p-12" style={{ background: 'linear-gradient(to bottom right, rgba(120, 179, 173, 0.1), rgba(80, 135, 137, 0.1))' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(120, 179, 173, 0.1)', color: 'rgb(120, 179, 173)' }}>
                    <MdEmojiEvents className="mr-2" /> Featured Success Story
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    TechStart Melbourne: 300% Growth in 18 Months
                  </h3>
                  <p className="text-lg text-gray-600">
                    Learn how our comprehensive BPO solutions helped this Melbourne-based tech startup
                    scale from 10 to 50 employees while maintaining operational efficiency and reducing costs.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Reduced administrative costs by 40%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Improved processing speed by 300%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Achieved 99.9% accuracy in data management</span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="inline-block text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                    style={{ backgroundColor: 'rgb(15, 27, 65, 0.8)' }}
                    onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(15, 27, 65)'}
                    onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = 'rgb(15, 27, 65, 0.8)'}
                  >
                    Read Full Case Study
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={300}>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(120, 179, 173, 0.1)' }}>
                      <MdTrendingUp className="text-3xl" style={{ color: 'rgb(120, 179, 173)' }} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Growth Metrics</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1" style={{ color: 'rgb(120, 179, 173)' }}>300%</div>
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1" style={{ color: 'rgb(80, 135, 137)' }}>40%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1" style={{ color: 'rgb(202, 176, 154)' }}>18</div>
                      <div className="text-sm text-gray-600">Months Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-600 mb-1">50</div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the growing number of Australian businesses that have transformed
              their operations with Admin & Co. Hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl group text-center flex items-center justify-center" style={{ color: 'rgb(15, 27, 65)' }}>
                Get Your Custom Quote
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 text-lg font-semibold transform hover:scale-105 text-center flex items-center justify-center group" style={{ '--hover-text-color': 'rgb(15, 27, 65)' } as React.CSSProperties} onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgb(15, 27, 65)'} onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'white'}>
                Schedule Consultation
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}