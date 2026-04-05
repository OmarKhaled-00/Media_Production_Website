import { footerData } from "../../data/footer_data/footer_data";
import ContactInfo from "../ContactInfo/ContactInfo";
import SocialCard from "../Socials/Socials";

function Footer() {
  return (
    <footer>
      <div className="section flex flex-col items-center justify-between gap-4">
        <div className="flex w-full items-center justify-between max-md:flex-col">
          <div className="ml-7 mt-5 flex flex-col gap-4 max-md:items-center">
            <span className="text-lg font-bold text-white/70 capitalize">
              {footerData.title}
            </span>
            <h3 className="text-6xl font-bold text-white capitalize max-md:text-center max-md:text-2xl">
              <span className="text-cyan-500">Omega </span>
              {footerData.subtitle.fstWrd} <br /> {footerData.subtitle.sndWrd}
            </h3>
            <span className="relative w-[50%] text-lg font-bold text-white/70 capitalize before:absolute before:top-25 before:left-10 before:h-1 before:w-50 before:rounded-lg before:bg-cyan-500 before:content-[''] max-md:text-center max-md:before:top-60 max-md:before:left-0">
              {footerData.describation}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <ContactInfo />
            <SocialCard />
          </div>
        </div>
        <p className="mb-20 font-bold text-cyan-500 capitalize max-md:text-center">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
