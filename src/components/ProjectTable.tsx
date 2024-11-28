import omni from "@assets/omni.png";
import Project from "@components/Project.tsx";
import type { IProject } from "@interfaces/Project.interface";

const projects: IProject[] = [
  {
    category: "Lawn care",
    description:
      "Omni Lawns was an opportunity for me to kick start SoFlo Web Design. At the time, I had been looking for a lawn care service provider after going through several other companies. My sign came in the form of a flyer on my front door, to which I then reached out to the owner (Tiago), set some time for an initial meeting, and eventually proposed the idea of developing a website for his business.",
    image: omni.src,
    name: "Omni Lawns",
    url: "https://omnilawn.vercel.app/",
    year: 2024,
  },
];

export default function ProjectTable() {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}
