import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Hackathons from './components/Hackathons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/hackathons" element={<Hackathons />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
