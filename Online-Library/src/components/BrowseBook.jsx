
// import { useParams } from "react-router-dom"

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";




function BrowseBook() {



  const Books = useSelector((store) => store.library.books);




  return (
    <div>

      <h1>Browse Books — all</h1>

      <input type="text" placeholder="Search by author or title" />


      <div className="booklist-card">

        {


          Books.map((book) => (

            <div className="book-card-browse" key={book.id}>

              <h2>{book.title}</h2>
              <h4>{book.author}</h4>
              <h3 className="card-cat">{book.category}</h3>
              <p>{book.description.slice(0, 70)}</p>
              {/* <h2></h2> */}
              <span>

                <Link to={`/book/${book.id}`} key={book.id} className="view-more">
                  View More
                </Link>

              </span>

            </div>

          ))

        }

      </div>



    </div>
  )

}


export default BrowseBook