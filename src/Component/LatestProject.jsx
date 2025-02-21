import React from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
function LatestProject() {

    const navigate = useNavigate();
    
  const project = [
    {
      id: 1,
      title: "Ko Sri Solutions",
      image: <img src={Image1} alt="" />,
    },
    {
      id: 2,
      title: "Business Management System",
      image: <img src={Image2} alt="" />,
    },
    {
      id: 3,
      title: "A/L Helper",
      image: <img src={Image3} alt="" />,
    },
  ];

  return (
    <div className="mx-8 mt-36 md:mx-24">
      <div className="space-y-10">
        <h1 className="text-xl font-semibold leading-tight text-center text-primary-100 md:text-2xl lg:text-3xl md:leading-tight lg:leading-tight ">
          Our Projects On Last Months
        </h1>
        <p className="text-sm text-center text-gray-500">
          From groundbreaking designs to cutting-edge solutions, our portfolio
          showcases a rich tapestry of imagination brought to life. Explore our
          history of innovation and discover how we've transformed ideas into
          reality, one project at a time.
        </p>
      </div>

      <div className="flex justify-center py-20">
        <div className="grid grid-cols-1 gap-5 px-10 md:grid-cols-2 lg:grid-cols-3">
          {project.map((item) => (
            <div
              key={item.id}
              className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30"
            >
              <div className="w-96">{item.image}</div>
              {/*Background overlay--------------------------------------*/}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/70"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all ">
                <h1 className="pb-16 text-xl font-bold text-secondary ">
                  {item.title}
                </h1>

                <div className="flex justify-center pb-5 md:pb-0">
                  <button
                    onClick={() => {
                      navigate("/about");
                      scrollTo(0, 0);
                    }}
                    className="px-5 py-2 font-bold text-white transition duration-300 ease-in-out delay-150 border-2 rounded-full md:block hover:-translate-y-1 hover:scale-100 hover:shadow-lg border-primary-50 hover:border-primary-100"
                  >
                    Find out more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestProject;
