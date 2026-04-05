import { videographyData } from "../../../data/videography_data/videography_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../../../Constants/icons/Icons";

function Gallery_Section() {
  return (
    <>
      <section className="relative z-20 mt-10 flex flex-col items-center gap-15">
        <h2 className="relative mt-6 text-5xl text-white before:absolute before:-bottom-7 before:left-30 max-md:before:left-23 max-md:text-4xl before:h-1 before:w-25 before:bg-cyan-500 before:content-['']">
          {videographyData.studio_section.title}
        </h2>
        <div className="grid grid-cols-3 gap-5 *:h-100 *:w-80 *:cursor-pointer *:overflow-hidden *:rounded-[20px] *:object-cover max-md:grid-cols-1">
          {/* Gallery content goes here */}
          {videographyData.studio_section.photos.map((photo) => (
            <div className="group relative">
              <img
                key={photo.id}
                src={photo.img_path}
                alt={`Studio Photo ${photo.id}`}
                className="relative transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:scale-105"
              />
              <FontAwesomeIcon
                className="absolute top-40 left-35 z-30 p-2 text-3xl text-cyan-500 transition-all duration-300 ease-in-out group-hover:text-5xl"
                key={photo.id}
                icon={ICONS.play}
              />
              {/* backdrop  */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery_Section;
