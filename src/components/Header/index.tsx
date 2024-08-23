import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { SunMedium, Moon } from 'lucide-react';
import Button from '../Button';

interface HeaderProps {
    changeMode: (newClass: string) => void;
    homeClass: string;
};

const Header: React.FC<HeaderProps> = ({ changeMode, homeClass }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMode = () => {
        setMode(!mode);
        changeMode( homeClass === "w-dvw h-dvh custom-gradient-dark py-[24px]" ? "w-dvw h-dvh custom-gradient-light py-[24px]" : "w-dvw h-dvh custom-gradient-dark py-[24px]");
    };

    return (
        <header className="container mx-auto px-6 max-w-[1200px]">
            <div className=" flex justify-between items-center">
                <h1 className="text-[48px] p-3 font-black max-w-[120px] rounded-lg bg-solidcomponents text-colorfont">AR</h1>

                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="hover:text-red-500 font-medium text-2xl">Home</a>
                    <a href="#" className="hover:text-red-500 font-medium text-2xl">Trajetória</a>
                    <a href="#" className="hover:text-red-500 font-medium text-2xl">Portfólio</a>
                    <a href="#" className="hover:text-red-500 font-medium text-2xl">Contato</a>
                </nav>

                <Button onClick={toggleMode} className='hidden md:flex'>
                    {mode ? <Moon size={40} /> : <SunMedium size={40}/> }
                </Button>
                
                <Button onClick={toggleMenu} className="md:hidden focus:outline-none bg-transparent">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2xl" className={mode ? "text-[#000]" : "text-fontcolor"} />
                </Button>
            </div>

            {isOpen && (
                <nav className="md:hidden mt-4 space-y-4 text-center flex flex-col items-center">
                    <a href="#" className="hover:text-red-600">Home</a>
                    <a href="#" className="hover:text-red-600">Sobre</a>
                    <a href="#" className="hover:text-red-600">Serviços</a>
                    <a href="#" className="hover:text-red-600">Contato</a>
                    <Button onClick={toggleMode}>
                        {mode ? <Moon size={40} /> : <SunMedium size={40}/> }
                    </Button>
                </nav>
            )}
        </header>
    );
};

export default Header;