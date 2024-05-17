import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex container mx-auto">
        <div className="">
          <Image
            src="https://i.imgur.com/FpgTk06.png"
            width={300}
            height={300}
            alt="IMG"
            className="self-center mx-auto p-2"
          />
          <p>teste</p>
        </div>
        <p>inglês fluente 2x certificado front-end e SaaS experiencia</p>
      </div>
      <Footer />
    </>
  );
}
