import React, { Fragment } from "react";
import TicketForm from "../../components/TicketForm";
import Header from "../../components/Header";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { useTheme } from "@emotion/react";
import { red, green } from "@mui/material/colors";

const CreateTicket = () => {
  const theme = useTheme();

  const handleSubmit = async (values) => {
    console.log("sucessful");
    console.log(values);
    const response = await fetch("/api/tickets", {
      method: "POST",
      // body:JSON.stringify(values)
    });
  };

  return (
    <Fragment>
      <Box m="1.5rem 2.5rem">
        <Header title="Create Ticket" subtitle="Please fill all information" />
        <Formik
          initialValues={initialValues}
          validationSchema={createTicketSchema}
          onSubmit={handleSubmit}
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
                >
                  Cancel Ticket
                </Button>
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    backgroundColor: green[500],
                    color: "white",
                    ml: "1rem",
                  }}
                >
                  Create Ticket
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Fragment>
  );
};

export default CreateTicket;

const initialValues = {
  caller: "",
  category: "",
  subcategory: "",
  service: "",
  offering: "",
  configItem: "",
  contactType: "",
  state: "",
  impact: "",
  priority: "",
  assignmentGroup: "",
  assignedTo: "",
  description: "",
  shortDescription: "",
  user_id: "",
};

const createTicketSchema = yup.object().shape({
  caller: yup.string().required("reaquired"),
  category: yup
    .string()
    .oneOf(["hadware,software,other"], "Invaild Input")
    .required("required"),
  subcategory: yup.string().required("required"),
  service: yup
    .string()
    .oneOf(["onsite,remote"], "Invaild Input")
    .required("required"),
  offering: yup.string().required("required"),
  configItem: yup.string().required("required"),
  contactType: yup
    .string()
    .oneOf(["email", "mobilePhone", "Invaild Input"])
    .required("required"),
  state: yup
    .string()
    .oneOf(
      ["onCreate", "holding", "progress", "solved", "cancel"],
      "Invaild Input",
    )
    .required("required"),
  impact: yup
    .string()
    .oneOf(["1", "2", "3"], "Invaild Input")
    .required("required"),
  priority: yup.string().oneOf(["1,2,3"], "Invaild Input").required("required"),
  assignmentGroup: yup.string().required("required"),
  assignedTo: yup.string().required("requried"),
  description: yup.string().required("required"),
  shortDescription: yup.string().required("required"),
});
