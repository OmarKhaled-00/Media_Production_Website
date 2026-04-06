import { videographyData } from "../../../data/videography_data/videography_data";
import VideographyCards from "../../../components/VidepgraphyCards/VideographyCards";
import useInView from "../../../hooks/useInView";

function Solutions_Section() {
  const [cardsRef, cardsVisible] = useInView();

  return (
    <>
      <section
        ref={cardsRef}
        className={` ${cardsVisible ? "animate__animated animate__fadeInUp" : "opacity-0"} relative z-20 mt-40 flex flex-col items-center justify-center gap-24 max-md:mt-20`}
      >
        <h2 className="relative text-5xl text-white before:absolute max-md:text-4xl max-md:before:left-12 before:-bottom-7 before:left-18 before:h-1 before:w-25 before:bg-cyan-500 before:content-['']">
          {videographyData.solution_section.title}
        </h2>
        <div className="grid cursor-pointer  grid-cols-3 gap-10 *:hover:border-cyan-500 *:hover:shadow-2xl *:hover:shadow-cyan-500/50 *:hover:transition-all *:hover:delay-150 *:hover:ease-out max-xl:grid-cols-1">
          {videographyData.solution_section.cards.map((service) => (
            <VideographyCards
              key={service.id}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Solutions_Section;
