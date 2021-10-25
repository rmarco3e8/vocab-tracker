import './Home.css';
import Search from '../../Components/Search/Search';
import Banner from '../../Components/Banner/Banner';
import { useState } from 'react';

export default function Home(props) {

    return(
        <div className='home-content'>
            <Banner/>

            <Search resultStateChangeHandler={props.resultStateChangeHandler}
                        resultState={props.resultState}/>
        </div>
    );
}