import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";


import Appbar from "../AppBar/appBar";
import CartService from "../services/CartService";
import "./Home1.css";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Link, useHistory } from "react-router-dom";
import { ShoppingBasket } from "@material-ui/icons";

function MyCart() {
  const getAlleRecords = () => {
    const token = localStorage.getItem("bookStoreToken");
    console.log(token);
    CartService.getAllCartItem(token).then(
      (response) => {
        console.log(response.data.data);
       
        setCartData(response.data.data);
      },
      (error) => {
        console.log(error);
       
      }
    );
  };

  useEffect(() => {
    document.title = "My Cart";
    getAlleRecords();
  }, []);

  const [cartData, setCartData] = useState([]);

  const deleteCartItem = (id) => {
    console.log(id);
    CartService.removeBookFromCart(id).then(
      (response) => {
     
        updateCartArrayAfterDelete(id);
      },
      (error) => {
      console.log("error")
      }
    );
  };

  const updateCartArrayAfterDelete = (id) => {
    setCartData(cartData.filter((bk) => bk.cart_id !== id));
  };

  const handleDecrement = (cart_id) => {
    setCartData((cartData) =>
      cartData.map((item) =>
        cart_id === item.cart_id
          ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
          : item
      )
    );
  };

  const handleIncrement = (cart_id) => {
    setCartData((cartData) =>
      cartData.map((item) =>
        cart_id === item.cart_id
          ? { ...item, quantity: item.quantity + (item.quantity < 100 ? 1 : 0) }
          : item
      )
    );
  };

  let history = useHistory();

  function handleClick() {
    history.push("/placeorder");
  }
 

  function handleClick() {
      history.push("/image");
    }


  return (
    <>
      <Appbar />
      <div className="main-content">
        <div className="table-main">
          <div className="header-content">
            <div className="emp-detail-text">
              <div className="emp-detail-text">
                <h3>My Cart ({cartData.length})</h3>
              </div>
            </div>
            <div>
              <Button variant="contained" onClick={handleClick}>
                PLACE ORDER
              </Button>
            </div>
          </div>
          <table className="table-display">
            <tbody>
              <tr>
                <th style={{ border: "1px solid black" }}>Book</th>
                <th style={{ border: "1px solid black" }}>Author</th>
                {/* <th style={{border: "1px solid black"}}>Description</th> */}
                <th style={{ border: "1px solid black" }}>Quantity</th>
                <th style={{ border: "1px solid black" }}>Price</th>
                <th style={{ border: "1px solid black" }}>Remove</th>
              </tr>
              {cartData.length > 0 &&
                cartData.map((book, index) => (
                  <tr key={`${index}`}>
                    <td>
                      <img
                        src={book.book.logo}
                        alt="logo"
                        style={{ width: "80px", height: "100px" }}
                      />
                    </td>
                    <td>{book.book.author}</td>
                    {/* <td>{book.book.description}</td> */}
                    <td>
                      <RemoveCircleRoundedIcon
                        onClick={() => handleDecrement(book.cart_id)}
                      />
                      {book.quantity}
                      <AddCircleRoundedIcon
                        onClick={() => handleIncrement(book.cart_id)}
                      />
                    </td>
                    <td>Rs.{book.book.price}</td>
                    <td>
                      <Button
                        color="error"
                        onClick={() => deleteCartItem(book.cart_id)}
                        startIcon={<DeleteIcon />}
                      />
                    </td>
                      
                  
                  </tr>
                ))}
            </tbody>
          </table>
          <Button variant="contained" color="primary" style={{ marginTop: "25px" }} onClick={handleClick}>Continue Shopping </Button>
        </div>
      </div>
      {/* <SimpleBottomNavigation /> */}
    
    </>
  );
}

export default MyCart;
