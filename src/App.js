import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCousreGoals] = useState([
    { "id": 1, "text": "list item 1" },
    { "id": 2, "text": "list item 2" },
    { "id": 3, "text": "list item 3" },
  ]);
  // console.log(courseGoals[1].text);
  const addNewGoalHandler = (newGoal) => {
    // courseGoals.push(newGoal);
    // console.log(courseGoals);
    // setCousreGoals(courseGoals.concat(newGoal));
    setCousreGoals(prevCousreGoals => prevCousreGoals.concat(newGoal));
  }
  return (
    <>
      <h2 className='goal-heading'>Goal List</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />

    </>
  )
}

export default App;
