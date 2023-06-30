import { Typewriter } from 'react-simple-typewriter';
import animationData from '../../public/data.json'
import Lottie from "lottie-react";

const Banner = () => {

    return (
        <div className="hero min-h-screen">
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
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;