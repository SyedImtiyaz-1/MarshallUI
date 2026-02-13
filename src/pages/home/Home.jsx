import React, { useEffect, useState } from "react";
import heroImage from "../../assets/home/heroImage.png";
import card1 from "../../assets/home/Card1.png";
import card2 from "../../assets/home/Card2.png";
import card3 from "../../assets/home/Card3.png";
import mock1 from "../../assets/home/mock1.png";
import mock2 from "../../assets/home/mock2.png";
import mock3 from "../../assets/home/mock3.png";

import memri from "../../assets/myWork/TopImages/memri.png";
import optifino from "../../assets/myWork/TopImages/optifino.png";
import jpMorgan from "../../assets/myWork/TopImages/jpMorgan.png";
import toronto from "../../assets/myWork/TopImages/toronto.png";
import aaron from "../../assets/myWork/Projects/Aaron.png";
import boracho from "../../assets/myWork/Projects/Boracho.png";
import centerbridge from "../../assets/myWork/Projects/Centerbridge.png";
import coinbase from "../../assets/myWork/Projects/Coinbase.png";
import eurotech from "../../assets/myWork/Projects/Eurotech.png";
import hotel from "../../assets/myWork/Projects/Hotel.png";
import humankind from "../../assets/myWork/Projects/Humankind.png";
import south from "../../assets/myWork/Projects/South.png";
import special from "../../assets/myWork/Projects/Special.png";

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
import Work from "../../pages/work/Work";
import SplitText from "../../components/ui/SplitText";
import CardSwap, { Card } from "../../components/ui/CardSwap";
import {
  ChartNoAxesGantt,
  CodeXml,
  GitMerge,
  RefreshCcwDot,
} from "lucide-react";
import AnimatedContent from "../../components/ui/AnimatedContent";
import LiquidEther from "../../components/ui/LiquidEther";
import DarkVeil from "../../components/ui/DarkVeil";
import Magnet from "../../components/ui/Magnet";
import TiltedCard from "../../components/ui/TiltedCard";
import LogoLoop from "../../components/ui/LogoLoop";
import MagicBento from "../../components/ui/MagicBento";
import FlowingMenu from "../../components/ui/FlowingMenu";
import InfiniteScroll from "../../components/ui/InfiniteScroll";

const Home = () => {
  const demoItems = [
    {
      link: "#",
      text: "J.P.Morgan",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Hotel on Rivington",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Centerbridge",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Special",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];
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

  const cardData = [
    {
      color: "#E5E7EB",
      title: "MEMRI",
      description: "TRUTH IS COMPLEX. SPEAK ITS LANGUAGE.",
      label: "Civic + Public + Political",
      image: memri,
    },
    {
      color: "#7C3AED",
      title: "Optifino",
      description: "Technology",
      label: "Technology",
      image: optifino,
    },
    {
      color: "#F3F4F6",
      title: "The One Toronto",
      description: "Real Estate",
      label: "Real Estate",
      image: toronto,
    },
    {
      color: "#3B82F6",
      title: "Aaron Matthew SIDS Research Guild",
      description: "Not-For-Profit",
      label: "Not-For-Profit",
      image: aaron,
    },
    {
      color: "#E5E7EB",
      title: "Centerbridge Partners",
      description: "Banking + Finance",
      label: "Banking + Finance",
      image: centerbridge,
    },
    {
      color: "#2563EB",
      title: "Coinbase",
      description: "Banking + Finance",
      label: "Banking + Finance",
      image: coinbase,
    },
    {
      color: "#F59E0B",
      title: "Hotel on Rivington",
      description: "Hospitality",
      label: "Hospitality",
      image: hotel,
    },
    {
      color: "#15803D",
      title: "JPMorgan",
      description: "INTERNATIONAL COUNCIL",
      label: "Financial Services",
      image: jpMorgan,
    },
    {
      color: "#1E40AF",
      title: "Special Olympics",
      description: "Not-For-Profit",
      label: "Not-For-Profit",
      image: special,
    },
    {
      color: "#22C55E",
      title: "South Africa Tourism",
      description: "Civic + Public + Political",
      label: "Civic + Public + Political",
      image: south,
    },
    {
      color: "#06B6D4",
      title: "Boracho Hard Seltzer",
      description: "Consumer",
      label: "Consumer",
      image: boracho,
    },
    {
      color: "#1D4ED8",
      title: "Eurotech",
      description: "B2B",
      label: "B2B",
      image: eurotech,
    },
    {
      color: "#0D9488",
      title: "Humankind Investments",
      description: "Banking + Finance",
      label: "Banking + Finance",
      image: humankind,
    },
  ];

  const items = [
    {
      content: (
        <div
          className="p-6 rounded-lg h-full flex flex-col"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <img
            src={memri}
            alt="MEMRI"
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">MEMRI</h3>
          <p className="text-sm mb-2 text-white">
            TRUTH IS COMPLEX. SPEAK ITS LANGUAGE.
          </p>
          <span className="text-xs mt-auto inline-block px-3 py-1 bg-white/20 rounded-full text-white">
            Civic + Public + Political
          </span>
        </div>
      ),
    },
    {
      content: (
        <div
          className="p-6 rounded-lg h-full flex flex-col"
          style={{ backgroundColor: "#7C3AED" }}
        >
          <img
            src={optifino}
            alt="Optifino"
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">Optifino</h3>
          <p className="text-sm mb-2 text-white">Technology</p>
          <span className="text-xs mt-auto inline-block px-3 py-1 bg-white/20 rounded-full text-white">
            Technology
          </span>
        </div>
      ),
    },
    {
      content: (
        <div
          className="p-6 rounded-lg h-full flex flex-col"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          <img
            src={toronto}
            alt="The One Toronto"
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">The One Toronto</h3>
          <p className="text-sm mb-2 text-white">Real Estate</p>
          <span className="text-xs mt-auto inline-block px-3 py-1 bg-white/20 rounded-full text-white">
            Real Estate
          </span>
        </div>
      ),
    },
    {
      content: (
        <div
          className="p-6 rounded-lg h-full flex flex-col"
          style={{ backgroundColor: "#3B82F6" }}
        >
          <img
            src={aaron}
            alt="Aaron Matthew SIDS Research Guild"
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">
            Aaron Matthew SIDS Research Guild
          </h3>
          <p className="text-sm mb-2 text-white">Not-For-Profit</p>
          <span className="text-xs mt-auto inline-block px-3 py-1 bg-white/20 rounded-full text-white">
            Not-For-Profit
          </span>
        </div>
      ),
    },
    {
      content: (
        <div
          className="p-6 rounded-lg h-full flex flex-col"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <img
            src={centerbridge}
            alt="Centerbridge Partners"
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">
            Centerbridge Partners
          </h3>
          <p className="text-sm mb-2 text-white">Banking + Finance</p>
          <span className="text-xs mt-auto inline-block px-3 py-1 bg-white/20 rounded-full text-white">
            Banking + Finance
          </span>
        </div>
      ),
    },
    {
      content: (
        <div
          className="p-6 rounded-lg h-full flex flex-col"
          style={{ backgroundColor: "#2563EB" }}
        >
          <img
            src={coinbase}
            alt="Coinbase"
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">Coinbase</h3>
          <p className="text-sm mb-2 text-white">Banking + Finance</p>
          <span className="text-xs mt-auto inline-block px-3 py-1 bg-white/20 rounded-full text-white">
            Banking + Finance
          </span>
        </div>
      ),
    },
    // {
    //   content: (
    //     <div
    //       className="p-6 rounded-lg h-full flex flex-col"
    //       style={{ backgroundColor: "#F59E0B" }}
    //     >
    //       <img
    //         src={hotel}
    //         alt="Hotel on Rivington"
    //         className="w-full h-48 object-contain mb-4"
    //       />
    //       <h3 className="text-xl font-bold mb-2 text-white">
    //         Hotel on Rivington
    //       </h3>
    //       <p className="text-sm mb-2 text-white">Hospitality</p>
    //       <span className="text-xs mt-auto inline-block px-3 py-1 bg-white/20 rounded-full text-white">
    //         Hospitality
    //       </span>
    //     </div>
    //   ),
    // },
    // {
    //   content: (
    //     <div
    //       className="p-6 rounded-lg h-full flex flex-col"
    //       style={{ backgroundColor: "#15803D" }}
    //     >
    //       <img
    //         src={jpMorgan}
    //         alt="JPMorgan"
    //         className="w-full h-48 object-contain mb-4"
    //       />
    //       <h3 className="text-xl font-bold mb-2 text-white">JPMorgan</h3>
    //       <p className="text-sm mb-2 text-white">INTERNATIONAL COUNCIL</p>
    //       <span className="text-xs mt-auto inline-block px-3 py-1 bg-white/20 rounded-full text-white">
    //         Financial Services
    //       </span>
    //     </div>
    //   ),
    // },
    // {
    //   content: (
    //     <div
    //       className="p-6 rounded-lg h-full flex flex-col"
    //       style={{ backgroundColor: "#1E40AF" }}
    //     >
    //       <img
    //         src={special}
    //         alt="Special Olympics"
    //         className="w-full h-48 object-contain mb-4"
    //       />
    //       <h3 className="text-xl font-bold mb-2 text-white">
    //         Special Olympics
    //       </h3>
    //       <p className="text-sm mb-2 text-white">Not-For-Profit</p>
    //       <span className="text-xs mt-auto inline-block px-3 py-1 bg-white/20 rounded-full text-white">
    //         Not-For-Profit
    //       </span>
    //     </div>
    //   ),
    // },
    // {
    //   content: (
    //     <div
    //       className="p-6 rounded-lg h-full flex flex-col"
    //       style={{ backgroundColor: "#22C55E" }}
    //     >
    //       <img
    //         src={south}
    //         alt="South Africa Tourism"
    //         className="w-full h-48 object-contain mb-4"
    //       />
    //       <h3 className="text-xl font-bold mb-2 text-white">
    //         South Africa Tourism
    //       </h3>
    //       <p className="text-sm mb-2 text-white">Civic + Public + Political</p>
    //       <span className="text-xs mt-auto inline-block px-3 py-1 bg-white/20 rounded-full text-white">
    //         Civic + Public + Political
    //       </span>
    //     </div>
    //   ),
    // },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
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
      image: mock1,
    },
    {
      id: 2,
      title: "Visual Identity",
      content:
        "Your content goes here for the second card. Replace this with whatever you need.",
      bgColor: "bg-white",
      textColor: "text-black",
      image: mock2,
    },
    {
      id: 3,
      title: "Website",
      content:
        "Your content goes here for the third card. Replace this with whatever you need.",
      bgColor: "bg-[#1E1E1E]",
      textColor: "text-white",
      image: mock3,
    },
    {
      id: 4,
      title: "Product",
      content:
        "Your content goes here for the fourth card. Replace this with whatever you need.",
      bgColor: "bg-[#E9EBF0]",
      textColor: "text-black",
      image: mock1,
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
      top: `${100 + index * 110}px`,
    };
  };

  const techLogos = [
    {
      node: (
        <div className="flex items-center gap-2">
          <CodeXml />
          <div className="text-lg">CodeXml</div>
        </div>
      ),
      title: "React",
      href: "https://react.dev",
    },
    {
      node: (
        <div className="flex items-center gap-2">
          <ChartNoAxesGantt />
          <div className="text-lg">ChartNoAxesGantt</div>
        </div>
      ),
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: (
        <div className="flex items-center gap-2">
          <GitMerge />
          <div className="text-lg">GitMerge</div>
        </div>
      ),
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: (
        <div className="flex items-center gap-2">
          <RefreshCcwDot />
          <div className="text-lg">RefreshCcwDot</div>
        </div>
      ),
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <div className="mt-20 md:mt-[88px] min-h-screen bg-white">
      {/* Hero Section with Black Background */}

      <section className="bg-black text-white pt-8 pb-16">
        <div className="w-full max-w-[2560px] mx-auto">
          <div className="w-full">
            {/* Main Headline */}
            <div className="sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
              <SplitText
                text="Make your brand so clear, it becomes unforgettable."
                className="text-2xl sm:text-5xl lg:text-7xl font-light leading-tight text-white"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            </div>

            {/* Small portrait on left + Description text on right */}
            <div className="sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
                {/* Small portrait - left */}
                <div className="flex-shrink-0">
                  <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    duration={1.2}
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.6}
                  >
                    <img
                      src={heroImage}
                      alt="Hero"
                      className="w-[120px] sm:w-[150px] h-auto rounded-sm"
                    />
                  </AnimatedContent>
                </div>

                {/* Two text columns - right side */}
                <div className="flex gap-8 sm:gap-12 max-w-xl">
                  <div className="w-1/2">
                    <AnimatedContent
                      distance={150}
                      direction="horizontal"
                      reverse={false}
                      duration={1.2}
                      initialOpacity={0}
                      animateOpacity
                      scale={1.1}
                      threshold={0.2}
                      delay={0.8}
                    >
                      <SplitText
                        text="Marshall Haber Creative Group is an independent brand consultancy and creative partner to global leaders and ambitious founders."
                        className="w-full text-xs sm:text-sm text-gray-400 leading-relaxed"
                        delay={100}
                        duration={0.6}
                        direction={"vertical"}
                        ease="power3.out"
                        splitType="lines"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                      />
                    </AnimatedContent>
                  </div>

                  <div className="w-1/2">
                    <AnimatedContent
                      distance={150}
                      direction="horizontal"
                      reverse={false}
                      duration={1.2}
                      initialOpacity={0}
                      animateOpacity
                      scale={1.1}
                      threshold={0.2}
                      delay={1}
                    >
                      <SplitText
                        text="We help businesses sharpen their positioning, elevate their identity, and build brands built to last."
                        className="w-full text-xs sm:text-sm text-gray-400 leading-relaxed"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="lines"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                      />
                    </AnimatedContent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Hero Portrait */}
      <section className="bg-white pt-16 pb-4">
        <div className="flex justify-center px-8">
          <img
            src={heroImage}
            alt="Marshall Haber Creative Group"
            className="w-full max-w-4xl rounded-2xl object-cover"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </section>

      <section className="bg-white relative z-10">
        <section className="bg-white py-8 relative z-10">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <SplitText
              text="We empower our clients and deliver uncompromising results backed by personal commitment to their success."
              className="text-2xl lg:text-3xl text-[#202020] font-medium"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
        </section>

        {/* Client Logos & Projects Section */}
        <section className="bg-white pt-12">
          {/* Logo Grid */}
          <div className="w-[90%] mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 mb-16">
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

            <div className="text-center mt-4 font-serif">
              <h2 className="text-[#202020] text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-2">
                We work with brands that
              </h2>
              <h3 className="text-[#707070] text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                want to lead
                <em className="text-[#202020] italic">, not follow</em>.
              </h3>
            </div>

            <div className="text-center font-serif">
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

          <div className="mt-12 space-y-8 px-6 sm:px-10 lg:px-16">
            {/* Row 1: 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cardData.slice(0, 2).map((card, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-[#F0F0F0] rounded-xl overflow-hidden aspect-[4/3]">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="mt-3 text-[15px] font-semibold text-[#202020]">{card.title}</h4>
                  <p className="text-[13px] text-gray-400">{card.label}</p>
                </div>
              ))}
            </div>

            {/* Row 2: 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[cardData[2], cardData[7]].map((card, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-[#F0F0F0] rounded-xl overflow-hidden aspect-[4/3]">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="mt-3 text-[15px] font-semibold text-[#202020]">{card.title}</h4>
                  <p className="text-[13px] text-gray-400">{card.label}</p>
                </div>
              ))}
            </div>

            {/* Row 3: 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[cardData[3], cardData[4], cardData[5]].map((card, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-[#F0F0F0] rounded-xl overflow-hidden aspect-[4/3]">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="mt-3 text-[15px] font-semibold text-[#202020]">{card.title}</h4>
                  <p className="text-[13px] text-gray-400">{card.label}</p>
                </div>
              ))}
            </div>

            {/* Row 4: 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[cardData[6], cardData[8], cardData[9]].map((card, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-[#F0F0F0] rounded-xl overflow-hidden aspect-[4/3]">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="mt-3 text-[15px] font-semibold text-[#202020]">{card.title}</h4>
                  <p className="text-[13px] text-gray-400">{card.label}</p>
                </div>
              ))}
            </div>

            {/* Row 5: 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[cardData[10], cardData[11], cardData[12]].map((card, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-[#F0F0F0] rounded-xl overflow-hidden aspect-[4/3]">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="mt-3 text-[15px] font-semibold text-[#202020]">{card.title}</h4>
                  <p className="text-[13px] text-gray-400">{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-16 overflow-hi dden">
          <div className="overflow-hidden pb-2">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={0.6}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.2}
            >
              <div className="text-center text-[#202020] ">
                <h2 className="text-[#202020] text-5xl md:text-6xl lg:text-7xl font-light">
                  We{" "}
                  <span className="text-[#707070] ">equip, empower, and</span>
                </h2>
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={0.6}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <div className="text-center text-[#202020] ">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-light ">
                  <span className="text-[#707070] ">inspire</span> tomorrow's
                  leaders
                </h3>
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={0.6}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.4}
            >
              <div className="text-center text-[#202020] ">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-light">
                  through
                  <em className="italic"> premium branding</em>.
                </h3>
              </div>
            </AnimatedContent>
          </div>
          {/* <div className="text-center text-[#202020] ">
            <h2 className="text-[#202020] text-5xl md:text-6xl lg:text-7xl font-light">
              We <span className="text-[#707070] ">equip, empower, and</span>
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-light ">
              <span className="text-[#707070] ">inspire</span> tomorrow's
              leaders
            </h3>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-light">
              through
              <em className="italic"> premium branding</em>.
            </h3>
          </div> */}

          <div className="relative mt-16">
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
                  <div className="flex-1 p-8 lg:px-16 pb-16 pt-8">
                    <div>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                        {card.title}
                      </h2>
                      <div className="flex">
                        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                          {card.content}
                        </p>
                        {/* Services/Features List */}
                        <ul className="list-disc space-y-1 mb-8">
                          <li className="text-base md:text-lg opacity-90">
                            UX Design
                          </li>
                          <li className="text-base md:text-lg opacity-90">
                            User Testing
                          </li>
                          <li className="text-base md:text-lg opacity-90">
                            Product Prototype
                          </li>
                          <li className="text-base md:text-lg opacity-90">
                            Mobile UI
                          </li>
                          <li className="text-base md:text-lg opacity-90">
                            Software UI design
                          </li>
                          <li className="text-base md:text-lg opacity-90">
                            Web app design
                          </li>
                          <li className="text-base md:text-lg opacity-90">
                            Interaction design
                          </li>
                        </ul>
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
                          src={card.image}
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
      </section>
    </div>
  );
};

export default Home;
