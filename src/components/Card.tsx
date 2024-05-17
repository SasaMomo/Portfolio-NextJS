import Image from "next/image";

interface CardProps {
  pname: string;
  pdesc: string;
  pprice: number;
  poff: number;
  function: any;
  aval: boolean;
}

export default function Card(props: CardProps) {
  return (
    <div className="card-size flex justify-between flex-wrap border-white border-2 p-0 text-center  rounded-xl">
      <div className="mt-1 mx-auto w-80 text-2xl capitalize">{props.pname}</div>
      <Image
        src="https://i.imgur.com/xyh5aTO.png"
        width={120}
        height={180}
        alt="IMG"
        className="self-center mx-auto border-dashed border-white border-2 p-2"
      />
      <div className="mb-2 w-80 mx-auto">{props.pdesc}</div>
      {props.aval == true ? (
        <div className="mx-auto flex flex-wrap w-80">
          <div className="self-end w-80">
            <p>
              price: R$ 
              {props.pprice}
            </p>
          </div>
          <div className="self-end w-80 mx-auto">
            <p>{props.poff * 100}% off</p>
            <p
              className={` text-lg m-0 w-80 mb-2 ${
                props.poff > 0.1 ? "text-green-400" : "text-blue-400"
              }`}
            >
              R$ {Math.round(props.function(props.pprice, props.poff)) / 100}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <p className="self-end w-80 mx-auto mb-2 text-red-500">
            fora de estoque
          </p>
        </div>
      )}
    </div>
  );
}
