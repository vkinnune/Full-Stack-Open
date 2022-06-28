import { useState } from 'react'

const Button = ({ str, fun }) => {
	return (
		<button onClick={fun}>{str}</button>
	)
}

const StatisticLine = ({ text, value, precent }) => {
	if (precent === true)
	return (
		<>
		<tr>
		<td>{text}</td>
		<td>{value} %</td>
		</tr>
		</>
	)
	return (
		<>
		<tr>
		<td>{text}</td>
		<td>{value}</td>
		</tr>
		</>
	)
}

const Statistics = ({ good, neutral, bad }) => {
  const all = bad + neutral + good
  const avarage = (good - bad) / all
  const positive = (good / all) * 100
  if (all === 0)
	return (<p>no feedback given</p>)

  return (
    <div>
	  <h2>statistics</h2>
	  <table>
	  <tbody>
	<StatisticLine text="good" value ={good} />
	<StatisticLine text="neutral" value ={neutral} />
	<StatisticLine text="bad" value ={bad} />
	<StatisticLine text="all" value ={all} />
	<StatisticLine text="avarage" value ={avarage} />
	<StatisticLine text="positive" value ={positive} precent={true}/>
	  </tbody>
	  </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseBad = () =>
	setBad(bad + 1)
  const increaseGood = () =>
	setGood(good + 1)
  const increaseNeutral = () =>
	setNeutral(neutral + 1)

  return (
    <div>
	  <h1>give feedback</h1>
	  <Button str="Good" fun={increaseGood} />
	  <br />
	  <Button str="Neutral" fun={increaseNeutral} />
	  <br />
	  <Button str="Bad" fun={increaseBad} />
	  <br />
	  <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
