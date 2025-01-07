
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const EditButton = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  fontSize: "0.875rem",
  fontWeight: 500,
  textAlign: "center",
  display: "inline-block",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));