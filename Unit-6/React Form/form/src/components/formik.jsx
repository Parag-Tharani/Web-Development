import React from 'react';
import { useFormik } from 'formik';
import { formSchema} from "./formSchema"

const onSubmit = () => {
    console.log("submitted")
}
 
 const Form = () => {

    const {values, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues: {
            username: "",
            userage: "",
            useraddress: "",
            department: "",
            salary: "",
            maritalStatus: "",
        },
        validationSchema: formSchema,
         onSubmit
    })


    return (
        <form onSubmit={handleSubmit}>

            <div>
            <label htmlFor='username'>Name</label>
            <input
            id='username'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            type={'text'}
            className={(values.username === "" && touched.username)?"inputError":null}/>
            </div>

            <div>
            <label htmlFor='userage'>Age</label>
            <input id='userage'
            type={'number'}
            value={values.userage}
            className={(values.userage === "" && touched.userage)?"inputError":null}
            onChange={handleChange}
            onBlur={handleBlur}/>
            </div>

            <div>
            <label htmlFor='useraddress'>Address</label>
            <input
            id='useraddress'
            value={values.useraddress}
            onChange={handleChange}
            onBlur={handleBlur}
            type={"text"} 
            className={(values.useraddress === "" && touched.useraddress)?"inputError":null}/>
            </div>
            
            <div>
            <label htmlFor="deparment">Department</label>
            <select 
            id='department' 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.department}
            className={(values.department === "" && touched.department)?"inputError":null}>
                <option>None</option>
                <option value={"SoftwareEngineer"}>Software Engineer</option>
                <option value={"GraphicDesign"}>Graphic Design</option>
                <option value={"UX/UI"}>UX/UI</option>
                <option value={"Other"}>Other</option>
            </select>
            </div>

            <div>
            <label htmlFor='salary'>Salary</label>
            <input id='salary'
            type={"number"}
            value={values.salary}
            onChange={handleChange}
            onBlur={handleBlur}
            className={(values.salary === "" && touched.salary)?"inputError":null}/>
            </div>

            
            <label htmlFor='maritalStatus'>Maried:</label>
            <input id='maritalStatus'
            type={"checkbox"} 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.maritalStatus}
            />
            <br />

            <input type={"submit"} id="submit"/>
        </form>
    )
};
 
 export default Form;