import HomeCards from "../../../components/HomeCards/HomeCards";
import { Link } from "react-router-dom";
import { homeData } from "../../../data/home_data/home_data";
import useInView from "../../../hooks/useInView";
function OurSolutions_Section() {
  const [servicesRef, servicesVisible] = useInView();
  return (
    <>
      <section
        id="services"
        ref={servicesRef}
        className="section flex flex-col gap-10 "
      >
        <div
          className={`animate__animated ${
            servicesVisible ? "animate__backInDown" : "opacity-0"
          }`}
        >
          <div className="mt-30 max-md:mt-5">
            <div className="flex flex-col items-center justify-between gap-4 *:capitalize">
              <h3 className="text-3xl text-cyan-500 max-md:text-2xl">
                {homeData.offer_section.title}
              </h3>
              <h2 className="text-5xl text-white max-md:text-4xl">
                {homeData.offer_section.subtitle}
              </h2>
              <p className="text-2xl text-[#767373]  max-xl:text-center max-xl:text-xl max-md:text-lg">
                {homeData.offer_section.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center max-md:flex-col gap-3 max-md:items-center">
         <div className="flex gap-3 items-center">
           <Link
            to="/photography"
            className={`animate__animated ${
              servicesVisible ? "animate__backInLeft" : "opacity-0"
            }`}
          >
            <HomeCards
              title="photography"
              photo={homeData.offer_section.cards.photography.photo}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
            />
          </Link>

          <Link
            to="/videography"
            className={`animate__animated ${
              servicesVisible ? "animate__backInUp" : "opacity-0"
            }`}
          >
            <HomeCards
              title="videography"
              photo={homeData.offer_section.cards.videography.photo}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Link>
         </div>

          <Link
            to="/socialmedia"
            className={`animate__animated ${
              servicesVisible ? "animate__backInRight" : "opacity-0"
            }`}
          >
            <HomeCards
              title="social media"
              photo={homeData.offer_section.cards.socialmedia.photo}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Link>
        </div>
      </section>
    </>
  );
}

export default OurSolutions_Section;
