import RotateCards from "../../../components/RotateCards/RotateCards";
import { homeData } from "../../../data/home_data/home_data";
import useInView from "../../../hooks/useInView";

function OurPhilosofey_Section() {
  const [philosophyRef, philosophyVisible] = useInView(); // Add this line

  return (
    <section
      ref={philosophyRef} // attach ref
      className={`section animate__animated ${
        philosophyVisible ? "animate__zoomIn" : "opacity-0"
      }`}
    >
      <div className="mt-20 max-md:mt-30">
        <div className="flex flex-col items-center justify-between gap-4 *:capitalize max-md:gap-2">
          <h3 className="text-3xl text-cyan-500 max-xl:text-2xl max-md:text-xl">
            {homeData.howItWorks_section.title}
          </h3>
          <h2 className="text-5xl text-white max-xl:text-4xl max-md:text-3xl">
            {homeData.howItWorks_section.subtitle}
          </h2>
          <p className="text-2xl text-[#767373] max-xl:text-xl max-xl:text-center max-md:text-sm">
            {homeData.howItWorks_section.description}
          </p>
          <RotateCards />
        </div>
      </div>
    </section>
  );
}

export default OurPhilosofey_Section;
