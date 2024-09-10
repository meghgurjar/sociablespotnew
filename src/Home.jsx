import React from "react";
// import { ChevronUp, ChevronDown } from "lucide-react"; 
import Sittinglady from "./components/UI/Sittinglady";
import HolisticApproach from "./components/UI/HolisticApproach";
import GreatCommunity from "./components/UI/GreatCommunity";
import Accessibility from "./components/UI/Accessibility"; // Corrected import
import Man from "./components/UI/Man";
import Card from "./components/Carousel";
// import Carousel from "./components/Carousel";
import Newsletter from "./components/Newsletter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Accordion from "./components/Accordian";
import Gallery from "./Gallery";
const Home = ({ setCurrentPage }) => {
  return (
    <main className="flex flex-col min-h-screen  items-center justify-center bg-background #d1fae5 ">
      <section className="flex items-start justify-between w-screen mb-40  h-auto px-20">
        <div className="pt-40 font-bold">
          <h1 className="text-5xl ml-4 mb-4 ">Sociable Spot,</h1>
          <div className="text-4xl mb-4 text-black">
            <span>"Where Minds Meet,</span>
            <br />
            <span className="ml-10">Healing Begins"</span>
          </div>
          <p className="mt-10 mb-5 font-normal w-2/3">
          Discover Sociable Spot! A haven where community, expert care, and a nurturing AI bot come together. Embrace a safe space to connect, grow, and find support. Engage in enriching Inner Circle activities and explore a supportive environment designed for your well-being.

          </p>
          <button className="px-6 py-2 bg-[#455A64] font-semibold rounded-full ">
            <Link to="/services" className="cursor-pointer no-underline text-white">
              Get Started
            </Link>
          </button>
        </div>
        <div>
          <Sittinglady />
        </div>
      </section>

      <section className="w-screen h-auto mb-24 flex flex-col px-20 mt-24 items-center justify-start">
        <h1 className="text-5xl font-semibold mb-4 text-center w-2/3">
          Why our Mental Health Consultants are the Best Choice
        </h1>
        <div className=" flex items-center justify-start mt-10 space-x-4">
          <div className="transition duration-500 ease-in-out hover:bg-[#FAF9F6] transform hover:-translate-y-1 hover:scale-110 ... bg-[#D2F6D5] w-96 h-72 rounded-l-xl flex flex-col items-center justify-center gap-5 p-5 shadow-xl">
            <HolisticApproach />
            <h1 className="font-semibold text-2xl">Holistic Approach</h1>
            <p className="text-center">
            Experience a comprehensive approach to well-being that integrates community support, expert care, and advanced technology.
            </p>
          </div>
          <div className="transition duration-500 ease-in-out hover:bg-[#FAF9F6] transform hover:-translate-y-1 hover:scale-110 ... bg-[#D2F6D5] w-96 h-72 rounded-r-xl flex flex-col items-center justify-center gap-5 p-5 shadow-xl">
            <GreatCommunity />
            <h1 className="font-semibold text-3xl">Great Community</h1>
            <p className="text-center">
            Connect with a vibrant and supportive community dedicated to meaningful interactions and personal growth.
            </p>
          </div>
          <div className="transition duration-500 ease-in-out hover:bg-[#FAF9F6] transform hover:-translate-y-1 hover:scale-110 ... bg-[#D2F6D5] w-96 h-72 rounded-r-xl flex flex-col items-center justify-center gap-5 p-5 shadow-xl">
            <Accessibility />
            <h1 className="font-semibold text-2xl">Accessibility</h1>
            <p className="text-center">
              
            Enjoy easy access to consultations, resources, and activities designed to support your mental and emotional health.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-screen h-screen flex px-20 items-start justify-end">
        <div className="absolute -top-10 left-0">
          <Man />
        </div>

        <div className="flex flex-col items-start justify-start mt-5 h-full gap-5 w-1/2 mr-10">
          <h3 className="font-semibold">About Us</h3>
          <h1 className="text-5xl font-semibold z-10 leading-snug">
            Discover the Faces
            <br />
            Behind Our Mental
            <br />
            Health Consultancy
          </h1>
          <p className="mb-1">
          At Sociable Spot, we are dedicated to creating a supportive and enriching community where well-being is at the heart of everything we do. Our holistic approach integrates expert consultations, a compassionate AI therapeutic bot, and engaging Inner Circle activities, all within a safe and accessible space. We strive to foster meaningful connections, promote personal growth, and offer innovative solutions to enhance mental and emotional health. Join us and be part of a community that values connection, support, and holistic care.
          </p>
          <button className="px-6 py-2 bg-[#455A64] text-white font-semibold rounded-full">
            {" "}
            <Link to="/about" className="cursor-pointer no-underline text-white">
              See Details
            </Link>
          </button>
        </div>
      </section>

      <section className="relative w-screen  flex flex-col items-center justify-center  ">
        <div className="text-center text-black text-xl font-semibold -mt-32">
          Services
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Individual Therapy, Group Support, and Wellness
          <span className="block">Programs: Your Path to Mental Wellbeing</span>
        </h2>
      </section>
      <div className="w-5/6">
        <section>
          {/* <Carousel/> */}
          <Card />
        </section>
      </div>
{/* Gallary  */}
<section>
  
 <Gallery/>
    
</section>
      

      <section>
        <div className="mx-auto max-w-2xl lg:text-center mb-6 pt-44">
          <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        
        <Accordion />
        
        
       
      </section>
      <section>
        {/* <Newsletter /> */}
      </section>
    </main>
  );
};

export default Home;
