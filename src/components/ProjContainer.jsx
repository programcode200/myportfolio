import Card from "./Card";
import Contact from "./Contact";

const ProjContainer = () => {
  const cardsData = [
    {
      title: "Sream-X",
      description:
        "A YouTube-like platform for streaming and uploading videos. Users can like, comment, and engage with content. It also includes personalized recommendations for a better experience.",
      languages: [
        "Javascript",
        "React.js",
        "Express.js",
        "MongoDB",
        "Node.js",
        "Mongoose",
        "TailwindCSS",
        "Redux",
        "Cloudinary",
        "Postman",
      ],
      image: "/assets/youtube.png",
      url: "https://frontend-youtube-kappa.vercel.app/",
      textcolor: "#A855F7",
    },
    {
      title: "Netflix-GPT",
      description:
        "NetflixGPT is a movie and series platform with a Netflix-like UI. It uses OpenAI to recommend content based on user preferences. Users receive personalized suggestions for their favorite genres.",
      languages: [
        "JavaScript",
        "React.js",
        "Tailwind",
        "Firebase",
        "OpenAI Api's",
        "Redux",
      ],
      image: "/assets/netgpt.png",
      url:"https://movie-recommendation-vert.vercel.app/browse",
      textcolor: "#f01e2c",
    },
    {
      title: "Todo",
      description:
        "A simple to-do app where users can add, delete, mark, and edit tasks. It helps manage daily tasks efficiently with an easy-to-use interface.",
      languages: [
        "javascript",
        "react.js",
        "contextApi",
        "tailwind",
        "local storage",
      ],
      image: "/assets/todo.png",
      url:"https://react-practices-blond.vercel.app/",
      textcolor: "#196896",
    },
    {
      title: "Currency Converter",
      description:
        "I made this app when I started learning React. This app use an external API to fetch live currency rates. An appealing currency converter with a beautiful UI.",
      languages: ["javascript", "react.js", "redux", "tailwind", "axios Api's"],
      image: "/assets/currency.png",
      url:"https://react-practices-o83z.vercel.app/",
      textcolor: "#BCCEDD",
    },
    {
      title: "Food system",
      description:
        "Practiced using Swiggy's real-time API to understand API integration. Focused on fetching and handling data without building a full project.",
      languages: [
        "javascript",
        "react.js",
        "redux",
        "tailwind",
        "swiggy Api's",
      ],
      image: "/assets/food.png",
      url:"https://react-food-apis.vercel.app/",
      textcolor: "#BCCEDD",
    },
    {
      title: "Weather",
      description:
        "A simple weather site built for practicing JavaScript. It fetches real-time weather data and displays temperature, conditions, and location details.",
      languages: ["html", "javascript", "css", "wether api's"],
      image: "/assets/weather.png",
      url:"https://programcode200.github.io/javascript_exercise/",
      textcolor: "#3CA795",
    },
    {
      title: "Rock-Paper-Scissors",
      description:
        "A simple Rock-Paper-Scissors game built using JavaScript for practice. It allows users to play against the computer with randomized choices and win/loss results.",
      languages: ["html", "javascript", "css"],
      image: "/assets/rockpaper.png",
      url:"https://programcode200.github.io/javascript_project/game/",
      textcolor: "#7FACFF",
    },
    {
      title: "Number Guessing Game",
      description:
        "A simple Number Guessing game built using JavaScript for practice. Players guess a randomly generated number, receiving hints until they find the correct answer.",
      languages: ["html", "javascript", "css"],
      image: "/assets/Numberguessing.png",
      url:"https://programcode200.github.io/javascript_project/project2/",
      textcolor: "#BCCEDD",
    },
  ];

  return (
    <div className="border-t  border-[#2a88a8]">
      <div className="flex justify-center items-center">
        <h1
          style={{ fontFamily: "Poppins" }}
          className="text-4xl text-center mx-auto font-semibold text-[#1788AE] border-2 border-[#1788AE] border-t-0 rounded-lg rounded-t-none py-3 px-4 "
        >
          Latest Works
        </h1>
      </div>

      {cardsData.map((card, index) => (
        <Card
          key={index}
          index={index}
          title={card.title}
          description={card.description}
          languages={card.languages}
          image={card.image}
          url={card.url}
          textcolor={card.textcolor}
        />
      ))}

      <Contact />

      <div className="flex flex-col justify-center items-center text-white my-5">
        <h1
          style={{ fontFamily: "Nunito Sans" }}
          className="text-sm text-gray-300"
        >
          Copyright ©2025 - Rohan Sawant
        </h1>
        <img className="w-12" src="/assets/logo.png" alt="" />

        <ul className="flex text-gray-300 space-x-8">
          {/*top-1/2 transform -translate-y-1/2*/}
          <li>
            <a href="" target="_blank">
              <svg
                className="w-5 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:rohans1021@gmail.com" target="_blank">
              <svg
                className="w-5 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg
                className="w-5 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <svg
                className="w-5 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjContainer;
