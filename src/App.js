import React from 'react';
import { styled } from 'linaria/react';

const Test = styled.div`
  font-size: 3em;
  color: purple;
`;

function App() {
  return (
    <div className="App">
      <Test>
        Test
      </Test>
    </div>
  );
}

export default App;
