export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for speed with Next.js server-side rendering and static generation.'
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Built-in security features and SQLite database with TypeORM for data safety.'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Looks perfect on all devices with Tailwind CSS mobile-first approach.'
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Everything you need to launch and grow your digital presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}