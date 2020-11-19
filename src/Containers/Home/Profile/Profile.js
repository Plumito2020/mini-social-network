import React, { Component } from "react";

import classes from "./Profile.css";
import CustomInput from "../../../Components/CustomInput/CustomInput";

class Profile extends Component {
  state = {
    fields: {
      name: {
        placeholder: "Name",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Vide";
          }
          return null;
        },
        error: null,
      },
      adress: {
        placeholder: "Adress",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Vide";
          }
          return null;
        },
        error: null,
      },
      phoneNumber: {
        placeholder: "Phone Number",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Vide";
          }
          return null;
        },
        error: null,
      },
      Gender: {
        placeholder: "Gender",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Vide";
          }
          if (val !== "male") {
            return "You're not a male , fuck off !";
          }
          return null;
        },
        error: null,
      },
    },
    isValid: null,
  };

  onChangeHandler = (event, fieldId) => {
    const copiedState = { ...this.state.fields };
    const updatedFormElement = { ...copiedState[fieldId] };
    updatedFormElement.value = event.target.value;
    copiedState[fieldId] = updatedFormElement;
    this.setState({ fields: copiedState });
  };

  saveForm = () => {
    // Testing if there is any error in order to save the form
    let formValidity = true;
    for (const key in this.state.fields) {
      console.log(this.state.fields[key].error);
      if (this.state.fields[key].error !== null) {
        formValidity = false;
      }
    }

    this.setState({ isValid: formValidity }, () =>
      console.log(this.state.isValid)
    );
  };
  validateForm = (callBack) => {
    // Updating the errors in state
    const copiedState = { ...this.state.fields };
    for (const key in copiedState) {
      const updatedFormElement = { ...copiedState[key] };
      const customError = updatedFormElement.validator(
        updatedFormElement.value
      );
      updatedFormElement.error = customError;
      copiedState[key] = updatedFormElement;
    }
    this.setState({ fields: copiedState }, () => callBack());
  };

  render() {
    const formFieldsArray = [];
    for (const key in this.state.fields) {
      formFieldsArray.push({ id: key, config: this.state.fields[key] });
    }
    const inputs = formFieldsArray.map((input) => (
      <CustomInput
        key={input.id}
        value={input.config.value}
        placeholder={input.config.placeholder}
        onChange={(event) => {
          this.onChangeHandler(event, input.id);
        }}
        error={input.config.error}
      />
    ));
    return (
      <div className={classes.Profile}>
        <h5>Fill in your informations</h5>
        {inputs}
        <button onClick={() => this.validateForm(this.saveForm)}>Submit</button>
      </div>
    );
  }
}

export default Profile;
