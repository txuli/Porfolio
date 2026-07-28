"use client";
import { useState } from "react";
import Image from "next/image";

const FALLBACK_IMG = "/media/github-mark-white.png";

type TemplateProjectsProps = {
  img: string;
  name: string;
  topics?: string[];
  url:string;
};

const TemplateProjects = ({ img, name,url, topics = [] }: TemplateProjectsProps) => {
  const [imgSrc, setImgSrc] = useState(img);
  const isFallback = imgSrc === FALLBACK_IMG;

  return (
    <article className="max-w-sm  bg-gray-600/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all my-5 mx-auto">
      <div className="relative">

        <Image
          src={imgSrc}
          alt="Product"
          className={`md:w-full pt-2 object-cover ${isFallback ? "bg-gray-800 p-10" : "bg-white"}`}
          width={300}
          height={200}
          onError={() => setImgSrc(FALLBACK_IMG)}
        />
      </div>

      <main className="p-5 space-y-4">
        <header>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-gray-500 mt-1">{topics.join(", ")}</p>
        </header>

        <button
          className="w-full bg-purpleSymply/40 hover:bg-purpleSymply/30 text-white font-medium py-3 rounded-lg transition-colors"
          onClick={() => window.open(url)}
        >
          View repo
        </button>
      </main>
    </article>
  );
};

export default TemplateProjects;
