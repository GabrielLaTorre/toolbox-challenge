import React, { useState, useEffect } from "react"
import { Table as BootstrapTable } from "react-bootstrap"
import useAxios from "../hooks/useAxios"

const Table = () => {
  const [files, setFiles] = useState([])
  const {response, loading, error} = useAxios()

  useEffect(() => {
    if (response !== null) {
      setFiles(response)
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
              {files.map((element) =>
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