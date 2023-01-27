import React, { useState } from 'react';
import './App.css';
import BigCup from './Components/BigCup';
import SmallCups from './Components/SmallCups';

function App() {
  const [userGoal, setUserGoal] = useState(8)
  const [defaultGoal, setDefaultGoal] = useState(8)
  const [currentValue, setCurrentValue] = useState(0)

  const submitHandler = (e) => {
    e.preventDefault();
    setDefaultGoal(userGoal);
  }

  const goalHandler = (event) => {
    setUserGoal(parseInt(event.target.value) || 0, 10);
  }

  const handleChange = (value, ) => {
    setCurrentValue(parseInt(currentValue + value) || 0, 10);
  }

  return (
    <div className='main-wrapper' >
      <h3 className='title'>How many cups do you want to drink?</h3>
      <form className='form' onSubmit={submitHandler}>
        <label className='goal-label' >Your goal:
          <input type="text" value={userGoal} onChange={goalHandler} />
        </label>
        <button className="btn from-top" type="submit">Submit</button>
      </form>
      <BigCup goal={defaultGoal} currentValue={currentValue} />
      <SmallCups goal={defaultGoal} handleChange={handleChange}  />
    </div>
  )

}
export default App;
