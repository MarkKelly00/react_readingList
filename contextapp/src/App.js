import React from 'react';
import BookList from './components/BookList';
import BookContextProvider from './context/BookContext';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <AuthContextProvider>
      <Navbar />
      <BookContextProvider >
      <BookList />
      </BookContextProvider>
      <ThemeToggle />
      </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
