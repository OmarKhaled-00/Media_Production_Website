import { photographyData } from "../../../data/photography_data/photography_data";

function Gallery_Section() {
  return (
    <section className="relative z-10 mt-10 flex flex-col items-center gap-15">
      <h2 className="relative mt-6 text-5xl max-md:text-4xl max-md:before:left-23 text-white before:absolute before:-bottom-7 before:left-30 before:h-1 before:w-25 before:bg-cyan-500 before:content-['']">
        {photographyData.studio_section.title}
      </h2>
      <div className="grid grid-cols-3 gap-5 *:h-100 *:w-80 *:cursor-pointer *:overflow-hidden *:rounded-[20px] *:object-cover max-md:grid-cols-1">
        {/* Gallery content goes here */}
        {photographyData.studio_section.photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.img_path}
            alt={`Studio Photo ${photo.id}`}
            className="transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery_Section;
