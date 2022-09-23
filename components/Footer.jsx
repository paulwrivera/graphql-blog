import React from "react";

const Footer = () => {
  return (
    <footer class="p-4 md:pt-8 dark:bg-gray-900">
      <hr class="mt-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8 mb-8 lg:mb-4" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
          <img src="/blog-logo.png" class="mr-3 h-8" alt="Blog logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Paul Blogs
          </span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <span class="pt-8 block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://pauldevelops.com" class="hover:underline">
          Paul Develops
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
