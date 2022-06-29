import { useState, useEffect } from "react";

const	Render = ( { name } ) => {
	return (
		<p>{name}</p>
	)
}

const	Numbers = ( { persons } ) => {
	return (
		<div>
		{persons.map(person => <Render name={person.content} />)}
		</div>
	)
}

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas' }
	])
	const [newName, setNewName] = useState('')
	const handleName = (event) => {
		console.log(event.target.value)
		setNewName(event.target.value)
	}
	const addName = (event) => {
		event.preventDefault()
		const nameObject = {
			content: newName,
			date: new Date().toISOString(),
			id: persons.length + 1,
		}
		setPersons(persons.concat(nameObject))
		setNewName('')
		console.log('button clicked', event.target)
	}

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
		name: <input
	  	value={newName}
	  	onChange={handleName}
	  />
	</div>
        <div>
		<button type="submit" onClick={addName} >add</button>
	</div>
	</form>
	<h2>Numbers</h2>
	  <Numbers persons={persons}/>
	<div>debug: {newName}</div>
    </div>
  )
}

export default App
