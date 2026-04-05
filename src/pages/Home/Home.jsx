import Footer from "../../components/Footer/Footer";
import OurSolutions_Section from "./Sections/OurSolutions_Section";
import Header_Section from "./Sections/Header_Section";
import AboutUs_Section from "./Sections/AboutUs_Section";
import OurPhilosofey_Section from "./Sections/OurPhiolosofey_Section";
import OurClients_Section from "./Sections/OurClients_Section";
function Home() {
  return (
    <div className="container_layout">
      {/* HERO SECTION */}
      <Header_Section />
      {/* SERVICES SECTION */}
      <OurSolutions_Section />
      {/* ABOUT US SECTION */}
      <AboutUs_Section />
      {/* PHILOSOPHY SECTION */}
      <OurPhilosofey_Section />
      {/* CLIENTS SECTION */}
      <OurClients_Section />
      {/* FOOTER */}
      <section className="section">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
