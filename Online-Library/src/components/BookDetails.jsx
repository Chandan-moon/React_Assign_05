


import { useSelector } from "react-redux"

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";





function BookDetails() {


  const bookItems = useSelector((store) => store.library.books)


  const params = useParams();


  const book = bookItems.filter((book) => book.id == params.id);






  return (

    <div>


      <div className="booklist-card">

        {
          book.map((book) => (

            <div className="book-card2" key={book.id}>

              <h2>{book.title}</h2>
              <h4>{book.author}</h4>
              <h3 className="card-cat">{book.category}</h3>
              <p>{book.description.slice(0, 70)}</p>
              <h2>⭐{book.rating}</h2>

              <Link to="/books/all" className="back-btn">
                ← Back to Browse
              </Link>

            </div>

          ))}




      </div>




    </div>

  )

}

export default BookDetails
