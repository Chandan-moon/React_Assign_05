
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import AddBook from "./AddBook";
import { addBook, removeBook } from "../store/bookSlice";



function Header() {


    const bookItems = useSelector((store) => store.library.books);


    const dispatch = useDispatch();


    //  console.log(bookItems[0].title);






    return (

        <div className="heading">

            <div className="header-logo">📚 Online Library</div>

            <div className="link">

                <Link to="/"  className="link-tab">
                    Home
                </Link>
                <Link to="/cart" className="link-tab">
                    Add Books
                </Link>
                <Link to="/books/all" className="link-tab">
                    BrowseBook
                </Link>

            </div>


        </div>

    )

}

export default Header;