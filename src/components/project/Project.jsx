import React, { useEffect, useState } from "react";
import ProjectComponent from "./ProjectComponent";
import { CircleArrowUp, CircleChevronUp } from "lucide-react";

const Project = () => {
  // This will be replaced with actual data from API call based on route params
  const projectData = {
    title: "HiCloud",
    description:
      "HiCloud is reshaping the future of secure cloud infrastructure. We partnered with them to create a brand that simplifies complex cloud technology and builds trust through clarity and credibility. Our strategy focused on communicating security, scale, and sophistication through a modern visual system and concise messaging.",
    industry: "Technology, Cybersecurity",
    services: "Branding, Website, Messaging, Visual Identity",
  };

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* 
  // Future implementation with route params and API call:
  
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`/api/projects/${projectId}`);
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProjectData();
    }
  }, [projectId]);

  if (loading) return <div>Loading...</div>;
  if (!projectData) return <div>Project not found</div>;
  */

  return (
    <div className="pb-12 ">
      <ProjectComponent projectData={projectData} />

      {/* Back to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="origin-right sticky ml-auto mt-4 bottom-6 right-6 sm:right-8 cursor-pointer flex items-center space-x-2 sm:space-x-4 bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full py-2 md:py-3 px-2 md:px-6 shadow-lg border border-gray-200 group"
        >
          {/* Circle with arrow */}
          <div className="size-6 sm:size-8 md:size-12 border-2 border-black rounded-full flex items-center justify-center group-hover:border-gray-700 transition-colors">
            <svg
              className="w-5 h-5 text-black group-hover:text-gray-700 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>

          {/* Text */}
          <span className="text-base sm:text-lg font-medium text-black group-hover:text-gray-700 transition-colors whitespace-nowrap">
            Back to top
          </span>
        </button>
      )}
    </div>
  );
};

export default Project;
