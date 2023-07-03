import { useForm } from 'react-hook-form';
import messageLogo from '../../public/Message.json';
import Lottie from "lottie-react";
const ContactMe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='max-w-screen-lg mx-auto '>
            <h1 className='text-4xl font-bold text-center my-10'>Contact with me</h1>
            <div className='flex flex-col-reverse lg:flex-row items-center max-w-screen-2xl mx-auto space-y-5 lg:space-y-0  lg:space-x-5 p-10 bg-blue-950 rounded-3xl shadow'>
                <div className='space-y-5'>
                <div className=''>
                    <Lottie animationData={messageLogo} className='w-96'/>
                </div>
                    
                    <div className=''>
                        <h1 className='text-gray-300 text-xl font-bold'>E-mail</h1>
                        <p className='text-white text-lg lg:text-xl font-bold '>naziruddinmithu24@gmail.com</p>
                    </div>
                    <div>
                        <h1 className='text-gray-300 text-xl font-bold '>Phone</h1>
                        <p className='text-white text-lg lg:text-xl font-bold'>+8801302090864</p>

                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body border">
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" {...register("email", { required: true })} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" placeholder="Subject" {...register("subject", { required: true })} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Your Message" {...register("message", { required: true })}></textarea>
                    </div>
                    <div className="form-control mt-6">
                    <button className="button-primary border">Send</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;