import { Masonry } from "components/Masonry";
import { PostCard } from "components/posts/PostCard";

export const PostMasonry = ({ posts }) => {
  return (
    <>
      <div className="container py-10 md:py-16 lg:py-32">
        <div className="masonry">
          {posts.map((p) => (
            <div
              key={p.slug}
              className="masonry-item p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              //   style={{ width: 300 }}
            >
              {PostCard(p)}
            </div>
          ))}
        </div>
      </div>
      <Masonry />
    </>
  );
};
