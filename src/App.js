import React, { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import EditModal from './components/EditModal';
import './styles/App.css';

function App() {
  const [filter, setFilter] = useState('all');
  const [selectedBook, setSelectedBook] = useState(null);
  const [editBook, setEditBook] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return ( 
    <div className="app-container">
      <header className="app-header">
        <h1>Bhati Library</h1>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle light/dark mode"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <main className="app-main">
        <div className="left-panel">
          <BookForm />
          <div className="filters">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
            <button className={filter === 'read' ? 'active' : ''} onClick={() => setFilter('read')}>Read</button>
            <button className={filter === 'unread' ? 'active' : ''} onClick={() => setFilter('unread')}>Unread</button>
          </div>
          <BookList
            filter={filter}
            onSelect={book => setSelectedBook(book)}
            onEdit={book => setEditBook(book)}
          />
        </div>

        <div className="right-panel">
          <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />
        </div>
      </main>

      {editBook && <EditModal book={editBook} onClose={() => setEditBook(null)} />}

      <footer className="app-footer">
        <small>Made with ❤️ using React + Redux Toolkit</small>
      </footer>
    </div>
  );
}

export default App;
