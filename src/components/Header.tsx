"use client";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import ThemeSwitch from "./Switch";

export default function Header() {
  return (
    <div className="sticky w-full top-0 z-[44]">
      <Popover
        id="headerhef"
        className="flex mx-auto container border-b-2 h-24 py-2 items-center dark:bg-[#202020] bg-slate-400"
      >
        <h1 className="Header typewriter px-6 max-w-[235px]">
          Portfólio Front-End
        </h1>
        <div className="grow">
          <nav className="hidden sm:flex items-center gap-4 md:gap-6 justify-end mr-2">
            <div className="bg-purple-400 px-2 pt-2 pb-1 rounded-xl">
              <ThemeSwitch />
            </div>
            <Link
              className="hover:bg-purple-500 transition-all active:animate-ping"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:bg-purple-500 transition-all active:animate-ping"
              href="/Projects"
            >
              Projetos
            </Link>
            <Link
              className="hover:bg-purple-500 transition-all active:animate-ping"
              href="/Contact"
            >
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-purple-700 p-2 m-2 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-40"
          >
            <div className="rounded-lg dark:bg-purple-800 bg-slate-400 shadow-lg ring-1 ring-black ringopacity-5 divide-y-2 divide-gray-50">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-center m-4">Lucas Henrique</h1>
                <div className="bg-purple-400 px-2 pt-2 pb-1 rounded-xl">
                  <ThemeSwitch />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-purple-700 p-2 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 m-5">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 ">
                <nav className="grid ">
                  <Link
                    href="/"
                    className="text-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 border-b-white border-b-2 p-3 mt-0 mb-0"
                  >
                    Home
                  </Link>
                  <Link
                    href="/Projects"
                    className="text-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 border-b-white border-b-2 p-3 mt-0 mb-0"
                  >
                    Projetos
                  </Link>
                  <Link
                    href="/Contact"
                    className="text-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-50 p-3 mt-0 mb-0"
                  >
                    Contato
                  </Link>
                </nav>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
