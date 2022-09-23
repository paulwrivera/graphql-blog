import React, { useState, useEffect } from "react";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mb-8">
      <div className="container px-10 flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="/blog-logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Blog logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Paul Blogs
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          id="mobile-menu-button"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3
          15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded
              ? "mobile-menu w-full md:block md:w-auto"
              : "hidden mobile-menu w-full md:block md:w-auto"
          }
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {categories.map((category, index) => (
              <li>
                <a key={index} href={`/category/${category.slug}`}>
                  <span className="block py-2 pr-4 pl-3 text-lg font-medium text-slate-500 rounded md:bg-transparent md:text-blue-900 md:p-0 dark:text-white hover:underline">
                    {category.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
