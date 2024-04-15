import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Home from './Pages/Home'; 
import { Provider } from "react-redux"; 
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Home/> Uncomment if Home is needed instead of App */}
    </Provider>
  </React.StrictMode>
);
