import React, { Fragment } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Card, CardContent, Typography, Box } from "@mui/material";

const OverViewPage = () => {
  return (
    <Fragment>
      <Box m="1.5rem 2.5rem">
        <Grid container spacing={{ md: 5 }} columns={{ xs: 4, md: 10 }}>
          <Grid xs={2}>
            <Card>
              <CardContent>
                <Typography>On Create: 5</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card>
              <CardContent>
                <Typography>Hoding: 3</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card>
              <CardContent>
                <Typography>Progress: 10</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card>
              <CardContent>
                <Typography>Solved: 2</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card>
              <CardContent>
                <Typography>Cancel: 1</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default OverViewPage;
