import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import TicketForm from "../components/TicketForm";
import { Formik } from "formik";
import * as yup from "yup";
import { red, green } from "@mui/material/colors";
import axios from "axios";
import { useState } from "react";

const EditTicket = () => {
  const { id } = useParams();

  const [caller, setCaller] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [service, setService] = useState("");
  const [offering, setOffering] = useState("");
  const [configItem, setConfigItem] = useState("");
  const [contactType, setContactType] = useState("");
  const [state, setState] = useState("");
  const [impact, setImpact] = useState("");
  const [priority, setPriority] = useState("");
  const [assignmentGroup, setAssignmentGroup] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [user_id, setUser_id] = useState("");

  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    getSingleTicket(id);
  }, [id]);

  console.log(id);
  const getSingleTicket = async (id) => {
    const response = await axios.get(`/api/tickets/${id}`);
    console.log(response.data.caller);
    console.log(response.data);
    setCaller(response.data.caller);
    setCategory(response.data.category);
    setSubcategory(response.data.subcategory);
    setService(response.data.service);
    setOffering(response.data.offering);
    setConfigItem(response.data.configItem);
    setContactType(response.data.contactType);
    setState(response.data.state);
    setImpact(response.data.impact);
    setPriority(response.data.priority);
    setAssignmentGroup(response.data.assignmentGroup);
    setAssignedTo(response.data.assignedTo);
    setDescription(response.data.description);
    setShortDescription(response.data.shortDescription);
    setUser_id(response.data.user_id);
    setResponseData(response.data);
  };
  console.log("caller", caller);

  const initialValues = {
    caller: caller,
    category: category,
    subcategory: subcategory,
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
    user_id: "123",
  };

  const updateTicket = () => {};

  return (
    <Fragment>
      <Box m="1.5rem 2.5rem">
        <Header title="Edit Your Ticket" subtitle="We will help you soon!" />
        <Formik
          initialValues={initialValues}
          validationSchema={checkTicketSchema}
          handleSubmit={updateTicket}
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
            </form>
          )}
        </Formik>
      </Box>
    </Fragment>
  );
};

export default EditTicket;

// const initialValues = {};

const checkTicketSchema = yup.object().shape({
  caller: yup.string().required("reaquired"),
  category: yup
    .string()
    .oneOf(["hardware", "software", "other"], "Invaild Input")
    .required("required"),
  subcategory: yup.string().required("required"),
  service: yup
    .string()
    .oneOf(["onsite", "remote"], "Invaild Input")
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
  priority: yup
    .string()
    .oneOf(["1", "2", "3"], "Invaild Input")
    .required("required"),
  assignmentGroup: yup.string().required("required"),
  assignedTo: yup.string().required("requried"),
  description: yup.string().required("required"),
  shortDescription: yup.string().required("required"),
});
