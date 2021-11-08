import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import BookService from "../services/BookService";
import CartService from "../services/CartService";
import { Grid, Container, CardActionArea} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { border, color, style } from "@mui/system";
import Appbar from "../AppBar/appBar";
import Footer from "../Footer/Footer";
import { Stack } from "@mui/material";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    height: "80vh",
    background: theme.palette.grey[200],
    paddingTop: theme.spacing(10),
  },
  media: {
    height: 160,
    width: "80%",
    marginLeft: "1%",
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  const getAlleRecords = () => {
    BookService.getAllBooks().then(
      (response) => {
        console.log(response.data.data);

        setBookData(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const addToCart = (id) => {

    let cartBook = {
        userId: localStorage.getItem('bookStoreToken'),
        quantity: 1,
        bookId: id
    }

    CartService.addToCart(cartBook).then(
        (response) => {
   console.log("sucess")
    
        },
        (error) => {
           console.log(error)
        }
    );
};


// useHistory("/user-cart")
  useEffect(() => {
    document.title = "All Books";
    getAlleRecords();
  }, []);

  const [bookData, setBookData] = useState([]);

  return (
    <>
      <Appbar />
      <div className="bookcount-sortby-div">
        <Typography id="display-book-title" variant="h5">
          Books
        </Typography>
      </div>

      <Container className={classes.root}>
        <Grid container spacing={5}>
          {bookData.length > 0 &&
            bookData.map((book) => (
              <div>
                {/* <Appbar /> */}
                {/* <img src={book.logo} alt="logo" /> */}
                <Grid item sm={20}>
                  <Card
                    key={book.bookId}
                    sx={{
                      maxWidth: 300,
                      border: 1,
                      zIndex: "tooltip",
                      boxShadow: 2,
                      margin: 1,
                      marginBottom: 4,
                      paddingLeft: 0,
                      height: 440,
                      width: 320,
                    }}
                  >
                    <CardContent>
                      <CardActionArea href="https://www.amazon.in/Books/b?ie=UTF8node=976389031">
                        <img  src={book.logo} style={{paddingLeft:"55px", paddingTop:"5px" , height:"200px"}} alt="logo" />
              
                        {/* <CardMedia
                          className={classes.media}
                          component="img"
                          height="160"
                          image={book.logo}
                          alt="green iguana"
                        /> */}
                      </CardActionArea>
                    </CardContent>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {book.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {book.description}
                      </Typography>
                      <Typography
                        sx={style}
                        variant="body1"
                        color="text.secondary"
                      >
                        {book.price}
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                        {book.quantity}
                      </Typography> */}
                    </CardContent>
{/* 
                    <Stack
                      spacing={5}
                      direction="row"
                      style={{ padding: "10px", paddingLeft: "20px" }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        style={{ padding: "10px" }}
                      >
                        ADD TO CART
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        style={{ padding: "10px" }}
                      >
                        WISHLIST
                      </Button>
                    </Stack> */}

                    <CardActions >
                      <Button size="small" variant="contained" color="error" style={{padding:"5"} }    onClick={() => addToCart(book.bookId) }>ADD TO CART</Button>
                      <Button size="small" variant="outlined" color="primary" style={{ paddingLeft:"10px"}}>WISH-LIST</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </div>
            ))}
        </Grid>
        <Footer />
      </Container>
    </>
  );
}
