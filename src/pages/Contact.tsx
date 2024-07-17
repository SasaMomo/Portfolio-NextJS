import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Contact() {
  return (
    <>
      <div
        id="top"
        className="bg-slate-400 dark:bg-[#202020] dark:text-[#FFFFFF] transition-colors duration-500 ease-in-out"
      >
        <Header />
        <div>
          <Parallax pages={4}>
            <ParallaxLayer
              speed={1}
              factor={2}
              style={{
                backgroundImage: "url(https://i.imgur.com/uHwpwUq.jpeg)",
                backgroundSize: "cover",
              }}
              className="bg-red-800"
            >
              <h2>HELLdddddddO</h2>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.1} className="">
              <h2>Is anybody in there</h2>
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} sticky={{ start: 0.5, end: 2.5 }}>
              <h1 className="mx-auto text-center">Boas vindas ao meu pórti</h1>
            </ParallaxLayer>
          </Parallax>
          <div className="bg-slate-500 z-[44]"> d</div>
        </div>
      </div>
    </>
  );
}
