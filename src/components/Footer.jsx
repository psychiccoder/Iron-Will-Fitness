import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const newDate = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="bg-[#364F6B] mt-5 rounded-t-3xl py-8">
            <div className="flex flex-col md:flex-row justify-between md:px-32 px-5">
                <div className="w-full md:w-1/4">
                    <Link to="/">
                        <h1 className="font-semibold text-2xl text-teal">
                            Iron Will Fitness
                        </h1>
                    </Link>
                    <p className="mt-4">
                        The best fitness destination in USA.
                    </p>
                </div>
                <div className="mt-8 md:mt-0 md:ml-8">
                    <h1 className="font-medium text-xl text-teal">Address</h1>
                    <p className="mt-4">
                        Iron Will Fitness
                        1234 Elm Street
                        Anytown, USA
                        Postal Code: 12345
                    </p>
                </div>
                <div className="mt-8 md:mt-0 md:ml-8">
                    <h1 className="font-medium text-xl text-teal">Business Hours</h1>
                    <ul className="mt-4">
                        <li>Mon-Sat: 7:00 AM – 12:00 AM</li>
                        <li>Sun: Closed</li>
                    </ul>
                </div>
                <div className="mt-8 md:mt-0 md:ml-8">
                    <h1 className="font-medium text-xl text-teal ">Contact</h1>
                    <div className="flex flex-row items-center mt-4">
                        <AiTwotonePhone size={20} />
                        <p className="ml-2">1111111</p>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <AiOutlineMail size={20} color="#3FC1C9" />
                        <p className="ml-2">ironwillfitness@example.com</p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <p className="text-center">
                    © <span className="text-teal">Iron Will Fitness</span> | {newDate}
                </p>
            </div>
        </div>
    );
};

export default Footer;
