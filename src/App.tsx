import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import routes from 'routes';

import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    );
  }
}

export default App;
