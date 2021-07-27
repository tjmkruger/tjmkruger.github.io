import Head from "next/head";
import { filter, sortBy, reverse, includes, toLower } from "lodash";

import { PostCard } from "components/posts/PostCard";
import { Masonry } from "components/Masonry";
import * as posts from "../../data/posts";
import { Post } from "../../data/posts/PostType";

const categories = ["software"];

export default function Software({ category }) {
  const featuredPosts = filter(posts, (p: Post) => {
    const lowerCategories = p.categories.map((c) => toLower(c));
    return includes(lowerCategories, toLower(category));
  });

  const orderedPosts = reverse(
    sortBy(featuredPosts, (p: Post) => new Date(p.date).getTime())
  );

  return (
    <div className=" min-h-screen">
      <Head>
        <title>Software | Terence Kruger</title>
      </Head>
      <section>
        <div className="container flex flex-col items-center">
          <h1 className="text-center max-w-4xl my-10 pt-10">
            What I've been up to in Software
          </h1>
        </div>
      </section>
      <section>
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

export async function getStaticPaths() {
  const paths = categories.map((cat) => {
    return { params: { category: cat } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = categories.find((cat) => cat === params.category);
  return { props: { category } };
}
