import React, { useState } from 'react';
import './NewGoal.css'

const NewGoal = ({ onAddGoal }) => {
    const [enterText, setEnterText] = useState('');
    const addGoalhandler = (event) => {
        event.preventDefault();
        if (enterText) {
            const newGoal = {
                "id": Math.random().toString(),
                "text": enterText
            }
            setEnterText('');
            console.log(newGoal);
            onAddGoal(newGoal);
        }
    }
    const textChangeHandler = (event) => {
        setEnterText(event.target.value);
    }
    return (
        <>
            <form className="new-goal" onSubmit={addGoalhandler}>
                <input type="text" value={enterText} onChange={textChangeHandler} />
                <button>Add New Goal</button>
            </form>
        </>
    )
}

export default NewGoal;