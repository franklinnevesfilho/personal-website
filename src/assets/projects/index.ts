import blindCalculator from './blindCalculator.png'
import vertilux from './vertilux.png'
import duckyLogo from './DuckyLogo.png'
import hangman from './hangman.png'
import memoryGame from './memorygame.jpg'
import weatherApp from './weatherapp.png'
import outfitFinder from './outfitfinder.png'
import spsLogo from './sps_logo.png'
import {Project} from "@/types/Project.ts";


export const projects: Project[] = [
    {
        title: 'Outfit Finder',
        description:`For my Intro to Machine Learning class, I trained a Machine Learning model to predict the usage of a 
        specific clothing item, with a 82% accuracy score using the Product Images Dataset. I was Inspired to create a mobile application that would use this trained mode,
        and collect the necessary data to train another model, that would predict and entire outfit choice based on the user's preference's and the specific occasion. This
        project was designed with the intention of being flexible with the technology stack it can be implemented with. By creating interfaces and abstract classes, the project
        can be implemented with any front-end and back-end technologies.`,
        image: outfitFinder,
        link: 'https://github.com/franklinnevesfilho/outfit-finder-backend.git',
        technologies: ['React Native', 'Python', 'FastAPI', 'Postman', 'MySQL', 'MongoDB','JWT', 'S3 Buckets', 'AWS', 'Docker']
    },
    {
        title: 'Vertilux Blind Optimizer',
        description:`This project was created for Vertilux, a company that specializes in window coverings. 
        The goal of this project was to design a full stack application that would take in the window measurements 
        and preform the necessary calculations to determine what components are best suited for the window. An API was designed and implemented
        that connected with the Vertilux ERP system, acquiring the necessary information to make the calculations.
        The front-end was designed to be user friendly and intuitive, allowing the user to input the measurements and see the results in real time.`,
        image: vertilux,
        link: 'https://github.com/franklinnevesfilho/Vertilux-ShadeOptimizer-Backend',
        technologies: ['React', 'TypeScript', 'Java', 'SpringBoot', 'Firebase']
    },
    {
        title: 'Ducky',
        description:`This is an image sharing social media platform, where I designed and implemented the structure for the Backend development. 
        Utilizing the FastAPI framework and the Pydantic library for data validation, I was able to create a seamless integration process for all developers.
        I coordinated with 2 other developers to bring the functionality and features of the platform to life.`,
        image: duckyLogo,
        technologies: ['Python', 'FastAPI', 'Postman', 'SupaBase', 'Firebase Authentication'],

    },
    {
        title:'Students Pay Students',
        description:`This project was the result of a 4 person collaboration in my Software Engineering class. We created Use Cases, UML diagrams, and a full stack application.
        The idea was to create a platform where students could post their old notebooks, notes, pdfs, supplies and other items for sale.`,
        image: spsLogo,
        link: 'https://github.com/franklinnevesfilho/SNB.git',
        technologies: ['React', 'Javascript', 'TailwindCSS', 'Postman', 'Java', 'Spring Boot', 'SpringSecurity', 'MySQL', 'JWT']
    },
    {
        title: 'Window Blind Calculator',
        description: `This application takes in the window measurements and preforms the necessary calculations to determine what components are best suited for the window.
        It first calculates the tube deflections and determines which tube size is best, then it calculates the max roll up diameter of the fabric and determines which system
         is best suited for the window. It does this by connecting to the Vertilux Database and pulling the necessary information.`,
        image: blindCalculator,
        link: 'https://github.com/franklinnevesfilho/BlindCreation.git',
        technologies: ['React', 'TypeScript']
    },
    {
        title: 'Hangman',
        description: `Although this application is simple and has been doing many times, 
        I wanted to create a Hangman game using pure Java, so I challenged myself to learn JavaFX, and this project was the result of putting my knowledge to the test.`,
        image: hangman,
        link: 'https://github.com/franklinnevesfilho/Hangman_Challenge.git',
        technologies: ['Java', 'JavaFX']
    },
    {
        title: 'Memory Game',
        description: `This is a simple Android memory game. The original game was designed by me using Java and Android Studio, 
        and can be found at the following link:https://github.com/franklinnevesfilho/RemerberThat.git. I designed all images in this application using Adobe Illustrator.`,
        image: memoryGame,
        link: 'https://github.com/franklinnevesfilho/AndroidMemoryGame.git',
        technologies: ['Kotlin', 'Android Studio']
    },
    {
        title: 'Weather App',
        description: `This is a web application using a weather API to get the current weather of any city 
        and display the weekly weather prediction as well as the current days.`,
        image: weatherApp,
        link: 'https://github.com/franklinnevesfilho/Weather-App.git',
        technologies: ['React', 'TypeScript']
    }
]

