import intro from "./intro.html";
import resp from "./resp.html";
import experience from "./experience.html";

import { ContentType } from "data/posts/PostType";

export const Bison = {
  slug: "bison-computers",
  featured: true,
  title: "Bison Computers",
  date: "2006-01-12T00:00:00.000Z",
  card: {
    content:
      "My first job. Its been such a good experience. Thanks for giving me the opportunity to learn such a wide skillset.",
  },
  intro,
  content: [
    { type: ContentType.image, content: {
      file: "Blog/Lan-Bison.jpg",
      caption: "First Enjoying some LAN gaming with some clients, friends and family.",
      alt: "Terence sitting behind his computer at a LAN, Local Area Network get together",
    } },
    { type: ContentType.html, content: resp },
    { type: ContentType.html, content: experience },
  ],
  organisation: "Bison Computers",
  categories: ["Software"],
};
