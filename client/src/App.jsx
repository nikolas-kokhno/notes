import React from 'react';
import { AddButton, EmptyData } from './components';

const App = () => {
  return (
    <div className="app">

      <div className="app__header">
        <h2>simple todo list</h2>
        <h4>from ruby garage</h4>
      </div>
      
      <EmptyData />

      <div className="app__footer">
        <AddButton />
        <span className="app__footer-copyright">
          © Ruby Garage
        </span>
      </div>

    </div>
  )
}

export default App;