// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetch("projects.json")
//       .then((res) => res.json())
//       .then((data) => setProjects(data));
//   }, []);
//   console.log(projects);
  
//   return (
//     <div className="px-4" id="projects">
//       <h2 className="text-2xl font-bold text-white text-center">My Projects</h2>
//       <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-5">
//         {projects?.map((project) => (
//           <div key={project.id} className="" data-aos="zoom-in">
//             <div className=" py-10">
//               <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
//                 <img className="rounded-t-lg" src={project.url} alt="" />
//                 <div className="py-6 px-8 rounded-lg bg-white">
//                   <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
//                     {project.name}
//                   </h1>
//                   <p className="text-gray-700 tracking-wide mb-5">
//                     {project.description}
//                   </p>
//                   <Link
//                     to={`/project/${project.id}`}
//                     className="py-2 px-4 bg-violet-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;







import { Link } from "react-router-dom";

const Projects = () => {
  
  return (
    <div className="px-4" id="projects">
      <h2 className="text-2xl font-bold text-white text-center">My Projects</h2>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-5">
        
          <div  className="" data-aos="zoom-in">
            <div className=" py-10">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src="https://i.ibb.co/f1gcYH6/projects-1.png" alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                  IELTS Hub
                  </h1>
                  <p className="text-gray-700 tracking-wide mb-5">
                  A Full-Stack Web Application
                  </p>
                  <Link
                    to={`/ieltsHub`}
                    className="py-2 px-4 bg-violet-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div  className="" data-aos="zoom-in">
            <div className=" py-10">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src="https://i.ibb.co/rvvpRpK/projects-2.png" alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                  Laptop City
                  </h1>
                  <p className="text-gray-700 tracking-wide mb-5">
                  A Full-Stack Web Application
                  </p>
                  <Link
                    to={`/laptopCity`}
                    className="py-2 px-4 bg-violet-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div  className="" data-aos="zoom-in">
            <div className=" py-10">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src="https://i.ibb.co/LPHfXgc/Projects-3.png" alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                  My Lesson
                  </h1>
                  <p className="text-gray-700 tracking-wide mb-5">
                  A Full-Stack Web Application
                  </p>
                  <Link
                    to={`/myLesson`}
                    className="py-2 px-4 bg-violet-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>




      </div>
    </div>
  );
};

export default Projects;
