import React from 'react'
import './index.css'

import { useState } from 'react'

const RollDice = ({diceNum,roleDice,setScore}) => {
    const [showRules, setShowRules] = useState(false)
    
    const toggleShowRules = () => {
        setShowRules(!showRules)
    }
    const resetScore = () =>{
        setScore(0)
    }
   
    return (
        <div className='rd-main'>
            <div className='rd-box1' onClick={roleDice}>
                <img
                   src={`Images/dice_${diceNum}.png`}
                    className='rd-image-css'
                />
                <p className='rd-text'>
                    Click on Dice to Roll
                </p>
            </div>
            <button className='reset-button' onClick={resetScore}>Reset Score</button>
            <button className='rules-button' onClick={toggleShowRules}>Show Rules</button>
            {
                showRules ? <div className='show-rules'>
                    <p className='h-4'>How to Play the Game</p>
                    <p className='sr-text'>Select any number</p>
                    <p className='sr-text'>Click on dice image</p>
                    <p className='sr-text'>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                    <p className='sr-text'>if you get wrong guess then  2 point will be dedcuted </p>
                </div> : ''
            }
        </div>
    )
}

export default RollDice