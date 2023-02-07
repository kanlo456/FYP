import * as yup from "yup";

export const checkTicketSchema = yup.object().shape({
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
      ["On Create", "Holding", "Progress", "Solved", "Cancel"],
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
  assignedTo: yup.string(),
  description: yup.string().required("required"),
  shortDescription: yup.string().required("required"),
});
