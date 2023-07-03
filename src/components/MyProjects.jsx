import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";


const MyProjects = () => {
    return (
        <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000" className=' p-5 h-full'>
            <h1 className='text-3xl text-white font-bold text-center mb-20'>My Projects</h1>
            <div className='grid lg:grid-cols-2 my-5 gap-10 max-w-screen-lg mx-auto justify-center'>
                <Project1></Project1>
                <Project2></Project2>
                <Project3></Project3>
            </div>
        </div>
    );
};

export default MyProjects;