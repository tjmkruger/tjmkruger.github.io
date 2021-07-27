import { Image, Transformation } from "cloudinary-react";
import { format } from "format";
import { find } from "lodash";
import { ContentType, Content, Post } from "data/posts/PostType";

export const PostCard = (post: Post) => {
  const cardImage = post.card?.image;
  const firstImage = find(post.content, (c) => c.type === ContentType.image);
  const image = cardImage || firstImage?.content;

  return (
    <div className="bg-white hover:shadow-lg">
      <a href={`/post/${post.slug}`}>
        {image ? (
          <Image publicId={image.file} className="w-full" alt={image.alt}>
            <Transformation quality="80" />
            <Transformation crop="limit" width="450" />
          </Image>
        ) : (
          <div>Missing Image</div>
        )}
      </a>
      <div className="flex flex-col space-y-4 p-3 pt-8 items-center relative">
        <div
          className="absolute top-0 left-1/2 -mx-8 -mt-8 bg-black rounded-full p-4 text-white leading-4 text-sm flex text-center font-bold"
          style={{ width: "65px" }}
        >
          {format.monthDate(post.date)}
        </div>
        <div className="text-xl font-bold text-center">
          <a
            className="text-gray-900 hover:text-gray-400 border-gray-900 hover:border-gray-400"
            href={`/post/${post.slug}`}
          >
            {post.card && post.card.title ? post.card.title : post.title}
          </a>
        </div>
        {/* <div className=" opacity-60">{format.fullDate(post.date)}</div> */}
        {post.card && post.card.content && (
          <div className="text-center">{post.card.content}</div>
        )}
      </div>
    </div>
  );
};
