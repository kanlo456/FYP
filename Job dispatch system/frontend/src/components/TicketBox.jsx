import React from "react";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
const TicketBox = (props) => {
  const theme = useTheme();
  return (
    <Box
      mt="40px"
      backgroundColor={theme.palette.background.alt}
      sx={{ flexGrow: 1 }}
      p="1.5rem"
    >
      {props.children}
    </Box>
  );
};

export default TicketBox;
