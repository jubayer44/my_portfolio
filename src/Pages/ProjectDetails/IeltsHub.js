import Slider from "../Swipper/Slider";
import ielts1 from "../../assets/Images/itlts-1.png"
import ielts2 from "../../assets/Images/itlts-2.png"
import ielts3 from "../../assets/Images/ielts-3.png"

const IeltsHub = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="order-none md:order-2 md:w-1/2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-4xl">
            IELTS Hub
          </h2>
          <div className="mb-5 text-base px-2 text-gray-400 sm:text-left md:text-lg">
            <ul>
              <li className="list-disc">
                This is a service review web application.
              </li>
              <li className="list-disc">
                The site is built with React JavaScript Tailwind and DaisyUi.
              </li>
              <li className="list-disc">
                Implemented Google Firebase, environment process, and stored
                data to MongoDB.
              </li>
            </ul>
          </div>
          <p className="text-white mb-5">
            <span className="text-xl font-bold text-violet-500">
              Technology:
            </span>{" "}
            HTML,Tailwind CSS, JavaScript, React, React-Router, Firebase,
            Express, and MongoDB{" "}
          </p>
          <a
            href="https://english-hub-58ffb.web.app/"
            className="text-white bg-violet-500 font-bold rounded-md p-2 mr-2"
          >
            Live Site
          </a>
          <a
            href="https://github.com/jubayer44/ielts-hub-client"
            className="text-white bg-violet-500 font-bold rounded-md p-2 mr-2"
          >
            GitHub Client
          </a>
          <a
            href="https://github.com/jubayer44/ielts-hub-server"
            className="text-white bg-violet-500 font-bold rounded-md p-2"
          >
            GitHub Server
          </a>
        </div>
        <div className="md:w-[65%]">
          <Slider ielts1={ielts1} ielts2={ielts2} ielts3={ielts3}/>
        </div>
      </div>
    </section>
  );
};

export default IeltsHub;
