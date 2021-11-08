import Axios from "../services/axoisServices";
const baseUrl = "http://localhost:8080/"
const axios = new Axios();
//http://localhost:8080/user/registration
export default class userServices {
    SignUp = (data) => {
        return axios.Post(`${baseUrl}/registration`, data);
    };

    SignIn = (data) => {
        return axios.Post(`${baseUrl}/user/login`, data);
    }

    
   
}
