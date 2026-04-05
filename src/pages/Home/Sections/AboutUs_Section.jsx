import Omega from "../../../components/OmegaAnimation/OmegaAnimation";
import Triangle from "../../../components/TriangleAnimation/TriangleAnimation";
import { homeData } from "../../../data/home_data/home_data";
import useInView from "../../../hooks/useInView";
function AboutUs_Section() {
  const [aboutRef, aboutVisible] = useInView(); // Add this line
  return (
    <section
      id="about"
      ref={aboutRef}
      className="section flex items-center justify-between bg-[url('/back.png')] bg-cover bg-center bg-no-repeat max-md:flex-col max-md:justify-evenly"
    >
      {/* Left content */}
      <div className="m-5 flex w-[50%] flex-col justify-between gap-4 max-md:items-center">
        {/* Title */}
        <h2
          className={`animate__animated text-4xl font-bold text-cyan-500 capitalize delay-200 max-md:text-center max-md:text-2xl ${
            aboutVisible ? "animate__fadeInUp" : "opacity-0"
          }`}
        >
          {homeData.about_section.title}
        </h2>

        {/* Subtitle */}
        <p
          className={`animate__animated text-xl font-bold text-white/70 capitalize delay-400 max-md:text-center max-md:text-sm ${
            aboutVisible ? "animate__fadeInUp" : "opacity-0"
          }`}
        >
          {homeData.about_section.subtitle.fst_phrase}
          <br /> {homeData.about_section.subtitle.snd_phrase}
        </p>

        {/* Button */}
        <a
          href="/"
          className={`animate__animated w-fit cursor-pointer rounded-xl border-2 border-solid border-cyan-500 p-3 text-xl font-bold text-white capitalize delay-600 hover:bg-cyan-500 hover:text-black max-md:p-1 max-md:text-sm ${
            aboutVisible ? "animate__fadeInUp" : "opacity-0"
          }`}
        >
          {homeData.about_section.button}
        </a>
      </div>

      {/* Right content */}
      <div className="flex-1 max-md:flex-none">
        <div
          className={`animate__animated flex flex-col items-center justify-between gap-5 delay-800 ${
            aboutVisible ? "animate__fadeInRight" : "opacity-0"
          }`}
        >
          <Omega />
          <Triangle />
        </div>
      </div>
    </section>
  );
}

export default AboutUs_Section;
