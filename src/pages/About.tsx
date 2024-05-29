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
            width={200}
            height={200}
            alt="IMG"
            className="self-center mx-auto p-2"
          />
          <h2 className="text-center">Lucas Henrique</h2>
        </div>
        <h2></h2>
        <p className="self-center mx-4">
          Eu estou iniciando como desenvolvedor Front-End mas ja trabalhei com
          edição, Hardware, aulas de informática e estágio.
        </p>
      </div>
      <div className="text-center container mx-auto border-2 ">
        <h2>Certificações</h2>
        <div className="flex flex-nowrap my-2 border-t-2 border-dotted">
          <p className="self-center mx-auto">
            Certificado de curso Salesforce Commerce Cloud Front-end que foi
            ensinado 100% em Inglês e toda aula eu tinha que exxplicar alguma
            coisa ou conversar.
          </p>
          <a
            className="text-blue-400 underline text-center mx-1 my-6"
            href="https://certificate.osf.digital/70579"
          >
            Visualizar
          </a>
        </div>
        <div className="flex flex-nowrap my-2 border-t-2 border-dotted">
          <p className="mx-auto ">
            Certificado de Html, CSS, JavaScript, React e Nexxt JS.
          </p>
        </div>
        <div className="flex md:flex-nowrap my-2 border-t-2 border-dotted">
          <p className="self-center mx-10">
            Certificado de Inglês(conversação) e informática no C.D.P (Centro de
            Desenvolvimento profissional)
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
