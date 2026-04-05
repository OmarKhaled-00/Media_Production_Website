import { socialMediaData } from "../../../data/socialMedia_data/socialMedia_data";
import SocialMediaTrain from "../../../components/SocialMediaTrain/SocialMediaTrain";

function Header_Section() {
  return (
    <>
      <section className="relative z-20 mt-30 flex items-center justify-center gap-10 px-5">
        {/* Text Content */}
        <div className="flex w-fit flex-col items-center justify-center gap-3 text-center">
          {/* Title */}
          <h2 className="animate__animated animate__slideInUp text-8xl font-bold text-white uppercase delay-200 max-md:text-6xl">
            {socialMediaData.primary_section.title.fst_Wrd}
            <br />
            <span className="text-center text-cyan-500">
              {socialMediaData.primary_section.title.snd_Wrd}
            </span>
            <br />
          </h2>
          <div className="animate__animated animate__zoomIn flex items-center justify-center delay-300 max-md:w-[50%]">
            <SocialMediaTrain />
          </div>

          <div className="animate__animated animate__zoomIn relative z-20 flex items-center gap-8 delay-400 max-md:flex-col max-md:gap-4">
            <button className="z-20 h-fit w-fit cursor-pointer rounded-md border border-cyan-500 px-6 py-3 text-cyan-500 hover:bg-cyan-500 hover:text-white max-md:px-3 max-md:py-1.5">
              {socialMediaData.primary_section.buttons.primary}
            </button>
            {/* <SocialMediaShape /> */}
            <button className="z-20 h-fit w-fit cursor-pointer rounded-md border border-cyan-500 px-6 py-3 text-cyan-500 hover:bg-cyan-500 hover:text-white max-md:px-3 max-md:py-1.5">
              {socialMediaData.primary_section.buttons.secondary}
            </button>
          </div>
        </div>

        {/* Shape */}
      </section>
    </>
  );
}

export default Header_Section;
