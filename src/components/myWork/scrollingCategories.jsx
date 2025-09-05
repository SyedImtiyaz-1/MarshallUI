import React from "react";

const ScrollingCategories = () => {
  const categories = [
    {
      name: "Political",
      image:
        "https://images.unsplash.com/photo-1586829135343-132950070391?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-blue-100",
    },
    {
      name: "Banking + Finance",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-gray-100",
    },
    {
      name: "Consumer",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-blue-200",
    },
    {
      name: "Real Estate",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-gray-200",
    },
    {
      name: "Technology",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-purple-200",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="flex animate-scroll">
        {/* First set of categories */}
        {categories.map((category, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-2 flex-shrink-0 sm:w-fit h-20 md:h-24 rounded-lg shadow-none transition-shadow duration-300 cursor-pointer relative overflow-hidden group mr-8"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-32 md:w-36 rounded-lg h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="px-2">
              <h3 className="font-medium text-sm sm:text-lg whitespace-nowrap">
                {category.name}
              </h3>
            </div>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {categories.map((category, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-2 flex-shrink-0 m:w-fit h-20 md:h-24 rounded-lg shadow-none transition-shadow duration-300 cursor-pointer relative overflow-hidden group mr-8"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-32 md:w-36 rounded-lg h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="px-2">
              <h3 className="font-medium text-sm sm:text-lg whitespace-nowrap">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 45s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingCategories;
