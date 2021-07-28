import Head from "next/head";
import { Image, Transformation } from "cloudinary-react";
import { sortBy, reverse } from "lodash";

import { PostMasonry } from "components/posts/PostMasonry";
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
            className="rounded-full m-8 md:m-20 lg:m-24 xl:m-36 w-36 md:w-52 lg:w-64 xl:w-96"
            secure="true"
          >
            <Transformation
              gravity="face"
              height="3400"
              width="3400"
              crop="crop"
            />
            <Transformation radius="max" />
            <Transformation quality="80" />
            <Transformation width="650" crop="scale" />
            <Transformation fetchFormat="auto" />
          </Image>
          <h1 className="text-center max-w-4xl mb-10 mx-4">
            Hi there! I’m a software developer who has been active in the
            industry for over twenty years.
          </h1>
        </div>
      </section>
      <section>
        {/* <div className="container grid grid-cols-5 gap-6 py-32"> */}
        <PostMasonry posts={orderedPosts}></PostMasonry>
      </section>
    </div>
  );
}
