import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full  flex xl:flex-row flex-col lg:px-14 justify-center min-h-screen gap-2 lg:gap-10 container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full lg:ml-2 p-5 leading-8 order-2 md:order-1">
        <p className="text-xl text-blue-500 -mb-7 ">Astavision Infosys</p>

        <h1 className="mt-10 text-[45px] md:text-6xl whitespace-pre-wrap  leading-[45px] md:leading-[80px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 dark:bg-transparent">
            TRANSFORMING CHALLENGES
          </span>
          <br />
          <span className="text-[45px] md:text-6xl ">INTO </span>
          <span className="text-blue-500 mt-3">OPPORTUNITIES</span>{" "}
        </h1>
        <p className=" text-slate-gray text-base md:text-lg mt-4 mb-14 sm:max-w-sm">
          Crafting Innovative Software Solutions for a Smarter Tomorrow.
        </p>

        {/* <Button label="Shop now" iconURL={arrowRight} /> */}
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen bg-cover bg-center  order-1">
        <img
          src={
            "https://images.pexels.com/photos/3861942/pexels-photo-3861942.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt=""
          width={710}
          height={102}
          className="object-cover object-top relative max-h-svh "
        />
      </div>
    </section>
  );
};

export default Hero;
