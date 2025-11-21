import '../styles/BookDetails.css';

export default function BookDetails({ book, onClose }) {
  if (!book) return <div className="book-details empty">Select a book to see details</div>;

  return (
    <div className="book-details">
      <div className="details-header">
        <h2>{book.title}</h2>
        <button className="close" onClick={onClose}>Close</button>
      </div>
      <p><strong>Author:</strong> {book.author || '—'}</p>
      <p><strong>Status:</strong> {book.read ? 'Read' : 'Unread'}</p>
      <p className="desc"><strong>Description:</strong><br/>{book.desc || '—'}</p>
      <p className="meta"><small>Added: {new Date(book.createdAt).toLocaleString()}</small></p>
    </div>
  );
}
