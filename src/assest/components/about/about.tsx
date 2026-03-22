import React from "react";
import { MdOutlineNewspaper } from "react-icons/md";

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Heading */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <MdOutlineNewspaper size={32} className="text-blue-600" />
        <h1 className="text-3xl font-bold">
          About NewsHub
        </h1>
      </div>

      {/* Content */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">

        <p className="text-gray-700 leading-relaxed">
          <strong>NewsHub</strong> is a simple and modern news web application
          built using <span className="font-semibold">React</span> and
          <span className="font-semibold"> Tailwind CSS</span>. It provides
          users with the latest news headlines from around the world.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The application uses a public news API to fetch real-time news
          articles including technology, business, and trending topics.
          Users can explore different stories and stay updated with
          current events.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This project was built as a learning project to practice
          modern frontend technologies such as:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>React + TypeScript</li>
          <li>API Integration</li>
          <li>Component Based Architecture</li>
          <li>Tailwind CSS UI Design</li>
        </ul>

      </div>

    </div>
  );
};

export default About;