import './Result.css';
import { useState } from 'react';
import close from '../../Resources/Images/close.png';

export default function Result(props) {
    const resultStates = ["closed", "opening", "open", "closing"];

    return (
        <div className="result-outer-container"
             onAnimationEnd={() => props.resultStateChangeHandler()}>

            <div className={"result-container " + (resultStates[props.resultState])}>
                <p>
                    Your word is TODO
                </p>
                <img className='result-close'
                    src={close}
                    onClick={() => props.resultStateChangeHandler()}/>
            </div>

        </div>
    );
}