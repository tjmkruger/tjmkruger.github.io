import intro from "./intro.html";
import resp from "./resp.html";
import experience from "./experience.html";

import { ContentType } from "data/posts/PostType";

export const EKASolutions = {
  slug: "eka-solutions",
  featured: true,
  title: "EKA Solutions",
  date: "2017-03-09T00:00:00.000Z",
  card: {
    content:
      "Sadly I knew when starting that my time would be limited as a contractor and I am going to miss all the great people. I’m sure we will continue to see each other well into the future",
  },
  intro,
  content: [
    {
      type: ContentType.image, content:  {
        file: "Blog/IMG_2857.jpg",
        alt: "Work colleagues at eka after our monthly meeting",
      }
    },
    { type: ContentType.html, content: resp },
    { type: ContentType.html, content: experience },
  ],
  organisation: "EKA Solutions",
  categories: ["Software"],
};
