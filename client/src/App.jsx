import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchProjects } from './store/actions/projects';
import { AddButton, ProjectList } from './components';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <div className="app">

      <div className="app__header">
        <h2>simple todo list</h2>
        <h4>from ruby garage</h4>
      </div>
    
      <ProjectList />

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