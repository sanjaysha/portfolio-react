import project1_img from "../assets/project1.jpg";
import content_landing from "../assets/content_landing.png";
import city_weather from "../assets/city_weather.png";
import city_weather1 from "../assets/city_weather1.png";
import find_coach from "../assets/find_coach.png";
import news_app from "../assets/news_app.png";
import github_logo from "../assets/github1.png";

const myprojects_data = [
  {
    p_no: 1,
    p_img: content_landing,
    link: "https://693253e8328b1050c9eae867--aesthetic-rabanadas-d9c13b.netlify.app/",
    title: "Content Website Landing Page",
    subtitle: "React + Tailwind + TMDB",
    description:
      "A content website landing page with search and trending content functionality. Using Reat 19, tailwind 4, appwrite and TMDB",
  },
  {
    p_no: 2,
    p_img: news_app,
    link: "https://news-potel.netlify.app/",
    title: "News Application",
    subtitle: "React + CSS + Gnews Api",
    description:
      "This is a news app which can be used to grab quick daily news bites. Stay updated with business, health, sports, technology and all kinds of current affairs. This app use GnewsApi resources to fetch data.",
  },
  {
    p_no: 3,
    p_img: city_weather1,
    link: "https://661be89f8576dc75ec14a8d3--cute-churros-c66de5.netlify.app/",
    title: "Weather App",
    subtitle: "Vue + Tailwind + Openweathermap Api",
    description:
      "A simple and user-friendly weather website powered by OpenWeatherMap. Search any city to instantly view its current weather conditions, temperature, humidity, wind speed, and 5-day forecast — all in one place.",
  },
  {
    p_no: 4,
    p_img: find_coach,
    link: "https://spiffy-dragon-68254d.netlify.app/coaches",
    title: "Find A Coach",
    subtitle: "Vue + Vue Router + VueX",
    description:
      "Look for a coach and contact them to seek their guidance and learn from them. Register as a coach to provide your services.",
  },
  {
    p_no: 5,
    p_img: github_logo,
    link: "https://github.com/sanjaysha",
    title: "GitHub Repository",
    subtitle: "Explore my work and open-source contributions",
    description:
      "Browse a collection of full-stack, frontend, and experimental projects showcasing my skills in JavaScript, Vue, React, and Node.js.",
  },
];

export default myprojects_data;
