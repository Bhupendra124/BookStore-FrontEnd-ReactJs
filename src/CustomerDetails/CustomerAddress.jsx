import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import "../CustomerDetails/CustomerAddress.css";
import FormHelperText from '@mui/material/FormHelperText';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const useStyles = makeStyles({
  cityStateTextField: {
    color: "#0A0102",
    textTransform: "capitalize",
    font: "13px/15px Roboto",
    height: "45px",
  },
  nameMobileTextField: {
    color: "#333232",
    font: "13px/15px Lato",
    height: "45px",
  },
  addressTextAreaError: {
    borderRadius: "3px",
    width: "-webkit-fill-available",
    font: "13px/16px Roboto",
    outline: "none",
    border: "1px solid #ba000d",
    color: "#0A0102",
    resize: "none",
    padding: "10px",
  },
  addressTextArea: {
    borderRadius: "3px",
    width: "-webkit-fill-available",
    font: "13px/16px Roboto",
    outline: "none",
    border: "1px solid #DCDCDC",
    color: "#0A0102",
    resize: "none",
    padding: "10px",
  },
});

export default function CustomerAddress() {
  const classes = useStyles();

  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState('')
  const [city, setCity] = useState("");
  const [state, setState] = useState("");


  const [helperTextAddress, setHelperTextAddress] = useState(' ')
 const [helperTextCity, setHelperTextCity] = useState(" ");
 const [helperTextState, setHelperTextState] = useState(" ");

  const takeFullName = (event) => {
    setFullName(event.target.value);
  };
  const takeMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };
  const takeFullAddress = (event) => {
    setAddress(event.target.value)
};
const takeCity = (event) => {
  setCity(event.target.value);
};

const takeState = (event) => {
  setState(event.target.value);
};
  return (
    <div className="customerAddressOuterContainer">
      <div className="customerAddressItem1">
        <div className="customerAddressItem1Text">Customer Details</div>
        <div className="customerAddressItem1Btn">Add New Address</div>
      </div>
      <div className="customerDetailsContainer">
        <div className="customerFullname">
          <InputLabel
            style={{ color: "#0A0102", font: "13px/16px Roboto" }}
            htmlFor="nameTextField"
          >
            Full Name
          </InputLabel>
          <TextField
            InputProps={{ className: classes.nameMobileTextField }}
            fullWidth
            size="small"
            id="nameTextfield"
            variant="outlined"
            onChange={takeFullName}
          />
        </div>

        <div className="customerMobileNum">
          <InputLabel
            style={{ color: "#0A0102", font: "13px/16px Roboto" }}
            htmlFor="mobileTextfield"
          >
            Mobile Number
          </InputLabel>
          <TextField
            InputProps={{ className: classes.nameMobileTextField }}
            fullWidth
            size="small"
            id="mobileTextfield"
            variant="outlined"
            onChange={takeMobileNumber}
          />
        </div>
      </div>
      <div className="customerEditAddressDetailContainer">
        <div className="customerAddressDetail">
          Address
          <div className="customerAddressTextarea">
            <TextareaAutosize
              area-label="emptytextarea"
              placeholder="Enter Address..."
              minRows={3}
              id="addressTextArea"
              onChange={takeFullAddress}
            />
             <FormHelperText style={{ height: "13px", font: "10px/10px Roboto", color: "#FF001C", fontWeight: "bolder", }} id="addresTextArea">{helperTextAddress}</FormHelperText>
          </div>
          <div className="customerBasicDetail customerCityAndState">
                            <div className="customerCity">
                            <InputLabel
                  style={{ color: "#0A0102", font: "13px/16px Roboto" }}
                  htmlFor="cityTextfield"
                >
                  city/town
                </InputLabel>
                <TextField
                  InputProps={{ className: classes.cityStateTextField }}
                  fullWidth
                  size="small"
                  id="cityTextfield"
                  variant="outlined"
                  onChange={takeCity}
                />
                 <FormHelperText
                  style={{
                    height: "13px",
                    font: "10px/10px Roboto",
                    color: "#FF001C",
                    fontWeight: "bolder",
                  }}
                  id="cityTextfield"
                >
                  {helperTextCity}
                </FormHelperText>
                <div className="customerState">
                <InputLabel
                  style={{ color: "#0A0102", font: "13px/16px Roboto" }}
                  htmlFor="stateTextfield"
                >
                  State
                </InputLabel>
                <TextField
                  InputProps={{ className: classes.cityStateTextField }}
                  fullWidth
                  size="small"
                  id="stateTextfield"
                 
                  variant="outlined"
                  onChange={takeState}
                />
                <FormHelperText
                  style={{
                    height: "13px",
                    font: "10px/10px Roboto",
                    color: "#FF001C",
                    fontWeight: "bolder",
                  }}
                  id="stateTextfield"
                >
                  {helperTextState}
                </FormHelperText>
        </div>
      </div>
    </div>
    </div>
    </div>
    {/* {showHomeDetails && (
        <div className="customerContinueBtnDiv">
          <button onClick={handleContinueClick} className="customerContinueBtn">
            CONTINUE
          </button>
        </div>
      )} */}
      </div>
  );
}
