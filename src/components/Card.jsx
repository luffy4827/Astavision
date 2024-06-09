import React, { useState } from "react";

const Card = ({ imgURL, label, subtext }) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="card w-[400px] bg-base-100 dark:bg-slate-700 shadow-xl">
      <figure className="bg-gray-300 overflow-hidden">
        <img src={imgURL} alt="photos" className="w-full h-64 object-cover" />
      </figure>
      <div className="card-body bg-gray-200 text-black dark:bg-slate-600 dark:text-white">
        <h2 className="card-title">{label}</h2>
        <p>
          {showFullText ? subtext : `${subtext.substring(0, 110)}...`}
          {!showFullText && (
            <div className="my-8">
              <button
                className=" btn bg-blue-500 hover:bg-blue-600 text-white border-none"
                onClick={handleReadMore}
              >
                Read More
              </button>
            </div>
          )}
        </p>
        {showFullText && (
          <div>
            <button
              className="btn bg-blue-500 hover:bg-blue-600 text-white my-8 border-none"
              onClick={handleReadMore}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
