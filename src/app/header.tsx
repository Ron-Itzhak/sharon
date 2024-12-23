import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="text-2xl font-bold">RecruiterName</div>
      <nav className="flex space-x-4">
        <a href="/features" className="text-black font-bold">
          Features
        </a>
        <a href="#articles" className="text-black font-bold">
          Articles
        </a>
        <a href="#services" className="text-black font-bold">
          Services
        </a>
        <a href="#about" className="text-black font-bold">
          About
        </a>
      </nav>
      <div>
        <button className="px-4 py-2 border rounded mr-2">Log-in</button>
        <button className="px-4 py-2 bg-black text-white rounded">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
