import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    // const [count, setCount] = useState(0) For demo of useEffect hook
   
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json();})
        .then(users => setRobots(users));
        // console.log(count)
    }, []) // add count to second parameter for demonstration of useEffect hook


    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    return !robots.length ? 
      <h1>Loading</h1> : 
        (
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
                {/* Demo of useEffect hook with count button, commented out below */}
              {/* <button onClick={() => setCount(count+1)}>Click Me!</button> */}
                <SearchBox searchChange={onSearchChange}/>
                  <Scroll>
                    <CardList robots={filteredRobots}/>
                  </Scroll>
          </div>
        );
}

export default App;
