import OurClients from "../../../components/OurClients/OurClients";
import { homeData } from "../../../data/home_data/home_data";
import useInView from "../../../hooks/useInView";

function OurClients_Section() {
  const [clientsRef, clientsVisible] = useInView(); // Add this line
  return (
    <>
      <section
        ref={clientsRef}
        className={`section animate__animated flex flex-col items-center justify-center gap-6 max-md:gap-4 ${
          clientsVisible ? "animate__backInLeft " : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-cyan-500 capitalize max-md:text-2xl">
          {homeData.ourClients_section.title}
        </h2>
        <OurClients />
      </section>
    </>
  );
}

export default OurClients_Section;
