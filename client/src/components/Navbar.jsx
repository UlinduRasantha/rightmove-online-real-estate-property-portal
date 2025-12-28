import React, { useState } from "react";
import { assets, menuData } from "../assets/assets.js";

const Navbar = () => {
  const [hoverMenu, setHoverMenu] = useState(null);

  return (
    <div className="w-full bg-white relative z-[100]">
      {/* Top Navbar */}
      <nav className="max-w-[1200px] mx-auto h-20 px-6 flex items-center justify-between">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <img src={assets.logo} alt="logo" className="w-32 cursor-pointer" />

          {/* Menu Items */}
          <ul className="flex items-center gap-8 h-full">
            {menuData.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoverMenu(index)}
                onMouseLeave={() => setHoverMenu(null)}
                className="h-full flex items-center relative cursor-pointer"
              >
                <span className={`text-[15px] font-bold text-[#1e2235] hover:text-[#24e5af] transition-colors py-2 px-1 ${
                  hoverMenu === index ? "border-b-2 border-[#1e2235]" : ""
                }`}>
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sign In Button */}
        <button className="flex items-center gap-2 border-2 border-[#24e5af] text-[#1e2235] font-extrabold px-5 py-2 rounded-lg hover:bg-emerald-50 transition-all">
          <img src={assets.user} className="w-4 h-4" alt="user icon" />
          Sign in
        </button>
      </nav>

      {/* --- THE HOVERING MEGA MENU --- */}
      {hoverMenu !== null && (
        <div 
          className="absolute left-0 w-full bg-[#f4f5f7] border-t border-gray-200 shadow-xl z-101"
          onMouseEnter={() => setHoverMenu(hoverMenu)}
          onMouseLeave={() => setHoverMenu(null)}
        >
          {/* Content Wrapper aligned with the Logo/Nav */}
          <div className="max-w-[1200px] mx-auto px-6 py-10">
            {/* This grid creates the column structure seen in your screenshot. 
              We use 'grid-flow-col' to ensure links fill columns properly.
            */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-4 max-w-4xl">
              {menuData[hoverMenu].links.map((link, linkIdx) => (
                <a
                  key={linkIdx}
                  href="#"
                  className="text-[15px] font-bold text-[#1e2235] hover:underline whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Dark Backdrop for Page Content (Optional, matches screenshot look) */}
      {hoverMenu !== null && (
        <div className="fixed inset-0 bg-black/20 z-[90] pointer-events-none mt-20" />
      )}
    </div>
  );
};

export default Navbar;