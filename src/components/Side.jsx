import React from "react";

export default function Side({ setIsOpen }) {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-primary transition duration-300 md:w-4/12 lg:ml-0 lg:w-[5%] xl:w-[5%] 2xl:w-[5%]">
      <button
        className="bg-transparent hover:text-black text-white font-bold my-4 rounded opacity-100 "
        onClick={() => setIsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-auto w-auto"
        >
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
        
      </button>
    </aside>
  );
}
