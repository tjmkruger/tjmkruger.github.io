import intro from "./intro.html";
import resp from "./resp.html";
import experience from "./experience.html";

import { ContentType } from "data/posts/PostType";

export const PaceServices = {
  slug: "pace-services",
  featured: true,
  title: "PaCE Services",
  date: "2014-02-11T00:00:00.000Z",
  intro,
  card: {
    content:
      "While I'm ending my time at Pace Services, I am thankful for the opportunity and happy to have made friends for life.",
    image: {
      file: "Blog/Costing.jpg",
      alt: "Terence at Pace Service's dress up year end function with the development team",
    },
  },
  content: [
    { type: ContentType.image, content: {
    file: "Blog/pace-collage.jpg",
    caption: "From work colleagues to friends for life.",
    alt: "Collage showing Terence enjoying end year functions, birthdays and weddings with friends from Pace Services",
  } },
    { type: ContentType.html, content: resp },
    { type: ContentType.html, content: experience },
  ],
  organisation: "PaCE Services",
  categories: ["software"],
};
