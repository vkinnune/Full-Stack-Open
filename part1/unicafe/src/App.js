import { useState } from 'react'

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
  const avarage = (good - bad) / (good + bad + neutral)

  return (
    <div>
      <button onClick={increaseBad}>Bad</button>
	  <br />
      <button onClick={increaseGood}>Good</button>
	  <br />
      <button onClick={increaseNeutral}>Neutral</button>
	  <br />
      <p>bad {bad}</p>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>avarage {avarage}</p>
    </div>
  )
}

export default App
