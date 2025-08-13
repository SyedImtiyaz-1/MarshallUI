import React from "react";

import image1 from "../../assets/projectPage/1.png";
import image2 from "../../assets/projectPage/2.png";
import image3 from "../../assets/projectPage/3.png";
import image4 from "../../assets/projectPage/4.png";
import image5 from "../../assets/projectPage/5.png";
import image6 from "../../assets/projectPage/6.png";
import image7 from "../../assets/projectPage/7.png";

import Logo from "../../assets/projectPage/logo.png";

const ProjectComponent = ({ projectData }) => {
  return (
    <div className="mt-10 px-6 md:w-[90%] mx-auto">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-12 md:gap-16 lg:gap-24">
        <div className="space-y-4 w-full md:w-3/5">
          <img className="w-full" src={image1} alt="image1" />
          <img className="w-full" src={image2} alt="image2" />
          <img className="w-full" src={image3} alt="image3" />
          <img className="w-full" src={image4} alt="image4" />
          <img className="w-full" src={image5} alt="image5" />
          <img className="w-full" src={image6} alt="image6" />
          <img className="w-full" src={image7} alt="image7" />
        </div>

        {/* Right side - Project info */}
        <div className=" w-full md:w-2/5">
          <div className="space-y-6">
            <div>
              <img
                src={Logo}
                className="grid grid-cols-2 gap-1 w-12 h-12 mb-4"
              />

              <h1 className="text-4xl font-bold mb-4">{projectData.title}</h1>
            </div>

            <p className="font-medium leading-relaxed">
              {projectData.description}
            </p>

            <div className="border-t border-[#DCDCDC]">
              <div className="flex gap-8 justify-between items-center border-b border-[#DCDCDC] py-6">
                <h3 className="text-sm font-semibold text-[#707070] uppercase tracking-wide">
                  Industry:
                </h3>
                <p className="text-wrap text-right">{projectData.industry}</p>
              </div>

              <div className="flex gap-8 justify-between items-center border-b border-[#DCDCDC] py-6">
                <h3 className="text-sm font-semibold text-[#707070] uppercase tracking-wide ">
                  Services:
                </h3>
                <p className="text-wrap text-right">{projectData.services}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
