import React from "react";

const About = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Welcome to our platform! We are dedicated to providing the best
          service for our users. Our mission is to make the world a better place
          by enabling individuals to express themselves and share their stories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsj21A8sO8n985_qez3EhkmnKNoM8qk8Iv_A&s"
              alt="Team Member"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://si-interactive.s3.amazonaws.com/prod/planadviser-com/wp-content/uploads/2024/01/11105207/PA-011123-Principal-Leadership-Change-Bhatia_Kamal-headshot-400px-web-150x150.jpg"
              alt="Team Member"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://skift.com/wp-content/uploads/2024/06/Marjan-Rintel-KLM-CEO-150x150.jpg"
              alt="Team Member"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Emily Johnson</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
