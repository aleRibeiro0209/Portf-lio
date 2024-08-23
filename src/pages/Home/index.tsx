import { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Section from "../../components/Section";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  const [homeClass, setHomeClass] = useState('w-dvw h-dvh custom-gradient-dark py-[24px]');

  return (
    <div className={homeClass}>
      <Header homeClass={homeClass} changeMode={setHomeClass}/>
      <Section>
          <div className="flex flex-col gap-[24px] max-w-[644px] w-1/2 justify-center mr-auto">
            <h2 className="text-5xl font-bold">Alexandre Ribeiro</h2>
            <p className="font-medium ">Com uma paixão pela criação de soluções inovadoras e impactantes. Com facilidade em me comunicar e trabalhar em equipe, gosto de compartilhar meus conhecimentos e aprender com os outros. Minha jornada profissional até o momento tem sido marcada por uma busca incansável por desafios empolgantes e oportunidades de crescimento.</p>
            <div className="flex flex-wrap gap-[24px]">
              <Button className="px-[20px]">
                <p className="font-bold text-[24px]">Download CV</p>
                <Download size={40} />
              </Button>
              <Button>
                <Github size={40} />
              </Button>
              <Button>
                <Linkedin size={40}/>
              </Button>
              <Button>
                <Mail size={40}/>
              </Button>
            </div>
          </div>
          <img src="../../../public/perfil.jpg" alt="Imagem de Alexandre Ribeiro" className="max-w-[500px] max-h-[500px] w-1/2 rounded-[24px]"/>
      </Section>
    </div>
  );
}

export default Home;
