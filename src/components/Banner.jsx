import { Typewriter } from 'react-simple-typewriter';
import animationData from '../../public/data.json'
import { FaFacebook, FaFileDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import { Roll } from 'react-reveal';

const Banner = () => {

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <Lottie animationData={animationData}
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Hi 👋 I&apos;m Nazir Uddin Mithu</h1>
                    <h1 className='text-3xl font-bold h-10' style={{ margin: 'auto 0' }}>
                        I am a{' '}
                        <span className='text-red-400' style={{ fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['MERN STACK DEVELOPER', 'REACT JS DEVELOPER']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className="py-6">I have technical skills, exceptional teamwork abilities, a profound passion for continuous learning, meticulous attention to detail, and an unwavering dedication to my work.</p>
                    {/* <a className="button-primary" href="https://drive.google.com/uc?export=download&id=1bZGLN6416wY78_bI2gch4ea2UM6YN-Qt"><FaFileDownload />Download Resume</a> */}
                    <button className="button-primary border"> <a className='flex items-center' href="https://drive.google.com/uc?export=download&id=1bZGLN6416wY78_bI2gch4ea2UM6YN-Qt"><FaFileDownload className='mr-2'></FaFileDownload> Download Resume</a></button>
                    <div>
                        <p className='mt-2'>SOCIAL MEDIA</p>
                        <Roll top left>
                            <div className='flex  space-x-2 my-2'>
                                <button className=' flex justify-center items-center btn-circle bg-rose-500 border-0 text-white shadow-2xl hover:bg-transparent  '>
                                    <a href="https://www.linkedin.com/in/md-nazir-uddin-mithu-783272232/"> <FaLinkedin className='text-xl'></FaLinkedin></a>
                                </button>
                                <button className=' flex justify-center items-center btn-circle bg-rose-500 border-0 text-white shadow-2xl hover:bg-transparent'>
                                    <a href="https://github.com/nazirmithu?tab=repositories"> <FaGithub className='text-xl'></FaGithub></a>
                                </button>
                                <button className=' flex justify-center items-center btn-circle bg-rose-500 border-0 text-white shadow-2xl hover:bg-transparent'>
                                    <a href="https://www.facebook.com/profile.php?id=100001248718026"> <FaFacebook className='text-xl'></FaFacebook></a>
                                </button>
                                <button className=' flex justify-center items-center btn-circle bg-rose-500 border-0 text-white shadow-2xl hover:bg-transparent'>
                                    <a href="https://www.instagram.com/nazir__uddin/"> <FaInstagram className='text-xl'></FaInstagram></a>
                                </button>
                            </div>
                        </Roll>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;