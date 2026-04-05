import { photographyData } from "../../../data/photography_data/photography_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInView from "../../../hooks/useInView";
function solutions_Section() {
  const [cardsRef, cardsVisible] = useInView();
  return (
    <>
      <section
        ref={cardsRef}
        className={` ${cardsVisible ? "animate__animated animate__fadeInUp" : "opacity-0"} relative z-10 mt-40 flex flex-col items-center justify-center gap-24 bg-[#161616] max-md:mt-20`}
      >
        <h2 className="relative text-5xl text-white before:absolute max-md:text-4xl max-md:before:left-12 before:-bottom-7 before:left-18 before:h-1 before:w-25 before:bg-cyan-500 before:content-['']">
          {photographyData.solution_section.title}
        </h2>
        <div className="grid cursor-pointer grid-cols-2 gap-10 *:hover:border-cyan-500 *:hover:shadow-2xl *:hover:shadow-cyan-500/50 *:hover:transition-all *:hover:delay-150 *:hover:ease-out max-md:grid-cols-1">
          {photographyData.solution_section.cards.map((card) => (
            <div
              key={card.id}
              className={`group/d${card.id} flex h-60 w-80 flex-col items-center justify-center gap-8 border border-cyan-800 bg-cyan-700/15 text-center text-4xl text-white`}
            >
              <FontAwesomeIcon
                icon={card.icon}
                className={`animate__animated group-hover/d${card.id}:animate-bounce`}
              />
              <h3 className="capitalize">{card.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default solutions_Section;
