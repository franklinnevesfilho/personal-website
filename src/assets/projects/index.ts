import blindCalculator from './blindCalculator.png'
import hangman from './hangman.png'
import memoryGame from './memorygame.jpg'
import weatherApp from './weatherapp.png'
import {Project} from "@/types/Project.ts";


export const projects: Project[] = [
    {
        title: 'Blind Calculator',
        description: 'A calculator for the visually impaired.',
        image: blindCalculator,
        link: '',
        technologies: ['React', 'TypeScript']
    },
    {
        title: 'Hangman',
        description: 'A simple hangman game.',
        image: hangman,
        link: '',
        technologies: ['React', 'TypeScript']
    },
    {
        title: 'Memory Game',
        description: 'A simple memory game.',
        image: memoryGame,
        link: '',
        technologies: ['React', 'TypeScript']
    },
    {
        title: 'Weather App',
        description: 'A weather app.',
        image: weatherApp,
        link: '',
        technologies: ['React', 'TypeScript']
    }
]

