

import React from "react";
import Button from "../layouts/Button";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
            <div className="flex flex-col md:flex-row justify-between w-full">
                <form className="w-full md:w-2/5 space-y-5 pt-20">
                    <h1 className="text-5xl font-semibold text-center text-teal">Contact Us</h1>
                    <div className="flex flex-col">
                        <label htmlFor="userName">Your Name</label>
                        <input
                            className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-white text-navy focus:outline-none focus:ring-2 focus:ring-pink"
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Enter your Name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="userEmail">Your Email</label>
                        <input
                            className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-white text-navy focus:outline-none focus:ring-2 focus:ring-pink"
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="userNumber">Your Number</label>
                        <input
                            className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-white text-navy focus:outline-none focus:ring-2 focus:ring-pink"
                            type="number"
                            name="userNumber"
                            id="userNumber"
                            placeholder="Enter your Number"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="userMessage">Your Message</label>
                        <textarea
                            className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-white text-navy focus:outline-none focus:ring-2 focus:ring-pink"
                            name="userMessage"
                            id="userMessage"
                            rows="4"
                            placeholder="Enter your Message"
                        ></textarea>
                    </div>
                    <div className="flex flex-row justify-center space-x-4">
                        <Button title="Send Message" />
                        <Button title="Start a call" href="tel:+92" />
                    </div>
                </form>
                <div className="flex flex-row items-center w-full md:w-2/4 my-5 rounded-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.871888547584!2d-83.95911922557545!3d33.89295312612657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5b8ea6f82f4ed%3A0xa8b684cce1810e15!2sGym%20St%20SW%2C%20Grayson%2C%20GA%2030017%2C%20USA!5e0!3m2!1sen!2sin!4v1712494466441!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

            </div>
        </div>
    );
};

export default Contact;