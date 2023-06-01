import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const AddNote = ({createNote}) => {
  
  const validationSchema = Yup.object({
    title: Yup.string().required('This field is Required'),
    content: Yup.string().required('This field is Required'),


  })

  const initialValues = {
    title: "",
    content:""

  };

  const handleSubmit = (values) => {
    console.log(values);
    createNote(values);
    values.title = "";
    values.content = "";

  
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
      <Form className="w-[500px] p-6 my-6 bg-white shadow-2xl rounded-md flex flex-col items-center justify-center gap-3">
        <Field
          type="text"
          name="title"
          placeholder=" title"
          className="w-full p-3 border  rounded outline-slate-700"
        />
         <Field
          type="text"
          name="content"
          placeholder="Content"
          className="w-full p-3 border  rounded outline-slate-700"
        />
        <ErrorMessage name="name" component="div" className="w-full pb-[-1px] text-red-600 font-medium"/>
        
        <ErrorMessage name="address" component="div" className="w-full pb-[-1px] text-red-600 font-medium"/>
        <button type="submit" className="p-3 w-full bg-green-700 hover:bg-slate-800 text-white rounded-lg">Add Note</button>
      </Form>
    </Formik>
  );
};

export default AddNote;