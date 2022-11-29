import { useFormik } from "formik";
import React from "react";
const Index = () => {
  //useFormik return object that contain in formik variable
  const formik = useFormik({
    //  first step pass property and pass intitalvalues
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    // step-2
  });

  console.log("formik Values", formik.values);
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />{" "}
        <br />
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <label htmlFor="channel">Name</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Index;
