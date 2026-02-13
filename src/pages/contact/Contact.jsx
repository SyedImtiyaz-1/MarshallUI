import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    updates: false,
    privacy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mt-20 md:mt-[88px] min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-[95%] sm:w-[90%] mx-auto pt-8 sm:pt-12 pb-6 sm:pb-8">
        <p className="text-[#202020] text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-lg">
          We Partner With Ambitious Founders
          <br />
          With A Clear Vision And A Deep
          <br />
          Understanding Of Their Customer
        </p>
        <h2 className="text-[#202020] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4">
          212.494.9052
        </h2>
        <p className="text-[#202020] text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mt-3 sm:mt-4 tracking-wide">
          New York &nbsp;·&nbsp; Toronto &nbsp;·&nbsp; Florida
        </p>
      </div>

      {/* Divider */}
      <div className="w-[95%] sm:w-[90%] mx-auto border-t border-[#DCDCDC]" />

      {/* Centered Form Section */}
      <div className="w-[95%] sm:w-[90%] max-w-2xl mx-auto py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1a1a2e] mb-3 sm:mb-4">
          Want to work with us?
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-10">
          Let us know a bit about you and your business idea, challenge, or
          needs by filling out this form. You can also write us at{" "}
          <a
            href="mailto:newbiz@marshallhaber.com"
            className="text-[#1a1a2e] underline hover:text-black"
          >
            newbiz@marshallhaber.com
          </a>
          .
        </p>

        <div className="space-y-6">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-sm bg-white focus:border-[#1a1a2e] focus:outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-sm bg-white focus:border-[#1a1a2e] focus:outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Work email*"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-sm bg-white focus:border-[#1a1a2e] focus:outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border border-gray-300 rounded-sm bg-white focus:border-[#1a1a2e] focus:outline-none text-sm text-gray-700 placeholder-gray-400 transition-colors"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows="5"
            className="w-full px-4 py-4 border border-gray-300 rounded-sm bg-white focus:border-[#1a1a2e] focus:outline-none text-sm text-gray-700 placeholder-gray-400 resize-none transition-colors"
          />

          {/* Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="updates"
                checked={formData.updates}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 border-gray-300 rounded accent-[#1a1a2e]"
              />
              <span className="text-xs text-gray-600">
                Send me occasional updates on Marshall Haber's events, insights, and services
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 border-gray-300 rounded accent-[#1a1a2e]"
              />
              <span className="text-xs text-gray-600">
                By submitting this form, I agree to Marshall Haber's{" "}
                <a href="#" className="underline hover:text-black">
                  privacy policy
                </a>
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#1a1a2e] text-white px-6 py-3 text-sm rounded-full hover:bg-black transition-colors duration-300"
            >
              Send message
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info + Social Footer */}
      <div className="w-[90%] mx-auto border-t border-[#DCDCDC] py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="text-sm text-gray-500">
            <p>99 Wall Street +1467, New York, NY 10005</p>
            <p>+1 (212) 494 9052</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-black transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors duration-300">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors duration-300">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
