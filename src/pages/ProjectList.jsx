import React, { useState, useEffect } from "react";
import { fetchProjects } from "../services/api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { EditButton } from "../components/EditButton";
import { customStyles } from "../utility/tableCustomStyles";

// Custom styles
const useStyles = makeStyles(customStyles);

const ProjectList = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <div className="p-4 mt-32">
      <Typography variant="h4" gutterBottom>
        Project List
      </Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadCell}>
                Project ID
              </TableCell>
              <TableCell className={classes.tableHeadCell}>
                Project Name
              </TableCell>
              <TableCell className={classes.tableHeadCell}>
                Start Date
              </TableCell>
              <TableCell className={classes.tableHeadCell}>End Date</TableCell>
              <TableCell className={classes.tableHeadCell}>
                Project Manager
              </TableCell>
              <TableCell className={classes.tableHeadCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} className={classes.tableRow}>
                <TableCell className={classes.tableCell}>
                  {project.id}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {project.name}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {project.startDate}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {project.endDate}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {project.manager}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <EditButton to={`/projects/${project.id}`}>Edit</EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProjectList;
