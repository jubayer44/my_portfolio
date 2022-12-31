import Slider from "../Swipper/Slider";
import mylesson1 from "../../assets/Images/mylesson-2.png";
import mylesson2 from "../../assets/Images/mylesson-3.png";
import mylesson3 from "../../assets/Images/mylesson-1.png";

const MyLesson = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="order-none md:order-2 md:w-1/2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-4xl">
          My Lesson
          </h2>
          <div className="mb-5 text-base px-2 text-gray-400 sm:text-left md:text-lg">
            <ul>
              <li className="list-disc">
              This is an educational course-related web application.
              </li>
              <li className="list-disc">
              The site is built with React JavaScript Tailwind and DaisyUi.
              </li>
              <li className="list-disc">
              Used Express, Node.js, MongoDB, and Firebase Auth.
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
            href="https://my-lesson-5d129.web.app/"
            className="text-white bg-violet-500 font-bold rounded-md p-2 mr-2"
          >
            Live Site
          </a>
          <a
            href="https://github.com/jubayer44/my-lesson-client"
            className="text-white bg-violet-500 font-bold rounded-md p-2 mr-2"
          >
            GitHub Client
          </a>
          <a
            href="https://github.com/jubayer44/my-lesson-server"
            className="text-white bg-violet-500 font-bold rounded-md p-2"
          >
            GitHub Server
          </a>
        </div>
        <div className="md:w-[65%]">
          <Slider ielts1={mylesson1} ielts2={mylesson2} ielts3={mylesson3} />
        </div>
      </div>
    </section>
  );
};

export default MyLesson;
