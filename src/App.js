import React, {useState} from 'react';
import './App.css';
import Character from './Characters/Characters';

const App = props => {

  const charArr = [
    {name: "Arnold", job: "Mercenary", age: 27, health: 90, int: 45},
    {name: "Lara", job: "Rogue", age: 23, health: 75, int: 60},
    {name: "Gandalf", job: "Wizard", age: 225, health: 60, int: 95}
  ]

  const [charState, setCharState] = useState({
    characters: charArr

    // [
    //   {name: "Arnold", job: "Mercenary", age: 27, health: 90, int: 45}
    // ]
  })



  const takeDamage = () => {
    setCharState({
      character: [
        { name: "Arnold", job: "Mercenary", age: 27, health: charState.characters[0].health - 10, int: 45}
      ]
    })
  }

  return (
    <div className = "App">
      
      <button onClick={takeDamage}>Im Hit!</button>
      <ul>
        {charState.characters.map((c) => 
         
          <li className = "App">
            
          <Character key={c.index} name={c.name} job={c.job} int={c.int} age={c.age} health={c.health}/>
          
          </li>
          )}
      </ul>
    </div>
  )
}

export default App;
