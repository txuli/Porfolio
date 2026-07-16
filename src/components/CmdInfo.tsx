"use client";

import InfoDiv from "./InfoDiv";
import Link from "next/link";
import Image from "next/image";
function CmdInfo() {
  const sapo = () => {
    alert("Are you sure you want to leave this page?");
    window.location.href =
      "https://i0.wp.com/exploramag.com/wp-content/uploads/2023/03/sapo-1.jpg?resize=1360%2C907&ssl=1";
  };

  return (
    <div className="flex justify-center lg:w-full w-96 mx-auto">
      <div className="border-2 border-neutral-600 bg-black rounded-md mt-2 p-3 w-full max-w-4xl">
        {/* Barra superior */}
        <div className="w-full h-7 flex items-center px-2">
          <div className="flex space-x-1">
            <div
              className="h-3 w-3 rounded-full bg-red-700 hover:animate-breathing"
              onClick={sapo}
            ></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500 hover:animate-breathing"></div>
            <div className="h-3 w-3 rounded-full bg-green-700 hover:animate-breathing"></div>
          </div>
          <div className="text-sm mx-auto">root@txuli: /portfolio/txuli</div>
        </div>

        {/* Consola principal */}
        <div className="p-2">
          <div className="text-green-500">root@txuli: /portfolio/txuli$ cat /about</div>
          <section className="ibm-plex-mono-regular my-3">
            <InfoDiv Text="username" Text2="Txuli" />
            <article className="flex flex-col sm:flex-row sm:items-center pl-2 mt-3">
              <div className="text-gray-600">bio:</div>
              <div className="sm:ml-2 w-3/">
                I have been programming since August 2023, and I am passionate about photography.
                If I&apos;m not cycling or capturing the world with my camera, I&apos;m writing
                code.
              </div>
            </article>
            <article className="mt-3">
              <InfoDiv Text="Hobbies:" Text2="Photography" />
            </article>
            <article className="flex flex-col sm:flex-row sm:items-center pl-2 mt-3">
              <div className="text-gray-600">Tech stack:</div>
              <div className="sm:ml-2 w-3/4">
                In 2024 I started learning React.js and TailwindCSS. During my Erasmus in Prague,
                I learned Next.js. Also, during my project{" "}
                <Link href="/projects" className="text-purpleSymply underline">
                  DurangaldekoBZK Page
                </Link>
                , I started using APIs with TypeScript.
              </div>
            </article>

            {/* Tech Stack Icons */}
            <div className="flex justify-center gap-4 my-4">
              <Image src="/media/next.svg" alt="nextjs icon" className="h-10 sm:h-12" width={50} height={50} />
              <Image src="/media/ts.svg" alt="typescript icon" className="h-10 sm:h-12" width={50} height={50} />
              <Image src="/media/js.svg" alt="javascript icon" className="h-10 sm:h-12" width={50} height={50} />
              <Image src="/media/tailwind.svg" alt="tailwindCSS icon" className="h-10 sm:h-12" width={50} height={50} />
            </div>

            <InfoDiv Text="Developer Since" Text2="August 2023" />
          </section>
        </div>

        {/* Entrada de Comandos */}
        <div className="flex items-center p-2 border-t border-neutral-600">
          <span className="text-green-500">root@txuli: /portfolio/txuli$</span>
        </div>
      </div>
    </div>
  );
}

export default CmdInfo;
