import Header from "../../../components/Header/Header";
import useInView from "../../../hooks/useInView";
import { homeData } from "../../../data/home_data/home_data";

function Header_Section() {
  const [heroRef, heroVisible] = useInView();
  return (
    <>
      <section ref={heroRef} className="section">
        <Header />

        <div
          className={`animate__animated absolute top-[40%] left-[10%] z-50 flex flex-col items-center gap-5 ${
            heroVisible ? "animate__backInLeft" : "opacity-0"
          }`}
        >
          <h1 className="masked-text text-6xl text-cyan-500 capitalize max-md:text-3xl">
            {homeData.hero_section.title}
          </h1>
          <h2 className="masked-text text-4xl text-cyan-500 capitalize max-md:text-2xl">
            {homeData.hero_section.subtitle}
          </h2>
        </div>

        <video
          src={homeData.hero_section.video_path}
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>
    </>
  );
}

export default Header_Section;
