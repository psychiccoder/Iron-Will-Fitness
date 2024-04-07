import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Button from "../layouts/Button";

const PlansCard = (props) => {
    const features = [
        "Receive daily complimentary training sessions with a personal fitness coach.",
        "Enjoy access to our gym facilities throughout our operating hours.",
        "Explore access to all available rooms within our premises.",
        "Utilize state-of-the-art gym equipment for your workouts.",
    ];

    const renderCircle = (index) => {
        if (props.title === "Beginner Level") {
            return index === 0 ? (
                <AiFillCheckCircle className="mr-2 mt-1 text-green-700" size={24} />
            ) : (
                <AiFillCloseCircle className="mr-2 mt-1 text-red-700" size={25} />
            );
        } else if (props.title === "Intermediate Level") {
            return index < features.length / 2 ? (
                <AiFillCheckCircle className="mr-2 mt-1 text-green-700" size={25} />
            ) : (
                <AiFillCloseCircle className="mr-2 mt-1 text-red-700" size={25} />
            );
        } else {
            return props.price > 0 ? (
                <AiFillCheckCircle className="mr-2 mt-1 text-green-700" size={25} />
            ) : (
                <AiFillCloseCircle className="mr-2 mt-1 text-red-700" size={25} />
            );
        }
    };

    return (
        <div className="flex flex-col bg-navy w-full md:w-1/3 p-8 rounded-xl shadow-lg">
            <h2 className="font-semibold text-lg text-center text-pink mb-4">
                {props.title}
            </h2>

            <div className="flex items-center justify-center">
                <MdOutlineAttachMoney className="text-white mr-2" size={24} />
                <h3 className="font-semibold text-lg text-white">{props.price}</h3>
            </div>

            <div className="flex flex-col items-start mt-6 text-white">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start mb-3">
                        {renderCircle(index)}
                        <p className="text-sm">{feature}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <Button title="Buy Plan" />
            </div>
        </div>
    );
};

export default PlansCard;
