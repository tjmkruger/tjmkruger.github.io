import parseHtml from "html-react-parser";

import { Html, YouTube, Image } from "components/posts/renderers";
import * as postsModule from "../../data/posts";
import { format } from "../../format";
import { Post as PostType, ContentType } from "../../data/posts/PostType";

const posts = Object.entries(postsModule).map(([_, post]) => post);

export default function Post({ post }: { post: PostType }) {
  return (
    <div className="post">
      <section>
        <div className="container flex justify-center">
          <article className="flex flex-col items-center space-y-8">
            <time className="pt-20 text-xs">{format.fullDate(post.date)}</time>
            <h1 className="flex justify-center text-4xl">{post.title}</h1>
            <p className="py-8 w-2/3">{parseHtml(post.intro)}</p>
            {/* <div className="flex flex-col w-2/3 pt-8"> */}
            {post.content.map((c) => {
              switch (c.type) {
                case ContentType.html:
                  return (
                    <div className="w-2/3">
                      <Html content={c.content} />
                    </div>
                  );
                case ContentType.youtube:
                  return (
                    <div className="w-10/12">
                      <YouTube {...c.content} />
                    </div>
                  );
                case ContentType.image:
                  return (
                    <div className="max-w-7xl">
                      <Image {...c.content} />
                    </div>
                  );
                default:
                  return <div>Missing Renderer</div>;
              }
            })}
            {/* </div> */}
          </article>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => {
    return { params: { slug: post.slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { props: { post } };
}
