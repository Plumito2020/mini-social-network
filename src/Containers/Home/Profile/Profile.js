import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Profile.css";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import ProfileInfos from "../../../Components/ProfileInfos/ProfileInfos";

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
        placeholder: "Address",
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
      Mail: {
        placeholder: "Mail",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Vide";
          }
          return null;
        },
        error: null,
      },
    },
    isValid: null,
    infos: null,
  };

  onChangeHandler = (event, fieldId) => {
    const copiedState = { ...this.state.fields };
    const updatedFormElement = { ...copiedState[fieldId] };
    updatedFormElement.value = event.target.value;
    copiedState[fieldId] = updatedFormElement;
    this.setState({ fields: copiedState });
  };

  buildObject = () => {
    const obj = {
      name: "",
      adress: "",
      phoneNumber: "",
      Mail: "",
    };
    for (const key in this.state.fields) {
      obj[key] = this.state.fields[key].value;
    }
    this.setState({ infos: obj }, () => console.log(this.state.infos));
  };

  saveForm = (callBack) => {
    // Testing if there is any error in order to save the form
    let formValidity = true;
    for (const key in this.state.fields) {
      if (this.state.fields[key].error !== null) {
        formValidity = false;
      }
    }

    this.setState({ isValid: formValidity }, () => callBack());
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
    this.setState({ fields: copiedState }, () => callBack(this.buildObject));
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

    let whatToReturn;
    if (this.state.infos !== null && this.state.isValid) {
      whatToReturn = (
        <ProfileInfos
          name={this.state.infos.name}
          adress={this.state.infos.adress}
          number={this.state.infos.phoneNumber}
          mail={this.state.infos.mail}
        />
      );
    } else {
      whatToReturn = (
        <div>
          <h5>Fill in your informations</h5>
          {inputs}
          <button onClick={() => this.validateForm(this.saveForm)}>
            Submit
          </button>
        </div>
      );
    }
    return <div className={classes.Profile}>{whatToReturn}</div>;
  }
}

// const mapStateToProps = state => {
//   return {
//       ctr: state.ctr.counter,
//       storedResults: state.res.results
//   }
// };

const mapDispatchToProps = (dispatch) => {
  return {
    saveInfos: (infos) =>
      dispatch({
        type: "SAVE_INFOS",
        data: {
          name: infos.name,
          adress: infos.adress,
          phone: infos.phone,
          mail: infos.mail,
        },
      }),
  };
};

export default connect(null, mapDispatchToProps)(Profile);
