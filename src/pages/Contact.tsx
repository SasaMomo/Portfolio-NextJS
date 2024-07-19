import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  ArrowDownIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/solid";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Contact() {
  const refe = useRef<any>();
  return (
    <>
      <div
        id="top"
        className="bg-slate-400 dark:bg-[#202020] text-[#FFFFFF] transition-colors duration-500 ease-in-out"
      >
        <div>
          <Parallax pages={1.6} ref={refe}>
            <ParallaxLayer
              speed={2}
              factor={3}
              style={{
                backgroundImage: "url(https://i.imgur.com/uHwpwUq.jpeg)",
                backgroundSize: "cover",
              }}
              className="bg-red-800"
            ></ParallaxLayer>
            <ParallaxLayer
              offset={0.1}
              speed={1}
              onClick={() => refe.current.scrollTo(1)}
            >
              <h2 className="text-center text-2xl my-[4vh]">
                Eu gostaria muito de ler/ouvir o seu Feedback!
              </h2>
              <Image
                src="https://i.imgur.com/1uNIIzH.jpeg"
                alt="d"
                width={700}
                height={677}
                className="w-[80vw] sm:w-[60vw] mx-auto border-4 rounded-2xl border-purple-500"
              />
              <div className="flex container mx-auto my-2 active:animate-ping after:animate-ping">
                <ArrowDownIcon className="w-10 h-10 mx-auto animate-bounce my-4" />
                <p className="text-xl sm:text-2xl text-center">
                  Clique para avançar
                </p>
                <ArrowDownIcon className="w-10 h-10 mx-auto animate-bounce my-4" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={0.1}>
              <Header />
            </ParallaxLayer>
            <ParallaxLayer offset={1}>
              <div className="mx-auto text-center text-md sm:text-2xl dark:bg-[#202020] dark:text-[#FFFFFF] bg-slate-400 w-[80vw] rounded-md p-4 gap-y-2 flex flex-col">
                <p className="hover:underline hover:scale-110">
                  Email: sasa.lhcl@gmail.com
                </p>
                <p className="hover:underline hover:scale-110">
                  Telefone: (85) 99615-1455
                </p>
                <p className="hover:underline hover:scale-110">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/lucas-sasa/"
                  >
                    Linkedin: www.linkedin.com//lucas-sasa/
                  </a>
                </p>
                <p className="hover:underline hover:scale-110 ">
                  <a
                    href="https://wa.me/85984195751?text=Olá%20Lucas,%20eu%20gostaria%20de%20falar%20com%20você%20sobre%20o%20seu%20portfólio!"
                    target="_blank"
                  >
                    Whatsapp:  
                    <strong className="text-blue-400">Clique aqui</strong>
                  </a>
                </p>
                <Link
                  href="https://drive.usercontent.google.com/u/0/uc?id=1_eFfwPyScvDrB5xiV7hVH8vIfo5Y-pn3&export=download"
                  target="_blank"
                  className="flex mx-auto cursor-pointer hover:scale"
                >
                  <p className="py-1 text-md sm:text-4xl">
                    Baixe meu Currículo:  
                  </p>
                  <DocumentArrowDownIcon className="w-10 sm:w-16 hover:scale-[1.50]" />
                </Link>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1.5}
              factor={0.2}
              className="dark:bg-[#202020] dark:text-[#FFFFFF] bg-slate-400 w-[80vw] border-t-2 border-dotted"
              onClick={() => refe.current.scrollTo(0)}
            >
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </>
  );
}
