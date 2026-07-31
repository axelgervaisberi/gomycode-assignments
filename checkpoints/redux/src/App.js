import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import { store } from './redux/store';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import './App.css';

/**
 * Root App Component wrapped with Redux Provider
 */
function App() {
  return (
    <Provider store={store}>
      <div className="App min-vh-100 py-5">
        <Container style={{ maxWidth: '800px' }}>
          {/* Header */}
          <div className="text-center text-white mb-5">
            <h1 className="display-4 fw-bold mb-2">⚡ Redux ToDo App</h1>
            <p className="lead text-light opacity-75">
              Manage your global application state with Redux Toolkit
            </p>
          </div>

          {/* Addtask Component */}
          <Addtask />

          {/* ListTask Component */}
          <ListTask />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
