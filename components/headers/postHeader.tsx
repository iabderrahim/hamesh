import Link from "next/link";
import React from "react";
import ContentTable from "../post/contentTable";

interface IArticle {
  slug: string;
  title: string;
  content: string;
  markdown: string;
  isDraft: boolean;
  description: string;
  coverUrl: string;
  tags: [string];
  likes: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
function PostHeader({ art }: { art: IArticle }) {
  return (
    <header className="flex w-full justify-start items-start flex-col mb-6">
      <h1 className="font-bold text-3xl text-black dark:text-white">
        {art.title}
      </h1>
      <div className="flex mt-5 mb-10 items-start text-gray-500 dark:text-gray-400">
        <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
          {art.tags &&
            art.tags.map((t: string, i) => (
              <Link href={"/tag/" + t} key={i}>
                <p className="ml-2 rounded-full px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 leading-none text-sm">
                  {t}
                </p>
              </Link>
            ))}
        </div>
        <div className="ml-2 mb-4 md:ml-0">
          <span>{art.createdAt}</span>
        </div>
      </div>
      <ContentTable />
    </header>
  );
}

export default PostHeader;
