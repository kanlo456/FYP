import React from "react";
import {
  Box,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";

const TicketForm = ({ values, touched, errors, handleBlur, handleChange }) => {
  const theme = useTheme();
  return (
    <Box>
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
            label="Caller*"
            name="caller"
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.caller && !!errors.caller}
            value={values.caller || ""}
            helperText={touched.caller && errors.caller}
          />
        </Grid>{" "}
        <Grid xs={2}>
          <FormControl fullWidth>
            <InputLabel id="Category" color="info">
              Category*
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              color="info"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category || ""}
              label="Category*"
              name="category"
              error={!!touched.category && !!errors.category}
              helperText={touched.caller && errors.caller}
            >
              <MenuItem value="">----Please select----</MenuItem>
              <MenuItem value="hardware">Hardware</MenuItem>
              <MenuItem value="software">Software</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={2}>
          <FormControl fullWidth>
            <InputLabel id="service" color="info">
              Service*
            </InputLabel>
            <Select
              placeholder="Contact type"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              color="info"
              // value={age}
              value={values.service || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              name="service"
              label="service"
              error={!!touched.service && !!errors.service}
              helperText={touched.service && errors.service}
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
            value={values.subcategory || ""}
            onChange={handleChange}
            error={!!touched.subcategory && !!errors.subcategory}
            name="subcategory"
            helperText={touched.subcategory && errors.subcategory}
          />
        </Grid>
        <Grid xs={2}>
          <TextField
            fullWidth
            type="text"
            color="info"
            label="Config Item"
            value={values.configItem || ""}
            onChange={handleChange}
            name="configItem"
            error={!!touched.configItem && !!errors.configItem}
            helperText={touched.configItem && errors.configItem}
          />
        </Grid>
        <Grid xs={2}>
          <TextField
            fullWidth
            type="text"
            color="info"
            label="Offering"
            value={values.offering || ""}
            error={!!touched.offering && !!errors.offering}
            name="offering"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.offering && errors.offering}
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
              value={values.contactType || ""}
              name="contactType"
              onChange={handleChange}
              error={!!touched.contactType && !!errors.contactType}
              helperText={touched.contactType && errors.contactType}
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
              onChange={handleChange}
              error={!!touched.state && !!errors.state}
              value={values.state || ""}
              name="state"
              helperText={touched.state && errors.state}
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
              value={values.impact || ""}
              onChange={handleChange}
              error={!!touched.impact && !!errors.impact}
              name="impact"
            >
              <MenuItem value="1">low</MenuItem>
              <MenuItem value="2">Medium</MenuItem>
              <MenuItem value="3">High</MenuItem>
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
              value={values.priority || ""}
              name="priority"
              onChange={handleChange}
              error={!!touched.priority && !!errors.priority}
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
              value={values.assignmentGroup || ""}
              onChange={handleChange}
              name="assignmentGroup"
              error={!!touched.assignmentGroup && !!errors.assignmentGroup}
            >
              <MenuItem value="hardware">Hardware</MenuItem>
              <MenuItem value="network">Network</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={2}>
          <TextField
            fullWidth
            type="text"
            color="info"
            name="assignedTo"
            label="Assigned To"
            value={values.assignedTo || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.assignedTo && !!touched.assignedTo}
          />
        </Grid>
        <Grid xs={4}>
          <TextField
            fullWidth
            type="text"
            color="info"
            label="Short Description"
            value={values.shortDescription || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            name="shortDescription"
            error={!!touched.shortDescription && errors.shortDescription}
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
            value={values.description || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!touched.description && !!errors.description}
            name="description"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TicketForm;
