import appleFull from "./assets/Project pics/applebig.png";
import brainwavefull from "./assets/Project pics/Brainwave.png";
import spotify from "./assets/Project pics/spotiBig.png";
import L_O from "./assets/Project pics/lotusOlivePC.png";
import flagapp from "./assets/Project pics/flagsPC.png";
import pong from "./assets/Project pics/pong2.mp4";
import snake from "./assets/Project pics/snake.mp4";
import klarna from "./assets/Project pics/Klarna.jpg";
import passGen from "./assets/Project pics/Linkedin-pw-gen-v2.jpg";
import passGen2 from "./assets/Project pics/pass2.png";

import css from "./assets/icons/cssicon.png";
import html from "./assets/icons/htmlicon.png";
import js from "./assets/icons/jsicon.png";
import nextjs from "./assets/icons/nextjsicon.png";
import react from "./assets/icons/reacticon.png";
import tailwind from "./assets/icons/tailwindicon.png";
import node from "./assets/icons/node3.png";
import expressicon from "./assets/icons/expressicon.png";
import gsap from "./assets/icons/gsapicon.svg";
import framermotion from "./assets/icons/framermotionicon.svg";
import restApi from "./assets/icons/RESTapi.png";
import threeJS from "./assets/icons/3js.png";
import MUI from "./assets/icons/MUI.png";

  export const projects = [
    {
      id: 1,
      name: "Apple Clone",
      live: 'https://giorgosogamiastsreact.netlify.app//',
      img: appleFull,
      repo: 'https://github.com/georgios-kondylis/Georgios_Apple',
      skillImages: [react, tailwind, gsap, threeJS],
      description:
        "An Apple clone featuring an interactive 3D iPhone model and a video slider with a dynamic progress bar",
    },
    {
      id: 2,
      name: "Flag App",
      live: 'https://georgios-the-flagapp-techover.netlify.app/',
      repo: 'https://github.com/georgios-kondylis/CountryApp',
      skillImages: [react, tailwind, restApi],
      img: flagapp,
      description: "Developed an API-driven application that dynamically renders country information, including flags, by fetching data from a database using dynamic routing and API requests.",
    },
    {
      id: 3,
      name: "Spotify Clone",
      live: 'https://inquisitive-valkyrie-b87165.netlify.app/',
      repo: 'https://github.com/georgios-kondylis/Spotify_Clone.',
      skillImages: [react, MUI, restApi],
      img: spotify,
      description: "Clone of Spotify's interface with custom features, utilizing auth keys and API tokens for user interaction.",
    },
    {
      id: 4,
      name: "Lotus & Olive Restaurant",
      live: 'https://georgios-kondylis.github.io/Lotus-Olive-Restaurant/',
      repo: 'https://github.com/georgios-kondylis/Lotus-Olive-Restaurant',
      skillImages: [html, css, js],
      img: L_O,
      description: "Modern restaurant website with a functional table booking form.",
    },
    {
      id: 5,
      name: "Brainwave",
      live: 'https://brainwave-georgios.netlify.app/',
      repo: 'https://github.com/georgios-kondylis/Brainwave',
      skillImages: [react, tailwind, gsap],
      img: brainwavefull,
      description: "Brainwave is Futuristic UI design project, still in progress, focusing on front-end development.",
    },
    {
      id: 6,
      name: "Klarna Checkout",
      repo: 'https://github.com/georgios-kondylis/Klarna',
      skillImages: [node, js],
      img: klarna,
      description: "Developed a mock store and integrated Klarna's checkout system using Ngrok's gateway URL.",
    },
    {
      id: 7,
      name: "Pong Game",
      live: 'https://georgios-kondylis.github.io/Pong-Game/Ping_Pong.html',
      repo: 'https://github.com/georgios-kondylis/Pong-Game',
      skillImages: [html, css, js],
      video: pong,
      description: "A smooth, two-player Pong game with a fun and interactive gameplay experience.",
    },
    {
      id: 8,
      name: "Snake Game",
      live: 'https://georgios-kondylis.github.io/Snake_game/snake.html',
      repo: 'https://github.com/georgios-kondylis/Snake_game',
      skillImages: [html, css, js],
      video: snake,
      description: "A classic Snake game built using JavaScript and arrays for dynamic gameplay.",
    },
    {
      id: 9,
      name: "Password Generator",
      live: 'https://georgios-kondylis.github.io/PasswordGenerator/starter-code/index.html',
      repo: 'https://github.com/georgios-kondylis/PasswordGenerator',
      skillImages: [react, tailwind, gsap],
      img: passGen2,
      description: "An app that generates secure random passwords based on user-selected filters.",
    },
  ];

  export const margins_paddings = `max-sm:px-[20px] max-md:px-[40px] md:px-[60px] lg:px-[100px]`;