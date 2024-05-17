import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tecs from "@/components/Tecs";

const inter = Inter({ subsets: ["latin"] });

const allTecs = [
  {
    tname: "Next.js",
    timg: "https://i.imgur.com/KaBPenW.png",
    tdesc:
      "Esta página foi feita com Next.js, importando informações de um array para criar estes cards, menu responsivo e com animações, props com interface para exportar os dados e eu também sei usar os Hooks.",
  },
  {
    tname: "JavaScript",
    timg: "https://i.imgur.com/ENgZWAu.png",
    tdesc:
      "Eu sei criar funções, usar propriedades como map e math, também extrair informaçãos de outros lugares e triggers.",
  },
  {
    tname: "TailWind",
    timg: "https://i.imgur.com/cjWrhtS.png",
    tdesc:
      "Esta página esta usando TailWind, eu entendo como usar e consultar as propriedades, fazer os elementos responsivos e também importar CSS no meio das propriedades do TailWind para criar coisas complexas",
  },
  {
    tname: "CSS",
    timg: "https://i.imgur.com/vnUx2D3.png",
    tdesc:
      "Medias Queries para responsividade, importar icones, fontes ou elementos externos.",
  },
  {
    tname: "TypeScript",
    timg: "https://i.imgur.com/Jp3iw3f.png",
    tdesc:
      "Está sendo usado para formação do código desta página, permite usar o html, o js e o css no mesmo arquivo e também para as sugestões do ctrl + Espaço.",
  },
  {
    tname: "Git",
    timg: "https://i.imgur.com/FVD7Fhm.png",
    tdesc:
      "Eu entendo o conceitos de timelines, branches, push origin e commit.",
  },
  {
    tname: "GitHub",
    timg: "https://i.imgur.com/gxTIVCc.png",
    tdesc:
      "Esta página esta usando o Github Pages para ser exibida, também esta em um repositorio do Github e eu também entendo os conceitos de fork, pull requests, issues e codespaces.",
  },
  {
    tname: "SQL",
    timg: "https://i.imgur.com/nXOKtOu.png",
    tdesc:
      "Não faz bem parte do Front-End mas eu sei fazer tabelas, join/inner join, primary/foreign keys, calcular e usar os filtros(order by, group by, where, like).",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-center container mx-auto mb-15 ">
        <div>
          <h1 className="mt-5 mb-5">Boas-vindas ao meu Portifólio!</h1>
          <p className="text-xl">
            Aqui vc confere as Tecnologias que eu estudei e pratiquei, no
            cabeçalho você pode navegar para o Sobre, Projetos e Contato e
            tambem confira o rodapé para retornar quando terminar de ler.
          </p>
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
