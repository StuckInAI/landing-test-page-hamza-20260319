export default function Hero() {
  return (
    <section className="section-padding">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transform Your Digital
          <span className="text-primary-600 block">Experience</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          A cutting-edge solution designed to elevate your business with modern technology, seamless performance, and exceptional user experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-secondary">Schedule a Demo</button>
        </div>
      </div>
    </section>
  );
}