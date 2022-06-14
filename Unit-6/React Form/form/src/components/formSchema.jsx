import * as yup from "yup";

export const formSchema = yup.object().shape({
    username: yup.string().required("Required"),
    userage: yup.number().required("Required"),
    useraddress: yup.string().required("Required"),
    department: yup.string().required("Required"),
    salary: yup.number().required("Required"),
    maritalStatus: yup.boolean()
});