import "./Search.css";
import { useState } from 'react';

export default function Search(props) {
    const [word, setWord] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert('The word you searched was: ' + word)
        props.resultStateChangeHandler();
    }

    return (
        <div className="search-container">

            <form className="search-input-box"
                  onSubmit ={handleSubmit}>

                <label>Enter a word:
                    <input
                    className="search-input"
                    type="text"
                    placeholder="Enter a word!"
                    value={word}
                    //spellCheck="true"
                    onChange={(e) => setWord(e.target.value)}
                    />
                </label>

                <input type='submit'/>

            </form>

        </div>
    );
}