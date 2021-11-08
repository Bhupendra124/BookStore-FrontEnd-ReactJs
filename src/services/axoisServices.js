import axios from "axios";

export default class axiosServices {
  Post = (url,data) => {
        return axios.post(url, data)
    };

  Get = (url,) => {
    return axios.get(url);
  };
  Delete = (url) => {
    return axios.delete(url);
  };
  Put = (url, data) => {
    return axios.put(url, data)
}
}