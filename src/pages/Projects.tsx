import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-center">Projetos</h1>
        <div className="text-left">
          <h2>Cartões promocionais:</h2>
          <p className="text-l">
            Este projeto consiste em em cartões com produtos onde as informações
            são coletadas de um array, uma função calcula os preços e converte
            para numeros aplicaveis como 99.99 em vez de 99.999887 e tambem é
            usada a renderização condicional de CSS e HTML.
          </p>
          <Link className="border-2 m-4 " href="/projects/Promotions">
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
