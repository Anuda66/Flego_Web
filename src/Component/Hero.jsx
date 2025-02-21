import { useNavigate } from "react-router-dom";
import Header from "../assets/header.webp";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen -mb-24">
      <div className="relative w-full h-[580px] md:h-[700px] sm:md:h-[600px]  overflow-hidden">
        {/* Background Image---------------------------------- */}
        <img
          src={Header}
          alt="Hero Background"
          className="object-cover w-full h-full animate-fadeIn"
        />

        {/* Overlay to make text more readable---------------------------------- */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content------------------------------------------- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl">
            "Flego Innovation"
          </h1>
          <p className="max-w-2xl mb-8 text-base md:text-2xl">
            "we harness the power of cutting-edge technology to innovate and
            streamline solutions for businesses worldwide..."
          </p>
          <div className="flex flex-row gap-3">
            <a
              className="px-5 py-2 font-bold transition duration-300 ease-in-out delay-150 border-2 rounded-full text-secondary md:block hover:-translate-y-1 hover:scale-100 hover:shadow-lg border-primary-50 hover:border-primary-100"
              href="#service"
            >
              Read More
            </a>

            <button
              onClick={() => {
                navigate("/contactUs");
                scrollTo(0, 0);
              }}
              className="px-5 py-2 font-bold transition duration-300 ease-in-out delay-150 border-2 rounded-full text-secondary md:block hover:-translate-y-1 hover:scale-100 hover:shadow-lg border-primary-50 hover:border-primary-100"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
