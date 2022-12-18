import Head from "next/head";
import Image from "next/image";
import siteMetadata from "../data/siteMetadata";
import Link from "next/link";
import { getAllFilesFrontMatter } from "../lib/mdx";
import formatDate from "../lib/utils/formatDate";
import ViewCounter from "./components/ViewCounter";
import Tag from "./components/Tag";

const MAX_DISPLAY = 5;
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="mb-12 flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-10">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am{" "}
              <span className="text-primary-color-600 dark:text-primary-color-dark-500">
                Danh Tran
              </span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              {siteMetadata.welcomeText} <br /> <br />
              {siteMetadata.selfIntroduction} <br />
              {siteMetadata.freeTimeIntroduction} <br />
              {siteMetadata.blogIntroduction} <br />
              <br />
              {siteMetadata.happyCoding}
            </h2>
          </div>
        </div>
        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest Posts
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
      </div>
    </>
  );
}
