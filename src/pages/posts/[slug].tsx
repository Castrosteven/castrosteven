import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect } from "react";
import fs from "fs";
import fm from "front-matter";
import { Post as PostInterface } from "../posts";
import { ParsedUrlQuery } from "querystring";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Button } from "../../components/UI";
import ComponentDisplayer from "../../components/ComponentDisplayer";
import hls from "../../services";
export const Post = ({ mdxSource }: { mdxSource: any }) => {
  useEffect(() => {
    hls.highlightAll();
  }, []);
  return (
    <div className="pt-40 h-full">
      <div className="p-4 container h-full prose prose-p:text-white prose-h1:text-white mx-auto">
        <MDXRemote {...mdxSource} components={{ Button, ComponentDisplayer }} />
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const allPosts = fs.readdirSync("./src/posts/");
  const paths = allPosts.map((post) => {
    const file = fs.readFileSync(`./src/posts/${post}`, "utf-8");
    return {
      params: { slug: fm<PostInterface>(file).attributes.slug },
    };
  });
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const markdownWithMeta = fs.readFileSync(
    path.join("./src/posts", slug + ".mdx"),
    "utf-8"
  );
  const { attributes, body } = fm(markdownWithMeta);
  const mdxSource = await serialize(body);
  console.log(slug);
  return {
    // Passed to the page component as props
    props: { attributes, slug, mdxSource },
  };
};

export default Post;
