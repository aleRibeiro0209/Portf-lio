interface TimeLineProps {
    quant: number,
    label: Array<string>
}

const TimeLine: React.FC<TimeLineProps> = ({ quant, label }) => {
    
    if(quant === 2) {
        return (
            <div className="w-full flex flex-col gap-[.75rem]">
                <div className="w-full h-[5px] relative bg-[#FF3131D8] z-10">
                    <div className="w-[30px] h-[30px] absolute right-0 top-0 bg-[#FF3131] translate-y-[-45%] rounded-full z-30"></div>
                    <div className="w-[30px] h-[30px] absolute md:right-1/2 top-0 bg-[#FF3131] translate-y-[-45%] rounded-full z-30"></div>
                </div> 
                <div className="w-full flex justify-end">
                    <span className="font-medium text-lg sm:text-2xl mr-auto md:mx-auto md:translate-x-[60%]">{label && label[0]}</span>
                    <span className="font-medium text-lg sm:text-2xl ml-16 md:ml-0">{label && label[1]}</span>
                </div>
            </div>
        );
    } else if (quant === 1) {
        return (
            <div className="w-full flex flex-col gap-[.75rem]">
                <div className="w-full h-[5px] relative bg-[#FF3131D8] z-10">
                    <div className="w-[30px] h-[30px] absolute right-0 top-0 bg-[#FF3131] translate-y-[-45%] rounded-full z-30"></div>
                </div> 
                <div className="w-full flex">
                    <span className="ml-auto font-medium text-lg sm:text-2xl">{label && label[0]}</span>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default TimeLine;