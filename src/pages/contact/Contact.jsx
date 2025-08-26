import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    company: "",
    city: "",
    state: "",
    country: "",
    industry: "",
    howDidYouHear: "",
    challenges: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  return (
    <div className="mt-20 md:mt-[88px] min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-black text-white py-16 px-6">
        <div className="max-w- 4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
            We Partner With Ambitious Founders With A Clear
            <br />
            Vision And A Deep Understanding Of Their Customer
          </h1>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-12 px-6">
        <div className="max-w-4xl text-[#202020] mx-auto text-center font-bold">
          <div className="mb-8">
            <p className="text-lg mb-2">+1 (212) 494 9052</p>
            <p className=" ">99 Wall Street +1467</p>
            <p className=" ">New York, NY 10005</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 border-b-2 border-gray-200 bg-transparent focus:border-[#707070] focus:outline-none text-gray-700 placeholder-[#707070] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border-b-2 border-gray-200 bg-transparent focus:border-[#707070] focus:outline-none text-gray-700 placeholder-[#707070] transition-colors"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-4 border-b-2 border-gray-200 bg-transparent focus:border-[#707070] focus:outline-none text-gray-700 placeholder-[#707070] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-4 border-b-2 border-gray-200 bg-transparent focus:border-[#707070] focus:outline-none text-gray-700 placeholder-[#707070] transition-colors"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-4 border-b-2 border-gray-200 bg-transparent focus:border-[#707070] focus:outline-none text-gray-700 placeholder-[#707070] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-4 border-b-2 border-gray-200 bg-transparent focus:border-[#707070] focus:outline-none text-gray-700 placeholder-[#707070] transition-colors"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-4 border-b-2 border-gray-200 bg-transparent focus:border-[#707070] focus:outline-none text-gray-700 placeholder-[#707070] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full p-4 border-b-2 border-gray-200 bg-transparent focus:border-[#707070] focus:outline-none text-gray-700 placeholder-[#707070] transition-colors"
                />
              </div>
            </div>

            {/* Full width fields */}
            <div>
              <input
                type="text"
                name="howDidYouHear"
                placeholder="How did you hear about us?"
                value={formData.howDidYouHear}
                onChange={handleInputChange}
                className="w-full p-4 border-b-2 border-gray-200 bg-transparent focus:border-[#707070] focus:outline-none text-gray-700 placeholder-[#707070] transition-colors"
              />
            </div>

            <div>
              <textarea
                name="challenges"
                placeholder="What challenges are you facing?"
                value={formData.challenges}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-4 border-b-2 border-gray-200 bg-transparent focus:border-[#707070] focus:outline-none text-gray-700 placeholder-[#707070] resize-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-black text-white px-8 py-3 rounded-sm hover:bg-gray-800 transition-colors font-medium"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Section */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-center mb-12 text-gray-800">
            SOCIAL
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <Instagram size={20} className="text-gray-600" />
              <span className="text-gray-600">Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <Facebook size={20} className="text-gray-600" />
              <span className="text-gray-600">Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <Youtube size={20} className="text-gray-600" />
              <span className="text-gray-600">YouTube</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <Linkedin size={20} className="text-gray-600" />
              <span className="text-gray-600">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
