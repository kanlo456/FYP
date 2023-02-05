import { Box } from "@mui/system";
import { Button, Alert, AlertTitle } from "@mui/material";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import TicketForm from "../components/TicketForm";
import { Formik } from "formik";
import { red, green, orange } from "@mui/material/colors";
import axios from "axios";
import { useState } from "react";
import WorkNotes from "../components/WorkNotes";
import { useTheme } from "@emotion/react";
import CancelAlertBox from "../components/CancelAlertBox";
import TicketBox from "../components/TicketBox";
import { checkTicketSchema } from "../validation/schema/checkTicketSchema";

const EditTicket = () => {
  const { id } = useParams();
  const [statusOK, setStatusOK] = useState(false);
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState([]);
  const [openCancelAlertBox, setOpenCancelAlertBox] = useState(false);

  useEffect(() => {
    getSingleTicket(id);
  }, [id]);

  console.log(id);
  const getSingleTicket = async (id) => {
    const response = await axios.get(`/api/tickets/${id}`);
    const data = response.data;
    setResponseData(data);
  };

  const initialValues = {
    caller: responseData.caller,
    category: responseData.category,
    subcategory: responseData.subcategory,
    service: responseData.service,
    offering: responseData.offering,
    configItem: responseData.configItem,
    contactType: responseData.contactType,
    state: responseData.state,
    impact: responseData.impact,
    priority: responseData.priority,
    assignmentGroup: responseData.assignmentGroup,
    assignedTo: responseData.assignedTo,
    description: responseData.description,
    shortDescription: responseData.shortDescription,
    user_id: "123",
  };

  const updateTicket = async (values) => {
    const response = await fetch(`/api/tickets/${id}`, {
      method: "PATCH",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setStatusOK(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return setTimeout(() => navigate("/dashboard/ticketboard"), 3000);
    } else {
      console.log("fail");
    }
  };

  return (
    <Fragment>
      {statusOK && (
        <Alert severity="success">
          <AlertTitle>Success Submit ticket</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      )}
      <Box m="1.5rem 2.5rem">
        <Header title="Edit Your Ticket" subtitle="We will help you soon!" />
        <Formik
          initialValues={initialValues}
          validationSchema={checkTicketSchema}
          onSubmit={updateTicket}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <TicketBox>
                <TicketForm
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Box display="flex" justifyContent="flex-end" mt="1rem">
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: red[500],
                      color: "white",
                    }}
                    onClick={() => setOpenCancelAlertBox(true)}
                  >
                    Cancel Edit
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: green[500],
                      color: "white",
                      ml: "1rem",
                    }}
                    type="submit"
                  >
                    Update
                  </Button>
                </Box>
              </TicketBox>
            </form>
          )}
        </Formik>
        <CancelAlertBox
          openCancelAlertBox={openCancelAlertBox}
          setOpenCancelAlertBox={setOpenCancelAlertBox}
          alertText={"Are you sure cancel edit?"}
          alertContent={"Your data will lose!"}
          navigate={"/dashboard/ticketboard"}
        />
        <Header title="Word Notes" subtitle="Please leave your notes here!" />
        <TicketBox>
          <WorkNotes />
          <Box display="flex" justifyContent="flex-end" mt="1rem">
            <Button
              variant="outlined"
              sx={{ backgroundColor: orange[900], color: "white" }}
            >
              POST
            </Button>
          </Box>
        </TicketBox>
      </Box>
    </Fragment>
  );
};

export default EditTicket;
