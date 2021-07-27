import intro from "./intro.html";
import resp from "./resp.html";
import experience from "./experience.html";

import { ContentType } from "data/posts/PostType";

export const Driven = {
  slug: "driven-alliance",
  featured: true,
  title: "Driven Alliance",
  date: "2016-08-04T00:00:00.000Z",
  card: {
    content:
      "Leaving Driven was hard, I got to work with some of the best developers and if it wasn't for immigrating I would still be with them",
    image: {
      file: "Blog/DrivenSoftwareLogo.png",
        alt: "Launching a weather balloon with the driven team",
      }
  },
  intro,
  content: [
    { type: ContentType.image, content: {
        file: "Blog/IMG_7882.jpg",
        alt: "Launching a weather balloon with the driven team",
      }
    },
    { type: ContentType.html, content: resp },
    { type: ContentType.html, content: experience },
  ],
  organisation: "Driven Alliance",
  categories: ["Software"],
};
