import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import image1 from '../assets/chef/chef_1.png';
import image2 from '../assets/chef/chef_2.png';
import image3 from '../assets/chef/chef_3.png';
import image4 from '../assets/chef/chef_4.png';
import image5 from '../assets/chef/chef_5.png';

const Project3 = () => {
    return (
        <>
            <div className="card bg-cyan-800 shadow-xl h-full">
                <figure><img className='' src={image1} alt="Shoes" /></figure>
                <div className="card-body justify-end">
                    <h1> <span className='text-2xl font-bold'>Cook&apos;s Corner <br /> </span>A Restaurant Website</h1>
                    <div className="card-actions justify-end">
                        <button className="btn btn-circle  hover:bg-inherit hover:text-white" onClick={() => window.my_modal_7.showModal()}> <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_7" className="modal ">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-gray-900">
                    <div className='lg:flex justify-between space-y-5 lg:space-y-0 lg:space-x-5 '>
                        <div className='lg:w-[50%]'>
                            <Carousel className=' text-white' showArrows={true} >
                                <div>
                                    <img src={image1} />
                                </div>
                                <div>
                                    <img src={image2} />
                                </div>
                                <div>
                                    <img src={image3} />
                                </div>
                                <div>
                                    <img src={image4} />
                                </div>
                                <div>
                                    <img src={image5} />
                                </div>
                            </Carousel>

                            <div className='flex space-y-5  lg:space-y-0 lg:space-x-5 lg:flex-row flex-col'>
                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://the-cooks-corner.web.app/">Live link <TbWorldShare className='ml-2'></TbWorldShare></a></button>
                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/nazirmithu/the-cooks-corner-client"> Client side  code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/nazirmithu/the-cooks-corner-server">Server Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
                            </div>
                        </div>
                        <div className='text-white lg:w-[50%] space-y-5 '>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <p>React.js, React Router, Tailwind, DaisyUi, Firebase, MongoDB, Express js., react-marquee</p>
                            <h1 className='text-xl font-bold'>Description</h1>
                            <p>This website is based on Restaurant. This website is called Cook&apos;s Corner. Login users can easily choose their favorite food. The website has details of each recipe and each chef.</p>
                            <h1 className='text-xl font-bold'>Project Features</h1>
                            <ul className='list-disc p-2 space-y-5'>
                                <li>Authentication: This website uses Firebase authentication. Everyone can visit the website, but if they want to see the recipe details, they must login or signup.</li>
                                <li>Favorites Button: Only login users can click on their favorite food through the favorite button.</li>
                                <li>View Details Button: Click this button to view the details of the recipe but must be logged in.</li>
                            </ul>
                        </div>



                    </div>

                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost text-white text-2xl absolute right-0 -top-2">✕</button>
                    </div>
                </form>
            </dialog>




        </>
    );
};

export default Project3;