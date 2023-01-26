import React from "react";
import {
  Box,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "./Header";

const TicketForm = () => {
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Edit Your Ticket" />
      <Box
        mt="40px"
        display="flex"
        backgroundColor={theme.palette.background.alt}
        sx={{ flexGrow: 1 }}
        p="1.5rem"
      >
        <Grid
          container
          rowSpacing={2}
          spacing={{ xs: 1, md: 12 }}
          columns={{ xs: 2, sm: 2, md: 4 }}
        >
          <Grid xs={2}>
            <TextField
              fullWidth
              type="text"
              color="primary"
              label="Ticket Number"
              disabled
              variant="filled"
            />
          </Grid>
          <Grid xs={2}>
            <TextField fullWidth type="text" color="info" label="Caller" />
          </Grid>{" "}
          <Grid xs={2}>
            <FormControl fullWidth>
              <InputLabel id="Category" color="info">
                Category
              </InputLabel>
              <Select
                placeholder="Contact type"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="info"
                // value={age}
                label="Configure"
              >
                <MenuItem value="hardware">Hardware</MenuItem>
                <MenuItem value="software">Software</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={2}>
            <FormControl fullWidth>
              <InputLabel id="Category" color="info">
                Service
              </InputLabel>
              <Select
                placeholder="Contact type"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="info"
                // value={age}
                label="Configure"
              >
                <MenuItem value="onsite">Onsite</MenuItem>
                <MenuItem value="remote">Remote</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={2}>
            <TextField fullWidth type="text" color="info" label="Config Item" />
          </Grid>
          <Grid xs={2}>
            <TextField
              fullWidth
              type="text"
              color="info"
              label="Sub-Category"
            />
          </Grid>
          <Grid xs={2}>
            <FormControl fullWidth>
              <InputLabel id="contactType" color="info">
                Contact Type
              </InputLabel>
              <Select
                placeholder="Contact type"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="info"
                // value={age}
                label="Configure"
              >
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="mobilePhone">Mobile phone</MenuItem>
              </Select>
            </FormControl>
          </Grid>{" "}
          <Grid xs={2}>
            <FormControl fullWidth>
              <InputLabel id="state" color="info">
                State
              </InputLabel>
              <Select
                placeholder="Contact type"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="info"
                // value={age}
                label="Configure"
              >
                <MenuItem value="onCreate">On Create</MenuItem>
                <MenuItem value="holding">Holding</MenuItem>
                <MenuItem value="progress">Progress</MenuItem>
                <MenuItem value="solved">Solved</MenuItem>
                <MenuItem value="cancel">Cancel</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={2}>
            <FormControl fullWidth>
              <InputLabel id="state" color="info">
                Impact
              </InputLabel>
              <Select
                placeholder="Contact type"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="info"
                // value={age}
                label="Configure"
              >
                <MenuItem value="low">low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={2}>
            <FormControl fullWidth>
              <InputLabel id="urgency" color="info">
                Urgency
              </InputLabel>
              <Select
                placeholder="Urgency"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="info"
                // value={age}
                label="Urgency"
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={2}>
            <FormControl fullWidth>
              <InputLabel id="priority" color="info">
                Priority
              </InputLabel>
              <Select
                placeholder="Priority"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="info"
                // value={age}
                label="Priority"
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={2}>
            <FormControl fullWidth>
              <InputLabel id="priority" color="info">
                Assignment Group
              </InputLabel>
              <Select
                placeholder="Priority"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="info"
                // value={age}
                label="Assignment Group"
              >
                <MenuItem value="hardware">Hardware</MenuItem>
                <MenuItem value="network">Network</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={4}>
            <TextField
              fullWidth
              type="text"
              color="info"
              label="Short Description"
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              fullWidth
              multiline
              type="text"
              color="info"
              label="Description"
              sx={{height:'50%'}}
              inputProps={{
                style: {
                  height: "20vh",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TicketForm;
