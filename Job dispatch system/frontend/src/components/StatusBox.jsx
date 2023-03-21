import { Paper, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";

const StatusBox = ({ text, icon, status, number }) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardContent sx={{ display: "flex" }}>
        {icon}
        {text}: {number}
      </CardContent>
    </Card>
  );
};

export default StatusBox;
