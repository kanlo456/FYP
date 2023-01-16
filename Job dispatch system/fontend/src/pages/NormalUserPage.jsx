import Sidebar from "../components/Layout/Sidebar";
import TicketBoard from "../components/TicketBoard/TiceketBoard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const NormalUserPage = () => {
  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <Grid container spacing={3}>
        <Grid xs="auto">
          <Sidebar />
        </Grid>
        <Grid xs="auto">Dash board</Grid>
      </Grid>
    </Box>
  );
};

export default NormalUserPage;
