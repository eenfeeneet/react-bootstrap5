import React from 'react';
import './App.scss';

function App() {
  return (
    <div className='container vh-100 bg-secondary'>
      <div className='card border-secondary mb-3'>
        <div className='card-header'>Header</div>
        <div className='card-body text-secondary'>
          <h5 className='card-title'>Secondary card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
