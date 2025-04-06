import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import "tailwindcss/tailwind.css";
import image from "../../assets/arriere_us1.jpg"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <img 
        src={image} 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" 
      />
      
      <div className="bg-green bg-opacity-90 shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 pr-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            
            <input
              type="text"
              name="phone"
              placeholder="Phone Numbers"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-2"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            <textarea
              name="message"
              placeholder="Type Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-2"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            
            <button type="submit" className="w-full bg-[#333D79] text-white p-3 rounded">Submit</button>
          </form>
        </div>
        {/* Info Section */}
        <div className="w-full md:w-1/3 bg-[#333D79] text-white p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Contact Us For Any Information</h2>
          <p className="mb-2"><strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
          <p className="mb-2"><strong>Email & Phone:</strong> info@yourdomain.com, (+68) 120034509</p>
          <p className="mb-2"><strong>Follow Us:</strong></p>
          <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-300"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
        </div>
        </div>
      </div>
      {/* Contact Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        <div className="bg-green bg-opacity-90 shadow-lg p-6 rounded-lg text-center">
          <FaPhoneAlt className="text-3xl text-blue-500 mx-auto mb-2 hover:animate-bounce" />
          <p className="text-lg font-semibold text-[#333D79]">Contact Number</p>
          <p>+001 123 456 790</p>
          <p>+002 3424 44 00</p>
        </div>
        <div className="bg-green bg-opacity-90 shadow-lg p-6 rounded-lg text-center">
          <FaEnvelope className="text-3xl text-red-500 mx-auto mb-2 hover:animate-bounce" />
          <p className="text-lg font-semibold text-[#333D79]">Email Address</p>
          <p>info@yourdomain.com</p>
          <p>example@support.com</p>
        </div>
        <div className="bg-green bg-opacity-90 shadow-lg p-6 rounded-lg text-center">
          <FaMapMarkerAlt className="text-3xl text-green-500 mx-auto mb-2 hover:animate-bounce" />
          <p className="text-lg font-semibold text-[#333D79]">Address</p>
          <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
