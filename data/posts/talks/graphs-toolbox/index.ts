import intro from "./intro.html";
import info from "./info.html";

import { ContentType } from "data/posts/PostType";

export const TalkGraphsToolbox = {
  slug: "adding-graphs-to-your-toolbox-devconf",
  featured: true,
  title: "Adding Graphs to your Toolbox - Devconf",
  date: "2018-05-20T00:00:00.000Z",
  card: {
    content:
      "First time speaking as an international speaker. Was so tired from traveling but enjoyed some of the responses. I definetly have a new respect for speakers that travel ...",
    image: {
      file: "Blog/Screen_Shot_2021-07-24_at_8.23.29_pm.png",
      alt: "Terence on stage during his talk",
    }
  },
  intro,
  content: [
    { type: ContentType.youtube, content: { videoId: "XH7qYtZNt4U" } },
    { type: ContentType.html, content: info },
  ],
  organisation: "",
  categories: ["Software", "Talk"],
};
