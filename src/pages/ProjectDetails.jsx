import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProjects, updateProject } from "../services/api";
import { EditButton } from "../components/EditButton";
import { Box, CircularProgress } from "@mui/material";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  console.log(project)

  useEffect(() => {
    const getProject = async () => {
      const data = await fetchProjects();
      console.log(data)
      const selectedProject = data.find((proj) => proj.id === id);
      setProject(selectedProject);
    };
    getProject();
  }, [id]);

  const handleSave = async () => {
    try {
      await updateProject(project.id, project);
      navigate("/");
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  if (!project) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4 mt-32">
        <div className="p-4">
          <h2 className="font-bold text-lg mb-4">Project ID: {project.id}</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-bold">Project Name</label>
              <input
                type="text"
                value={project.name}
                onChange={(e) => setProject({ ...project, name: e.target.value })}
                className="border px-4 py-2 w-full"
              />
            </div>
            <div>
              <label className="block font-bold">Description</label>
              <textarea
                value={project.description}
                onChange={(e) =>
                  setProject({ ...project, description: e.target.value })
                }
                className="border px-4 py-2 w-full h-24"
              />
            </div>
            <div>
              <label className="block font-bold">Start Date</label>
              <input
                type="date"
                value={project.startDate}
                onChange={(e) =>
                  setProject({ ...project, startDate: e.target.value })
                }
                className="border px-4 py-2 w-full"
              />
            </div>
            <div>
              <label className="block font-bold">End Date</label>
              <input
                type="date"
                value={project.endDate}
                onChange={(e) =>
                  setProject({ ...project, endDate: e.target.value })
                }
                className="border px-4 py-2 w-full"
              />
            </div>
            <div>
              <label className="block font-bold">Project Manager</label>
              <input
                type="text"
                value={project.manager}
                onChange={(e) =>
                  setProject({ ...project, manager: e.target.value })
                }
                className="border px-4 py-2 w-full"
              />
            </div>
            <EditButton
              onClick={handleSave}
              to="#"
            >
              Update
            </EditButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
