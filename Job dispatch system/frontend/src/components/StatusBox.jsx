import { Paper, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";

const StatusBox = ({ text, icon, status }) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardContent sx={{ display: "flex" }}>
        {icon}
        {text}
        {status}
      </CardContent>
    </Card>
  );
};

export default StatusBox;
