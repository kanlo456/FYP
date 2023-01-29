import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import TicketForm from "../components/TicketForm";
import { Formik } from "formik";
import * as yup from "yup";

const EditTicket = () => {
  const { id } = useParams();

  // useEffect(())

  return (
    <Fragment>
      <Box m="1.5rem 2.5rem">
        <Header title="Edit Your Ticket" subtitle="We will help you soon!" />
        <Formik>
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form>
              <TicketForm
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </form>
          )}
        </Formik>
      </Box>
    </Fragment>
  );
};

export default EditTicket;

const initialValues = {};
