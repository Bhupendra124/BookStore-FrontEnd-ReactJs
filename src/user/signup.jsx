import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { useHistory } from "react-router-dom";
// import logo from '../assets/logo.png'
import logo from '../assets/logo1.png'
import "./signup.css"
import Services from "../services/userServices";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const services = new Services();

const useStyles = makeStyles((theme) => ({

  signUpMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "10px",
    width: "389px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  select: {
    opacity: "0.4",
  },
  SignUpBody: {
    padding: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0.5rem",
    backgroundolor: "white",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    fontSize: "1.2em",
    fontFamily: "roboto,'Noto Sans Myanmar UI',arial,sans-serif",
    fontWeight: "550",
  },
  inputField: {
    margin: "5px 0 5px 0",
    width: "90%",

  },

  img1: {
    height: "173px",
    borderRadius: "101px",
    paddingLeft: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    paddingLeft: "7px"
  },
  input: {
    color: "#A03037",
  },
  signUpButton: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  regButton: {
    marginTop: "20px",
    background: "#A03037",
    width: "90%",
    color: "white",
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [name, setName] = React.useState();
  const [nameFlag, setNameFlag] = React.useState();
  const [nameError, setNameError] = React.useState("");
  const [email, setEmail] = React.useState();
  const [emailFlag, setEmailFlag] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState();
  const [passwordFlag, setPasswordFlag] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");
  const [mobileNumber, setmobileNumber] = React.useState();
  const [mobileFlag, setMobileFlag] = React.useState(false);
  const [mobileError, setMobileError] = React.useState("");
  const [role , setrole]=React.useState("");

  let history = useHistory();

  function handleClick() {
    history.push("/Login");
  }
  const makeInitial = () => {
    setNameFlag(false);
    setNameError("");
    setEmailFlag(false);
    setEmailError("");
    setMobileFlag(false);
    setMobileError("");
    setPasswordFlag(false);
    setPasswordError("");
  };


  const submit = () => {
   
      console.log("Successfull");
      const data = {
        name: name,
        email: email,
/*         service:"Advance",
 */        password: password,
         mobileNumber: mobileNumber,
         role:role
      }; 
      services.SignUp(data).then((data) => {
          console.log("Registration successful" + data);
          history.push("/Login");
        })
        .catch((err) => {
          console.log("Registration Error" + err);
        });
    
  };
  return (
    <>
      <div className="main">
        <div className="imagess">
          <div className="imgg" >
            <img className="img2" src={logo} alt="img" />
            <div className="title">
              <b className={classes.title}> ONLINE BOOK SHOPPING</b>
            </div>
          </div>
          <div className={classes.signUpMain}>
            <div className="signUpBody1">
              <div className={classes.header}>
                <b className={classes.select} onClick={handleClick}> LOGIN </b>
         SIGNUP
          </div>
              <div className={classes.inputField}>
                Full Name
              <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameFlag}
                  helperText={nameError}
                  fullWidth
                  className={classes.input}
                  variant="outlined"

                />
              </div>
              <div className={classes.inputField}>
                Email Id
              <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailFlag}
                  helperText={emailError}
                  fullWidth
                  className={classes.input}
                  variant="outlined"

                />
              </div>
              <div className={classes.inputField}>
                Password
              <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordFlag}
                  helperText={passwordError}
                  fullWidth
                  className={classes.input}
                  variant="outlined"
                  type="password"
                />
              </div>
              <div className={classes.inputField}>
                Mobile Number
              <TextField
                  value={mobileNumber}
                  onChange={(e) => setmobileNumber(e.target.value)}
                  error={mobileFlag}
                  helperText={mobileError}
                  fullWidth
                  className={classes.input}
                  variant="outlined"
                  type="number"
                />
                
                      {/* <div className="form-group " style={{ marginTop: '15px',fontWeight:'bold',   marginnRight:'100px'}}> */}
                        <RadioGroup style ={{allign:"centre",height:'220'}} aria-label="Type"  name="type" row >
                         <FormControlLabel value="1"
                          control={<Radio />} 
                          value={role}
                          onChange={(e) => setrole(e.target.value)}
                        //   error={mobileFlag}
                        //   helperText={mobileError}
                        //   fullWidth
                          className={classes.input}
                          variant="outlined"
                          type="number"

                          label="user" />
                          </RadioGroup>

              </div>
              <Button
                fullWidth
                className={classes.regButton}
                onClick={submit}
                variant="contained">
                SignUp
            </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}