export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "Admin & Co Hub transformed our back-office operations. Their Australian-based team understands our business culture while delivering global-standard efficiency.",
      author: "Sarah Mitchell",
      role: "CEO, TechStart Melbourne",
      company: "TechStart"
    },
    {
      quote: "The scalability and reliability of their services allowed us to focus on growth while they handled our administrative complexities seamlessly.",
      author: "David Chen",
      role: "Operations Director",
      company: "GrowthCorp"
    },
    {
      quote: "Outstanding customer service and attention to detail. They feel like an extension of our team rather than an external provider.",
      author: "Emma Thompson",
      role: "Founder",
      company: "InnovateLab"
    }
  ];

  return (
    <section className="py-20 bg-white">
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="text-teal-600 text-4xl mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-teal-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}