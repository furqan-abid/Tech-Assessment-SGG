export const customStyles = {
    tableContainer: {
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
    },
    tableHead: {
      backgroundColor: "#f8f8f8",
    },
    tableHeadCell: {
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
    },
    tableRow: {
      "&:nth-of-type(even)": {
        backgroundColor: "#f9f9f9",
      },
      "&:hover": {
        backgroundColor: "#f1f1f1",
      },
    },
    tableCell: {
      textAlign: "center",
      color: "#555",
      fontSize: "14px",
    },
    editButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      textTransform: "none",
      padding: "6px 12px",
      borderRadius: "4px",
      "&:hover": {
        backgroundColor: "#0056b3",
      },
    },
  }