import React from "react";

const About = () => {
  return (
    <div className="p-5 lg:px-24  dark:bg-slate-900 " id="about">
      <div id="about" class="relative overflow-hidden mt-5 lg:mt-20">
        <div class="max-w-7xl">
          <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            {/* <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg> */}

            <div class="pt-1"></div>

            <main class="mt-10 max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
              <div class="sm:text-center lg:text-left pr-10">
                  <h2 class="my-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                    About{" "}
                    <span className="text-blue-500">Astavision Infosys</span>
                  </h2>

                <p>
                  Astavision Infosys is your trusted partner in innovative IT
                  solutions, specializing in networking, system administration,
                  and web technology services. Our expert team ensures
                  efficient, secure connectivity and smooth operations for your
                  business. <br />
                  Enhance your online presence with our dynamic web technology
                  services. From initial design to ongoing maintenance, we
                  provide end-to-end solutions that drive engagement and growth
                  in the digital world.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
