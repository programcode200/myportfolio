// eslint-disable-next-line react/prop-types
const About = ({ showAbout }) => {
  const languages = [
    "javascript",
    "python",
    "react.js",
    "redux",
    "node.js",
    "express.js",
    "mongoDB",
    "mongoose",
    "django",
    "java",
    "sql",
    "mysql",
    "cloudinary",
    "html",
    "css",
    "tailwind",
    "git",
    "github",
    "aws"
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-[#191919] px-12 py-5 rounded-lg shadow-lg max-w-5xl w-full relative">
        <button
          onClick={showAbout}
          className="absolute top-3 right-5 text-2xl font-bold transition-transform text-white hover:text-gray-400 hover:scale-125 duration-500 ease-out"
        >
          &times;
        </button>

        <div className="flex mt-8">
            <div className="w-1/2">
              <div>
                <h1 className="text-[#1595B6] text-2xl font-bold font-mono">
                  ABOUT ME
                </h1>
                <p className="text-[#c7c7c7] font-sans text-sm mt-2">
                  I create websites and applications that not only look fantastic
                  but also function seamlessly. Whether it's developing innovative
                  apps, or diving into the latest web technologies, I'm all in.
                  Let's connect and turn your ideas into digital reality!
                </p>
                <ul className="flex flex-wrap gap-2 my-6">
                  {languages.map((language, index) => {
                    return (
                      <li
                        key={index}
                        className="px-2 py-1 text-white rounded-3xl mr-1 text-sm border border-[#17729B] shadow-sm shadow-sky-500"
                      >
                        #{language}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h1 className="text-[#1595B6] text-2xl font-bold font-mono">
                  MERN STACK
                </h1>
                <div className="flex gap-6 mt-4">
                  <div className="flex flex-col items-center">
                    <img className="w-11" src="/assets/mongodb.svg" alt="" />
                    <h1 className="text-[#47A248] text-lg font-bold mt-2">M</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="w-11" src="/assets/express.svg" alt="" />
                    <h1 className="text-white text-lg font-bold mt-2">E</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="w-11" src="/assets/react.svg" alt="" />
                    <h1 className="text-[#61DAFB] text-lg font-bold mt-2">R</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="w-11" src="/assets/node.svg" alt="" />
                    <h1 className="text-[#8CC84B] text-lg font-bold mt-2">N</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <img className="w-full h-full object-cover" src="./assets/aboutme.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
