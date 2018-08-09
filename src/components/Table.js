import React, { Component } from "react";
import "../App.css";


class Table extends Component{
  render(){
    let clients = this.props.clients;

    //**** Using higher order function .map() we created an array of table data and implement into <table>
    //*** Styling can be changed and placed differently.

    let tableBody = clients.map((client, i)=>{
      return (
        <tr key={i}>
          <td>{client.name}</td>
          <td>{client.gender}</td>
          <td>{client.age}</td>
          <td>{client.citizenship}</td>
          <td>{client.language}</td>
          <td>{client.marital_status}</td>
          <td>{client.visa}</td>
        </tr>
        )
    })
    return(
      <div className="table-wrapper-scroll-y">
        <table id="dtVerticalScrollExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th className="th-sm">Name
              </th>
              <th className="th-sm">Gender
              </th>
              <th className="th-sm">Age
              </th>
              <th className="th-sm">Citizenship
              </th>
              <th className="th-sm">Language
              </th>
              <th className="th-sm">Marital Status
              </th>
              <th className="th-sm">Visa
              </th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>

        </table>
      </div>
      )
  }
}

export default Table
