

import { createSlice } from '@reduxjs/toolkit';

// Initial dummy books data
const initialState = {
  books: [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      description: 'A novel about the American dream in the Roaring Twenties.',
      rating: 4.5
    },
    {
      id: '2',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      description: 'A brief history of humankind.',
      rating: 4.8
    },
    {
      id: '3',
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
      description: 'A mythical and emotionally charged hero’s journey set on a desert planet.',
      rating: 4.7
    },
    {
      id: '4',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      description: 'A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.',
      rating: 4.9
    },
    {
      id: '5',
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      category: 'Non-Fiction',
      description: 'A detailed exploration of the two systems that drive the way we think—one fast and emotional, the other slow and logical.',
      rating: 4.6
    },
    {
      id: '6',
      title: 'Neuromancer',
      author: 'William Gibson',
      category: 'Sci-Fi',
      description: 'The matrix is a world within a world, a consensus hallucination, the backdrop for the ultimate heist.',
      rating: 4.3
    },
    {
      id: '7',
      title: 'Educated',
      author: 'Tara Westover',
      category: 'Fiction',
      description: 'An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
      rating: 4.7
    },
    {
      id: '8',
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      category: 'Sci-Fi',
      description: 'A shocking psychological thriller of a woman’s act of violence against her husband—and the therapist obsessed with uncovering her motive.',
      rating: 4.4
    }
  ]
};

const booksSlice = createSlice({
  name: 'library',
  initialState,
  reducers: {

    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },

    removeBook: (state, action) => {

      state.books = state.books.filter((book) => book.id !== action.payload);

    }
  }
});


export const { addBook, removeBook } = booksSlice.actions;


export default booksSlice.reducer;




// 
