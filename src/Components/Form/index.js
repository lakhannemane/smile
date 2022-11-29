import { useFormik } from "formik";
import React from "react";
const Index = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log("form Data", values);
  };

  const validate = (values) => {
    // must be satify condtion
    // step1 create obect
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.channel) {
      errors.channel = "Required";
    }

    return errors;
  };

  //useFormik return object that contain in formik variable

  // ⚠️ Fromik Readiablity is Not better
  const formik = useFormik({
    //  first step pass property and pass intitalvalues
    initialValues,
    // step-2 onsubmit take all property as an agument
    onSubmit,
    // step3: validate
    validate,
  });

  // console.log("formik Values", formik.values);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          {/* touched is function to keep track visited fields */}
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            //Handleblur this is used for knowning which field user clicked
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Name</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : (
            ""
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Index;
