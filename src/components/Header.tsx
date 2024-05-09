"use client";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

export default function Header() {
  return (
    <Popover
      id="headerhef"
      className="flex mx-auto container border-b-2 px-6 h-24 py-2 items-center"
    >
      <h1 className="Header">Lucas Henrique Front-End Dev</h1>
      <div className="grow">
        <nav className="hidden sm:flex items-center gap-4 md:gap-6 justify-end mr-2">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/projects/Promotions">Projects</Link>
          <Link href="contact">Contact</Link>
        </nav>
      </div>
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-purple-700 p-2 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="duration ease-out"
        enterFrom="opacity-0 scale-70"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-lg bg-purple-700 shadow-lg ring-1 ring-black ringopacity-5 divide-y-2 divide-gray-50">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-center m-10">Lucas Henrique</h1>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-purple-700 p-2 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 m-5">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid">
                <Link
                  href="home"
                  className=" text-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 border-b-white border-b-2 p-3 mt-0 mb-0"
                >
                  Home
                </Link>
                <Link
                  href="about"
                  className=" text-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 border-b-white border-b-2 p-3 mt-0 mb-0"
                >
                  About
                </Link>
                <Link
                  href="projects"
                  className=" text-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 border-b-white border-b-2 p-3 mt-0 mb-0"
                >
                  Projects
                </Link>
                <Link
                  href="contact"
                  className=" text-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-50 p-3 mt-0 mb-0"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
