import React from "react";
import Sittinglady from "./components/UI/Sittinglady";
import Ceo from "./Images/priyank.jpg";
import Cto from "./Images/khushi.jpg";
import om from "./Images/om.jpg";
import mann from "./Images/mann.jpg";
import megh from "./Images/megh.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Priyank Joshi",
      position: "CEO",
      bgColor: "#D2F6D5",
      image: Ceo,
    },
    {
      name: "Khushi Shah",
      position: "CTO",
      bgColor: "#D2F6D5",
      image: Cto,
    },
    {
      name: "Megh Gurjar",
      position: "Developer",
      bgColor: "#D2F6D5",
      image: megh,
    },
    {
      name: "Mann Dave",
      position: "Developer",
      bgColor: "#D2F6D5",
      image: mann,
    },
    {
      name: "Om Kansara",
      position: "Developer",
      bgColor: "#D2F6D5",
      image: om,
    },
  ];

  return (
    <div>
      <div className="about-us-page min-h-screen p-6 md:p-10">
        <section className="about-section flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="w-full md:w-1/2">
            <Sittinglady />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-10 mt-6 md:mt-0">
            <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">
              Our Story
            </h1>
            <p className="text-base md:text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et euismod ligula. Morbi mattis pretium eros, ut
              mollis lorem pharetra nec. Duis vestibulum eget ligula at
              elementum.
            </p>
          </div>
        </section>

        <section className="about-section flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="w-full md:w-1/2 pr-0 md:pr-10 mb-6 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">
              Our Mission
            </h1>
            <p className="text-base md:text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et euismod ligula. Morbi mattis pretium eros, ut
              mollis lorem pharetra nec. Duis vestibulum eget ligula at
              elementum.
            </p>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-10">
            <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">
              Our Vision
            </h1>
            <p className="text-base md:text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et euismod ligula. Morbi mattis pretium eros, ut
              mollis lorem pharetra nec. Duis vestibulum eget ligula at
              elementum.
            </p>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="team-members-section mt-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Our Team Members
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="member-frame flex flex-col items-center"
                style={{
                  backgroundColor: member.bgColor,
                  height: "250px",
                  width: "200px",
                }}
              >
                <div className="member-content p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full border border-black mb-2 w-32 h-32 object-cover"
                  />
                  <h2 className="text-lg font-semibold text-center">
                    {member.name}
                  </h2>
                  <p className="text-sm text-center">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
