import { useState } from 'react'
import './App.css';

const Button = ({handelClick, text}) => (
  <>
    <button onClick={handelClick}>{text}</button>
  </>
)
const StatisticsLine = ({text, value}) => (
  <table>
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  </table>
)

const Statistics = (props) => {
  const all = props[0] + props[1] + props[2];
  const average = (props[0]-props[2])/all || 0
  const positive = (props[0]/all) * 100 || 0
  return (
          <>
          <StatisticsLine text={"good"} value={props[0]}/>
          <StatisticsLine text={"neutral"} value={props[1]}/>
          <StatisticsLine text={"bad"} value={props[2]}/>
          <StatisticsLine text={"all"} value={all}/>
          <StatisticsLine text={"average"} value={average}/>
          <StatisticsLine text={"positive"} value={positive + "%"}/>
          </>
        )
}
const Display = (props) => {
  if (props[0] + props[1] + props[2] === 0){
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <Statistics {...props}/>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <Button text={"good"} handelClick={() => setGood(good + 1)}/>
        <Button text={"neutral"} handelClick={() => setNeutral(neutral + 1)}/>
        <Button text="bad" handelClick={() => setBad(bad + 1)} />
      <h2>statistics</h2>
        <Display {...[good, neutral, bad]}/>
    </div>
  )
}

export default App
