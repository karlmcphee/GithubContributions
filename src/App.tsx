// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from "./components/PieChart";
import { BarChart } from "./components/BarChart";
import Title from "./components/Title";
import Button from 'react-bootstrap/Button';
import "./components/css/App.css";
import Star from './components/Star';
import axios from 'axios'


Chart.register(CategoryScale);

export default function App() {

  interface chartObject {
    labels?: any,
    datasets?: any
    }

const [topPerformer, setTopPerformer] = useState("");

  const generateMetrics = async () => {
    let labels1 : Array<string> = [];

    try {

    const response = await axios.get(`https://api.github.com/repos/${inputs.field1}/${inputs.field2}/stats/contributors`) 
    const data = response.data
    const commits = [];
    var topCommits = 0
    var n2 = ""
    for (let i = 0; i < data.length; i++) {
    const n = data[i].weeks
    if(data[i].weeks[n.length - 1].c > 0) {
      labels1.push(data[i].author.login)
      commits.push(data[i].weeks[n.length - 1].c)
      if (data[i].weeks[n.length - 1].c > topCommits) {
        topCommits = data[i].weeks[n.length - 1].c
        n2 = data[i].author.login
      }
    }
  }
  setTopPerformer(n2)
  console.log("hiii")
  console.log(n2)
  console.log("whigwegohg")
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
  } catch (err) {
    console.error(err)
  };
  }

  const [inputs,setInputs] = useState({
    field1: 'freeCodeCamp',
    field2: 'freeCodeCamp'
  });
 
  const [chartData, setChartData] = useState<chartObject>({
    labels: [],
    datasets: []
  })
 console.log("ghowghghhghgg")
 console.log(topPerformer)
  return (
    <div style={{backgroundColor: 'lightblue', minHeight: '100%'}}>
    <div>
      <Title />
    </div>
    <div className="gitInputs" style={{textAlign: "center", margin: '20px'}}>
    <h3>Enter a repo and owner here.</h3>
    <input key="field1" name="field1" onChange={({target}) => setInputs(state => ({...state,field1:target.value}))} value={inputs.field1}/>
    <input key="field2" name="field2" onChange={({target}) => setInputs(state => ({...state,field2:target.value}))} value={inputs.field2}/><br />
    <Button variant="primary" onClick={generateMetrics}>Click for repo statistics</Button>
    </div>{chartData.labels.length > 0 ?
    <div style={{height: '100px', textAlign: 'center'}} >
      <p>Top Contributor:</p>
      <Star topPerformer ={topPerformer} />
    <BarChart chartData={chartData} />
    <PieChart chartData={chartData} />
    </div> : <div style={{color: "royalblue"}}></div>}
    </div>
  );
}