import axios from "axios";

const BOOK_BASE_URL = "http://localhost:8080/book";

class BookService {

    //getAllBookList

    getAllBooks(){
        return axios.get(`${BOOK_BASE_URL}/all`);
    }

}

export default new BookService();