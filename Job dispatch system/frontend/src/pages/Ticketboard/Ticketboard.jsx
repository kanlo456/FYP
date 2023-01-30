import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Header from "../../components/Header";
import { useTheme, Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import classes from "./Ticketboard.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// const navigate = useNavigate();

export default function Ticketboartd() {
  const [data, setData] = useState([]);

  const getTicket = async () => {
    const response = await axios.get("/api/tickets");
    if (response.status === 200) {
      setData(response.data);
      // console.log(response.data.createdAt);
      // console.log(data.data.createAt);
    }
  };

  useEffect(() => {
    getTicket();
  }, []);

  const theme = useTheme();
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      renderCell: (params) => (
        <Link
          style={{ color: theme.palette.primary[100] }}
          to={`/dashboard/editTicket/${params.value}`}
        >
          {params.value}
        </Link>
      ),
      // valueGetter: (params) => {navigate('editTicket'),
    },
    {
      field: "createdAt",
      headerName: "Create Date",
      type: "dateTime",
      width: 130,
    },
    { field: "category", headerName: "Category", width: 130 },
    { field: "subcategory", headerName: "Sub-Category", width: 130 },
    { field: "offering", headerName: "Offering", width: 130 },
    { field: "configItem", headerName: "ConfigItem", width: 130 },
    { field: "shortDescription", headerName: "Short description", width: 130 },
    {
      field: "caller",
      headerName: "Caller",
      width: 160,
    },
    { field: "state", headerName: "State", width: 160 },
    { field: "assignedTo", headerName: "Assiged to", width: 160 },

    //   {
    //     field: "fullName",
    //     headerName: "Full name",
    //     description: "This column has a value getter and is not sortable.",
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    //   },
  ];

  // const [currentPath, setCurrentPath] = useSearchParams();
  // console.log(currentPath);
  // console.log(currentPath);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Box m="1.5rem 2.5rem">
        <Header title="Ticketboard" />
        <Box>
          <Link to="../createTicket" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: theme.palette.secondary[300],
              }}
            >
              Create Ticket
            </Button>
          </Link>
        </Box>
        <Box
          mt="40px"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.primary.light,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            rows={data || []}
            columns={columns}
            pageSize={10}
            getRowId={(row) => row._id}
            rowsPerPageOptions={[5]}
            components={{ Toolbar: GridToolbar }}
            disableMultipleSelection={false}
            checkboxSelection
          />
        </Box>
      </Box>
    </div>
  );
}
