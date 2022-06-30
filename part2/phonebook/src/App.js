import axios from 'axios'
import { useState, useEffect } from "react";
const baseUrl = "http://localhost:3001/persons";

const deleteNumber = ( { id, name, setPersons, persons }) => {
	if (window.confirm(`Delete ${name} ?`))
	{
		console.log(id)
		axios.delete(`${baseUrl}/${id}`)
		let tmpArr = persons.filter((elem) => {
			return elem.id !== id;
		});
		setPersons(tmpArr)
	}
}

const	Name = ( { name, number, id, setPersons, persons } ) => {
	return (
		<>
		<p>{name} {number}</p>
		<button type="delete" onClick={ () => deleteNumber({id, name, setPersons, persons})} >delete</button>
		</>
	)
}

const	Numbers = ( { persons, setPersons } ) => {
	return (
		<>
		{persons.map(person => <Name name={person.name} number={person.number} id={person.id} key={person.id} persons={persons} setPersons={setPersons} />)}
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
	const AddToServer = (newObj) => {
	  return axios.post(baseUrl, newObj);
	}
	const handleNumber = (event) => {
		setNewNumber(event.target.value)
	}
	useEffect(() => {
	  console.log('effect')
	  axios
	    .get('http://localhost:3001/persons')
	    .then(response => {
	      console.log('promise fulfilled')
	      setPersons(response.data)
	    })
	}, [])
	const addName = (event) => {
		event.preventDefault()
		let filteredarray = persons.filter(person => newName === person.name)
		if (!filteredarray.length)
		{
			const nameObject = {
				name: newName,
				date: new Date().toISOString(),
				id: persons.length + 1,
				number: newNumber,
			}
			AddToServer(nameObject)
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
	  <Numbers persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App
