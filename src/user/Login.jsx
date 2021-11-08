import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
// import logo from "../assets/logo.png"
import logo from '../assets/logo2.png'
import "./login.css"
import services from '../services/userServices.js';


const service= new services();


const useStyles = makeStyles((theme) => ({


  
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    fontSize: "1.2em",
    fontFamily: "roboto,'Noto Sans Myanmar UI',arial,sans-serif",
    fontWeight: "550"
  },
  select: {
    opacity: "0.4",
  },
  inputField: {
    margin: "9px 0 5px 0",
    width: "90%",
  },

  title: {
    paddingLeft: "7px"
  },
  input: {
    color: "#A03037",
  },
  
  regButton: {
    marginTop: "20px",
    background: "#A03037",
    width: "90%",
    color: "white",

  },
  facebook: {
    marginTop: "20px",
    background: "blue",
    color: "white",
    width: "30%",
    display: "flex",
    alignItems: "start",
    marginTop: "18px",
  },
  google: {
    color: "black",
    width: "30%",
    display: "flex",
    alignItems: "start",
    marginTop: "18px",
    marginLeft: "67px",
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState();
  const [emailFlag, setEmailFlag] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState();
  const [passwordFlag, setPasswordFlag] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");
  const[userId,setUserId]=React.useState("")
  let history = useHistory();

  function handleClick() {
    history.push("/SignUp");
  }

  const makeInitial = () => {
    setEmailFlag(false);
    setEmailError("");
    setPasswordFlag(false);
    setPasswordError("");
  };

 

  const submit = () => {
   
      console.log("Successfull");
      const data = {
        
        email: email,
        password: password,
      };
      console.log("data we entered", data)
        service.SignIn(data).then((data) => {
        console.log(data.data)
        console.log("Login successful" + JSON.stringify(data.data.token));
        localStorage.setItem("bookStoreToken", data.data.token);
        history.push("/image");
      })
        .catch((err) => {
          console.log("Login Error" + err);
       
        });
    
  };

  return (
    <>
      <div className="main1">
        <div className="imagess">
          <div className={"img"} >
            <img className="img1" src={logo} alt="img" />
            <div className="title">
              <b className={classes.title}> ONLINE BOOK SHOPPING</b>
            </div>
          </div>
          <div className={classes.loginMain}>
            <div className="signUpBody">
              <div className={classes.header}>
                LOGIN
            <b className={classes.select} onClick={handleClick}> SIGNUP </b>
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
                <div className="span" >Forgot Password?</div>
              </div>
              <Button
                fullWidth
                className={classes.regButton}
                onClick={submit}
                variant="contained"
              >
                Login
          </Button>
              <b style={{ marginTop: "20px" }}>-------- OR --------</b>
              <div className="logs" ><Button
                fullWidth
                className={classes.facebook}
                variant="contained"
              >
                facebook
          </Button>

                <Button
                  fullWidth
                  className={classes.google}
                  variant="contained"
                >
                  google
          </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



