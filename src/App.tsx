import React, { useEffect } from "react";

import { Sidebar } from "components"
import AppRoutes from "routes/AppRoutes";

import styles from "./App.module.css";
import { useAppDispatch } from "store/hooks";
import { getAllCities } from "store/location/cities/actions";

function App() {
  
  return (
    <div className={styles.app}>
      <Sidebar />
      <AppRoutes />
    </div>
  );
}

export default App;
