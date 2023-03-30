import { Paper, Card, CardContent } from "@mui/material";
import { blue, red } from "@mui/material/colors";

const StatusBox = ({ text, icon, status, number, color }) => {
  return (
    <Card sx={{ display: "flex",backgroundColor:color }}>
      <CardContent sx={{ display: "flex" }}>
        {icon}
        {text}: {number}
      </CardContent>
    </Card>
  );
};

export default StatusBox;
