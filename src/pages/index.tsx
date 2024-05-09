import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tecs from "@/components/Tecs";

const inter = Inter({ subsets: ["latin"] });

const allTecs = [
  {
    tname: "Next.js",
    timg: "/React.png",
    tdesc:
      "Esta página foi feita com React.js, importando informações de um array para criar estes cards, menu responsivo e com animações, props com interface para exportar os dados e eu também sei usar os Hooks.",
  },
  {
    tname: "JavaScript",
    timg: "/JS.png",
    tdesc:
      "Eu sei criar funções, propriedades como map e math, também extrair informaçãos de outros lugares e triggers.",
  },
  {
    tname: "TailWind",
    timg: "/TW.png",
    tdesc:
      "Esta página esta usando TailWind, eu entendo como usar e consultar as propriedades, fazer os elementos responsivos e também importar CSS no meio das propriedades do TailWind para criar coisas complexas",
  },
  {
    tname: "CSS",
    timg: "/CSS.png",
    tdesc:
      "Medias Queries para responsividade, importar icones, fontes ou elementos externos.",
  },
  {
    tname: "TypeScript",
    timg: "/TS.png",
    tdesc:
      "Está sendo usado para formação do código desta página e também para as sugestões do ALT + Espaço.",
  },
  {
    tname: "Git",
    timg: "/GIT.png",
    tdesc:
      "Eu entendo o conceitos de timelines, branches, push origin e commit.",
  },
  {
    tname: "GitHub",
    timg: "/GitHub.png",
    tdesc:
      "Esta página esta usando o Github Pages para ser exibida, também esta em um repositorio do Github e eu também entendo os conceitos de fork, pull requests, issues e codespaces.",
  },
  {
    tname: "SQL",
    timg: "/SQL.png",
    tdesc:
      "Não faz bem parte do Front-End mas eu sei fazer tabelas, join/inner join, primary/foreign keys, calcular a performance da db e usar os filtros(order by, group by, where, like).",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <div>
          <h1 className="text-center mt-5 mb-5">
            Boas-vindas ao meu Portifolio.
          </h1>
          <h2>
            Primeiro eu gostaria de me apresentar e dizer quais tecnologias eu
            sei
          </h2>
        </div>
      </main>
      <h2 className="text-center mt-5 mb-5 text-3xl">Tecnologias:</h2>
      {allTecs.map((e: any) => {
        return <Tecs tname={e.tname} timg={e.timg} tdesc={e.tdesc} />;
      })}
      <Footer />
    </>
  );
}
