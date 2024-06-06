import React from "react";

const Features = () => {
  return (
    <section id="services" className="md:mb-10 p-8 md:px-28 mt-2 lg:mt-20 dark:bg-slate-900">
      <div className="bg-[#f7f7f7] p-5 lg:p-10 dark:bg-slate-800">
        {/* heading  */}
        <div className="sm:w-3/4 lg:w-9/12 mx-auto px-2 text-justify">
          <div className="md:flex md:flex-col mb-5 md:justify-center md:items-center">
            <h1 className="text-3xl md:text-center text-blue-500">Services</h1>
            <hr className="w-28 h-1 rounded-lg bg-blue-400" />
            </div>
          <p className="mt-4">
            Astavision Infosys is dedicated to making IT services quick and easy
            for you. Our solutions ensure that your networking, system
            administration, and web technologies are seamlessly integrated and
            accessible across all your devices, providing reliable support
            wherever you go.
          </p>
        </div>
        {/* feature1  */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.globalreach.com%2Fmedia%2Fcms%2FSocial_Media_Graphicwithlogo_84E93EDD28FA0.png&f=1&nofb=1&ipt=f5ad95fe095bfaa2f53592b11484e1cd895eda1bf9c65e8f345b29978f47a318&ipo=images"
                alt=""
              />
            </div>
            {/* content  */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-blue-500">Networking</h1>
              <p className="text-bookmark-grey my-4 text-justify lg:text-left sm:w-3/4 lg:w-full">
                We offers robust networking solutions to ensure seamless
                connectivity and efficient data flow within your organization.
                Our services include network design, implementation, management,
                and security, tailored to meet the unique needs of your
                business.
              </p>
              <button
                type="button"
                className="btn bg-blue-500 hover:bg-blue-600 text-white my-8 border-none"
              >
                More Info
              </button>
            </div>
          </div>

          {/* rectangle  */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-blue-500
            rounded-r-full
            absolute
            h-56
            lg:h-80
            max-lg:h-80
            w-2/4
            -bottom-24
            -left-48
          "
          ></div>
        </div>
        {/* feature  */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fipspecialist.net%2Fwp-content%2Fuploads%2F2021%2F07%2Faws-system-administrator.png&f=1&nofb=1&ipt=edd824ec26254a23d43305a6fa2ad1ce82b0a5517aa442243f738ec4dfd03bff&ipo=images"
                alt=""
              />
            </div>

            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-center text-blue-500">
                System Administration
              </h1>
              <p className="text-bookmark-grey my-4 text-justify lg:text-left sm:w-3/4 lg:w-full">
                We provide comprehensive system administration services to
                maintain and optimize your IT infrastructure. Our experts handle
                server management, software updates, system monitoring, and
                troubleshooting to ensure your systems run smoothly and
                securely.
              </p>
              <button
                type="button"
                className="btn bg-blue-500 hover:bg-blue-600 text-white my-8 border-none"
              >
                More Info
              </button>
            </div>
          </div>

          {/* rectangle  */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-blue-500
            rounded-l-full
            absolute
            h-56
            lg:h-80
            w-2/4
            -bottom-24
            -right-48
          "
          ></div>
        </div>

        {/* feature  */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* img  */}
            <div className="flex flex-1 justify-center object-cover z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fenterprix.us%2Fwp-content%2Fuploads%2F2020%2F04%2Fweb-design-element1-51-1536x1289.png&f=1&nofb=1&ipt=286d62ffee62462442063b8a1d3fcba1d166b4a9ca650a525188ed9cf0d25a26&ipo=images"
                alt=""
              />
            </div>

            {/* content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-blue-500">Web Technology</h1>
              <p className="text-bookmark-grey my-4 text-justify lg:text-left sm:w-3/4 lg:w-full">
                Our web technology services encompass the development and
                maintenance of dynamic, responsive websites and web
                applications. From front-end design to back-end development, we
                create innovative web solutions that enhance your online
                presence and drive business growth.
              </p>
              <button
                type="button"
                className="btn bg-blue-500 hover:bg-blue-600 text-white my-8 border-none"
              >
                More Info
              </button>
            </div>
          </div>

          {/* rectangle */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-blue-500
            rounded-r-full
            absolute
            h-56
            lg:h-80
            w-2/4
            -bottom-24
            -left-48
          "
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
