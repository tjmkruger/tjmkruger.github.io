import intro from "./intro.html";
import info from "./info.html";

import { ContentType } from "data/posts/PostType";

export const DevUGBeginnings = {
  slug: "devug-beginnings",
  featured: true,
  title: "DevUG Beginnnings",
  date: "2011-01-12T00:00:00.000Z",
  card: {
    content:
      "Coming out of the languages user group I helped found developer user group, aimed at bringing all developers together to learn from each other.",
  },
  intro,
  content: [
    {
      type: ContentType.image, content: {
        file: "Blog/highres_129013192.jpg",
        alt: "Photo from th first Developer User Group meetups.",
      }
    },
    { type: ContentType.html, content: info },
  ],
  organisation: "Community",
  categories: ["Software", "Community"],
};
