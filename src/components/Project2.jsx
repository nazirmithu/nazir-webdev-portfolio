import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import image1 from '../assets/toy/toy_1.png';
import image2 from '../assets/toy/toy_2.png';
import image3 from '../assets/toy/toy_3.png';
import image4 from '../assets/toy/toy_4.png';
import image5 from '../assets/toy/toy_5.png';

const Project2 = () => {
    return (
        <>
            <div className="card  bg-cyan-800  shadow-xl h-full">
                <figure><img className='' src={image1} alt="Shoes" /></figure>
                <div className="card-body justify-end">
                    <h1> <span className='text-2xl font-bold'>Kingdom of Toys <br /> </span>Toy E-Commerce Website</h1>

                    <div className="card-actions justify-end">
                        <button className="btn btn-circle hover:bg-inherit hover:text-white " onClick={() => window.my_modal_5.showModal()}> <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_5" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-gray-900">


                    <div className='lg:flex justify-between lg:space-x-5 space-y-5 lg:space-y-0'>
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
                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://kingdom-of-toys.web.app/">Live link <TbWorldShare className='ml-2'></TbWorldShare></a></button>
                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/nazirmithu/kingdom-of-toys-client"> Client Side Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/nazirmithu/kingdom-of-toys-server">Server Side Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
                            </div>
                        </div>

                        <div className='text-white lg:w-[50%] space-y-5 '>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <p>React.js, React Router, Tailwind, DaisyUi, Firebase, MongoDB, Express js, AOS - Animate</p>
                            <h1 className='text-xl font-bold'>Description</h1>
                            <p>This website is based on the toy market. This website is called Kingdom of Toys. Users can easily choose and buy their favorite toys. Sellers can add, update and delete their toys if necessary. The website has details of each toy.</p>

                            <h1 className='text-xl font-bold'>Project Features</h1>
                            <ul className='list-disc p-2 space-y-3'>
                                <li>CRUD Operations: This website uses CRUD operations. Sellers can add, update and delete their toys as per their wish.</li>
                                <li>Authentication: This website uses firebase authentication. Everyone can visit the website, but if they want to see the details of the toys, they must log in or signup.</li>
                                <li>Seller: Seller must be logged in to add, update and delete his toys or to view all his added toys.</li>
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

export default Project2;