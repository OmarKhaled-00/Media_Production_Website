import Header from "../../components/Header/Header";

import Footer from "../../components/Footer/Footer";

import Header_Section from "./Sections/Header_Section";
import Solutions_Section from "./Sections/Solutions_Section";
function SocialMedia() {
  return (
    <div className="relative z-50 flex min-h-dvh flex-col gap-5 overflow-x-hidden bg-[#161616]">
      <header>
        <Header />
      </header>

      <div className="flex flex-col items-center gap-20">
        {/* Header Section */}
        <Header_Section />
        {/* Solutions Section */}
        <Solutions_Section />
        {/* Footer Section */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
