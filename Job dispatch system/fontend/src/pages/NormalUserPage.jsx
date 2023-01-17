// import Sidebar from "../components/Layout/Sidebar";
// import TicketBoard from "../components/TicketBoard/TiceketBoard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import MiniDrawer from "../components/Layout/MuiSidebar";

const NormalUserPage = () => {
  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <Grid container spacing={3}>
        <Grid xs="auto">
          <MiniDrawer />
        </Grid>
        <Grid xs="auto" sx={{mt:10}}>Dashboard</Grid>
      </Grid>
      
    </Box>
  );
};

export default NormalUserPage;
