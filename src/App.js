import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Login from './components/Login';
import UserList from './components/UserList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store} >
      <Router>
      <div className="App">
     {/* <Login /> */}
     {/* <UserList /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/userlist" component={UserList} />
    </div>
      </Router>
      
    </Provider>
    
  );
}

export default App;
