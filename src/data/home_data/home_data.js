import headerVid from "../../assets/HeaderVid.mp4";
import photography from "../../assets/influencer-taking-selfies-with-highquality-dslr.jpg";
import videography from "../../assets/elegant-distorted-patterns-with-techinspired-aesthetic.jpg";
import socialMedia from "../../assets/social-media.jpg";
export const homeData = {
  hero_section: {
    title: "omega media",
    subtitle: "we draw the future",
    video_path: headerVid,
  },
  offer_section: {
    title: "what we offer",
    subtitle: "our solutions",
    description:
      "Discover our comprehensive range of professional services designed to bring your vision to life",
    cards: {
      photography: {
        id: 1,
        title: "photography",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        photo: photography,
      },

      videography: {
        id: 2,
        title: "videography",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        photo: videography,
      },
      socialmedia: {
        id: 3,
        title: "social media",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        photo: socialMedia,
      },
    },
  },
  about_section: {
    title: "omega media",
    subtitle: {
      fst_phrase:
        "is more than a post-production facility we are visual architects, digital artisans, and storytelling partners.",
      snd_phrase:
        "Our diverse team brings together decades of collective experience from film, television, advertising, digital media, and emerging platforms.",
    },
    button: "download portfolio",
  },
  howItWorks_section: {
    title: "how it works",
    subtitle: "our phiolosofy",
    description:
      "At Omega, we believe that great post- production begins with great communication.",
  },
  ourClients_section: {
    title: "our clients",
    subtitle: (count) =>
      `Trusted by ${count.toLocaleString()}+ world-class brands `,
    subtitle2: "and organizations of all sizes",
  },
};
