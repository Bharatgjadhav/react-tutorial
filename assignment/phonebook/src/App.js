import React, { useState } from 'react'
import Person from "./components/Person"

const App = (props) => {
  const [ persons, setPersons ] = useState(props.person) 
  const [ newName, setNewName ] = useState('')

  const handlePhoneAdd=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addContact=(event)=>{
    event.preventDefault()
    console.log(event)
      const nameObject={
        content:newName,
      }
    setPersons(persons.concat(nameObject))
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}> 
        <div>
          name: <input 
            value={newName}
            onChange={handlePhoneAdd}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {Person.map(persons=>
        <Person person={name}/>
          )}
      </ul>
    </div>
  )
}

export default App