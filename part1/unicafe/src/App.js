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
  if (all == 0)
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
const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const increaseBad = () =>
	setBad(bad + 1)
  const increaseGood = () =>
	setGood(good + 1)
  const increaseNeutral = () =>
	setNeutral(neutral + 1)
  const randomSelect = () =>
	setSelected(Math.floor(Math.random() * 7))

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
	  <div>
	  	{anecdotes[selected]}
	  </div>
	<button onClick={randomSelect}>Anecdote</button>
    </div>
  )
}

export default App
