import React from "react";

import { Sidebar } from "components"
import AppRoutes from "Router/AppRoutes";

import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.app}>
      <Sidebar />     
      <AppRoutes />
    </div>
  );
}

export default App;
