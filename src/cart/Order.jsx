import { Button } from '@mui/material'
import React from 'react'
import orderPlacedImage from '../assets/order.jpg'
import Appbar from '../AppBar/appBar'
import { useHistory } from "react-router-dom";

function PlaceOrder() {

    let history = useHistory();

    function handleClick() {
        history.push("/image");
      }

    return (
        <div>
            <Appbar />
            <div className="order-placed-container" style={{ marginLeft: "20%", marginTop: "300px", color:"red" }}>
                <div className="upper-image-div">
                    {/* <img className="order-img-div" src={celebration}></img> */}
                </div>
                <div className="order-info-div">
                    <h2>Order placed Succesfully</h2>
                </div>
                <div>
                    <p className="order-info">Hurray!!!! Your Order Is Confirmed<br />
                        your order id is Product  is on the way<br />
                        for Further Communication Contact us On
                    </p>
                </div>
                <div className="table-div">
                    <table>
                        <tbody>
                            <tr className="table-coloumn">
                                <th>Email us</th>
                                <th>Contact us</th>
                                <th>Address</th>
                            </tr>
                            <tr className="table-data">
                                <td>wadekar.bhupendra@gmail.com</td>
                                <td>+91-9893902047</td>
                                <td>XYZ near PQY,Amla</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Button variant="contained" color="primary" style={{ marginTop: "25px" }} onClick={handleClick}>Continue Shopping </Button>
            </div>
        </div>
    )
}

export default PlaceOrder
