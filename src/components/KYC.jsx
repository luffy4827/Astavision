import React from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const KYC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Link
        className="px-3 py-2 rounded-md hover:bg-blue-800 cursor-pointer duration-300 bg-blue-500 text-white font-semibold"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        KYC
      </Link>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-800 dark:text-white">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>

          <h3 className="font-bold text-lg mb-4">Fill KYC Form.</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* name field */}
            <label className="input input-bordered flex items-center gap-2 dark:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 dark:text-slate-800"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow text-gray-700"
                placeholder="Name"
                {...register("Name", {
                  required: true,
                })}
              />
            </label>
            {errors.Name && (
              <span className="text-red-500">Name is required</span>
            )}

            {/* email field */}
            <label className="input input-bordered flex items-center gap-2 dark:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 dark:text-slate-800"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow text-gray-700"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </label>
            {errors.Email && (
              <span className="text-red-500">Email is required</span>
            )}

            {/* message field */}
            <label className="input input-bordered flex items-center gap-2 dark:bg-gray-200">
              <input
                type="text"
                className="grow text-gray-700"
                placeholder="Type your message..."
                {...register("Message", {
                    required: true,
                  })}
              />
            </label>
            {errors.Message && (
              <span className="text-red-500">Please write your message</span>
            )}

            <div>
              <button
                type="submit"
                className="px-3 py-2 rounded-md hover:bg-blue-800 cursor-pointer duration-300 bg-blue-500 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default KYC;
