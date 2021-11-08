import axios from "axios";

const CART_BASE_URL = "http://localhost:8080/cart";

class CartService {

    //addToCart
    addToCart(book){
        return axios.post(`${CART_BASE_URL}/add`,book);
    }
    
    //getAllCartBookList
    getAllCartItem(token){
        return axios.get(`${CART_BASE_URL}/get/${token}`);
    }

    //removeBookFromCart
    removeBookFromCart(id){
        return axios.delete(`${CART_BASE_URL}/remove/${id}`)
    }

}

export default new CartService();