import React ,{useState} from 'react';
import CommentsGrid from "./CommentsGrid";
import ErrorBoundary from "./ErrorBoundary";

const IMAGE_URL='https://global-uploads.webflow.com/5d53975001f72a80a5fdf1f2/5f0b178d3ebbaecd6db65217_Steps%20Logo.svg'
function App() {






  return (
  <ErrorBoundary>
    <div className="App">
      <img src={IMAGE_URL} className="App-logo" alt="logo" />
      <CommentsGrid/>
    </div>
  </ErrorBoundary>
  );
}

export default App;
