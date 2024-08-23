import { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Section from "../../components/Section";
import Title from "../../components/Title";
import Curriculo from "../../assets/CurriculoAlexandreRibeiro.pdf";
import Perfil from "../../assets/perfil.jpg"
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ProgressBar from "../../components/ProgressBar";

const Home = () => {
  const [homeClass, setHomeClass] = useState('w-full custom-gradient-dark py-[24px]');

  return (
    <div className={homeClass}>
      <Header homeClass={homeClass} changeMode={setHomeClass}/>
      <Section>
          <div className="flex flex-col gap-[24px] max-w-[644px] lg:w-1/2 justify-center xl:mr-auto">
            <h2 className="text-5xl font-bold">Alexandre Ribeiro</h2>
            <p className="font-normal text-xl">Com uma paixão pela criação de soluções inovadoras e impactantes. Com facilidade em me comunicar e trabalhar em equipe, gosto de compartilhar meus conhecimentos e aprender com os outros. Minha jornada profissional até o momento tem sido marcada por uma busca incansável por desafios empolgantes e oportunidades de crescimento.</p>
            <div className="flex flex-wrap gap-[16px]">
              <Button className="px-[20px]">
                <a className="flex gap-x-3" href={Curriculo} download>
                  <p className="font-bold text-[24px]">Download CV</p>
                  <Download size={40} />
                </a>
              </Button>
              <Button>
                <a href="https://github.com/aleRibeiro0209/" target="_blank"><Github size={40} /></a>
              </Button>
              <Button>
                <a href="https://www.linkedin.com/in/alexandre-ribeiro0209/" target="_blank"><Linkedin size={40}/></a>
              </Button>
              <Button>
                <a href="mailto:alexandreribeiro0209@gmail.com" target="_blank"><Mail size={40}/></a>
              </Button>
              <Button>
                <a href="https://wa.me/qr/DBGRL5SIW725G1" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="text-[45px]" /></a>
              </Button>
            </div>
          </div>
          <img src={Perfil} alt="Imagem de Alexandre Ribeiro" className="max-w-[500px] max-h-[500px] w-full lg:w-1/2 rounded-[24px]"/>
      </Section>
      <Section>
        <div className="w-full flex flex-col gap-[2rem]">
          <Title content="Principais Tecnologias" />
          <ProgressBar label="PHP" percent="before:w-[80%]" />
          <ProgressBar label="JavaScript" percent="before:w-[70%]" />
          <ProgressBar label="React" percent="before:w-[30%]" />
          <ProgressBar label="Git" percent="before:w-[60%]" />
        </div>
      </Section>
      <Section>
        <div className="w-full flex flex-col gap-[2rem]">
          <Title content="Formação" />
        </div>
      </Section>
    </div>
  );
}

export default Home;
