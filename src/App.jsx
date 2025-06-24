import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Store Front is Working</h1>
        <p>This is the homepage content.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
