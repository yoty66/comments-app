import React from 'react';

const IMAGE_URL='https://global-uploads.webflow.com/5d53975001f72a80a5fdf1f2/5f0b178d3ebbaecd6db65217_Steps%20Logo.svg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={IMAGE_URL} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
