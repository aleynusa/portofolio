import React from "react";

const Footer = () => {
  return (
    <div className="text-center py-5 fixed bottom-0 left-0 z-20 w-full p-4 -t border-gray-200 shadow lg:flex lg:items-center lg:justify-center lg:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="block pt-1 text-xs md:text-sm text-gray-500">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/ariel-setiawan-63a556206/"
          target="_blank"
          className="text-semidark hover:text-sky hover:underline hover:underline-offset-4 font-medium"
        >
          Ariel Setiawan ❤️
        </a>
        . Build with{" "}
        <a
          href="https://nextjs.org/"
          className="text-semidark hover:text-sky hover:underline hover:underline-offset-4 font-medium"
          target="_blank"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="text-semidark hover:text-sky hover:underline hover:underline-offset-4 font-medium"
          target="_blank"
        >
          Tailwind CSS
        </a>
        .
      </span>
    </div>
  );
};

export default Footer;
