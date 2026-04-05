import { ICONS } from "../../Constants/icons/Icons";

export const socialMediaData = {
  primary_section: {
    title: {
      fst_Wrd: "we manage",
      snd_Wrd: "your",
      thd_Wrd: "social media",
    },
    buttons: {
      primary: "Get Started",
      secondary: "Learn More",
    },
  },

  solution_section: {
    title: "Our Solution",
    cards: [
      {
        id: 1,
        icon: ICONS.linkedin,
        title: "LinkedIn",
        color: "text-blue-700",
      },
      {
        id: 2,
        icon: ICONS.facebook,
        title: "Facebook",
        color: "text-blue-600",
      },
      {
        id: 3,
        icon: ICONS.instagram,
        title: "Instagram",
        color: "text-pink-500",
      },
      {
        id: 4,
        icon: ICONS.snapchat,
        title: "Snapchat",
        color: "text-yellow-400",
      },
    ],
  },
};
