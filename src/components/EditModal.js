import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBook } from '../features/books/bookSlice';
import '../styles/EditModal.css';

export default function EditModal({ book, onClose }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(book.title || '');
  const [author, setAuthor] = useState(book.author || '');
  const [desc, setDesc] = useState(book.desc || '');
  const [read, setRead] = useState(!!book.read);

  const onSave = e => {
    e.preventDefault();
    if (!title.trim()) return alert('Title required');
    dispatch(updateBook({ id: book.id, changes: { title, author, desc, read } }));
    onClose();
  };

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={e => e.stopPropagation()}>
        <form onSubmit={onSave}>
          <h3>Edit Book</h3>
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
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
