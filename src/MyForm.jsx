import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './MyForm.css';

const today = new Date().toISOString().split('T')[0];
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .matches(/^[a-zA-Z]+$/, 'Name must contain only letters')
    .required('Required'),
  age: Yup.string()
    .matches(/^[0-9]+$/, 'Age must be a number')
    .required('Required'),
  dob: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
    .matches(/^[a-z0-9._@-]{2,}$/, 'Invalid email format'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required')
    .matches(/^[a-zA-Z0-9#_]+$/, 'Invalid password format'),
  gender: Yup.string()
    .oneOf(['Male', 'Female', 'Other'], 'Invalid Gender')
    .required('Please select a gender'),
  checked: Yup.array()
    .min(1, "Select at least one country")
    .max(2, "You can select only 2 countries"),
  selectedOptions: Yup.array()
    .min(1, "Select at least one option")
    .required("Required"),
  file: Yup.mixed()
    .required("A file is required")
});

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <center><h1>Signup Form</h1></center>

      <Formik
        initialValues={{
          name: '',
          age: '',
          dob: '',
          email: '',
          password: '',
          gender: '',
          checked: [],
          city: [],
          file: null,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form className='form'>
            {/* Name */}
            <div style={{ marginBottom: "10px" }}>
              <label className='label'>Name: </label><br/>
              <Field name="name" placeholder="Enter your name" className='input'/>
              <ErrorMessage name="name" component="div" style={{ color: "red" }} />
            </div>

            {/* Age */}
            <div style={{ marginBottom: "10px" }}>
              <label className='label'>Age: </label><br/>
              <Field name="age" 
              type="number"  className='input' max={today} placeholder="Enter Your age"/>
              <ErrorMessage name="age" component="div" style={{ color: "red" }} />
            </div>

            {/* DOB */}
            <div style={{ marginBottom: "10px" }}>
              <label className='label1'>Date of Birth: </label><br/>
              <Field name="dob" 
              type="date" 
              placeholder="Enter your date of birth" 
              className='input'
              max={today}
              />
              <ErrorMessage name="dob" component="div" style={{ color: "red" }} />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "10px" }}>
              <label className='label'>Email: </label><br/>
              <Field name="email" type="email" placeholder="Enter your email" className='input' />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "10px" }}>
              <label className='label'>Password: </label><br/>
              <Field name="password" type="password" placeholder="Enter your password" className='input' />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            {/* Gender */}
            <div style={{ marginBottom: "10px" }}>
              <label className='label2'>Gender: </label><br/>
              <label>
                <Field type="radio" name="gender" value="Male" className='input1' /> Male
              </label>
              <label>
                <Field type="radio" name="gender" value="Female" className='input1' /> Female
              </label>
              <label>
                <Field type="radio" name="gender" value="Other" className='input1' /> Other
              </label>
              <ErrorMessage name="gender" component="div" style={{ color: "red" }} />
            </div>

            {/* Country */}
            <div style={{ marginBottom: "10px" }}>
              <label className='label2'>Country:</label>
              <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="checked" value="USA" className='input1' /> USA
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Canada" className='input1' /> Canada
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="India" className='input1' /> India
                </label>
              </div>
              <ErrorMessage name="checked" component="div" style={{ color: "red" }} />
            </div>
             <div style={{ marginBottom: "10px" }}>
              <label className='right'>City:</label><br/>
              <Field as="select" name="city" className="">
                <option className='city' value="" disabled>
                  Select a city
                </option>
                <option className='city' value="Gobi">Gobi</option>
                <option className='city' value="Erode">Erode</option>
                <option className='city' value="Sathy">Sathy</option>
                
              </Field>
              <ErrorMessage name="city" component="div" style={{ color: "red" }} />
            </div>
            <div style={{marginBottom:"10px"}}>
                  <label className='file'>Upload File:</label><br/>
                  <Field name="file" type="file" className='text' /><br/>
                  <ErrorMessage className='error'name="file" component="div" style={{ color: "red" }} />
            </div>
            <button className='submit-button' type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
