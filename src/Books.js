import React from 'react';
import BookItem from './BookItem';

const books = [
  {
    title: 'Hello JS',
    author: 'Bello Nello',
    status: 'delete'
  },
  {
    title: 'One JS',
    author: 'Xolo Nello',
    status: 'active'
  },
  {
    title: 'Thanks JS',
    author: 'litto ketto',
    status: 'pending'
  }
]

// Function Component, Dumb component, REpresentinal Compoent
const Books = () => {
  const authorDetails = (author) => {
    alert(`I am ${author}`)
  }
  return (
    <div>
      <h1>Book list</h1>
      <ul>
        <li>
          <BookItem
            title="My React book"
            author="Tim Kim Jim"
            status="active"
            headleClick={authorDetails}
          />
        </li>
        <li>
          <BookItem
            title="Book2 title"
            author="Kim Jun"
            status="delete"
            headleClick={authorDetails}
          />
        </li>
      </ul>
    </div>
  )
}

export default Books;