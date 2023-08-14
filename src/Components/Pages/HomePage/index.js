import React from 'react'
import './index.css'
import RollDice from '../RoleDice';
import { useState } from 'react';



const HomePage = () => {
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState()
    const [diceNum, setDiceNum] = useState(1)
    const [error, setError] = useState("")
    const numbArray = [1, 2, 3, 4, 5, 6];
    const generateRandomNumber = (min, max) => {
        return (Math.floor(Math.random() * (max - min) + min));
        console.log(diceNum)
    }

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number")
            return
        }
        setError("")
        const randomNumber = generateRandomNumber(1, 7)
        setDiceNum(randomNumber);

        if (selectedNumber === diceNum) {
            setScore(score + diceNum)
        }
        else {
            setScore(score - 2)
        }
        setSelectedNumber(undefined)
    };


    return (
        <div className='homePage-container'>
            <div className='homePage-topSection'>
                <div className='hp-box-1'>
                    <p className='points'>
                        {score}
                    </p>
                    <p className='total-score'>Total Score</p>
                </div>
                <div className='hp-box-2'>
                    <p className='error-text'>{error}</p>
                    <div className='hp-box-2-b1'>
                        {
                            numbArray.map((value, index) => (
                                <div className='hp-1'
                                    key={index}
                                    onClick={() => setSelectedNumber(value)}
                                >{value}</div>
                            )
                            )
                        }
                    </div>
                    {console.log(selectedNumber)}
                    <div className='hp-box-2-b2'>Select Number</div>
                </div>
            </div>
            <RollDice diceNum={diceNum} roleDice={roleDice} setScore={setScore} />
        </div>
    )
}

export default HomePage