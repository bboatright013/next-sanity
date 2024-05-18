import Image from "next/image";
import Link from "next/link"
import { getProjects } from '../../sanity/sanity-utils';



export default async function Home() {

  const projects = await getProjects();

  return (
    <div className="">

      <h1 className="text-5xl font-bold">
        Hello, I&apos;m <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Brandon!</span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Hola mis amigos! Mira mi proyectos! 
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        Projects:
      </h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition" >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="p-2 m-2">
              <span className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </span>
            </div>

          </Link>
        ))}
      </div>
    </div>

  );
}
