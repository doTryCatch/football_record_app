
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Layout from './components/layout';

import Add from './components/addData';
import Update from "./components/updateData"
import Delete from "./components/deleteRecord"


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/Add" element={<Add/>} />
          <Route path="/Update" element={<Update/>} />
          <Route path="/Delete" element={<Delete/>} />
       
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
