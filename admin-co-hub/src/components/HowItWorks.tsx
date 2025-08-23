export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your current processes and identify optimization opportunities",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Strategy",
      description: "Custom solution design tailored to your business needs and goals",
      icon: "📋"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Seamless transition with dedicated project management and training",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous improvement and scaling based on performance metrics",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
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
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="text-blue-600 font-bold text-sm mb-2">STEP {step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
}