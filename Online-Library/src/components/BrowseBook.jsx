
// import { useParams } from "react-router-dom"

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { useState } from "react";




function BrowseBook() {



  const Books = useSelector((store) => store.library.books);


  const [searchedTerm, setSearchedTerm] = useState('');

  const filteredBooks = Books.filter(book => {


    const matchesSearch = book.title.toLowerCase().includes(searchedTerm.toLowerCase()) ||

      book.author.toLowerCase().includes(searchedTerm.toLowerCase());


    return matchesSearch;


  })





  return (
    <div>

      <h1>Browse Books — all</h1>

      <input type="text" placeholder="Search by author or title"

        onChange={(e) => setSearchedTerm(e.target.value)}

      />


      {

        filteredBooks.length > 0 ? (


          <div className="booklist-card">

            {filteredBooks.map((book) => (

              <div className="book-card-browse" key={book.id}>

                <h2>{book.title}</h2>
                <h4>{book.author}</h4>
                <h3 className="card-cat">{book.category}</h3>
                <p>{book.description.slice(0, 70)}</p>

                <span>

                  <Link to={`/book/${book.id}`} key={book.id} className="view-more">
                    View More
                  </Link>

                </span>

              </div>

            ))}

          </div>


        ) : (<p className="no-results">No books found matching your criteria.</p>)


      }



    </div>
  )

}


export default BrowseBook







