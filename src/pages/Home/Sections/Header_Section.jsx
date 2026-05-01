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
          <h1 className=" text-6xl text-white/80 font-bold capitalize max-md:text-3xl">
            {homeData.hero_section.title.fst_part} <br/> {homeData.hero_section.title.snd_part}
          </h1>
          <h2 className=" text-4xl text-white/80 capitalize max-md:text-2xl">
            {homeData.hero_section.subtitle}
          </h2>
        </div>

<div className="relative w-full h-dvh overflow-hidden">
  <video
    src={homeData.hero_section.video_path}
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 min-h-full min-w-full max-md:object-fill object-cover"
  />
</div>
      </section>
    </>
  );
}

export default Header_Section;
