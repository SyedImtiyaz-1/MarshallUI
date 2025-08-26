import React from "react";
import mock1 from "../../assets/home/mock1.png";

const Studio = () => {
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
    <div className="mt-24">
      <div className="text-center">
        <div className="text-[350px] leading-none font-semibold">Est. 2005</div>
        <div className="font-semibold text-2xl mt-8 leading-none">
          Guided by clarity,
          <br />
          driven by experience.
        </div>
      </div>
      <div className="mt-18">
        <div className="text-center text-[#707070]   text-2xl md:text-3xl lg:text-4xl w-[40%] mx-auto">
          <h2 className="font-l ight">
            <span className="text-[#202020] italic"> Marshall Haber </span>{" "}
            founded his studio with one goal: to bring{" "}
            <span className="text-[#202020] italic">sharp thinking</span> and{" "}
            <span className="text-[#202020] italic">refined design</span>{" "}
            together under one roof.
            <br />
            <br />
            What began as a passion for brand transformation has grown into a
            deeply collaborative practice, helping clients navigate complexity
            with <span className="text-[#202020] italic">precision</span>,{" "}
            <span className="text-[#202020] italic">purpose</span>, and a{" "}
            <span className="text-[#202020] italic">quiet confidence</span>.
          </h2>
        </div>
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
    </div>
  );
};

export default Studio;
