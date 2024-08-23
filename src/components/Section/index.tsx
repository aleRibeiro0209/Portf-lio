import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="container mx-auto px-6 py-16 max-w-[1200px] flex flex-wrap-reverse gap-6 justify-center">
        {children}
    </section>
  );
};

export default Section;