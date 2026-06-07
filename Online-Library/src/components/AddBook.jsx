


import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../store/bookSlice';





function AddBook() {


  const dispatch = useDispatch();

  const navigate = useNavigate();



  // Form State
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });



  // Validation Errors State
  const [errors, setErrors] = useState({});



  // Handle Input Changes
  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });



    // Clear error dynamically as the user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }


  }


  

  // Form Validation Logic
  const validateForm = () => {

    let formErrors = {};

    if (!formData.title.trim()) formErrors.title = 'Title is required';
    if (!formData.author.trim()) formErrors.author = 'Author is required';
    if (!formData.category) formErrors.category = 'Please select a category';
    if (!formData.description.trim()) formErrors.description = 'Description is required';


    const ratingNum = parseFloat(formData.rating);


    if (!formData.rating) { 
      
      formErrors.rating = 'Rating is required';

    } 
    else if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) {

      formErrors.rating = 'Rating must be a number between 0 and 5';

    }


    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;


  }




  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newBook = {
        id: Date.now().toString(),
        title: formData.title,
        author: formData.author,
        category: formData.category,
        description: formData.description,
        rating: parseFloat(formData.rating)
      };

      dispatch(addBook(newBook));
      navigate('/books/all');
    }
  }






  return (

    <div className="add-book-container">


      <h2>Add a New Book</h2>


      <form onSubmit={handleSubmit} className="book-form">

        {/* Title Field */}
        <div className="form-group">

          <label>Title</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`form-input ${errors.title ? 'input-error' : ''}`}
          />

          {errors.title && <span className="error-text">{errors.title}</span>}

        </div>


        {/* Author Field */}
        <div className="form-group">

          <label>Author</label>

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={`form-input ${errors.author ? 'input-error' : ''}`}
          />

          {errors.author && <span className="error-text">{errors.author}</span>}

        </div>


        {/* Category Dropdown */}
        <div className="form-group">

          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`form-input ${errors.category ? 'input-error' : ''}`}
          >
            <option value="">-- Select Category --</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Biography">Biography</option>
            <option value="Thriller">Thriller</option>

          </select>

          {errors.category && <span className="error-text">{errors.category}</span>}

        </div>


        {/* Rating Field */}
        <div className="form-group">

          <label>Rating (0 - 5)</label>

          <input
            type="number"
            step="0.1"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className={`form-input ${errors.rating ? 'input-error' : ''}`}
          />

          {errors.rating && <span className="error-text">{errors.rating}</span>}

        </div>


        {/* Description Field */}
        <div className="form-group">

          <label>Description</label>

          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className={`form-textarea ${errors.description ? 'input-error' : ''}`}
          />

          {errors.description && <span className="error-text">{errors.description}</span>}

        </div>

        <button type="submit" className="submit-btn">Add Book</button>


      </form>


    </div>

  )


}



export default AddBook;