import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
  Slide,
} from "@mui/material";
import { red, green, orange } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CancelAlertBox = ({
  openCancelAlertBox,
  setOpenCancelAlertBox,
  alertText,
  alertContent,
  navigate,
}) => {
  const naviagte = useNavigate();
  return (
    <Dialog
      open={openCancelAlertBox}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpenCancelAlertBox(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle variant="h3">{alertText}</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{ color: red[500] }}
          variant="h4"
          id="alert-dialog-slide-description"
        >
          {alertContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            backgroundColor: green[500],
            color: "white",
          }}
          onClick={() => setOpenCancelAlertBox(false)}
        >
          No
        </Button>
        <Button
          sx={{
            backgroundColor: red[500],
            color: "white",
          }}
          onClick={() => {
            naviagte(navigate);
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelAlertBox;
