import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { MDXComponents } from "mdx/types";
import { MDXProvider } from "@mdx-js/react";
import { Paragraph } from "../components/UI";
import CodeBlock from "../components/CodeBlock";

function MyApp({ Component, pageProps }: AppProps) {
  const components: MDXComponents = {
    p: Paragraph,
    pre: CodeBlock,
  };
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;
