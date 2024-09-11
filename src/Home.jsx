import React from "react";
import Sittinglady from "./components/UI/Sittinglady";
import HolisticApproach from "./components/UI/HolisticApproach";
import GreatCommunity from "./components/UI/GreatCommunity";
import Accessibility from "./components/UI/Accessibility";
import Man from "./components/UI/Man";
import Card from "./components/Carousel";
import { Link } from "react-router-dom";
import Accordion from "./components/Accordian";
import Gallery from "./Gallery";

const Home = ({ setCurrentPage }) => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-background">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center md:justify-between w-full h-auto p-10 md:px-20 mb-40">
        <div className="pt-20 md:pt-40 md:text-left text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Sociable Spot,</h1>
          <div className="text-3xl md:text-4xl mb-4 text-black">
            <span>"Where Minds Meet,</span>
            <br />
            <span>Healing Begins"</span>
          </div>
          <p className="mt-5 md:mt-10 mb-5 font-normal w-full md:w-2/3 mx-auto md:mx-0">
            Discover Sociable Spot! A haven where community, expert care, and a
            nurturing AI bot come together. Embrace a safe space to connect,
            grow, and find support. Engage in enriching Inner Circle activities
            and explore a supportive environment designed for your well-being.
          </p>
          <button className="px-6 py-2 bg-[#455A64] text-white font-semibold rounded-full">
            <Link to="/services" className="no-underline">
              Get Started
            </Link>
          </button>
        </div>
        <div className="mt-10 md:mt-0">
          <Sittinglady />
        </div>
      </section>

      {/* Why Us Section */}
      <section className="w-full h-auto mb-24 flex flex-col px-5 md:px-20 mt-10 md:mt-24 items-center justify-start">
        <h1 className="text-3xl md:text-5xl font-semibold mb-8 text-center">
          Why our Mental Health Consultants are the Best Choice
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="transition-transform hover:scale-105 bg-[#D2F6D5] w-full md:w-1/3 h-72 rounded-lg flex flex-col items-center justify-center gap-5 p-5 shadow-xl">
            <HolisticApproach />
            <h1 className="font-semibold text-xl md:text-2xl">
              Holistic Approach
            </h1>
            <p className="text-center">
              Experience a comprehensive approach to well-being that integrates
              community support, expert care, and advanced technology.
            </p>
          </div>
          <div className="transition-transform hover:scale-105 bg-[#D2F6D5] w-full md:w-1/3 h-72 rounded-lg flex flex-col items-center justify-center gap-5 p-5 shadow-xl">
            <GreatCommunity />
            <h1 className="font-semibold text-xl md:text-3xl">
              Great Community
            </h1>
            <p className="text-center">
              Connect with a vibrant and supportive community dedicated to
              meaningful interactions and personal growth.
            </p>
          </div>
          <div className="transition-transform hover:scale-105 bg-[#D2F6D5] w-full md:w-1/3 h-72 rounded-lg flex flex-col items-center justify-center gap-5 p-5 shadow-xl">
            <Accessibility />
            <h1 className="font-semibold text-xl md:text-2xl">Accessibility</h1>
            <p className="text-center">
              Enjoy easy access to consultations, resources, and activities
              designed to support your mental and emotional health.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-5 md:px-20 h-auto">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Man />
        </div>
        <div className="flex flex-col items-start justify-start h-full gap-5 w-full md:w-1/2">
          <h3 className="font-semibold text-xl">About Us</h3>
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
            Discover the Faces Behind Our Mental Health Consultancy
          </h1>
          <p>
            At Sociable Spot, we are dedicated to creating a supportive and
            enriching community where well-being is at the heart of everything
            we do. Our holistic approach integrates expert consultations, a
            compassionate AI therapeutic bot, and engaging Inner Circle
            activities, all within a safe and accessible space.
          </p>
          <button className="px-6 py-2 bg-[#455A64] text-white font-semibold rounded-full">
            <Link to="/about" className="no-underline">
              See Details
            </Link>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full flex flex-col items-center justify-center mt-24 mb-10 px-5 md:px-0">
        <div className="text-center text-xl font-semibold text-black">
          Services
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Individual Therapy, Group Support, and Wellness Programs
        </h2>
      </section>

      {/* Carousel Section */}
      <div className="w-full md:w-5/6 mb-24 px-5 md:px-0">
        <Card />
      </div>

      {/* Gallery Section */}
      <section className="w-full px-5 md:px-20">
        <Gallery />
      </section>

      {/* FAQ Section */}
      <section className="w-full px-5 md:px-20 mt-24">
        <div className="mx-auto max-w-2xl lg:text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion />
      </section>

      {/* Newsletter Section */}
      {/* Uncomment when needed */}
      {/* <Newsletter /> */}
    </main>
  );
};

export default Home;
