/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { render } from "react-dom";
import Styles from "./styles";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
const Recaptcha = require("react-recaptcha");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);

  window.alert(JSON.stringify(values, 0, 2));
};

const required = (value) => (value ? undefined : "Required");
const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);
const mustBeEmail = (value) => (!value.includes("@") ? "Invalid" : undefined);
const mustBePhone = (value) =>
  isNaN(value) || value.length > 7 || value.length < 7 ? "Invalid" : undefined;
const maxLength = (value) =>
  value.length > 40 ? "< 40 Char Required" : undefined;
const zipLength = (value) =>
  value.length > 5 || value.length < 5 || isNaN(value) ? "Invalid" : undefined;
const minValue = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

// specifying your onload callback function
var callback = function() {
  console.log("Done!!!!");
};

// specifying verify callback function
var verifyCallback = function(response) {
  console.log(response);
};

const InputForm = (props) => (
  <Styles>
    <Form
      onSubmit={(data) => props.submit(data)}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component="input"
            validate={composeValidators(required, maxLength)}
          >
            {({ input, meta }) => (
              <div>
                <label>First Name*</label>
                <input {...input} type="text" placeholder="First Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="lastName"
            component="input"
            validate={composeValidators(required, maxLength)}
          >
            {({ input, meta }) => (
              <div>
                <label>Last Name*</label>
                <input {...input} type="text" placeholder="Last Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <label>Birthdate*</label>
            <Field
              name="birthMonth"
              component="input"
              type="text"
              placeholder="Month"
              validate={composeValidators(required, mustBeNumber)}
            />
            <Field
              name="birthDay"
              component="input"
              type="text"
              placeholder="Day"
              validate={composeValidators(required, mustBeNumber)}
            />
            <Field
              name="birthYear"
              component="input"
              type="text"
              placeholder="Year"
              validate={composeValidators(required, mustBeNumber)}
            />
          </div>

          <Field
            name="address"
            component="input"
            validate={composeValidators(required, maxLength)}
          >
            {({ input, meta }) => (
              <div>
                <label>Address*</label>
                <input {...input} type="text" placeholder="Address" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="zip"
            component="input"
            validate={composeValidators(required, zipLength)}
          >
            {({ input, meta }) => (
              <div>
                <label>Zip*</label>
                <input {...input} type="text" placeholder="Zip" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <label>Education</label>
            <Field name="education" component="select">
              <option />
              <option>High School</option>
              <option>College</option>
              <option>Graduate</option>
              <option>Ph.D</option>
            </Field>
          </div>
          <div>
            <label>Height</label>
            <Field
              name="heightFeet"
              component="input"
              type="text"
              placeholder="(ft)"
            />
            <Field
              name="heightInches"
              component="input"
              type="text"
              placeholder="(in)"
            />
          </div>
          <Field
            name="phoneNumber"
            component="input"
            validate={composeValidators(required, mustBePhone)}
          >
            {({ input, meta }) => (
              <div>
                <label>Phone*</label>
                <input {...input} type="text" placeholder="Phone #" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field
            name="email"
            component="input"
            validate={composeValidators(required, mustBeEmail)}
          >
            {({ input, meta }) => (
              <div>
                <label>Email*</label>
                <input {...input} type="text" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <label>I Agree to Terms*</label>
            <Field name="termsConditions" component="input" type="checkbox" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <Recaptcha
            sitekey="6Lfq3rMZAAAAAO8DbodP0iH67juV03gtQzc1w5s4"
            render="explicit"
            hl={"ja"}
            theme="dark"
            verifyCallback={verifyCallback}
            onloadCallback={callback}
          />
          {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </form>
      )}
    />
  </Styles>
);

export default InputForm;
