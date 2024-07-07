import Image from "next/image";

interface TecsProps {
  tname: string;
  timg: any;
}

export default function Tecs(props: TecsProps) {
  return (
    <div className="animation1 sm:text-2xl text-lg mx-auto flex justify-center flex-nowrap py-2 px-0 sm:py-0 text-center opacity-0 bg-slate-400/0 dark:bg-[#20202000] dark:text-[#FFFFFF]">
      <div className="flex flex-col my-2 mx-5 gap-2 justify-start">
        <div>{props.tname}</div>
        <div>
          <Image
            src={props.timg}
            width={80}
            height={80}
            alt="IMG"
            className="self justify-self-end mx-auto rounded-xl border-purple-300 border-2 p-2 bg-purple-600 animate-pulse w-18 sm:w-20"
          />
        </div>
      </div>
    </div>
  );
}
