import { useState, useEffect } from 'react';
import ComputerPick from './components/ComputerPick';
import Option from './components/Option';
import PlayerPick from './components/PlayerPick';
import Outcome from './components/Outcome';
import { RPSLS, RPS } from './options';
import getSavedScore from './helpers/getSavedScore';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/Global';
import theme from './theme/Colors';

function App() {
  const [options, setOptions] = useState(RPSLS); //add dropdown selection
  const [optionSelected, setOptionSelected] = useState(false);
  const [playerPick, setPlayerPick] = useState('');
  const [computerPick, setComputerPick] = useState('');
  const [outcome, setOutcome] = useState('');
  const [score, setScore] = useState(getSavedScore());

  console.log('app render');

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  const playAgain = () => {
    setOptionSelected(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>{score}</div>
      <main>
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
            <button onClick={playAgain}>Play Again</button>
          </>
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
