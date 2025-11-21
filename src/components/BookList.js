import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import '../styles/BookList.css';

export default function BookList({ filter = 'all', onSelect, onEdit }) {
  const books = useSelector(state => state.books.list);

  const filtered = books.filter(b => {
    if (filter === 'read') return b.read;
    if (filter === 'unread') return !b.read;
    return true;
  });

  if (!filtered.length) return <div className="empty">No books to show</div>;

  return (
    <ul className="book-list">
      {filtered.map(book => (
        <BookItem key={book.id} book={book} onSelect={onSelect} onEdit={onEdit} />
      ))}
    </ul>
  );
}
