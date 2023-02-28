import React from "react";
import Layout from "../src/Layouts/Home";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
