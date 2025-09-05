import React from "react";

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

import ArrowButton from "../../components/myWork/arrowHeading";
import ScrollingCategories from "../../components/myWork/scrollingCategories";
import { Link } from "react-router";

const Work = ({ isHome = false }) => {
  const projects = [
    {
      id: 1,
      title: "MEMRI",
      category: "Civic + Public + Political",
      image: memri,
      description: "TRUTH IS COMPLEX. SPEAK ITS LANGUAGE.",
      bgColor: "bg-gray-200",
    },
    {
      id: 2,
      title: "Optifino",
      category: "Technology",
      image: optifino,
      description: "Technology",
      bgColor: "bg-gradient-to-br from-purple-600 to-blue-600",
    },
    {
      id: 3,
      title: "The One Toronto",
      category: "Real Estate",
      image: toronto,
      description: "Real Estate",
      bgColor: "bg-gray-100",
    },
    {
      id: 4,
      title: "JPMorgan",
      category: "Financial Services",
      image: jpMorgan,
      description: "INTERNATIONAL COUNCIL",
      bgColor: "bg-green-700",
    },
  ];

  const bottomProjects = [
    {
      id: 1,
      title: "MEMRI",
      category: "Civic + Public + Political",
      image: memri,
      description: "TRUTH IS COMPLEX. SPEAK ITS LANGUAGE.",
      bgColor: "bg-gray-200",
    },
    {
      id: 2,
      title: "Optifino",
      category: "Technology",
      image: optifino,
      description: "Technology",
      bgColor: "bg-gradient-to-br from-purple-600 to-blue-600",
    },
    {
      id: 3,
      title: "The One Toronto",
      category: "Real Estate",
      image: toronto,
      description: "Real Estate",
      bgColor: "bg-gray-100",
    },
    {
      id: 4,
      title: "JPMorgan",
      category: "Financial Services",
      image: jpMorgan,
      description: "INTERNATIONAL COUNCIL",
      bgColor: "bg-green-700",
    },
    {
      id: 1,
      title: "Aaron Matthew SIDS Research Guild",
      category: "Not-For-Profit",
      image: aaron,
      description: "Not-For-Profit",
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Centerbridge Partners",
      category: "Banking + Finance",
      image: centerbridge,
      description: "Banking + Finance",
      bgColor: "bg-gray-200",
    },
    {
      id: 3,
      title: "Coinbase",
      category: "Banking + Finance",
      image: coinbase,
      description: "Banking + Finance",
      bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
    },
    {
      id: 4,
      title: "Hotel on Rivington",
      category: "Hospitality",
      image: hotel,
      description: "Hospitality",
      bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
    },
    {
      id: 5,
      title: "Special Olympics",
      category: "Not-For-Profit",
      image: special,
      description: "Not-For-Profit",
      bgColor: "bg-gradient-to-br from-blue-800 to-navy-900",
    },
    {
      id: 6,
      title: "South Africa Tourism",
      category: "Civic + Public + Political",
      image: south,
      description: "Civic + Public + Political",
      bgColor: "bg-gradient-to-br from-green-500 to-yellow-600",
    },
    {
      id: 7,
      title: "Boracho Hard Seltzer",
      category: "Consumer",
      image: boracho,
      description: "Consumer",
      bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500",
    },
    {
      id: 8,
      title: "Eurotech",
      category: "B2B",
      image: eurotech,
      description: "B2B",
      bgColor: "bg-gradient-to-br from-blue-700 to-indigo-800",
    },
    {
      id: 9,
      title: "Humankind Investments",
      category: "Banking + Finance",
      image: humankind,
      description: "Banking + Finance",
      bgColor: "bg-gradient-to-br from-teal-600 to-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-8">
      {!isHome && (
        <div className="mt-20 md:mt-24 flex flex-col gap-2">
          <div className="md:px-6">
            <div className="h-[1px] bg-[#DCDCDC] mx-auto md:w-[90%]" />
          </div>
          <ScrollingCategories />
          <div className="md:px-6">
            <div className="h-[1px] bg-[#DCDCDC] mx-auto md:w-[90%]" />
          </div>
        </div>
      )}
      <div className="mx-auto md:w-[90%]">
        {/* Header */}
        {!isHome && (
          <div className="px-6 py-8">
            <div className="flex flex- col md:flex-row gap-2 md:gap-0 justify-between items-center">
              <h1 className="text-4xl md:text-6xl font-light text-black">
                Work
              </h1>
              <div className="flex gap-2 md:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="hidden md:block text-[#202020]">
                    View by:
                  </span>
                  <select className="text-[13px] md:text-base border-none bg-transparent text-[#707070] focus:outline-none hover:text-black transition-colors cursor-pointer">
                    <option>Type of Work</option>
                  </select>
                </div>
                <select className="text-[13px] md:text-base border-none bg-transparent text-[#707070] focus:outline-none hover:text-black transition-colors cursor-pointer">
                  <option>Type of Client</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Top Projects Grid */}
        {/* <div className="grid gird-cols-1 lg:grid-cols-2 gap-6 px-6 pb-8 mx-auto">
          {projects.map((project) => (
            <Link
              to={`/work/${project.id}`}
              key={project.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="rounded-lg md:rounded-none md:rounded-t-lg overflow-hidden h-80 relative group-hover:shadow-inner transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-100 group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>{" "}
              </div>
              <ArrowButton
                title={project.title}
                description={project.description}
              />
            </Link>
          ))}
        </div> */}

        {/* Bottom Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-8 mx-auto">
          {bottomProjects.map((project) => (
            <Link
              to={`/work/${project.id}`}
              key={project.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="rounded-lg md:rounded-none md:rounded-t-lg overflow-hidden h-40 md:h-80 relative group-hover:shadow-inner transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-100 group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>{" "}
              </div>
              <ArrowButton
                title={project.title}
                description={project.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
