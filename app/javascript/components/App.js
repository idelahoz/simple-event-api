import React from 'react';
import Editor from './Editor';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/events/:id?" component={Editor} />
  </div>
);

export default App;
