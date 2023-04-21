import { Paper, Card, CardContent, darken, lighten } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { useSelector } from "react-redux";

const StatusBox = ({ text, icon, number, color }) => {
  const getBackgroundColor = (color, mode) =>
    mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

  const mode = useSelector((state) => state.global.mode);

  return (
    <Card
      sx={{ display: "flex", backgroundColor: getBackgroundColor(color, mode) }}
    >
      <CardContent
        sx={{ display: "flex", fontSize: "1.2rem", alignItems: "center" }}
      >
        {icon}
        {text}: {number}
      </CardContent>
    </Card>
  );
};

export default StatusBox;
