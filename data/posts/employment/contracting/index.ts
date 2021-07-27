import intro from "./intro.html";
import resp from "./resp.html";
import experience from "./experience.html";

import { ContentType } from "data/posts/PostType";

export const Contracting = {
  slug: "contracting",
  featured: true,
  title: "Contracting",
  date: "2009-01-06T00:00:00.000Z",
  intro,
  card: {
    content: "What an experience. Thank you for the years of great moments.",
    image: {
      file: "Blog/True_Cost.jpg",
        alt: "Adding up the costs showind an incorrect sum 1 + 1 = 3.",
      }
  },
  content: [
    { type: ContentType.image, content: {
      file: "Blog/IMG_7854.jpg",
        alt: "Terence attending a conference with a work colleague",
      }
    },
    { type: ContentType.html, content: resp },
    { type: ContentType.html, content: experience },
  ],
  organisation: "PaCE Services",
  categories: ["Software"],
};
