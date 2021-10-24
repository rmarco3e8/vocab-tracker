import './App.css';
import Search from './Components/Search/Search';
import Result from './Components/Result/Result';
import { useState } from 'react';

function App() {

  const [search, setSearchState] = useState(true)
  const [resultState, setResultState] = useState(0);

  function resultStateChangeHandler() {
    // Closed = 0
    // Opening = 1
    // Open = 2
    // Closing = 3
    setResultState( (resultState + 1) % 4 );
  }

  return (
    <>
    { (resultState > 0) && <Result resultStateChangeHandler={resultStateChangeHandler}
                                    resultState={resultState}/> }

    { search && <Search resultStateChangeHandler={resultStateChangeHandler}
                        resultState={resultState}/> }
    </>
  );
}

export default App;
