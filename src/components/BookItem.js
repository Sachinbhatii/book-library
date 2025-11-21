import { useDispatch } from 'react-redux';
import { removeBook, toggleRead } from '../features/books/bookSlice';
import '../styles/BookItem.css';

export default function BookItem({ book, onSelect, onEdit }) {
  const dispatch = useDispatch();

  return (
    <li className="book-item">
      <div className="book-main" onClick={() => onSelect(book)}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </div>

      <div className="book-actions">
        <button onClick={() => dispatch(toggleRead(book.id))}>
          {book.read ? 'Unread' : 'Read'}
        </button>
        <button onClick={() => onEdit(book)}>Edit</button>
        <button onClick={() => {
          if (window.confirm('Delete this book?')) dispatch(removeBook(book.id));
        }}>Delete</button>
      </div>
    </li>
  );
}
