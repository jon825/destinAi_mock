import React, { Component } from "react";
import "../App.css";


class Table extends Component{
  render(){
    let clients = this.props.clients;

    //**** Using higher order function .map() we created an array of table data and implement into <table>
    //*** Styling can be changed and placed differently.

    let tableBody = clients.map((x, i)=>{
      return (
        <tr key={i}>
          <td>{x.name}</td>
          <td>{x.gender}</td>
          <td>{x.age}</td>
          <td>{x.citizenship}</td>
          <td>{x.language}</td>
          <td>{x.marital_status}</td>
          <td>{x.visa}</td>
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
