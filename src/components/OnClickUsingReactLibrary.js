import React from 'react'
import ReactDOM from 'react-dom';

function OnClickUsingReactLibrary() {
    const data = ['apple', 'banana', 'orange'];

const fruitsList = data.map((fruit, index) => {
  return <li key={index}>{fruit}</li>;
});

// Render the list in JSX
<ul>
  {fruitsList}
</ul>
}

export default OnClickUsingReactLibrary
