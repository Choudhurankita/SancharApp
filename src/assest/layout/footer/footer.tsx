import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-20">

  <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

    <div>
      <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
        <HiOutlineNewspaper size={26} className="text-indigo-500" />
        <span>Sanchar</span>
      </div>

      <p className="text-sm leading-relaxed text-gray-500">
        Your daily source of trusted news — covering technology,
        business, and global stories that matter.
      </p>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-4">
        Explore
      </h3>

      <div className="flex flex-col gap-3 text-sm">
        <NavLink to="/" className="hover:text-white transition">
          Home
        </NavLink>

        <NavLink to="/discover" className="hover:text-white transition">
          Discover
        </NavLink>

        <NavLink to="/about" className="hover:text-white transition">
          About
        </NavLink>

        <NavLink to="/contact" className="hover:text-white transition">
          Contact
        </NavLink>
      </div>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-4">
        Connect
      </h3>

      <div className="flex gap-4 text-lg">
        <a
          href="https://github.com/Choudhurankita"
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-white transition"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-white transition"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.linkedin.com/in/ankita-choudhury-2221b5182/"
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-white transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>

  </div>

  <div className="border-t border-gray-800 text-center py-5 text-xs text-gray-500">
    © {new Date().getFullYear()} — Built with ❤️ using React
  </div>

</footer>
  );
};

export default Footer;