import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tecs from "@/components/Tecs";
import ThemeSwitch from "@/components/Switch";
import { ComputerDesktopIcon } from "@heroicons/react/16/solid";
import {
  BookOpenIcon,
  CpuChipIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

const allTecs = [
  {
    tname: "Next.js",
    timg: "https://i.imgur.com/KaBPenW.png",
  },
  {
    tname: "JavaScript",
    timg: "https://i.imgur.com/ENgZWAu.png",
  },
  {
    tname: "TailWind",
    timg: "https://i.imgur.com/cjWrhtS.png",
  },
  {
    tname: "CSS",
    timg: "https://i.imgur.com/vnUx2D3.png",
  },
  {
    tname: "TypeScript",
    timg: "https://i.imgur.com/Jp3iw3f.png",
  },
  {
    tname: "Git",
    timg: "https://i.imgur.com/FVD7Fhm.png",
  },
  {
    tname: "GitHub",
    timg: "https://i.imgur.com/gxTIVCc.png",
  },
  {
    tname: "SQL",
    timg: "https://i.imgur.com/nXOKtOu.png",
  },
];

export default function Home() {
  const refe = useRef<any>();
  return (
    <div className="bg-slate-400 dark:bg-[#202020] dark:text-[#FFFFFF] transition-colors duration-500 ease-in-out">
      <div>
        <Parallax
          pages={3.2}
          ref={refe}
          className="bg-slate-400 dark:bg-[#202020] dark:text-[#FFFFFF] transition-colors duration-500 ease-in-out"
        >
          <ParallaxLayer
            factor={0.8}
            speed={2}
            offset={0.15}
            onClick={() => refe.current.scrollTo(0.9)}
            className=" dark:text-[#FFFFFF] transition-colors duration-500 ease-in-out h-[100vh] flex"
          >
            <main className="animation1 text-center container mx-auto flex opacity-0">
              <div className="flex container mx-auto flex-wrap md:flex-nowrap my-auto">
                <div className="flex-shrink-0 max-w-[150px] md:max-w-[200px] mx-auto">
                  <Image
                    src="https://i.imgur.com/FpgTk06.png"
                    width={200}
                    height={200}
                    alt="IMG"
                    className="self-center mx-auto p-2"
                  />
                  <h2 className="text-center text-xl font-bold">
                    Lucas Henrique
                  </h2>
                </div>
                <div className="text-center">
                  <div>
                    <h1 className="my-5 font-bold">
                      Boas-vindas ao meu Portifólio!
                    </h1>
                  </div>
                  <p className="text-xl mx-[6px] sm:mx-4">
                    Atualmente sou um desenvolvedor Front-End, eu já fiz
                    trabalhos de design, sei mexer no figma, já fiz campanhas de
                    anúncio e um alguns trabalhos com React.
                  </p>
                  <div className="relative bottom-[-5vh]">
                    Clique para Navegar
                  </div>
                </div>
              </div>
            </main>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            factor={0.2}
            className=" dark:text-[#FFFFFF] transition-colors duration-500 ease-in-out"
          >
            <Header />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            onClick={() => refe.current.scrollTo(1.8)}
            speed={0.5}
            className="bg-slate-400 dark:bg-[#202020] dark:text-[#FFFFFF] transition-colors duration-500 ease-in-out"
          >
            <div className="mb-[16vh] my-auto">
              <h2 className="text-center mt-5 mb-5 text-2xl">Tecnologias:</h2>
              <div className="flex flex-wrap justify-end place-items-center container mx-auto my-4 gap-1 px-[2vw] md:px-[2vw] lg:px-[10vw]">
                {allTecs.map((e: any) => {
                  return <Tecs tname={e.tname} timg={e.timg} />;
                })}
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            factor={0.2}
            offset={3}
            onClick={() => refe.current.scrollTo(0)}
          >
            <div className="bottom-0 fixed w-full bg-slate-400 dark:bg-[#202020] dark:text-[#FFFFFF] transition-colors duration-500 ease-in-out">
              <div className="mx-auto ">
                <Footer />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            factor={1}
            speed={0.8}
            onClick={() => refe.current.scrollTo(3.2)}
            className="bg-slate-400 dark:bg-[#202020] dark:text-[#FFFFFF] transition-colors duration-500 ease-in-out"
          >
            <div className="grid md:grid-cols-4 grid-cols-2 mx-auto container dark:bg-[#252525] bg-slate-300 justify-around text-center gap-4 rounded-md text-[16px] sm:text-[18px]">
              <div className="flex flex-col">
                <h2 className="text-[26px] font-bold">Designer</h2>
                <PaintBrushIcon className=" h-[96px] w-[96px] mx-auto text-red-700" />
                <div className="text-center h-[94px] sm:h-[120px] flex items-center mb-[8px] sm:mb-[12px]">
                  <p>
                    Eu ja passei muito tempo tentando impressionar com um bom
                    design.
                  </p>
                </div>
                <p>Ferramentas:</p>
                <p>Figma</p>
                <p>Gimp</p>
                <p>Vegas</p>
                <p>Canva</p>
                <p>AI CapCut</p>
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="text-[26px] font-bold">Front-End</h2>
                <ComputerDesktopIcon className="h-[96px] w-[96px] mx-auto text-blue-600" />
                <div className="text-center h-[94px] sm:h-[120px] flex items-center mb-[8px] sm:mb-[12px]">
                  <p>
                    Transformar Designs em páginas é como dar vida a desenhos.
                  </p>
                </div>
                <p>Conhecimentos:</p>
                <p>Páginas Responsivas</p>
                <p>Dev Tools</p>
                <p>Node</p>
                <p>Scripts</p>
                <p>VS Code</p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[26px] font-bold">T.I.</h2>
                <CpuChipIcon className=" h-[96px] w-[96px] mx-auto text-green-400" />
                <div className="text-center h-[94px] sm:h-[120px] flex items-center mb-[8px] sm:mb-[12px]">
                  <p>
                    Estou sempre descobrindo como as coisas funcionam,
                    principalmente os computadores.
                  </p>
                </div>
                <p>Experiências:</p>
                <p>Montagem</p>
                <p>Manutenção</p>
                <p>Software</p>
                <p>Rotinas de teste</p>
                <p>Compatibilidade</p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[26px] font-bold">Inglês</h2>
                <BookOpenIcon className=" h-[96px] w-[96px] mx-auto text-cyan-500" />
                <div className="text-center h-[94px] sm:h-[120px] flex items-center mb-[8px] sm:mb-[12px]">
                  <p>
                    I love how English connected me to new friends and more
                    acknowledgment.
                  </p>
                </div>
                <p>Knowledge:</p>
                <p>Campus Practice</p>
                <p>Course Practice</p>
                <p>Phrasal Verbs</p>
                <p>Presentations</p>
                <p className="flex mx-auto hover:animate-spin origin-left">
                  Hire me <FaceSmileIcon className="h-8 animate-bounce" /> pls?
                </p>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
