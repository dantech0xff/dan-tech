import Head from "next/head";
import Image from "next/image";
import siteMetadata from "../data/siteMetadata";
import Link from "next/link";
import { getAllFilesFrontMatter } from "../lib/mdx";
import formatDate from "../lib/utils/formatDate";
import ViewCounter from "../components/ViewCounter";
import Tag from "../components/Tag";
import { PageSEO } from "../lib/SEO";

const MAX_DISPLAY = 5;
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
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
        <ul>
          {posts.length == 0 && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter;
            return (
              <li key={slug} className="py-6">
                <div className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
                  <article>
                    <a href={`/blog/${slug}`}>
                      <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-300 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>{formatDate(date)}</time>
                            {/* {" • "} */}
                            <ViewCounter className="mx-1" slug={slug} />
                          </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-4">
                          <div className="space-y-1">
                            <div>
                              <a
                                href={`/blog/${slug}`}
                                className="text-2xl font-bold leading-8 tracking-tight text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                              >
                                {title}
                              </a>
                            </div>
                            <div className="prose max-w-none pt-0 text-gray-500 dark:text-gray-400">
                              {summary}
                            </div>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > 0 && (
        <div className="flex justify-end pt-5 text-lg font-normal leading-6">
          <Link
            href="/blog"
            className="special-underline-new text-primary-500 hover:text-gray-100 hover:no-underline dark:text-primary-500 hover:dark:text-gray-100"
            aria-label="all posts"
          >
            All Posts
          </Link>
        </div>
      )}
    </>
  );
}
