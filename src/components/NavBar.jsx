import { useEffect, useState } from "react";
import { BiHomeCircle, BiUser, BiStar, BiCodeAlt, BiUserPin } from 'react-icons/bi';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('welcome');
            const aboutSection = document.getElementById('about');
            const skillsSection = document.getElementById('skills');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('contact');

            const scrollPosition = window.scrollY;

            if (
                scrollPosition >= homeSection.offsetTop &&
                scrollPosition < aboutSection.offsetTop
            ) {
                setActiveLink('home');
            } else if (
                scrollPosition >= aboutSection.offsetTop &&
                scrollPosition < skillsSection.offsetTop
            ) {
                setActiveLink('about');
            } else if (
                scrollPosition >= skillsSection.offsetTop &&
                scrollPosition < projectsSection.offsetTop
            ) {
                setActiveLink('skills');
            } else if (
                scrollPosition >= projectsSection.offsetTop &&
                scrollPosition < contactSection.offsetTop
            ) {
                setActiveLink('projects');
            } else if (scrollPosition >= contactSection.offsetTop) {
                setActiveLink('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='fixed z-10 bottom-0  lg:block lg:w-auto w-full mx-auto lg:mx-0  flex text-3xl bg-neutral lg:h-full bg-opacity-50 p-3 font-bold text-white space-x-10 lg:space-x-0 lg:space-y-16'>
            <a
                className={`block ${activeLink === 'home' ? 'bg-red-400 p-1 rounded-lg' : ''}`}
                href="#welcome"
            >
                <BiHomeCircle className='text-3xl' />
            </a>
            <a
                className={`block ${activeLink === 'about' ? 'bg-red-400 p-1 rounded-lg' : ''}`}
                href="#about"
            >
                <BiUser className='text-3xl' />
            </a>
            <a
                className={`block ${activeLink === 'skills' ? 'bg-red-400 p-1 rounded-lg' : ''}`}
                href="#skills"
            >
                <BiStar className='text-3xl' />
            </a>
            <a
                className={`block ${activeLink === 'projects' ? 'bg-red-400 p-1 rounded-lg' : ''}`}
                href="#projects"
            >
                <BiCodeAlt className='text-3xl' />
            </a>
            <a
                className={`block ${activeLink === 'contact' ? 'bg-red-400 p-1 rounded-lg' : ''}`}
                href="#contact"
            >
                <BiUserPin className='text-3xl' />
            </a>
        </div>
    );
};

export default NavBar;