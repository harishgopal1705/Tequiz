import React from "react";
import { navLinks } from "./../constants/constants";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-5 bg-transparent text-dark backdrop-blur-sm border-b-[0.5px] border-lightest z-10 top-0 fixed">
      <div className="flex justify-between items-center max-container">
        <div>
          <a href="/" className="font-codystar font-bold text-xl">
            Tequiz
          </a>
        </div>
        <ul className="flex justify-center items-center gap-16">
          {navLinks.map((nav) => (
            <li key={nav.label} className="text-lg ">
              <a href={nav.href} className="hover:text-slate-black">
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <a href="#" className="text-lg font-semibold">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
