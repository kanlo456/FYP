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

const TicketForm = ({ values, touched, errors, handleBlur, handleChange }) => {
  const theme = useTheme();
  return (
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
            name="ticketNumber"
          />
        </Grid>
        <Grid xs={2}>
          <TextField
            fullWidth
            type="text"
            color="info"
            label="Caller"
            name="caller"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.caller}
          />
        </Grid>{" "}
        <Grid xs={2}>
          <FormControl fullWidth>
            <InputLabel id="Category" color="info">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              color="info"
              value={values.category}
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
            <InputLabel id="service" color="info">
              Service
            </InputLabel>
            <Select
              value={values.service}
              placeholder="Contact type"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              color="info"
              // value={age}
              name="service"
              label="service"
            >
              <MenuItem value="onsite">Onsite</MenuItem>
              <MenuItem value="remote">Remote</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={2}>
          <TextField
            fullWidth
            type="text"
            color="info"
            label="Sub-Category"
            value={values.subcategory}
            name="subcategory"
          />
        </Grid>
        <Grid xs={2}>
          <TextField
            fullWidth
            type="text"
            color="info"
            label="Config Item"
            value={values.configItem}
            name="configItem"
          />
        </Grid>
        <Grid xs={2}>
          <TextField
            fullWidth
            type="text"
            color="info"
            label="Offering"
            value={values.offering}
            name="offering"
          />
        </Grid>
        <Grid xs={2}>
          <FormControl fullWidth>
            <InputLabel id="contactType" color="info">
              Contact Type
            </InputLabel>
            <Select
              color="info"
              // value={age}
              label="Contact Type"
              value={values.contactType}
              name="contactType"
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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              color="info"
              // value={age}
              label="State"
              value={values.state}
              name={values.state}
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
              id="impact"
              color="info"
              label="Impact"
              value={values.impact}
              name="impact"
            >
              <MenuItem value="low">low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
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
              id="priority"
              color="info"
              label="Priority"
              value={values.priority}
              name="priority"
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={2}>
          <FormControl fullWidth>
            <InputLabel id="assignmentGroup" color="info">
              Assignment Group
            </InputLabel>
            <Select
              id="assignmentGroup"
              color="info"
              label="Assignment Group"
              value={values.assignmentGroup}
              name="assignmentGroup"
            >
              <MenuItem value="hardware">Hardware</MenuItem>
              <MenuItem value="network">Network</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={2}>
          <TextField fullWidth type="text" color="info" label="Assigned To" />
        </Grid>
        <Grid xs={4}>
          <TextField
            fullWidth
            type="text"
            color="info"
            label="Short Description"
            value={values.shortDescription}
            name="shortDescription"
          />
        </Grid>
        <Grid xs={4}>
          <TextField
            fullWidth
            multiline
            type="text"
            color="info"
            label="Description"
            sx={{ height: "50%" }}
            inputProps={{
              style: {
                height: "20vh",
              },
            }}
            value={values.description}
            name="description"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TicketForm;
