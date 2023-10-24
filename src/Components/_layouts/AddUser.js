import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";


export default function AddUser() {
    const validationSchema = yup.object().shape({
        name: yup
          .string()
          .min(2, "too short")
          .max(15, "too long")
          .required("Required"),
        age: yup
          .string()
          .min(1, "too short")
          .max(105, "too long")
          .required("Required"),
        email: yup.string().email("invalid email").required("Required"),
        phone: yup
          .string()
          .min(10, "too short")
          .max(15, "too long")
          .required("Required"),
      });
    
      const formik = useFormik({
        initialValues: {
          name: "",
          age: "",
          email: "",
          phone: "",
        },
    
        validationSchema: validationSchema,
        onSubmit: (values) => {
          axios
            .post("http://localhost:4052/employee", values)
            .then((res) => {
              console.log("Res", res);
            })
            .catch((err) => {
              console.log("err", err);
            });
        },
      });
  return (
    <div>
       
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <h3> Add user </h3>
      <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name"> Name </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />

              {formik.touched.name && Boolean(formik.errors.name) ? (
                <div className="red"> {formik.errors.name} </div>
              ) : <div>.</div>}
            </div>

            <div>
              <label htmlFor="age"> Age </label>
              <input
                id="age"
                name="age"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.age}
              />

              {formik.touched.age && Boolean(formik.errors.age) ? (
                <div className="red"> {formik.errors.age} </div>
              ) : <div>.</div>}
            </div>

            <div>
              <label htmlFor="email"> Email </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              {formik.touched.email && Boolean(formik.errors.email) ? (
                <div className="red"> {formik.errors.email} </div>
              ) : <div>.</div>}
            </div>

            <div>
              <label htmlFor="phone"> Phone </label>
              <input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />

              {formik.touched.phone && Boolean(formik.errors.phone) ? (
                <div className="red"> {formik.errors.phone} </div>
              ) : <div>.</div>}
            </div>

            <Button variant="primary" type="submit">
              {" "}
              Submit{" "}
            </Button>
          </form>

      
    
    

      </Card.Body>
    </Card>
        
    </div>
  )
}
