import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex container mx-auto flex-wrap md:flex-nowrap">
        <div className="flex-shrink-0 max-w-[150px] md:max-w-[200px] mx-auto">
          <Image
            src="https://i.imgur.com/FpgTk06.png"
            width={200}
            height={200}
            alt="IMG"
            className="self-center mx-auto p-2"
          />
          <h2 className="text-center">Lucas Henrique</h2>
        </div>
        <div className="text-center">
          <h2>Um pouco sobre mim</h2>
          <p className="self-center mx-4">
            Eu tenho 23 anos, desde os meus 17 anos eu mergulhei na area da
            tecnologia, ja trabalhei com edição, manutenção de computadores,
            aulas de informática , estágio e em cada lugar que eu trabalhei eu
            aprendi muito tanto na parte tecnica quanto na parte pessoal.
          </p>
        </div>
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
            Certificado de Html, CSS, JavaScript, React e Next JS.
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
