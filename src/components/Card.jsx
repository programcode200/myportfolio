const Card = ({ title, description, languages, image, index }) => {
  return (
    <>
      <div className="mx-8 my-5 border-b border-gray-600">
        {/* <div className="flex justify-between max-w-screen-xl w-full mx-auto gap-3 py-3 rounded-lg drop-shadow-[0_0px_40px_rgba(59,130,246,0.5)] "> */}
        <div
          className={`flex justify-between max-w-screen-xl w-full mx-auto gap-3 py-6 px-6 rounded-lg drop-shadow-[0_0px_40px_rgba(59,130,246,0.5)] ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="w-6/12 py-3">
            <a href="">
              <img
                className="max-w-[400px] ml-20 hover:scale-110 duration-300 drop-shadow-[0_0px_40px_rgba(59,130,246,0.5)]"
                src={image}
                alt=""
              />
            </a>
          </div>

          <div className="w-6/12 ml-28 mr-4 my-auto">
            <h3
              style={{ fontFamily: "Nunito, sans-serif" }}
              className="text-3xl font-bold text-[#ca9d71]"
            >
              {title}
            </h3>
            <p className="mt-4 text-gray-400">{description}</p>
            <ul className="flex flex-wrap gap-2 my-4">
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
        </div>
      </div>
    </>
  );
};

export default Card;
