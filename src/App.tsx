import React ,{useState} from 'react';
import CommentsGrid from "./Commnets";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";

function App() {
  return (
  <ErrorBoundary>
    <div className="App">
      <Header/>
      <CommentsGrid/>
    </div>
  </ErrorBoundary>
  );
}

export default App;
