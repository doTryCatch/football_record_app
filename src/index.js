import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Layout from './utils/layout';

import Add from './components/add'
import Dashboard from "./components/dashboard"
import Update from "./components/update"
import Delete from "./components/delete"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
          <Route path="/Add" element={<Add/>} />
          <Route path="/Update" element={<Update/>} />
          <Route path="/Delete" element={<Delete/>} />
       
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
