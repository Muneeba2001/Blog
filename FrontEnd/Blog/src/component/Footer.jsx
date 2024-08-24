import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Fashion Blog</h1>
            <p className="text-gray-400 mt-2">
              Stay updated with the latest trends in fashion and style.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="explore flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Explore</h2>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          © 2024 Fashion Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
