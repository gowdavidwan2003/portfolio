
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title=='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Quiz Wizards',
        description:'Quiz Wizards (funded by Karnataka Govt) aims to revolutionize the way children learn by incorporating real-time interaction using a camera-based system. Instead of traditional multiple-choice options, Quiz Wizards utilizes hand gestures captured by the camera to select answers dynamically.',
        git:'https://github.com/gowdavidwan2003/mini-project',
        technologies:['PostgreSQL' , 'Flask(python)' ,'ReactJS' , 'NodeJS' , 'TailwindCSS']
    },
    {
        title:'Finsight AI',
        description:'FinSight AI leverages Yahoo Finance API for fetching detailed company data including stock information, financial statements, holders information, and price history. It then uses Google Generative AI models to generate insights and analyses based on user queries and the fetched data. ',
        git:"https://github.com/gowdavidwan2003/Finsight-AI",
        technologies:[ 'StreamLit(python)', 'Google Could API', 'Yahoo Finance' , 'API']
    },
    {
        title:'Cini Magic',
        description:'Developed a movie recommendation system using Python, pandas, and Streamlit. Utilized genre and ratings data to personalize recommendations, increasing user engagement by 40%. Implemented collaborative filtering algorithms.Created an intuitive user interface for easy navigation',
        git:"https://github.com/gowdavidwan2003/movie_recommendor",
        technologies:[ 'StreamLit', 'Recommendation System', 'Machine Learning']
    },
    {
        title:'Smart Route',
        description:'Designed an efficient routing system to reduce fuel consumption and pollution for delivery. Additionally, incorporated toll tax estimation to optimize routes further by balancing travel costs and time, enhancing overall efficiency and reducing operational expenses.',
        git:"https://github.com/gowdavidwan2003/Efficient-Vehicle-Routing",
        technologies:[ 'StreamLit', 'APIs', 'TSP' , 'Optimisation']
    },
    {
        title:'Blind Assistant 2.0',
        description:' Developed an assistive tool for visually impaired individuals, recognized in a hackathon. Implemented using Python, Machine Learning, and Arduino, providing real-time navigation and obstacle detection. Implemented voice-guided navigation using Visual language model.',
        git:"https://github.com/adxthyx/Blind_Assist_2.0",
        technologies:[ 'ReactJS' , 'NodeJS' , 'TailwindCSS' , 'Arduino' , 'Machine Learning']
    },
]

export default Projects