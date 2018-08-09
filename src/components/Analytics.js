import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";
import Table from "./Table";
import { scaleLinear } from "d3-scale";
import geography from "../world-110m.json";
// import where from "node-where";
import "../App.css";

class Analytics extends Component {
  constructor() {
    super();
    this.state = {
      barGraphData: []
    };

    // this.getIs = this.getIs.bind(this);
    // this.createPromiseList = this.createPromiseList.bind(this);
  }

  componentDidMount() {
    //**** small issue... Analytics component is rendered before the data is passed trough the props.
    //**** Bar chart and Bubble Map initialized before data is passed here from App.js and into props.
    //**** issue is with lifecycle


    let clients = this.props.clients;
    let citizen = [];
    clients = clients
      .map(x => {
        return x.citizenship;
      })
      .reduce((acc, el) => {
        acc[el] === undefined ? (acc[el] = 1) : ++acc[el];
        return acc;
      }, {});
    let citizenship = Object.keys(clients);
    let count = Object.values(clients);
    for (let i = 0; i < citizenship.length; i++) {
      citizen.push({
        country: citizenship[i],
        count: count[i]
      });
    }
    this.setState({
      barGraphData:citizen
    })
    // const list = this.createPromiseList(citizen);

    //**** Promise is created to get the coordinates of every countries the clients are from "node-where" module
    //**** then setState with coordinates into data for Bubble Map Use



    // Promise.all(list).then(location => {
    //   for (let i = 0; i < location.length; i++) {
    //     citizen[i].coordinates = [
    //       location[i].attributes.lng,
    //       location[i].attributes.lat
    //     ];
    //   }
      // this.setState({
      //   barGraphData: citizen
      // });
    // });
  }

  // getIs(str) {
  //   return new Promise((resolve, reject) => {
  //     where.is(str, (err, result) => {
  //       if (err) {
  //         return reject(err);
  //       }
  //       resolve(result);
  //     });
  //   });
  // }


  // createPromiseList(arrayOfPeople) {
  //   return arrayOfPeople.map(person => {
  //     console.log(person);
  //     return this.getIs(person.country);
  //   });
  // }



  render() {
    let barChartData;
    let label;
    let data;
    let clients = this.state.barGraphData;

    //***** list of clients are stored alphabetically based on their citizenship from A~Z


    clients.sort((a, b) => {
      if (a.country < b.country) {
        return -1;
      }
      if (a.country > b.country) {
        return 1;
      }
      return 0;
    });
    label = clients.map(x => {
      return x.country;
    });
    data = clients.map(x => {
      return x.count;
    });


    //*****cityScale is used for the bubbles based on number of clients from different countries


    const cityScale = scaleLinear()
      .domain([0, 30])
      .range([1, 25]);

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 12
            }
          }
        ]
      }
    };

    //*****barChartData is used for barChart based on number of clients from different countries


    barChartData = {
      datasets: [
        {
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          data: data,
          label: "Client's Citizenship"
        }
      ],
      labels: label
    };
    return (
      <div className="container-fluid">
        <div className="row test2">
          <div className="col-md-8">
            <h1>this is the ANALYTICS page</h1>
          </div>
        </div>
        <div className="row">

          {/****
            BarChart is used from "react-chartjs-2" can use different charts from node module and styled differenlty
            Chart displays only countries that are found from data and count is based off how many clients there are from each and respected countries
          ****/}

          <Bar data={barChartData} options={options} />


        </div>
        {/*
        <div className="row">
          <ComposableMap
            projectionConfig={{ scale: 205 }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto"
            }}
          >
            <ZoomableGroup center={[0, 20]} disablePanning>
              <Geographies geography={geography}>
                {(geographies, projection) =>
                  geographies.map(
                    (geography, i) =>
                      geography.id !== "ATA" && (
                        <Geography
                          key={i}
                          geography={geography}
                          projection={projection}
                          style={{
                            default: {
                              fill: "#ECEFF1",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none"
                            },
                            hover: {
                              fill: "#ECEFF1",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none"
                            },
                            pressed: {
                              fill: "#ECEFF1",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none"
                            }
                          }}
                        />
                      )
                  )
                }
              </Geographies>
              <Markers>
                {clients.map((city, i) => (
                  <Marker key={i} marker={city}>
                    <circle
                      cx={0}
                      cy={0}
                      r={cityScale(city.count)}
                      fill="rgba(255,87,34,0.8)"
                      stroke="#607D8B"
                      strokeWidth="2"
                    />
                  </Marker>
                ))}
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
        </div>

              */}

        <div className="row">

        {/*****
          API data is sent again from App.js to Table component as props for better handling
        *****/}

          <Table clients={this.props.clients} />
        </div>
      </div>
    );
  }
}

export default Analytics;
