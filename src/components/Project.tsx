import type { IProject } from "@interfaces/Project.interface";
import { useState } from "react";

export default function Project({ project }: { project: IProject }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="flex flex-col gap-4" onClick={toggleVisibility}>
      <div className="flex cursor-pointer items-center justify-between border-b border-b-black py-2">
        <h2>{project.name}</h2>
        <span>{visible ? "-" : "+"}</span>
      </div>
      <div
        className={`flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out md:flex-row md:gap-16 ${visible ? "max-h-screen" : "max-h-0"}`}
        style={{
          transitionProperty: "max-height",
        }}
      >
        <div className="h-64 w-full md:w-64">
          <img
            alt=""
            className="h-full w-full object-cover"
            src={project.image}
          />
        </div>
        <div className="flex max-w-prose flex-col justify-between">
          <p>{project.description}</p>
          <div className="mt-4 flex items-center justify-between md:mt-0">
            <div className="flex gap-2">
              <p className="font-semibold">Year:</p>
              <p>{project.year}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Category:</p>
              <p>{project.category}</p>
            </div>
            <a
              className="m-0 underline"
              href={project.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {project.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
