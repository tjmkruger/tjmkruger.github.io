import Head from "next/head";
import { Image, Transformation } from "cloudinary-react";
import { sortBy, reverse } from "lodash";

import { PostCard } from "components/posts/PostCard";
import { Masonry } from "components/Masonry";
import * as posts from "../data/posts";

export default function Home() {
  const featuredPosts = Object.entries(posts)
    .map(([_, p]) => p)
    .filter((p) => p.featured);

  const orderedPosts = reverse(
    sortBy(featuredPosts, (p) => new Date(p.date).getTime())
  );

  return (
    <div className=" min-h-screen">
      <Head>
        <title>Terence Kruger</title>
      </Head>
      <section>
        <div className="container flex flex-col items-center">
          <Image
            publicId="Blog/profile.jpg"
            className="rounded-full m-36"
            style={{ width: 350 }}
          >
            <Transformation quality="80" />
            <Transformation crop="scale" width="450" height="450" />
          </Image>
          <h1 className="text-center max-w-4xl mb-10">
            Hi there! I’m a software developer who has been active in the
            industry for over twenty years.
          </h1>
        </div>
      </section>
      <section>
        {/* <div className="container grid grid-cols-5 gap-6 py-32"> */}
        <div className="container py-32">
          <div className="masonry">
            {orderedPosts.map((p) => (
              <div
                key={p.slug}
                className="masonry-item p-2"
                style={{ width: 300 }}
              >
                {PostCard(p)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Masonry />
    </div>
  );
}
