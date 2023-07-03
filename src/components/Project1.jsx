import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import image1 from '../assets/camp/camp_1.png';
import image2 from '../assets/camp/camp_2.png';
import image3 from '../assets/camp/camp_3.png';
import image4 from '../assets/camp/camp_4.png';
import image5 from '../assets/camp/camp_5.png';

const Project1 = () => {
    return (
        <>
            <div className="card bg-cyan-800 shadow-xl h-full">
                <figure><img className='' src={image1} alt="Shoes" /></figure>
                <div className="card-body justify-end">
                    <h1> <span className='text-2xl font-bold'>DrawWiseCamp <br /> </span>School Summer Camp Website</h1>

                    <div className="card-actions justify-end">
                        <button className="btn btn-circle  hover:bg-inherit hover:text-white" onClick={() => window.my_modal_4.showModal()}> <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>

            {/* You can open the modal using ID.showModal() method */}
            <dialog id="my_modal_4" className="modal">
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
                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://drawwise-camp.web.app/">Live link <TbWorldShare className='ml-2'></TbWorldShare></a></button>
                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/nazirmithu/drawWise-camp-client"> Client Side Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/nazirmithu/drawWise-camp-server">Server Side Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
                            </div>
                        </div>
                        <div className='text-white lg:w-[50%] space-y-5 '>

                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <p>React js, React router, TanStack Query, axios, Tailwind  CSS, DaisyUI, MongoDb, Exrpess js, Firebase, AOS - Animate, react-marquee, Stripe and JWT</p>
                            <h1 className='text-xl font-bold'>Description</h1>
                            <p>This website was created based on summer camp.
                                This website is named DrawWiseCamp. Maintained student, instructor, and admin roles on this website. Students can easily select their classes by logging in and if the student thinks he will enroll in a course, he can enroll easily by paying through Stripe. Instructors have their own dashboard where they can add classes, see how many students are enrolled, and see if admins have given any feedback. Admin controls everything, those who sign up usually stay as normal users, admin can give any user an instructor role if he wants. Admins can approve or deny the classes that instructors add. I have made this website in a user-friendly way.</p>
                            <h1 className='text-xl font-bold'>Project Features</h1>
                            <ul className='list-disc p-2 space-y-5'>
                                <li>Student Dashboard: Students can enroll by paying through Stripe Payment and students can view their payment history.</li>
                                <li>Instructor Dashboard: Instructors can add new classes. Instructors can update class information and see how many students are enrolled.</li>
                                <li>Admin Dashboard: Approve or deny class requests if the admin wants. Admin can make the user (Student/Instructor/Admin) and give feedback to instruct.</li>
                                <li>Authentication: This website uses Firebase authentication. Everyone can visit the website, but if a student wants to select courses, he must login or signup.</li>
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

export default Project1;