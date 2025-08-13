import React from "react";

const Home = () => {
  return (
    <div className="mt-20 md:mt-24 min-h-screen bg-white">
      {/* Header Section with Black Background */}
      <section className="bg-black text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Logo and Main Heading */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-lg flex items-center justify-center">
                <div className="text-black font-bold text-2xl">M</div>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-light leading-tight">
                Make your brand so clear, it becomes unforgettable.
              </h1>
            </div>

            {/* Right side - Company Description */}
            <div className="space-y-8 lg:pl-12">
              <div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Marshall Haber Creative Group is an independent brand
                  consultancy and creative partner to global leaders and
                  ambitious founders.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We help businesses sharpen their positioning, elevate their
                  identity, and build brands built to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Message Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl lg:text-3xl text-gray-800 font-light leading-relaxed">
            We empower our clients and deliver uncompromising results backed by
            personal commitment to their success.
          </p>
        </div>
      </section>

      {/* Optional CTA Section */}
      <section className="bg- black text- white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-light">
              Ready to make your brand unforgettable?
            </h2>
            <button className="bg-gradient-to-r from-orange-400 to-yellow-300 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
