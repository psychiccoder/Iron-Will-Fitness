import React from "react";
import Button from "../layouts/Button";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-row justify-end md:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
            <div className="flex flex-col justify-center md:w-1/3 text-left">
                <h1 className="text-6xl font-semibold text-pink">Discover your strength!</h1>

                <div className="mt-5 flex justify-center ">
                    <Button title="Get Started" />
                </div>
            </div>
        </div>

        // <div className="min-h-screen flex flex-row justify-end md:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat bg-size-cover">
        //   <div className="flex flex-col justify-center md:w-1/3 text-left sm:text-3xl md:text-5xl font-semibold">
        //     <h1>Discover your strength!</h1>
        //     <div className="mt-5 flex justify-center">
        //       <Button title="Get Started" class="md:w-1/2" />
        //     </div>
        //   </div>
        // </div>

    );
};

export default Home;
