import './Banner.css';
import { useState } from 'react';
import book from '../../Resources/Images/book.png';

export default function Banner(props) {

    return(
        <div className='banner-container'>
            <img className='book-logo'
                    src={book}
                    /*onClick={() => props.resultStateChangeHandler()}*//>
            <p>
                TODO HEADER
            </p>
        </div>
    );
}