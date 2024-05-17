import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const allproducts = [
  {
    pname: "Mouse",
    pdesc: "1000hz, USB, RGB, Drivers/Macros e 8 buttons",
    pprice: 99.99,
    poff: 0.15,
    aval: true,
  },
  {
    pname: "Keyboard",
    pdesc: "Mechanical, USB, RGB, Red Switchs, Drivers/Macros",
    pprice: 99.99,
    poff: 0.05,
    aval: true,
  },
  {
    pname: "Headphone",
    pdesc: "40mm drivers, USB, RGB, 192khz studio quality",
    pprice: 149.99,
    poff: 0.1,
    aval: true,
  },
  {
    pname: "Joystick",
    pdesc: "0.5ms response, number pads, auto drivers, 1000mh battery",
    pprice: 99.99,
    poff: 0.2,
    aval: true,
  },
  {
    pname: "monitor",
    pdesc: "165hz, 27pols, IPS panel, Displayport, HDR.",
    pprice: 1000,
    poff: 0.2,
    aval: false,
  },
];

export default function Promotions() {
  function Offamount(price: number, off: number) {
    return 100 * (price - price * off);
  }
  return (
    <>
      <Header />
      <div className="text-center mt-5 mb-5 container mx-auto">
        <h1 className="mt-5 mb-5">Produtos em promo usando Props e array</h1>
        <p className="mt-5 mb-5 mx-auto">
          Se o desconto for maior que 10% o preço fica
          <span className="text-green-400"> verde</span>.
        </p>
        <p className="mt-5 mb-5">
          Se o produto estiver fora de estoque o preço e o desconto são
          substituidos por uma mensagem "fora de estoque".
        </p>
      </div>
      <div className="flex gap-6 flex-wrap justify-evenly">
        {allproducts.map((e: any) => {
          return (
            <Card
              pname={e.pname}
              pdesc={e.pdesc}
              pprice={e.pprice}
              poff={e.poff}
              function={Offamount}
              aval={e.aval}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
