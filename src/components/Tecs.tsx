import Image from "next/image";

interface TecsProps {
  tname: string;
  timg: any;
  tdesc: string;
}

export default function Tecs(props: TecsProps) {
  return (
    <div className="animation1 tecs-size my-4 mx-auto text-2xl container h-22 w-22 md:flex justify-start flex-nowrap border-purple-300 border-2 p-0 text-center rounded-xl opacity-0">
      <div className="flex flex-col m-2 gap-2 justify-start min-w-40">
        <div>{props.tname}</div>
        <div>
          <Image
            src={props.timg}
            width={110}
            height={110}
            alt="IMG"
            className="tecs-img self justify-self-end mx-auto rounded-xl border-purple-300 border-2 p-2 bg-purple-600 animate-pulse"
          />
        </div>
      </div>
      <div className="text-justify m-6 text-xl">
        <p>{props.tdesc}</p>
      </div>
    </div>
  );
}
