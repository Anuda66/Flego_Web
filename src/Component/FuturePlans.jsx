import React from "react";
import Img2 from "../assets/img2.jpg";
import { useNavigate } from "react-router-dom";

function FuturePlans() {
  
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col flex-wrap px-6 mt-40 mb-16 md:flex-row md:px-10 lg:px-20 md:mt-40">
      {/*left side------------------------------------------------------------------ */}
      <div className="relative md:w-1/2">
        <img
          className="bottom-0 w-full h-auto rounded rounded-tr-extraLarge md:absolut rounded-bl-extraLarge"
          src={Img2}
          alt="Heder Image"
        />
      </div>

      {/*right side------------------------------------------------------------------ */}
      <div className="flex flex-col md:items-start justify-center gap-4 m-auto md:w-1/2 md:px-0.5 px-3 pt-10 md:pt-0 md:pl-16">
        <p className="text-xl font-semibold leading-tight text-center text-primary-100 md:text-2xl lg:text-3xl md:leading-tight lg:leading-tight md:text-left">
          Future Plans
        </p>

        <div className="flex flex-col gap-5 text-sm text-center text-gray-600 md:text-left md:items-center md:flex-row md:gap-20">
          <p>
            Stay informed about our blogs, it's highly unlikely that they will
            stay up to date. This will be the latest blog from 2023 when it's
            already 2026, feel free to read our outdated blogs.
          </p>
        </div>
        <div className="flex justify-center pb-5 md:pb-0">
          <button
            onClick={() => {
              navigate("/futurePlans");
              scrollTo(0, 0);
            }}
            className="px-5 py-2 font-bold text-black transition duration-300 ease-in-out delay-150 border-2 rounded-full md:block hover:-translate-y-1 hover:scale-100 hover:shadow-lg border-primary-50 hover:border-primary-100"
          >
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
}

export default FuturePlans;
