interface TitleProps {
    content: string;
}

const Title: React.FC<TitleProps> = ({ content }) => {
  return (
    <h3 className="font-semibold text-[2rem]">{content}</h3>
  );
};

export default Title;