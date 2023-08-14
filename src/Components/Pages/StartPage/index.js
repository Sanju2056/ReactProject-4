import React from 'react'
import './index.css'
import dicePic from '../../Images/dices 1.png'

const StartPage = ({toggle}) => {
    return (
        <div className='startPage-container'>
            <div className='box-container'>
                <div className='box-1'>
                    <img src={dicePic} alt='dice picture' className='dicePic-css' />
                </div>
                <div className='box-2'>
                    <div className='box-2-p'>
                        <p>DICE GAME</p>
                    </div>
                    <div className='box-2-b'>
                        <div className='box-2-button' onClick={toggle}>
                           Play Now
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default StartPage