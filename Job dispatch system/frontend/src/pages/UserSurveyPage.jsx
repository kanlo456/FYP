import React, { useState } from "react";
import {
  Box,
  Rating,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Header from "../components/Header";
import TicketBox from "../components/TicketBox";
import StarIcon from "@mui/icons-material/Star";
import { Formik } from "formik";
import * as yup from "yup";

const labels = {
  1: "Very Unsatisfied",
  2: "Unsatisfied",
  3: "Neutral",
  4: "Satisfied",
  5: "Very Satisfied",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const UserSurveyPage = () => {
  const [friendlnesshover, setFriendlnessHover] = useState(-1);
  const [knowledgeHover, setKnowledgeHover] = useState(-1);
  const [quicknessHover, setQuicknessHover] = useState(-1);

  return (
    <Box>
      <Header
        title="Customer Service Survey"
        subtitle="Please help us imporve your experience!"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={checkSurveyFormSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form>
            <TicketBox>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography component="legend">Friendliness</Typography>
                <Rating
                  name="friendlness"
                  value={values.friendlness}
                  precision={1}
                  getLabelText={getLabelText}
                  onChange={handleChange}
                  onChangeActive={(event, newHover) => {
                    setFriendlnessHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {values.friendlness !== null && (
                  <Box sx={{ ml: 2 }}>
                    {
                      labels[
                        friendlnesshover !== -1
                          ? friendlnesshover
                          : values.friendlness
                      ]
                    }
                  </Box>
                )}
                <Typography component="legend">Knowledge</Typography>
                <Rating
                  name="knowledge"
                  value={values.knowledge}
                  precision={1}
                  getLabelText={getLabelText}
                  onChange={handleChange}
                  onChangeActive={(event, newHover) => {
                    setKnowledgeHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {values.knowledge !== null && (
                  <Box sx={{ ml: 2 }}>
                    {
                      labels[
                        knowledgeHover !== -1
                          ? knowledgeHover
                          : values.knowledge
                      ]
                    }
                  </Box>
                )}
                <Typography component="legend">Quickness</Typography>
                <Rating
                  name="quickness"
                  value={values.quickness}
                  precision={1}
                  getLabelText={getLabelText}
                  onChange={handleChange}
                  onChangeActive={(event, newHover) => {
                    setQuicknessHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {values.quickness !== null && (
                  <Box sx={{ ml: 2 }}>
                    {
                      labels[
                        quicknessHover !== -1
                          ? quicknessHover
                          : values.quickness
                      ]
                    }
                  </Box>
                )}
                <FormControl>
                  <FormLabel>
                    Would you use our customer service in the future?
                  </FormLabel>
                  <RadioGroup name="willUseAgain" value={values.willUseAgain}>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Maybe"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>How can we improve our service?</FormLabel>
                </FormControl>
              </Box>
            </TicketBox>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default UserSurveyPage;

const initialValues = {
  friendlness: "",
  knowledge: "",
  quickness: "",
  willUseAgain: "",
  improve: "",
};

const checkSurveyFormSchema = () =>
  yup.object().shape({
    friendlness: yup.number(),
    knowledge: yup.number(),
    quickness: yup.number(),
    willUseAgain: yup.number(),
    improve: yup.string(),
  });
