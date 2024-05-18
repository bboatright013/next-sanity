
import Image from 'next/image'
import { getProject } from '../../../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
type Props = {
  params: { project: string }
};


export default async function Project({params}: Props) {

  const slug = params.project;
  const project = await getProject(slug);


  return (
    <div className="">
      <header className="flex items-center justify-between">
        <h1 className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-6xl font-extrabold drop-shadow">{project.name}</h1>

        <a href={project.url ? project.url : ''} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
          View Project
        </a>
      </header>

    {/* content goes here */}
      <div className="text-lg text-gray-300 mt-5">
        <PortableText value={project.content} />
      </div>

    {/* image goes here */}
    {project.image && (
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-500 object-cover rounded-xl"
      />
    )}
    </div>
  )
}