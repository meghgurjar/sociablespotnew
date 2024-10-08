import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Wave from "./UI/Wave";
import logo from "../Images/logo.1.jpg";

function Footer() {
  const Links = [
    {
      icon: <Instagram className="text-green-700" />,
      link: "https://www.instagram.com/sociablespot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      icon: <Facebook className="text-green-700" />,
      link: "https://www.facebook.com/profile.php?id=61563679256338&sk=about",
    },
   
  
    {
      icon: <Linkedin className="text-green-700" />,
      link: "https://www.linkedin.com/company/sociable-spot/?viewAsMember=true",
    },
  ];  

  return (
    <div className="relative flex flex-col items-center   justify-center">
      <div className="absolute w-screen rotate-180  -bottom-0 -z-10">
        {/* Uncomment if Wave component is available */}
        <Wave />
      </div>
      <div className="relative flex items-start justify-between mt-24 w-screen pt-20 px-20">
        <div className="flex flex-col items-start text-primary-textgreen font-extrabold text-lg">
         
          <img src={logo} alt="Logo" className="w-28 h-28 mix-blend-multiply place-items-start" />
          <div>
            {/* Uncomment and adjust the Image component if using Next.js or another framework */}
            {/* <Image src={`/public/Logo.png`} alt='Logo' width={100} height={100} /> */}
          </div>
        </div>
        <div className="flex items-start ml-10 justify-between  mt-24 w-2/3">
          <div className="flex flex-col items-start justify-start gap-y-5 font-normal text-primary/80">
            <span className="font-semibold text-primary text-black">Services</span>
            <div>Psychotherapy</div>
            <div>Mental Counseling</div>
            <div>Support Groups</div>
            <div>Case Management</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-y-5 font-normal text-primary/80">
            <span className="font-semibold text-primary text-black">Contact</span>
            <div>+91 91730 58096</div>
            <div>creativesapiens06@gmail.com </div>
            <div>Ahmedabad, Gujarat, India</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-y-5 font-normal text-primary/80">
            <span className="font-semibold text-primary text-black">Links</span>
            <div>Privacy Policy</div>
            <div>Terms Of Use</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-y-5 font-normal text-primary/80">
            <span className="font-semibold text-primary text-black"></span>
          </div>
        </div>
      </div>
      <div className="w-screen px-20 mt-14">
        <div className="w-full h-0.5 rounded-full bg-primary/70 mb-10" />
      </div>
      <div className="flex items-center justify-between gap-5 mb-5">
        {Links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="hover:opacity-75 transition-opacity"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div>© 2024 Sociable Spot. All Rights Reserved</div>
    </div>
  );
}

export default Footer;
