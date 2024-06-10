import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto flex flex-col bg-white dark:bg-slate-900 text-black dark:text-white xl:flex-row justify-center min-h-screen px-4 lg:px-24 gap-4 lg:gap-11 overflow-hidden"
    >
      <div className="relative order-2 md:order-1 xl:w-2/5 w-full p-5 lg:p-0 flex flex-col justify-center items-start leading-8 z-10">
        <p className="text-xl text-blue-500 -mb-2">Astavision Infosys</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight md:leading-[80px]">
          <span className="relative z-10 pr-2 xl:bg-white xl:whitespace-nowrap dark:bg-slate-900">
            TRANSFORMING CHALLENGES
          </span>
          <br />
          <span>INTO </span>
          <span className="text-blue-500">OPPORTUNITIES</span>
        </h1>
        <p className="text-base md:text-lg text-slate-gray mt-4 sm:max-w-sm">
          Crafting Innovative Software Solutions for a Smarter Tomorrow.
        </p>
      </div>
      <div className="relative order-1 flex-1 flex justify-center items-center bg-cover bg-center xl:min-h-screen overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3861942/pexels-photo-3861942.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Hero Images"
          className="relative object-cover object-center w-full h-full max-h-screen"
        />
      </div>
    </section>
  );
};

export default Hero;
