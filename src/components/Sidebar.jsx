import React, { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";

const Sidebar = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    getProjects();
  }, [projects]);

  return (
    <aside className="bg-gray-100 w-64 h-screen p-4 hidden md:block">
      <div className="mt-32">
        <h2 className="text-lg font-semibold mb-4">Favorite Projects</h2>
        <ul className="ml-6">
          {projects.map((project) => (
            <li key={project.id} className="mb-2 list-disc">
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;