import React from "react"
import { useSelector } from 'react-redux'
import { Table as BootstrapTable } from "react-bootstrap"

const Table = () => {
  const fileState = useSelector((state) => state.files)

  return (
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
}

export default Table