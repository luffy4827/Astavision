import React from "react";

const Contact = () => {
  return (
    <section class="bg-white dark:bg-gray-900 text-black dark:text-white" id="contact">
      <div class="py-8 lg:py-16 px-5 mx-auto max-w-screen-md">
        <div className="md:flex md:flex-col mb-5 md:justify-center md:items-center">
          <h1 className="text-4xl md:text-center text-blue-500">Contact</h1>
          <hr className="w-28 h-1 rounded-lg bg-blue-400" />
        </div>
        <p class="mb-8 lg:mb-16 font-light text-justify  dark:text-white">
          Have a question or inquiry? Get in touch with Astavision Infosys
          today! Simply fill out the contact form below, and our team will reach
          out to assist you promptly. We're here to help with any networking,
          system administration, or web development needs you may have. Let's
          collaborate to achieve your IT goals together.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn bg-blue-500 hover:bg-blue-600 text-white my-8 border-none"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
