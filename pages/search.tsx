import Link from "next/link";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/headers/bar";
import Post from "../components/post/post";
import useSWR from "swr";
import { useRouter } from "next/router";
const fetcher = async (url: string | Request) => {
  const res = await fetch(url);
  return res.json();
};
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

export default function Search() {
  let { pathname, query, push } = useRouter();
  let [inpText, setInpText] = useState("");
  let {
    data: articles,
    error,
    isLoading,
  } = useSWR(
    `/api/articles?q=${inpText || ""}
    `,
    fetcher
  );
  useEffect(() => {
    if (query.q && query.q !== undefined) {
      let txt = decodeURIComponent(`${query.q}`);
      console.log(`${query.q}`);
      setInpText(txt);
    } else return;
  }, [query]);
  let HandleChange = async (e: any) => {
    let str = e.target.value;
    setInpText(str);
    push({ pathname, query: { q: encodeURI(str) } });
  };
  return (
    <div className="my-container flex h-full justify-center flex-col max-w-3xl items-center mx-auto">
      <main className="m-auto flex-grow w-full transition-all max-w-2xl px-4">
        <SearchBar HandleChange={HandleChange} inpText={inpText} />
        <div className="article-container my-8">
          {articles?.data &&
            articles.data.map((art: IArticle) => (
              <Post key={art._id} art={art} />
            ))}
        </div>
      </main>
    </div>
  );
}
