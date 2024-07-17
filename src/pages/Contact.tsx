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
        <div className="container">
          <Parallax pages={4} className="mx-0 container">
            <ParallaxLayer className="bg-red-800">
              <h2>HELLdddddddO</h2>
            </ParallaxLayer>
            <ParallaxLayer offset={1} className="bg-green-800">
              <h2>Is anybody in there</h2>
            </ParallaxLayer>
          </Parallax>
        </div>
        <Footer />
      </div>
    </>
  );
}
