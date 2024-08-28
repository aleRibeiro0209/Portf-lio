interface ProgressBarProps {
  label: string;
  percent: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percent }) => {
  const className:string = "max-w-[1000px] w-[80%] h-[32px] bg-transparent flex border-solid border rounded-[32px] border-[#FF3131D8] before:rounded-[32px] before:content-[''] before:bg-[#FF3131D8] ";

  return (
    <div className="w-full flex gap-4">
      <div className={className + percent}></div>
      <span className="w-[20%] flex justify-end font-medium text-[1rem] md:text-[1.5rem] items-center">{label}</span>
    </div>
  );
};

export default ProgressBar;