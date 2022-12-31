import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about">
      <h2 className="text-2xl font-bold text-center text-white mb-[250px] mt-0">
        About Me
      </h2>
      <div>
      <main className="profile-page mt-40">
        <section className=" h-500-px">
          <div>
            <span
              id="blackOverlay"
              className="w-full h-full opacity-50 bg-black"
            ></span>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full  pointer-events-none overflow-hidden h-70-px">
            <svg
              className=" bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-800 text-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <img
                    className="w-[200px] h-[200px] rounded-full -mt-16"
                    src="https://i.ibb.co/s2nPX8d/my-photo.png"
                    alt=""
                  />
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Md Jubayer Ahmed
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Sylhet, Bangladesh
                  </div>
                  <div className="flex justify-center gap-3">
                  <a href="https://github.com/jubayer44"><FaGithub className="text-2xl" /></a>
                  <a href="https://www.linkedin.com/in/jubayerr44/"><FaLinkedin className="text-2xl" /></a>
                  <a href="https://www.facebook.com/jashamim"><FaFacebook className="text-2xl"/></a>
                  <a href="https://twitter.com/jubayerr44"><FaTwitter className="text-2xl" /></a>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      I'm a Front Web Developer with 1 year of experience. Recently I am learning Full Stake Web Development with Programming Hero. I completed some front-end and full-stake projects using HTML5, CSS3, JavaScript, Tailwind, Firebase DaisyUI, Node.js, express.js, and MongoDB. 
                      </p>
                      <a target="_blank" href="Jubayer_Ahmed_CV.pdf" className=" inline-flex items-center justify-center mr-2 w-full mb-2 bg-violet-500 rounded-md p-2 font-bold text-white sm:w-auto sm:mb-0">
                        Get My CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>  
      </div>
      
    </div>
  );
};

export default About;
