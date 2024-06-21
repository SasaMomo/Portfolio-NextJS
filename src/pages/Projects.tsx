import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-center font-bold mb-4">Projetos</h1>
        <div className="flex flex-col">
          <h2 className="text-center">Bank Landing Page</h2>
          <Image
            src="https://i.imgur.com/IH0ssbJ.png"
            alt=""
            width={627}
            height={426}
            className="items-center mx-auto"
          />
          <Link
            className="border-2 m-4 p-1 mx-auto hover:bg-purple-700"
            target="_blank"
            href="https://sasamomo.github.io/Bank-Landing-Page/"
          >
            Ir ao Projeto
          </Link>
        </div>
        <div className=" flex flex-col border-t-2">
          <h2>Cartões promocionais:</h2>
          <p className="text-l">
            Este projeto consiste em em cartões com produtos onde as informações
            são coletadas de um array, uma função calcula os preços e converte
            para numeros aplicaveis como 99.99 em vez de 99.999887 e tambem é
            usada a renderização condicional de CSS e HTML.
          </p>
          <Link
            className="border-2 m-4 p-1 mx-auto hover:bg-purple-700"
            href="/projects/Promotions"
          >
            Ir ao Projeto
          </Link>
        </div>

        <div className="mt-20  border-t-4">
          <h2>Buttons com useState:</h2>
          <p>Carrinho de compras com useState.</p>
          <Link href="/projects/Buttons">Buttons</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
