import React from "react";

export default function Home() {
  return (
    <header
      id="home"
      className="w-full h-screen flex justify-center items-center bg-light text-dark"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-4xl font-bold">Unlock the genius within you</h2>
        <h3 className="text-3xl">Challenge. Learn. Win.</h3>
        <div className="flex gap-6">
          <button className="px-3 py-2 text-lg font-medium bg-slate-black text-light border border-transparent hover:bg-[#000] hover:border-slate-black transition-all duration-300">
            Get started
          </button>
          <button className="px-3 py-2 border text-lg font-medium text-slate-black border-slate-black hover:bg-slate-black hover:text-light transition-all duration-300">
            Learn more
          </button>
        </div>
      </div>
    </header>
  );
}
