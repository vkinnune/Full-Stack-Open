import { useState } from "react";

const	Name = ( { name, number } ) => {
	return (
		<p>{name} {number}</p>
	)
}

const	Numbers = ( { persons } ) => {
	return (
		<>
		{persons.map(person => <Name name={person.content} number={person.number} key={person.id} />)}
		</>
	)
}

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const handleName = (event) => {
		setNewName(event.target.value)
	}
	const handleNumber = (event) => {
		setNewNumber(event.target.value)
	}
	const addName = (event) => {
		event.preventDefault()
		let filteredarray = persons.filter(person => newName === person.content)
		if (!filteredarray.length)
		{
			const nameObject = {
				content: newName,
				date: new Date().toISOString(),
				id: persons.length + 1,
				number: newNumber,
			}
			setPersons(persons.concat(nameObject))
			setNewName('')
			setNewNumber('')
		}
		else
			window.alert(`${newName} is already added to phonebook`)
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
		number: <input
	  	value={newNumber}
	  	onChange={handleNumber}
	  />
	</div>
        <div>
		<button type="submit" onClick={addName} >add</button>
	</div>
	</form>
	<h2>Numbers</h2>
	  <Numbers persons={persons}/>
    </div>
  )
}

export default App
