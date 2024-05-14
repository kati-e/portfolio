import { Formik } from "formik";
import { useState } from "react";

interface FormErrors {
  fname?: string
  lname?: string
  email?: string
  message?: string
}

/**
 * Contact Form
 *
 * This component renders an enquiry form using Formik library.
 * Formik Docs: https://formik.org/docs/overview
 * It submits the form input data as json to an endpoint
 */
export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Formik
      initialValues={{
        fname: "",
        lname: "",
        company: "",
        email: "",
        message: "",
      }}
      validate={(values) => {
        const errors: FormErrors = {}
        if (!values.fname) {
          errors.fname = "First Name Required"
        }
        if (!values.lname) {
          errors.lname = "Last Name Required"
        }
        if (!values.email) {
          errors.email = "Email Address Required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address"
        }
        if (!values.message) {
          errors.message = "Message Required"
        }
        return errors
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        //TODO: Create cloudflare worker to submit the data and send email through sendgrid
        try {
          console.info('Form was submitted successfully but actually went nowhere because I haven\'t created the endpoint to send these to yet <3')
          console.log(values)
          setSuccess(true)
          resetForm()
        } catch (error) {
          console.error('Error: ' + error)
          setError(true)
        } finally {
          setSubmitting(false)
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="fname">
              First Name <Required />
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                onChange={(e) => {handleChange(e), setSuccess(false)}}
                onBlur={handleBlur}
                value={values.fname}
                required
              />
              <span className="error-message">
                {errors.fname && touched.fname && errors.fname}
              </span>
            </label>
            <label htmlFor="lname">
              Last Name <Required />
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                onChange={(e) => {handleChange(e), setSuccess(false)}}
                onBlur={handleBlur}
                value={values.lname}
                required
              />
              <span className="error-message">
                {errors.lname && touched.lname && errors.lname}
              </span>
            </label>
          </div>
          <div className="field-group">
            <label htmlFor="company">
              Company Name
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                onChange={(e) => {handleChange(e), setSuccess(false)}}
                onBlur={handleBlur}
                value={values.company}
              />
            </label>
            <label htmlFor="email">
              Email Address <Required />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={(e) => {handleChange(e), setSuccess(false)}}
                onBlur={handleBlur}
                value={values.email}
                required
              />
              <span className="error-message">
                {errors.email && touched.email && errors.email}
              </span>
            </label>
          </div>
          <div className="field-group">
            <label htmlFor="message">
              Message <Required />
              <textarea
                name="message"
                placeholder="Write your enquiry or message here..."
                onChange={(e) => {handleChange(e), setSuccess(false)}}
                onBlur={handleBlur}
                value={values.message}
                required
              />
              <span className="error-message">
                {errors.message && touched.message && errors.message}
              </span>
            </label>
          </div>
          <button className="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
          <div className="submit-message">
          {success && <span>Your enquiry was submitted successfully!</span>}
          {error && <span>There was an error with your submission.</span>}
          </div>
        </form>
      )}
    </Formik>
  )
}

const Required = () => {
  return <span className="required"> *</span>
}
