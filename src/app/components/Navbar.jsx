"use client";
import Link from "next/link";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center py-5 px-7 bg-gray-800 text-white rounded-xl md:w-full">
      <div className="font-bold w-1/2">PORTOFOLIO</div>
      <div className="flex flex-row justify-between w-1/2 lg:visible invisible">
        <Link href="#"> About </Link>
        <Link href="#"> Projects</Link>
        <Link href="#"> Contact</Link>
      </div>
      <div className="w-1/2 flex justify-end md:pr-16 items-center md:visible invisible">
        <Popover className="relative">
          <Popover.Button>
            <Bars3Icon className="h-6 w-6 text-white" />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 bg-gray-600 rounded-xl flex p-7">
            <div className="flex flex-col gap-7 py-5">
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="https://www.instagram.com/viezcenleyy/">Contact</a>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
