export default function Testimonials() {
  const testimonials = [
    {
      quote: 'This landing page increased our conversion rate by 40%. The team delivered exactly what we needed.',
      author: 'Alex Johnson',
      role: 'CEO, TechCorp'
    },
    {
      quote: 'The performance and modern design exceeded our expectations. Highly recommended for any business.',
      author: 'Sarah Miller',
      role: 'Marketing Director'
    },
    {
      quote: 'Implementation was smooth and the results speak for themselves. Our users love the new experience.',
      author: 'David Chen',
      role: 'Product Manager'
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Trusted by businesses worldwide.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="text-gray-600 mb-6 italic">"{testimonial.quote}"</div>
              <div>
                <div className="font-bold text-lg">{testimonial.author}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}