import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <br /><br />
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Vidwan Gowda H M, a passionate Software Engineer with expertise in Data Science, Machine Learning, and Backend Development. As a seasoned developer, I specialize in creating scalable solutions and optimizing performance across various platforms. With a proven track record in deploying successful applications, such as a government-funded quiz application, an AI-powered financial insights chatbot, and an eco-friendly vehicle routing system, I am dedicated to delivering impactful projects that drive efficiency and user engagement. 🚀 
              <br /><br />
              ✍️ Beyond coding, I am a geopolitics and finance enthusiast, always keen on understanding global trends and their impacts.
              </p>
              <br /><br />
            <ButtonLink
              url='https://drive.google.com/drive/folders/1Bzs1JGGUWZnLCVticoK_efenhQb11HJt?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;