import { useState } from 'react';
import ComputerPick from './components/ComputerPick';
import Option from './components/Option';
import PlayerPick from './components/PlayerPick';

const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function App() {
  const [optionSelected, setOptionSelected] = useState(false);
  const [playerPick, setPlayerPick] = useState('');
  const [computerPick, setComputerPick] = useState('');
  return (
    <div className="App">
      {!optionSelected &&
        options.map(option => (
          <Option
            key={option}
            name={option}
            optionSelected={optionSelected}
            setPlayerPick={setPlayerPick}
            setOptionSelected={setOptionSelected}
            setComputerPick={setComputerPick}
          />
        ))}
      {optionSelected && (
        <>
          <PlayerPick name={playerPick} /> <ComputerPick name={computerPick} />
        </>
      )}
    </div>
  );
}

export default App;
