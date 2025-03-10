import { useState } from "react";

const Contact = () => {

  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")



  return (
    <div className="max-w-screen-2xl w-full mx-auto mt-16 rounded-md relative">
      <div className="relative z-10">
        <div className="flex justify-center items-center">
          <h1
            style={{ fontFamily: "Poppins" }}
            className="text-4xl text-center mx-auto font-semibold text-white border-2 border-[#1788AE] rounded-lg py-3 px-4 "
          >
            Let's Connect
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-0 px-4 relative z-10 pt-4">
          {/* Right - Contact Image */}
          <div className="w-full md:w-1/2 flex items-center">
            <img
              className="w-full h-96 object-cover opacity-90"
              src="/assets/coder.svg"
              alt="Contact"
            />
          </div>

          {/* Left - Contact Form */}
          <section className="w-full md:w-1/2 flex items-center">
            <div className="py-4 lg:pt-2 px-4 mx-auto w-full">
              <form
                name="contact"
                method="POST"
                // data-netlify="true"
                // data-netlify-honeypot="bot-field"
                className="space-y-8"
              >
                {/* Hidden Input for Netlify */}
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-blue-500 dark:shadow-sm dark:shadow-slate-700"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Your message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
