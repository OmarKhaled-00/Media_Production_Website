import Header_Section from "./Sections/Header_Section";
import Solutions_Section from "./Sections/Solutions_Section";
import Gallery_Section from "./Sections/Gallery_Section";
import Footer from "../../components/Footer/Footer";
function Photography() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-20 overflow-x-hidden">
        {/* Header Section */}
        <Header_Section />
        {/* Solutions Section */}
        <Solutions_Section />
        {/* Gallery Section */}
        <Gallery_Section />
        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Photography;
