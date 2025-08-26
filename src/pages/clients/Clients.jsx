import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clientData = [
    {
      name: "J.P.Morgan",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      logo: "J.P.Morgan",
    },
    {
      name: "Hotel on Rivington",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      logo: "HOTEL ON RIVINGTON",
    },
    {
      name: "Centerbridge",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      logo: "Centerbridge",
    },
    {
      name: "Mizrahi",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      logo: "MIZRAHI",
    },
    {
      name: "Humankind Investments",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      logo: "Humankind INVESTMENTS",
    },
    {
      name: "Goldman Sachs",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      logo: "Goldman Sachs",
    },
    {
      name: "Morgan Stanley",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      logo: "Morgan Stanley",
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

  return (
    <div className="mt-20 md:mt-[88px] min-h-screen bg-white text-black overflow-x-hidden">
      {/* Header Section */}
      <div className="bg-white text-[#202020] py-16 px-6 mt-4">
        <div className="max-w- 4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
            We Use Design And Strategy To Empower Our Clients And
            <br /> Create Impactful Results For Their High-Profile And Complex
            <br /> Business Challenges.
          </h1>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="py-4 w-full max-w-[95vw] 7xl mx-auto px-4 sm:px-6 lg:px-8">
        <style jsx>{`
          .slick-slide {
            padding: 0 8px;
          }

          .slick-track {
            display: flex;
            align-items: center;
          }

          .slick-list {
            margin: 0 -8px;
          }

          .slick-prev {
            left: -40px;
            z-index: 10;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }

          .slick-next {
            right: -40px;
            z-index: 10;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }

          .slick-prev:before,
          .slick-next:before {
            color: #333;
            font-size: 20px;
            line-height: 40px;
          }

          .slick-prev:hover,
          .slick-next:hover {
            background: rgba(255, 255, 255, 1);
          }

          .slick-prev:hover:before,
          .slick-next:hover:before {
            color: #000;
          }

          .client-card {
            background: linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.7) 0%,
              rgba(0, 0, 0, 0.3) 100%
            );
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .client-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .slick-dots {
            bottom: -50px;
            text-align: center;
          }

          .slick-dots li button:before {
            color: #ccc;
            font-size: 12px;
          }

          .slick-dots li.slick-active button:before {
            color: #000;
          }

          @media (max-width: 768px) {
            .slick-prev,
            .slick-next {
              display: none !important;
            }
          }
        `}</style>

        <Slider {...settings}>
          {clientData.map((client, index) => (
            <div key={index}>
              <div className="relative h-64 rounded-lg overflow-hidden client-card mx-2">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${client.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-lg font-medium tracking-wide">
                    {client.logo}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-[90%] mx-auto mt-32">
        <div className="text-xl text-[#202020] font-semibold pb-2 border-b border-[#DCDCDC] ">
          COMPANIES
        </div>
        {/* Logo Grid */}
        <div className="grid grid-cols-5 gap-6 mb-16 mt-6">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="rounded-lg p-6 flex items-center justify-center h-44 hover:bg-gray-200 bg-[#F2F2F2] transition-colors duration-300"
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
      </div>
    </div>
  );
};

export default Clients;
