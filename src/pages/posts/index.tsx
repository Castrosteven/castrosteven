import type { GetStaticProps, NextPage } from "next";
import fm from "front-matter";
import fs from "fs";
import Link from "next/link";
export interface Post {
  title: string;
  seoTitle: string;
  abstract: string;
  slug: string;
  isPublished: boolean;
  publishedOn: string;
  layout: string;
}

const Home: NextPage<{
  posts: Post[];
}> = ({ posts }) => {
  return (
    <div className="pt-40 h-screen">
      <div className="p-4 container prose mx-auto flex flex-col gap-4">
        {posts.map((post, index) => {
          return (
            <Link key={index} href={`posts/${post.slug}`}>
              <div className="bg-gray-200 rounded-md p-2 cursor-pointer">
                <div className="text-2xl font-semibold">{post.title}</div>
                <div>{post.abstract}</div>
                <div className="flex justify-end">
                  <p>{new Date(post.publishedOn).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = fs.readdirSync("./src/posts/");
  const postData = allPosts.map((post) => {
    const file = fs.readFileSync(`./src/posts/${post}`, "utf-8");
    return fm(file).attributes;
  });
  // console.log(postData);
  return {
    props: {
      posts: postData,
    },
  };
};
