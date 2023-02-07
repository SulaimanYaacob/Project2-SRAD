export const setStudentInfo = (values: any) => {
  localStorage.setItem("studentInfo", JSON.stringify(values));
};

//
export const getStudentInfo = () => {
  return JSON.parse(localStorage.getItem("studentInfo") || "{}");
};
