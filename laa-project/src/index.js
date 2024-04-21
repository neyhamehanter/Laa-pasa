import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Home from './Pages/Home'; 
import { Provider } from "react-redux"; 
import {store,persistor }from "./redux/store";
import{PersistGate} from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
      <App />
      </PersistGate>
      {/* <Home/>*/}
    </Provider>
  </React.StrictMode>
);
