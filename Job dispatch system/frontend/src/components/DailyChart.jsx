import { ResponsiveBar } from "@nivo/bar";
import { barData as data } from "../dummyData/barData";
import { Box, useTheme } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";

const DailyChart = () => {

  useEffect(() => {
    getStatus();
  }, []);

  const [getStatusData, setGetStatusData] = useState([]);
  const getStatus = async () => {
    const response = await axios.get(`/api/tickets/getReport2`);
    setGetStatusData(response.data[0]);
  
  };

  const data =[
    {
      country:"Tom",
      "Ticket":getStatusData.Tom_tck
    },
    {
      country:"Oscar",
      "Ticket":getStatusData.Oscar_tck
    },
    {
      country:"Ken Lo",
      "Ticket":getStatusData.KenLo_tck
    },
    {
      country:"Sam",
      "Ticket":getStatusData.Sam_tck
    },
  ]

  return (
    <Box height="55vh">
      <ResponsiveBar
        data={data}
        keys={["Ticket"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Name",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Ticket",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
      />
    </Box>
  );
};

export default DailyChart;
