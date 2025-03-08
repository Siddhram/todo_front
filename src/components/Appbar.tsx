import React from "react";
import { Menu, Search } from "lucide-react";

const Appbar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-3 px-6 flex items-center justify-between">
      {/* Left Section: Logo & Menu */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <Menu className="w-6 h-6 text-gray-600 dark:text-white" />
        </button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Brand</h1>
      </div>

      {/* Middle Section: Search Bar */}
      {/* <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg w-1/3">
        <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none border-none text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 ml-2 flex-grow"
        />
      </div> */}

      {/* Right Section: User Avatar */}
      {/* <div className="flex items-center gap-4">
        <button className="text-gray-700 dark:text-white font-medium hover:underline">Login</button>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
          <img
            src="https://github.com/shadcn.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}
    </header>
  );
};

export default Appbar;
