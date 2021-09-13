import React from "react";
import ReactDOM from "react-dom";
import { Formik, FastField, Form } from "formik";

const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: ""
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">Firsts Name</label>
        <FastField id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <FastField id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <FastField
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
