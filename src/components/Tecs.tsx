import Image from "next/image";

interface TecsProps {
  tname: string;
  timg: any;
}

export default function Tecs(props: TecsProps) {
  return (
    <div className=" md:w-[20%] lg:w-[22%] w-auto sm:text-xl lg:text-2xl text-[18px] mx-auto flex justify-center flex-nowrap py-2 px-0 sm:py-0 text-center bg-slate-400/0 dark:bg-[#20202000] dark:text-[#FFFFFF]">
      <div className="flex flex-col my-2 mx-5 gap-2 justify-start">
        <div>{props.tname}</div>
        <div>
          <Image
            src={props.timg}
            width={80}
            height={80}
            alt="IMG"
            className="self hover:scale-110 mx-auto rounded-xl border-purple-300 border-2 p-2 bg-purple-600 animate-pulse w-[80px] h-[80px]"
          />
        </div>
      </div>
    </div>
  );
}
