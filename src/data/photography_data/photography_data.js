import { ICONS } from "../../Constants/icons/Icons";

export const photographyData = {
  primary_section: {
    title: {
      fst_Wrd: "we create",
      snd_Wrd: "cinematic",
      thd_Wrd: "experience",
    },
    subtitle: "High-End Media Production Services",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, eaque! Lorem ipsum dolor. ",
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
        icon: ICONS.camera,
        title: "Drone Photography",
      },
      {
        id: 2,
        icon: ICONS.crop,
        title: "Photo Editing",
      },
      {
        id: 3,
        icon: ICONS.print,
        title: "Printing & Albums",
      },
      {
        id: 4,
        icon: ICONS.place,
        title: "Studio Rental / Setup",
      },
    ],
  },

  studio_section: {
    title: "Our Studio Gallery",
    photos: [
      {
        id: 1,
        img_path: "./photography1.jpg",
      },
      {
        id: 2,
        img_path: "./photography2.jpg",
      },
      {
        id: 3,
        img_path: "./photography3.jpg",
      },
      {
        id: 4,
        img_path: "./photography4.jpg",
      },
      {
        id: 5,
        img_path: "./photography5.jpg",
      },
      {
        id: 6,
        img_path: "./photography6.jpg",
      },
      {
        id: 7,
        img_path: "./photography7.jpg",
      },
    ],
  },
};
