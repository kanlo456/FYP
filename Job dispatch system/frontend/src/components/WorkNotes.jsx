import { FormControl, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import React from "react";

const WorkNotes = ({ values, touched, errors, handleBlur, handleChange }) => {
  return (
    <Box>
      <Grid container>
        <Grid xs={12}>
          <TextField
            value={values.worknote}
            onChange={handleChange}
            name="worknote"
            fullWidth
            multiline
            color="info"
            inputProps={{
              style: {
                height: "5vh",
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkNotes;
