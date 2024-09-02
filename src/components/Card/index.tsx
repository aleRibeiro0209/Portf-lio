interface CardProps {
    mode: string,
    title: string,
    desc: string,
    src: string,
}

const Card: React.FC<CardProps> = ({ mode, title, desc, src }) => {

  return (
    <div className={"flex flex-col flex-1 gap-[2rem] w-full min-w-[300px] rounded-[24px] overflow-hidden shadow-[0_0_15px_#FFCBC340] " + mode}>
        <div className="w-full h-[180px] flex justify-center items-center relative overflow-hidden">
            <img className="absolute object-cover w-full h-full ease-in-out duration-300 hover:scale-[1.1]" src={src} />
        </div>
        <div className="w-full flex flex-col gap-[1.5rem] pb-[50px] px-[12px]">
            <h4 className="text-[24px] font-semibold">{title}</h4>
            <p className="text-[20px] font-medium text-justify">{desc}</p>
        </div>
    </div>
  );
}

export default Card;
