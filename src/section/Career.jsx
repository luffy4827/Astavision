import React from "react";
import { career } from "../assets/career";
import Card from "../components/Card";

const Career = () => {
  return (
    <div className="bg-[#f7f7f7] dark:bg-slate-900 text-black dark:text-white py-10" id="career">
        <div className="sm:w-3/4 lg:w-7/12 mb-12 mx-auto px-5 text-justify">
          <div className="md:flex md:flex-col mb-5 md:justify-center md:items-center">
            <h1 className="text-4xl md:text-center text-blue-500">Career</h1>
            <hr className="w-28 h-1 rounded-lg bg-blue-400 border-none" />
            </div>
          <p className="mt-4">
          At Astavision Infosys, we are committed to nurturing talent and fostering career growth in the fields of networking, system administration, and web development. Our comprehensive internship and training programs provide hands-on experience and mentorship, equipping participants with the skills and knowledge needed to excel in these dynamic industries. Join us to embark on a journey of professional development and achieve your career aspirations in IT.
          </p>
        </div>

      <div className=" flex justify-around mx-12 flex-wrap gap-9">
        {career.map((item) => (
          <Card key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Career;
