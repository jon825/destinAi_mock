import React, { Component } from "react";
import MyProfile from "./MyProfile";
import Clients from "./Clients";
import Messages from "./Messages";
import Calendar from "./Calendar";
import Documents from "./Documents";
import Revenue from "./Revenue";
import Analytics from "./Analytics";
import Ratings from "./Ratings";
import Help from "./Help";
import request from "axios";
import "../App.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      content:"MY PROFILE",
      clientsArray:[],
    }
    this.goTo = this.goTo.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);

  }

  goTo(pageName){
    this.setState({
      content:pageName
    })
  }

  componentDidMount(){
    this.fetchAPI();
  }

  fetchAPI(){
    request.get("Some Random API")
      .then(res=>{
        this.setState({
          clientsArray:res.data.results[0].clients
        })
      })
  }

//created a state for content for easy and better handling displaying contents
//App.js is main component and sidebar where data is called and passed in between contents through state and props




  render() {
    let content;
    if (this.state.content === "MY PROFILE") {
      content = <MyProfile />;
    } else if (this.state.content === "CLIENTS") {
      content = <Clients />;
    } else if (this.state.content === "MESSAGES") {
      content = <Messages />;
    } else if (this.state.content === "CALENDAR") {
      content = <Calendar />;
    } else if (this.state.content === "DOCUMENTS") {
      content = <Documents />;
    } else if (this.state.content === "REVENUE") {
      content = <Revenue />;
    } else if (this.state.content === "ANALYTICS") {
      content = <Analytics clients={this.state.clientsArray}/>;
    } else if (this.state.content === "RATINGS") {
      content = <Ratings />;
    } else if (this.state.content === "HELP") {
      content = <Help />;
    }


    return (
      <div className="App">
        <div
          id="main-wrapper"
          data-navbarbg="skin6"
          data-theme="light"
          data-layout="vertical"
          data-sidebartype="full"
          data-boxed-layout="full"
        >
        <aside className="left-sidebar" data-sidebarbg="skin5">
          <div className="scroll-sidebar">
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="sidebar-item" onClick={()=>{this.goTo("MY PROFILE")}}>
                  <p className="sidebar-link waves-effect waves-dark sidebar-link">
                    <i className="mdi mdi-av-timer" />
                    <span className="hide-menu">MY PROFILE</span>
                  </p>
                </li>
                <li className="sidebar-item" onClick={()=>{this.goTo("CLIENTS")}}>
                  <p className="sidebar-link waves-effect waves-dark sidebar-link">
                    <i className="mdi mdi-face" />
                    <span className="hide-menu">CLIENTS</span>
                  </p>
                </li>
                <li className="sidebar-item" onClick={()=>{this.goTo("MESSAGES")}}>
                  <p className="sidebar-link waves-effect waves-dark sidebar-link">
                    <i className="mdi mdi-message" />
                    <span className="hide-menu">MESSAGES</span>
                  </p>
                </li>
                <li className="sidebar-item" onClick={()=>{this.goTo("CALENDAR")}}>
                  <p className="sidebar-link waves-effect waves-dark sidebar-link">
                    <i className="mdi mdi-calendar" />
                    <span className="hide-menu">CALENDAR</span>
                  </p>
                </li>
                <li className="sidebar-item" onClick={()=>{this.goTo("DOCUMENTS")}}>
                  <p className="sidebar-link waves-effect waves-dark sidebar-link">
                    <i className="mdi mdi-file-document" />
                    <span className="hide-menu">DOCUMENTS</span>
                  </p>
                </li>
                <li className="sidebar-item" onClick={()=>{this.goTo("REVENUE")}}>
                  <p className="sidebar-link waves-effect waves-dark sidebar-link">
                    <i className="mdi mdi-file" />
                    <span className="hide-menu">REVENUE</span>
                  </p>
                </li>
                <li className="sidebar-item" onClick={()=>{this.goTo("ANALYTICS")}}>
                  <p className="sidebar-link waves-effect waves-dark sidebar-link">
                    <i className="mdi mdi-pulse" />
                    <span className="hide-menu">ANALYTICS</span>
                  </p>
                </li>
                <li className="sidebar-item" onClick={()=>{this.goTo("RATINGS")}}>
                  <p className="sidebar-link waves-effect waves-dark sidebar-link">
                    <i className="mdi mdi-alert-outline" />
                    <span className="hide-menu">RATINGS</span>
                  </p>
                </li>
                <li className="sidebar-item" onClick={()=>{this.goTo("HELP")}}>
                  <p className="sidebar-link waves-effect waves-dark sidebar-link">
                    <i className="mdi mdi-help" />
                    <span className="hide-menu">HELP</span>
                  </p>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
          <div className="page-wrapper">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
