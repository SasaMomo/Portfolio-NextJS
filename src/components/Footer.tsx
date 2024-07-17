import { ArrowUpIcon, ArrowUpTrayIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-around md:justify-between border-t-2 mt-4 container mx-auto p-4">
      <p className="m-2 text-xl self-start">All rights reserved 2024 ©</p>
      <div className="flex">
        <a href="#top" className="m-2 underline text-xl flex cursor-pointer">
          Voltar ao topo
          <ArrowUpIcon className="animate-bounce h-10 w-10 m-auto" />
        </a>
      </div>
    </footer>
  );
}
