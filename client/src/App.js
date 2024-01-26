import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from 'react-redux'
import React, { useEffect } from "react";

import useAxios from "./hooks/useAxios"
import { getFiles } from "./redux/filesSlice"
import Table from './components/Table'


const App = () => {
  const {response, loading, error} = useAxios()
  const dispatch = useDispatch()

  useEffect(() => {
    if (response !== null) {
      dispatch(getFiles(response))
    }
  }, [response])


  return (
    <div className="container">
      <h1>React App</h1>
      {
        loading ? (
          <p>Loading...</p>
      ) : error ? (
          <p>{error.message}</p>
      ) : (
        <Table/>
      )
      }
    </div>
  );
};

export default App;
