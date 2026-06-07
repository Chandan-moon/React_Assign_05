

import { useSelector } from "react-redux";

import { useState } from "react";
import { Link } from "react-router-dom";




function Home() {


    const bookItems = useSelector((store) => store.library.books);

    //console.log(bookItems);

    const filterRating = bookItems.filter(data => data.rating > 4.5)


    const [fetchData, setFetchData] = useState(filterRating);


    const fliterFiction = bookItems.filter(data => data.category == "Fiction");
    const fliterNonFiction = bookItems.filter(data => data.category == "Non-Fiction");
    const fliterSciFiction = bookItems.filter(data => data.category == "Sci-Fi");


    const [show, setShow] = useState(false);




    return (

        <div className="parent-head">

            <div className="home-heading">

                <h1>Welcome to the Webpage</h1>
                <p>Discover worlds, learn histories, and expand your mind.</p>

            </div>

            <h2 className="home-subheading">Browse by Category</h2>

            <div className="home-title" onClick={() => setShow(true)}>

                <button onClick={() => setFetchData(fliterFiction)}>Fiction</button>
                <button onClick={() => setFetchData(fliterNonFiction)}>Non-Fiction</button>
                <button onClick={() => setFetchData(fliterSciFiction)}>Sci-Fi</button>
                <button onClick={() => setFetchData(bookItems)}>All Books</button>

                <h2 className="home-popular"

                    style={!show ? { display: "block" } : { display: "none" }}

                >

                    Popular Books</h2>

                <div className="booklist-card">

                    {
                        fetchData.map((book) => (

                            <Link to={`/book/${book.id}`} key={book.id} className="link-line">

                                <div className="book-card" key={book.id}>

                                    <h2>{book.title}</h2>
                                    <h4>{book.author}</h4>
                                    <h3 className="card-cat">{book.category}</h3>
                                    <p>{book.description.slice(0, 70)}</p>
                                    <h2>⭐{book.rating}</h2>


                                </div>

                            </Link>

                        ))}

                </div>

            </div>

        </div>


    )


}

export default Home;








// style={fetchData == filterRating ? { display: "block" } : { display: "none" }}
