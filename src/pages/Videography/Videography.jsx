import Pattern from "../../components/SquareBg/SquareBg";
import Header_Section from "./Sections/Header_Section";
import Solutions_Section from "./Sections/Solutions_Section";
import Gallery_Section from "./Sections/Gallery_Section";
import Footer from "../../components/Footer/Footer";
function Videography() {
  return (
    <div className="relative flex min-h-dvh flex-col justify-between gap-5 overflow-hidden">
      {/* Background */}
      <div className="inset-0">
        <Pattern />
      </div>
      {/* Header Section */}
      <Header_Section />
      {/* Solutions Section */}
      <Solutions_Section />
      {/* Gallery Section */}
      <Gallery_Section />
      <section className="relative z-20">
        <Footer />
      </section>
    </div>
  );
}

export default Videography;
