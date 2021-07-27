import intro from "./intro.html";
import resp from "./resp.html";
import experience from "./experience.html";

import { ContentType } from "data/posts/PostType";

export const IBNRSystems = {
  slug: "ibnr-systems",
  featured: true,
  title: "IBNR Systems",
  date: "2008-09-16T00:00:00.000Z",
  intro,
  card: {
    content: "What an experience. Thank you for the years of great moments.",
  },
  content: [
    {
      type: ContentType.image, content: {
        file: "Blog/IMAG0053.jpg",
        alt: "Terence attending a conference with a work colleague",
      }
    },
    { type: ContentType.html, content: resp },
    { type: ContentType.html, content: experience },
  ],
  organisation: "PaCE Services",
  categories: ["Software"],
};
