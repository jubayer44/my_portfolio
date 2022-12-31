import Slider from "../Swipper/Slider";
import laptop1 from "../../assets/Images/laptop-1.png";
import loptop2 from "../../assets/Images/laptop-2.png";
import laptop3 from "../../assets/Images/laptop-3.png";

const LaptopCity = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="order-none md:order-2 md:w-1/2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-4xl">
            Laptop City
          </h2>
          <div className="mb-5 text-base px-2 text-gray-400 sm:text-left md:text-lg">
            <ul>
              <li className="list-disc">
                This is a used product resale web application built with React,
                Tailwind, DaisyUI, firebase, etc.
              </li>
              <li className="list-disc">
                Applied login, register page with firebase, JWT token, admin
                verification, etc.
              </li>
              <li className="list-disc">
                Admin will see all sellers and all buyers, Buyer will see
                orders, and wish list, Seller will see his products, and sellers
                can add products.
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
            href="https://laptop-city-d9c91.web.app/"
            className="text-white bg-violet-500 font-bold rounded-md p-2 mr-2"
          >
            Live Site
          </a>
          <a
            href="https://github.com/jubayer44/laptop-city-client"
            className="text-white bg-violet-500 font-bold rounded-md p-2 mr-2"
          >
            GitHub Client
          </a>
          <a
            href="https://github.com/jubayer44/laptop-city-server"
            className="text-white bg-violet-500 font-bold rounded-md p-2"
          >
            GitHub Server
          </a>
        </div>
        <div className="md:w-[65%]">
          <Slider ielts1={laptop1} ielts2={loptop2} ielts3={laptop3} />
        </div>
      </div>
    </section>
  );
};

export default LaptopCity;
