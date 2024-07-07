import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tecs from "@/components/Tecs";
import ThemeSwitch from "@/components/Switch";

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
  return (
    <div className="bg-slate-400 dark:bg-[#202020] dark:text-[#FFFFFF] transition-colors duration-500 ease-in-out">
      <Header />
      <main className="text-center container mx-auto mb-15">
        <div>
          <h1 className="my-5 font-bold">Boas-vindas ao meu Portifólio!</h1>
          <p className="text-xl mx-[6px] sm:mx-4">
            Meu nome é Lucas Henrique, estou dedicado a aprender mais e melhorar
            as minhas tecnologias do Front-End, eu já fiz trabalhos de design,
            sei mexer no figma e já fiz campanhas de anúncio.
          </p>
        </div>
      </main>
      <h2 className="text-center mt-5 mb-5 text-2xl">Tecnologias:</h2>
      <div className="grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-cols-2 gap-2 sm:gap-4 place-items-center container mx-auto">
        {allTecs.map((e: any) => {
          return <Tecs tname={e.tname} timg={e.timg} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
