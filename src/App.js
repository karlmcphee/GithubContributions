// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { data1 } from "./utils/data";
import PieChart from "./components/PieChart";
import { BarChart } from "./components/BarChart";
import Title from "./components/Title";
import Button from 'react-bootstrap/Button';
import {Container, Navbar } from "reactstrap"; //this line here is the solution.
import "./components/css/App.css";
import { StarFill } from 'react-bootstrap-icons';

Chart.register(CategoryScale);

export default function App() {

const requestStats = (input1, input2) => {
  return Promise.resolve(fetch(`https://api.github.com/repos/${input1}/${input2}/stats/contributors`))
}
const [topPerformer, setTopPerformer] = useState("");

  const generateMetrics = () => {
    console.log("test");
    /*
  if(inputs.field1 === null || inputs.field1 === "") {
    inputs.field1 = "Trinea";
  }
  if(inputs.field2 === null || inputs.field2 === "") {
    inputs.field2 = "android-open-project";
  }
  console.log(inputs.field1)
  */
  const promise1 = requestStats(inputs.field1, inputs.field2)
  // parse response into json
  .then(response => response.json())
  .then(data => {
    const labels1 = [];
    const commits = [];
    console.log(data[3])
    var topCommits = 0
    var n2 = 0
    for (let i = 0; i < data.length; i++) {
    const n = data[i].weeks
    if(data[i].weeks[n.length - 1].c > 0) {
      labels1.push(data[i].author.login)
      commits.push(data[i].weeks[n.length - 1].c)
      if (data[i].weeks[n.length - 1].c > topCommits) {
        console.log('test')
        console.log(data[i].author.login)
        topCommits = data[i].weeks[n.length - 1].c
        n2 = data[i].author.login
      }
    }
  }
  setTopPerformer(n2)
  setChartData({labels: labels1, 
  datasets: [
    {
      label: "Contributions made by user",
      data: commits.map((commit) => commit),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0"
      ],
      borderColor: "black",
      borderWidth: 2
      }]})
  });
  }



  const [inputs,setInputs] = useState({
    field1: 'freeCodeCamp',
    field2: 'freeCodeCamp'
  });
 
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  })
    /*
    labels: data1.map((data) => data.year), 
    datasets: [
      {
        label: "Contributions Made By User ",
        data: data1.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
        }]});
        */
 
  return (
    <div style={{backgroundColor: 'lightblue', minHeight: '100%'}}>
    <div>
      <Title />
    </div>
    <div className="gitInputs" style={{textAlign: "center", margin: '20px'}}>
    <h3>Enter a repo and owners here.</h3>
    <input key="field1" name="field1" onChange={({target}) => setInputs(state => ({...state,field1:target.value}))} value={inputs.field1}/>
    <input key="field2" name="field2" onChange={({target}) => setInputs(state => ({...state,field2:target.value}))} value={inputs.field2}/><br />
    <Button variant="primary" onClick={generateMetrics}>Click for repo statistics</Button>
    </div>{chartData.labels.length > 0 ?
    <div style={{height: '100px', textAlign: 'center'}} >
      <p>Top Contributor:</p>
      {topPerformer != "" ? <div><StarFill color="gold" size={16}/>{topPerformer}</div> : "No commits registered." }
    <BarChart chartData={chartData} />
    <PieChart chartData={chartData} />
    </div> : <div style={{color: "royalblue"}}></div>}
    </div>
  );
}