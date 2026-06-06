
import { Link } from "react-router-dom";



function Header() {


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
                <Link to="/bookBrowse">
                    <li>BrowseBook</li>
                </Link>


            </div>

        </div>

    )

}

export default Header;