import { FaDownload } from 'react-icons/fa';
import image from '../../public/photo.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();
const About = () => {
    return (
        <div className=" p-5 bg-gray-900 text-white  mx-auto py-10  ">
            <div className="flex lg:space-x-5 flex-col lg:flex-row-reverse  items-center justify-center">
                <img data-aos="fade-left"
                    data-aos-duration="1000"
                    src={image} className=" h-96 object-cover rounded-lg shadow-2xl" />
                <div data-aos="fade-right"
                    data-aos-duration="1000" className=' max-w-xl lg:mr-5 p-2'>
                    <p className='font-bold text-3xl mb-5'>    About me</p>
                    <h1 className="text-5xl font-bold text-red-400">I am available for your  Project</h1>
                    <p className="py-6">Hello! I&apos;m Nazir Uddin Mithu. I am a junior front-end developer. As a junior web developer, I am dedicated to learning and mastering new technologies. I always try to learn new technologies and stay up to date with new technologies. My skills include HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, ES6, Firebase, MongoDB, Node.js, Express.js, and JWT. I have a particular interest in React.js, which allows me to build interactive and dynamic user interfaces efficiently.
                    </p>
                    <button className="button-primary border"> <a className='flex items-center' href="https://drive.google.com/uc?export=download&id=1bZGLN6416wY78_bI2gch4ea2UM6YN-Qt"><FaDownload className='mr-2'></FaDownload> Download Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default About;