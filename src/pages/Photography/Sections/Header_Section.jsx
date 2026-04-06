import Header from "../../../components/Header/Header";
import { photographyData } from "../../../data/photography_data/photography_data";

function Header_Section() {
  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      <section className="relative flex min-h-[80dvh] w-[70%] items-center justify-center overflow-hidden before:absolute before:inset-0 before:animate-[morphing_20s_ease-in-out_infinite] before:bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)] before:content-[''] max-xl:w-[90%]">
        <div className="floating_rectangle absolute top-[10%] left-[10%] h-25 w-25 rounded-xs border border-cyan-500 max-md:h-12.5 max-xl:h-15 max-xl:w-15 max-md:w-12.5"></div>
        <div className="floating_circle absolute top-[70%] right-[10%] h-35 w-35 rounded-[50%] border border-cyan-500 max-md:h-25 max-xl:h-31 max-xl:w-31 max-md:w-25"></div>

        <div className="flex w-fit flex-col items-center justify-center gap-3 delay-200">
          {/* Title */}
          <h2 className="animate__animated animate__slideInUp text-8xl max-md:text-center  font-bold text-white uppercase max-xl:text-6xl max-md:text-5xl">
            {photographyData.primary_section.title.fst_Wrd}
            <br />
            <span className="text-cyan-500">
              {photographyData.primary_section.title.snd_Wrd}
            </span>
            <br />
            {photographyData.primary_section.title.thd_Wrd}
          </h2>

          {/* Subtitle */}
          <p className="animate__animated animate__slideInUp text-2xl text-[#767373] delay-400 max-md:text-xl">
            {photographyData.primary_section.subtitle}
          </p>

          {/* Description */}
          <p className="animate__animated animate__slideInUp text-center text-xl text-[#767373] delay-600 max-md:text-lg">
            {photographyData.primary_section.description}
          </p>

          {/* Buttons */}
          <div className="animate__animated animate__zoomIn flex items-center gap-2 delay-800 *:z-10 *:cursor-pointer">
            <button className="rounded-md border border-cyan-500 px-6 py-3 text-cyan-500 hover:bg-cyan-500 hover:text-white max-md:px-3 max-md:py-1.5">
              {photographyData.primary_section.buttons.primary}
            </button>
            <button className="rounded-md border border-cyan-500 px-6 py-3 text-cyan-500 hover:bg-cyan-500 hover:text-white max-md:px-3 max-md:py-1.5">
              {photographyData.primary_section.buttons.secondary}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header_Section;
