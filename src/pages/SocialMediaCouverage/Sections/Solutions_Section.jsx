import SocialMediaCards from "../../../components/SocialMediaCards/SocialMediaCards";
import { socialMediaData } from "../../../data/socialMedia_data/socialMedia_data";
import useInView from "../../../hooks/useInView";

function Solutions_Section() {
  const [cardsRef, cardsVisible] = useInView();
  return (
    <>
      <section
        ref={cardsRef}
        className={`${cardsVisible ? "animate__animated animate__fadeInUp" : "opacity-0"} flex flex-col items-center`}
      >
        <h2 className="relative text-5xl max-md:text-4xl max-md:before:left-12 text-white before:absolute before:-bottom-7 before:left-18 before:h-1 before:w-25 before:bg-cyan-500 before:content-['']">
          {socialMediaData.solution_section.title}
        </h2>
        <div className="mt-30 grid grid-cols-2 gap-10 max-md:grid-cols-1">
          {socialMediaData.solution_section.cards.map((card) => (
            <SocialMediaCards
              key={card.id}
              name={card.title}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Solutions_Section;
