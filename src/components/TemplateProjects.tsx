"use client";
import Image from "next/image";
type TemplateProjectsProps = {
  img: string;
  name: string;
  topics?: string[];
  
};

const TemplateProjects = ({ img, name, topics = [] }: TemplateProjectsProps) => {
  return (
    <article className="max-w-sm  bg-gray-600/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all my-5 mx-auto">
      <div className="relative">
       
        <Image
          src={img}
          alt="Product"
          className="md:w-full  pt-2 bg-white object-cover"
          width={300}
          height={200}
        />
      </div>

      <main className="p-5 space-y-4">
        <header>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-gray-500 mt-1">{topics.join(", ")}</p>
        </header>

        <button
          className="w-full bg-purpleSymply/40 hover:bg-purpleSymply/30 text-white font-medium py-3 rounded-lg transition-colors"
          onClick={() => window.open("https://github.com/txuli/durangaldekobizikletaeskola.com")}
        >
          View repo
        </button>
      </main>
    </article>
  );
};

export default TemplateProjects;
