import { useState } from 'react';
import ComputerPick from './components/ComputerPick';
import Option from './components/Option';
import PlayerPick from './components/PlayerPick';
import Outcome from './components/Outcome';
import { RPSLS } from './options';
import { useEffect } from 'react';

function App() {
  const [options, setOptions] = useState(RPSLS);
  const [optionSelected, setOptionSelected] = useState(false);
  const [playerPick, setPlayerPick] = useState('');
  const [computerPick, setComputerPick] = useState('');
  const [outcome, setOutcome] = useState('');
  const [score, setScore] = useState(0);
  //maintain the store in local storage

  useEffect(() => {
    if (outcome === '') return;
    if (outcome === 'tie') return;
    console.log('outcome changed');
    if (outcome === 'win') {
      setScore(prev => prev + 1);
    } else {
      setScore(prev => (prev === 0 ? prev : prev - 1));
    }
  }, [outcome]);

  return (
    <div className="App">
      <div>{score}</div>
      {!optionSelected &&
        options.map(option => (
          <Option
            key={option}
            name={option}
            options={options}
            optionSelected={optionSelected}
            setPlayerPick={setPlayerPick}
            setOptionSelected={setOptionSelected}
            setComputerPick={setComputerPick}
            setOutcome={setOutcome}
            setScore={setScore}
          />
        ))}
      {optionSelected && (
        <>
          <PlayerPick name={playerPick} />
          <ComputerPick name={computerPick} />
          <Outcome outcome={outcome} />
          <button>Play Again</button>
        </>
      )}
    </div>
  );
}

export default App;
