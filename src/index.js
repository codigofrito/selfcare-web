import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import Firebase, { FirebaseContext } from './service/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={Firebase}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
