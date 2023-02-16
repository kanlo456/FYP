import { Box } from '@mui/system';
import React from 'react'
import Header from '../components/Header';
import

const DailyChartPage = () => {
  return (
    <Fragment>
      <Box m="1.5rem 2.5rem">
        <Header title={"Daily Chart"} subtitle="Count daily tickets" />
        <StatusBox heading={"Daily Chart"} />
      </Box>
    </Fragment>
  );
};

export default DailyChartPage;
