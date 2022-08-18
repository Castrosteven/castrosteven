import type { NextPage } from "next";
import Script from "next/script";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { SKills } from "../components/Skills";
import Face from "./face.jpeg";
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="h-full">
      <div className="container">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-144162982-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'UA-144162982-1');`}
        </Script>
      </div>
      <Head>
        <title>Castrosteven</title>
        <meta name="description" content="Castro Steven Web Developer" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <main className="p-3 container mx-auto  flex flex-col items-center gap-5 pt-40 ">
        <div>
          <Image
            src={Face}
            height={250}
            width={250}
            className="rounded-full"
            layout="intrinsic"
            alt="Steven Castro"
          />
        </div>
        <div>
          <p className="text-6xl">Steven D Castro</p>
          <p className=" uppercase font-thin text-3xl  text-white ">
            Full Stack Web Developer
          </p>
        </div>
        <div className="">
          <p className=" font-medium text-2xl text-center">
            I write software that solves real business problems.
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              router.push("/posts");
            }}
            className="block bg-yellow-500 w-40 mt-2 text-black font-bold p-2 rounded-md hover:bg-yellow-600 hover:text-white"
          >
            Read My Blog
          </button>
        </div>
        <SKills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
