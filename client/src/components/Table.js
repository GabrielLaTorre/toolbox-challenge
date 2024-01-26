import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from "../redux/filesSlice"
import { Table as BootstrapTable } from "react-bootstrap"
import useAxios from "../hooks/useAxios"

const Table = () => {
  const {response, loading, error} = useAxios()
  const fileState = useSelector((state) => state.files)
  const dispatch = useDispatch()

  useEffect(() => {
    if (response !== null) {
      dispatch(getFiles(response))
    }
}, [response])

  return (
      loading ? (
          <p>Loading...</p>
      ) : error ? (
          <p>{error.message}</p>
      ) : (
        <BootstrapTable striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        {
            <tbody>
              {fileState.files.map((element) =>
                element.lines.map(file => 
                  <tr key={file.hex}>
                    <td>{element.file}</td>
                    <td>{file.text}</td>
                    <td>{file.number}</td>
                    <td>{file.hex}</td>
                  </tr>
                )
              )
              }
            </tbody>
        }
      </BootstrapTable>
      )
  )
}

export default Table