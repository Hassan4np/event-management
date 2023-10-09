
import about from "./../../../assets/aboutus.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Aboutus = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div  data-aos="zoom-in-right">
            <h1 className="text-center text-4xl font-bold p-8">About us</h1>
            <div className=" flex justify-center item">
                <div className=" bg-base-100 mt-5 shadow-xl ">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <figure className="w-full"><img className="" src={about} alt="Movie" /></figure>
                        <div className=" p-5 ml-[70px] md:ml-2">
                            <h2 className="card-title mb-5">we are Best events managemant</h2>
                            <p className=" w-full">Social event management involves planning, organizing, and executing gatherings such as weddings, conferences, and parties. It requires skills in logistics, budgeting, and communication. Successful event management ensures a seamless and memorable experience for attendees, making it a vital aspect of the hospitality and entertainment industries.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;