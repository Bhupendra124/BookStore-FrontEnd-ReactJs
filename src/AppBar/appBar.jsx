import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import logo from "../assets/education.svg";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Profile from "../Profile/profile";
import { useHistory } from "react-router-dom";

const StyledBadge = withStyles(() => ({
  badge: {
    right: -2,
    color:"black",
    backgroundColor:"white",
/*     border: `1px solid white`,
 */    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#A03037",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-around",
  },
  leftOptions: {
    display: "flex",
    width: "50%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rightOptions: {
    display: "flex",
    alignItems: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "flex-start",
    color: "gray",
    height: "40px",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  title: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  titleLogo: {
    marginRight: "10px",
  },
  titleName: {
    marginRight: "20px",
    cursor: 'pointer',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    color: "gray",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  buttonSearch: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginRight: "20px",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
 
  cartButton: {
    fontSize: "14px",
    color: "white",
  },
}));

export default function Appbar(props) {
  const classes = useStyles();

  let history = useHistory();

  function handleClick() {
    history.push("/cart");
  }
  function clickBook() {
    history.push("/dashboard");
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.AppBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.leftOptions}>
            <div className={classes.title}>
              <img className={classes.titleLogo} src={logo} />
              <Typography className={classes.titleName} variant="h6" onClick={clickBook} >
                Bookstore
              </Typography>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search???"
                classes={{ input: classes.inputInput }}
              />
            </div>
          </div>
          <div className={classes.rightOptions}>
            <SearchIcon className={classes.buttonSearch} />
            <Profile/>
            <IconButton
              className={classes.cartButton}
              onClick={handleClick} >
              <StyledBadge badgeContent={props.totalCartItem} className={classes.badge}>
                <ShoppingCartOutlinedIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
