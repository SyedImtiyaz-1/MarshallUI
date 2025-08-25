import React, { useEffect, useState } from "react";
import heroImage from "../../assets/home/heroImage.png";
import mock1 from "../../assets/home/mock1.png";
import mock2 from "../../assets/home/mock2.png";
import mock3 from "../../assets/home/mock3.png";

import bursonLogo from "../../assets/home/brands/burson.png";
import centerbridgeLogo from "../../assets/home/brands/centerbridge.png";
import eurotechLogo from "../../assets/home/brands/eurotech.png";
import healthLogo from "../../assets/home/brands/health.png";
import hertzLogo from "../../assets/home/brands/hertz.png";
import jpLogo from "../../assets/home/brands/jp.png";
import memorialLogo from "../../assets/home/brands/memorial.png";
import mizrahiLogo from "../../assets/home/brands/mizrahi.png";
import oeladonLogo from "../../assets/home/brands/oeladon.png";
import rivingtonLogo from "../../assets/home/brands/rivington.png";
import southafricaLogo from "../../assets/home/brands/southafrica.png";
import specialLogo from "../../assets/home/brands/special.png";
import stoneridgeLogo from "../../assets/home/brands/stoneridge.png";
import trishLogo from "../../assets/home/brands/trish.png";
import yrLogo from "../../assets/home/brands/y&r.png";
import Work from "../myWork/Work";

const Home = () => {
  const clientLogos = [
    { name: "J.P.Morgan", src: jpLogo, alt: "J.P.Morgan" },
    {
      name: "Hotel on Rivington",
      src: rivingtonLogo,
      alt: "Hotel on Rivington",
    },
    { name: "Centerbridge", src: centerbridgeLogo, alt: "Centerbridge" },
    { name: "Special Olympics", src: specialLogo, alt: "Special Olympics" },
    { name: "Trish McEvoy", src: trishLogo, alt: "Trish McEvoy" },
    {
      name: "Memorial Sloan Kettering",
      src: memorialLogo,
      alt: "Memorial Sloan Kettering Cancer Center",
    },
    { name: "Y&R", src: yrLogo, alt: "Y&R" },
    { name: "Eurotech", src: eurotechLogo, alt: "Eurotech" },
    {
      name: "National Jewish Health",
      src: healthLogo,
      alt: "National Jewish Health",
    },
    { name: "South Africa", src: southafricaLogo, alt: "South Africa" },
    { name: "Burson-Marsteller", src: bursonLogo, alt: "Burson-Marsteller" },
    { name: "Stone Ridge", src: stoneridgeLogo, alt: "Stone Ridge" },
    { name: "Celadon", src: oeladonLogo, alt: "Celadon" },
    { name: "Mizrahi", src: mizrahiLogo, alt: "Mizrahi" },
    {
      name: "Hertz Investment Group",
      src: hertzLogo,
      alt: "Hertz Investment Group",
    },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Brand Strategy",
      content:
        "Your content goes here for the first card. Replace this with whatever you need.",
      bgColor: "bg-[#F5F5F5]",
      textColor: "text-black",
    },
    {
      id: 2,
      title: "Visual Identity",
      content:
        "Your content goes here for the second card. Replace this with whatever you need.",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      id: 3,
      title: "Website",
      content:
        "Your content goes here for the third card. Replace this with whatever you need.",
      bgColor: "bg-[#1E1E1E]",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Product",
      content:
        "Your content goes here for the fourth card. Replace this with whatever you need.",
      bgColor: "bg-[#E9EBF0]",
      textColor: "text-black",
    },
  ];

  const getCardStyle = (index) => {
    const cardHeight = window.innerHeight;
    const startOffset = index * cardHeight * 0.8;
    const progress = Math.max(
      0,
      Math.min(1, (scrollY - startOffset) / (cardHeight * 0.5))
    );

    return {
      // transform: `translateY(${progress * 20}px) scale(${1 - progress * 0.05})`,
      zIndex: index + 1,
      position: "sticky",
      top: `${100 + index * 20}px`,
    };
  };

  return (
    <div className="mt-20 md:mt-[88px] min-h-screen bg-white">
      {/* Header Section with Black Background */}
      <section className="bg-black text-white min-h- screen flex items-center py-16">
        <div className="w-[90%] mx-auto px-6 lg:px-8">
          <div className="gap-12 items-center">
            {/* Left side - Logo and Main Heading */}
            <div className="space-y-8">
              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-light leading-tight">
                Make your brand so clear, it becomes unforgettable.
              </h1>
            </div>

            {/* Right side - Company Description */}
            <div className="flex mt-12">
              <div className="w-1/2">
                {/* Logo */}
                <img src={heroImage} alt="Hero" className="w-[220px] h-auto" />
              </div>
              <div className="w-1/2 flex gap-4">
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
        </div>
      </section>

      {/* Bottom Message Section */}
      <section className="bg-white py-20">
        <img src={heroImage} alt="Hero" className="w- [220px] mx-auto" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="mt-10 text-2xl lg:text-3xl text-[#202020] font-medium">
            We empower our clients and deliver uncompromising results backed by
            personal commitment to their success.
          </p>
        </div>
      </section>

      {/* Optional CTA Section */}
      <section className="bg- black text- white">
        <div className="w-[90%] mx-auto">
          {/* Logo Grid */}
          <div className="grid grid-cols-5 gap-6 mb-16">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="rounded-lg p-6 flex items-center justify-center h-32 hover:bg-gray-200 bg-[#F2F2F2] transition-colors duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="text-gray-600 text-sm font-medium text-center hidden">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>

          {/* Main Text */}
          <div className="text-center mt-4">
            <h2 className="text-[#202020] text-5xl md:text-6xl lg:text-7xl font-light leading- tight mb- 8">
              We work with brands that
            </h2>
            <h3 className="text-[#707070] text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-12">
              want to lead
              <em className="text-[#202020] italic">, not follow</em>.
            </h3>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="text-[#202020] text-lg hover:text-gray-600 transition-colors duration-300 flex flex-col items-center justify-center mx-auto group">
              See latest projects
              <svg
                className="w-6 h-6 ml-2 transform group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-20">
          <Work isHome={true} />
        </div>
      </section>
      <section className="mt-2">
        <div className="text-center text-[#202020] ">
          <h2 className="text-[#202020] text-5xl md:text-6xl lg:text-7xl font-light">
            We <span className="text-[#707070] ">equip, empower, and</span>
          </h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-light ">
            <span className="text-[#707070] ">inspire</span> tomorrow's leaders
          </h3>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-light">
            through
            <em className="italic"> premium branding</em>.
          </h3>
        </div>

        <div className="relative mt-12">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="w-full h- screen px-4 md:px-8 lg:px-0 16 drop-shadow-xl"
              style={getCardStyle(index)}
            >
              <div
                className={`${card.bgColor} ${card.textColor} rounded-lg shadow-2xl h-full w-full flex items-center`}
              >
                {/* Left Content Section */}
                <div className="flex-1 p-8 lg:p-16">
                  <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                      {card.title}
                    </h2>
                    <div className="flex">
                      <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                        {card.content}
                      </p>
                      {/* Services/Features List */}
                      <div className="space-y-1 mb-8">
                        <div className="text-base md:text-lg opacity-90">
                          UX Design
                        </div>
                        <div className="text-base md:text-lg opacity-90">
                          User Testing
                        </div>
                        <div className="text-base md:text-lg opacity-90">
                          Product Prototype
                        </div>
                        <div className="text-base md:text-lg opacity-90">
                          Mobile UI
                        </div>
                        <div className="text-base md:text-lg opacity-90">
                          Software UI design
                        </div>
                        <div className="text-base md:text-lg opacity-90">
                          Web app design
                        </div>
                        <div className="text-base md:text-lg opacity-90">
                          Interaction design
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image Section */}
                <div className="flex-1 h-full p-8 flex items-center justify-center">
                  <div className="relative w-full max-w-lg">
                    {/* Replace 'your-image-path.jpg' with your actual image paths */}

                    {/* Fallback placeholder if you don't have images yet */}
                    <div className="absolute inset-0  rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <img
                        src={mock1}
                        alt="Mockup"
                        className="w-full 1/2 h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
