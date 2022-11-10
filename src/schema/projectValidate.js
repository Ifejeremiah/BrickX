import * as Yup from "yup";

const projectSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(6, "Title must be at least 6 characters")
    .max(20, "Title must not exceed 40 characters"),
  duration: Yup.string().required("Duration is required"),
  start_date: Yup.date().required("Start date is required"),
  end_date: Yup.date().required("End date is required"),
  budget: Yup.number()
    .required("Budget is required")
    .min(8, "Budget must be at least 8 numbers"),
});

const projectData = {
  title: "",
  duration: "",
  start_date: "",
  end_date: "",
  budget: 0,
  workers: {
    inspector: { select: false, number: 0 },
    flooringInstaller: { select: false, number: 0 },
    surveyor: { select: false, number: 0 },
    brickMason: { select: false, number: 0 },
    ironWorker: { select: false, number: 0 },
    craneOperator: { select: false, number: 0 },
    safetyManager: { select: false, number: 0 },
    costEstimator: { select: false, number: 0 },
    manager: { select: false, number: 0 },
  },
};

export { projectSchema, projectData };