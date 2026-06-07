
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
            <div className="header-link">

                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/cart">
                    <li>Add Books</li>
                </Link>
                <Link to="/books/all">
                    <li>BrowseBook</li>
                </Link>

                 {/* <li>Cart{bookItems.length}</li> */}


            </div>


        </div>

    )

}

export default Header;