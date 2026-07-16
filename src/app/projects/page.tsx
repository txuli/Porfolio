import Effect from "@/components/Effect";
import TemplateProjects from "@/components/TemplateProjects";
import { headers } from "next/headers";

export default async function Projects() {
  const repos = await fetch('https://api.github.com/users/txuli/repos', {
    headers: {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2026-03-10'
    }
  });
  const response = await repos.json();
  const repoMap = Array.isArray(response) ? response : [];
 
  return (
    <div>
      <Effect
        text="Projects"
        mLeftInicial={"-200"}
        transitionTime={2}
        tickCambioLetra={200}
        randCar={null}
        fontSize={30}
        marginLeftDiv={30}
      />

      <section className="px-20  w-full justify-center grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-auto relative">
        {repoMap.map((repo, index )=>(
          <TemplateProjects key={index} img={'https://opengraph.githubassets.com/0/txuli/'+ repo.name} topics={repo.topics} name={repo.name}/> 
        ))}
        
      </section>
    </div>
  );
}
