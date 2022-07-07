import axios from 'axios'
import { useState, useEffect } from "react";
const baseUrl = "http://localhost:3001/persons";

const Notification = ({ message, setMessage }) => {
  if (message !== null) {
    setTimeout(() => {
      setMessage(null)
    }, 5000)

  return (
    <div className='error'>
      {message}
    </div>
  )
  } else
	return (
		<>
		</>
	)
}

const deleteNumber = ( { id, name, setPersons, persons }) => {
	if (window.confirm(`Delete ${name} ?`))
	{
		axios.delete(`${baseUrl}/${id}`)
		let tmpArr = persons.filter((elem) => {
			return elem.id !== id
		});
		setPersons(tmpArr)
	}
}

const	Name = ( { name, number, id, setPersons, persons } ) => {
	return (
		<div>
		{name} {number}
		<button type="delete" onClick={ () => deleteNumber({id, name, setPersons, persons})} >delete</button>
		</div>
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
	const [message, setMessage] = useState(null);
	const [errMsg, setErrMsg] = useState(0);
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
	  axios
	    .get('http://localhost:3001/persons')
	    .then(response => {
	      setPersons(response.data)
	    })
	}, [])
	const addName = (event) => {
		event.preventDefault()
		let filteredarray = persons.filter(person => newName === person.name)
		if (!filteredarray.length)
		{
			setMessage(`${newName} number has been added`)
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
		{
			setErrMsg(1)
			setMessage(`${newName} already existed`)
		}
	}

  return (
	  <div>
	  <Notification message={message} setMessage={setMessage} errMsg={errMsg} />
	  <h1>Phonebook</h1>
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
