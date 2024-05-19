import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <>
      <Header />
      <div>
        <h1>Projects</h1>
        <h2>Cartões promocionais</h2>
        <p>
          Este projeto consiste em em cartões com produtos onde as informações
          são coletadas de um array, uma função calcula os preços e converte
          para numeros aplicaveis como 99.99 em vez de 99.999887 e tambem é
          usada a renderização condicional de CSS e HTML.
        </p>
        <Link href="/projects/Promotions">Projects</Link>
      </div>
      <div>
        <h2>Buttons com useState</h2>
        <p>Carrinho de compras com useState.</p>
        <Link href="/projects/Buttons">Buttons</Link>
      </div>
      <Footer />
    </>
  );
}
