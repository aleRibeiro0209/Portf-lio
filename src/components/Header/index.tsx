import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { SunMedium, Moon } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMode = () => {
        setMode(!mode);
    };

    return (
        <header className="container mx-auto px-6 text-colorfont max-w-[1200px]">
            <div className=" flex justify-between items-center">
                <h1 className="text-[48px] p-3 font-black max-w-[120px] rounded-lg text-colorfont bg-solidcomponents">AR</h1>

                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">Trajetória</a>
                    <a href="#" className="hover:text-gray-300">Portfólio</a>
                    <a href="#" className="hover:text-gray-300">Contato</a>
                </nav>

                <button onClick={toggleMode} className='hidden md:flex bg-solidcomponents p-[.5rem] rounded-lg'>
                    {mode ? <Moon size={40} /> : <SunMedium size={40}/> }
                </button>
                
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2xl" />
                </button>
            </div>

            {isOpen && (
                <nav className="md:hidden mt-4 space-y-4 text-center">
                    <a href="#" className="block text-center hover:text-gray-300">Home</a>
                    <a href="#" className="block text-center hover:text-gray-300">Sobre</a>
                    <a href="#" className="block text-center hover:text-gray-300">Serviços</a>
                    <a href="#" className="block text-center hover:text-gray-300">Contato</a>
                    <button onClick={toggleMode} className='text-center bg-solidcomponents p-[.5rem] rounded-lg'>
                        {mode ? <Moon size={40} /> : <SunMedium size={40}/> }
                    </button>
                </nav>
            )}
        </header>
    );
};

export default Header;