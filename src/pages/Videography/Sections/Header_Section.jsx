import { videographyData } from "../../../data/videography_data/videography_data";
import Header from "../../../components/Header/Header";
import VidShape from "../../../components/videoShape/videoShape";

function Header_Section() {
  return (
    <>
      <header className="relative z-99">
        <Header />
      </header>

      {/* Main Section */}
      <section className="relative z-20 mt-30 flex items-center justify-center gap-10 px-5">
        {/* Text Content */}
        <div className="flex w-fit flex-col items-center justify-center gap-3 text-center">
          {/* Title */}
          <h2 className="animate__animated animate__slideInUp text-8xl font-bold text-white uppercase delay-200 max-md:text-5xl">
            {videographyData.primary_section.title.fst_Wrd}
            <br />
            <span className="move_horizontal text-cyan-500">
              {videographyData.primary_section.title.snd_Wrd}
            </span>
            <br />
            {videographyData.primary_section.title.thd_Wrd}
          </h2>

          <div className="animate__animated animate__zoomIn relative z-20 flex items-center gap-8 delay-300 max-md:flex-col max-md:gap-4">
            <button className="z-20 h-fit w-fit cursor-pointer rounded-md border border-cyan-500 px-6 py-3 text-cyan-500 hover:bg-cyan-500 hover:text-white max-md:px-3 max-md:py-1.5">
              {videographyData.primary_section.buttons.primary}
            </button>
            <VidShape />
            <button className="z-20 h-fit w-fit cursor-pointer rounded-md border border-cyan-500 px-6 py-3 text-cyan-500 hover:bg-cyan-500 hover:text-white max-md:px-3 max-md:py-1.5">
              {videographyData.primary_section.buttons.secondary}
            </button>
          </div>
        </div>

        {/* Shape */}
      </section>
    </>
  );
}

export default Header_Section;
