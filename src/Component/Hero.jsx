import Header from "../assets/header.webp";

function Hero() {
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
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content------------------------------------------- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white"
        >
          <h1 className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl">
            "Flego Innovation"
          </h1>
          <p className="max-w-2xl mb-8 text-base md:text-2xl">
            "we harness the power of cutting-edge technology to innovate and streamline solutions for businesses worldwide."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
