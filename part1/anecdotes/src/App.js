import { useState } from 'react'

const MostVotes = ( { anecdotes, votes } ) => {
	let largest_index = 0
	let i = 0
	while (i < 7)
	{
		if (votes[largest_index] < votes[i])
			largest_index = i;
		i++;
	}
	console.log(anecdotes)
	return (
	  <div>
		<>
		<h1>Most Voted Anecdote</h1>
		<p>{anecdotes[largest_index]}</p>
		</>
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
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))
  const randomSelect = () =>
	setSelected(Math.floor(Math.random() * anecdotes.length))
	let tmp = [...votes]
  return (
    <div>
	  <h1>Anecdote of the day</h1>
	<button onClick={randomSelect}>Anecdote</button>
	<button onClick={ () => {
		tmp[selected] += 1
		setVotes(tmp)
	}
	}>Vote</button>
	  <div>
	  	{anecdotes[selected]}
	  <br/>
	  	{votes[selected]}
	  </div>
	  <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
