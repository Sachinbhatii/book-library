import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../features/books/bookSlice';
import '../styles/BookForm.css';

export default function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [desc, setDesc] = useState('');
  const [read, setRead] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return alert('Title is required');
    dispatch(addBook({ title, author, desc, read }));
    setTitle(''); setAuthor(''); setDesc(''); setRead(false);
  };

  return (
    <form className="book-form" onSubmit={onSubmit}>
      <h2>Add Book</h2>
      <label>
        Title
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Author
        <input value={author} onChange={e => setAuthor(e.target.value)} />
      </label>
      <label>
        Description
        <textarea value={desc} onChange={e => setDesc(e.target.value)} />
      </label>
      <label className="checkbox">
        <input type="checkbox" checked={read} onChange={e => setRead(e.target.checked)} />
        Mark as read
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
