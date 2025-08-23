export default function TrustBadges() {
  const badges = [
    { text: "ISO 27001 Certified", icon: "🛡️" },
    { text: "Australian Privacy Act Compliant", icon: "🇦🇺" },
    { text: "200+ Happy Clients", icon: "⭐" },
    { text: "24/7 Support", icon: "🕐" }
  ];

  return (
    <section className="py-12 bg-gray-50 border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-2">{badge.icon}</div>
              <div className="text-sm font-medium text-gray-700">{badge.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}