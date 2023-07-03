import { FaGithub } from 'react-icons/fa';
import htmlPic from '../assets/html-5.png'
import css from '../assets/css-3.png'
import tailwindPic from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import javascript from '../assets/js.png'
import reactPic from '../assets/react.svg'
import mongoDb from '../assets/mongodb.png'
import express from '../assets/expressJs.png'
import firebase from '../assets/firebase.png'
import Marquee from 'react-fast-marquee';

const Skills = () => {
    return (
        <div className='text-white w-full p-5' style={{ background: 'linear-gradient(90deg, #07233B 1.67%, #041D34 39.95%, #04192D 58.24%, #040E18 80.28%, #050C16 101.48%)' }}>
            <h1 className='text-white text-5xl font-bold text-center  p-2'>Skills</h1>
            <div className='divider-horizontal'></div>


            <Marquee>
                <div className=' flex flex-col lg:flex-row gap-14 items-center justify-center space-y-5 mx-auto max-w-screen-lg h-52'>

                    <div className='flex items-center justify-center space-x-1'>
                        <img className='w-8' src={htmlPic} alt="" />
                        <h1 className='text-2xl font-bold'>HTML</h1>
                    </div>

                    <div className='flex items-center justify-center space-x-1'>
                        <img className='w-12' src={css} alt="" />
                        <h1 className='text-2xl font-bold'>CSS</h1>
                    </div>

                    <div className='flex items-center justify-center space-x-1'>
                        <img className='w-8' src={tailwindPic} alt="" />
                        <h1 className='text-2xl font-bold'>Tailwind</h1>
                    </div>

                    <div className='flex items-center justify-center space-x-1'>
                        <img className='w-8' src={bootstrap} alt="" />
                        <h1 className='text-2xl font-bold'>Bootstrap</h1>
                    </div>

                    <div className='flex items-center justify-center space-x-1'>
                        <img className='w-8' src={javascript} alt="" />
                        <h1 className='text-2xl font-bold'>Javascript</h1>
                    </div>

                    <div className='flex items-center justify-center space-x-1'>
                        <img className='w-8' src={reactPic} alt="" />
                        <h1 className='text-2xl font-bold'>React</h1>
                    </div>

                    <div className='flex items-center justify-center space-x-1'>
                        <img className='w-8' src={mongoDb} alt="" />
                        <h1 className='text-2xl font-bold'>MongoDB</h1>
                    </div>

                    <div className='flex items-center justify-center space-x-1'>
                    <img className='w-8' src={express} alt="" />
                        <h1 className='text-2xl font-bold'>Express</h1>
                    </div>

                    <div className='flex items-center justify-center space-x-1'>
                        <img className='w-8' src={firebase} alt="" />
                        <h1 className='text-2xl font-bold'>Firebase</h1>
                    </div>

                    <div className='flex items-center justify-center space-x-1'>
                        <FaGithub className='text-4xl'></FaGithub>
                        <h1 className='text-2xl font-bold'>Github</h1>
                    </div>

                </div>
            </Marquee>
        </div>
    );
};

export default Skills;