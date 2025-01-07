import axios from "axios";

const API_URL = "http://localhost:3001/projects";

export const fetchProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateProject = async (id, updatedProject) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedProject);
  return response.data;
};
