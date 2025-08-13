import React, { useState } from "react";

import footerLogo from "../../assets/logo/footerLogo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    if (email && isChecked) {
      console.log("Email submitted:", email);
      // Handle form submission logic here
      setEmail("");
      setIsChecked(false);
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="w-[90%] py-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Contact & Form */}
          <div className="space-y-8">
            {/* Social Links & Phone */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm sm:text-2xl">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="tel:+12124949052"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                +1 (212) 494 9052
              </a>
            </div>

            {/* Email Signup */}
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white pb-4 pt-2 focus:border-white focus:outline-none transition-colors duration-200 text-white placeholder:text-2xl text-2xl placeholder-[#707070]"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-1 w-4 h-4 text-white bg-transparent border border-gray-600 rounded focus:ring-white focus:ring-2"
                />
                <label
                  htmlFor="consent"
                  className="text-xs sm:text-sm text-[#707070] leading-relaxed cursor-pointer"
                >
                  By entering your email, you consent to receive updates from
                  MHCG.
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!email || !isChecked}
                className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200 disabled:bg-[#707070] rounded disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Column - Locations & Description */}
          <div className="flex justify-between gap-16 space-y-6">
            {/* Locations */}
            <div className="flex flex-col text-nowrap sm :flex-row sm:item s-center gap-2 sm:g ap-8 text-lg sm:text-2xl text-[#707070]">
              <span>New York</span>
              <span>Toronto</span>
              <span>Orlando</span>
            </div>

            {/* Company Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w- md">
              Marshall Haber Creative Group is a seasoned design and branding
              studio led by a detail-obsessed creative team with decades of
              industry experience. We work closely with clients to solve complex
              brand challenges through strategic clarity, creative discipline,
              and visual precision.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Logo and Privacy */}
      <div className="border-t border-gray-800">
        <div className="py-8">
          <img src={footerLogo} className="w-[90%] mx-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
