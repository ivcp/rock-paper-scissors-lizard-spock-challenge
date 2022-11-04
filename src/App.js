import { useState, useEffect } from 'react';
import Option from './components/Option';
import ChosenIcon from './components/ChosenIcon';
import Outcome from './components/Outcome';
import Header from './components/UI/Header';
import { RPSLS, RPS } from './options';
import getSavedScore from './helpers/getSavedScore';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/Global';
import theme from './theme/Colors';
import IconsWrapper from './components/layout/IconsWrapper';
import PicksWrapper from './components/layout/PicksWrapper';
import useMediaQuery from './hooks/useMediaQueries';
import RulesBtn from './components/UI/RulesBtn';
import Overlay from './components/UI/Overlay';
import Modal from './components/UI/Modal';
import pentagon from './assets/bg-pentagon.svg';
import triangle from './assets/bg-triangle.svg';
import ChangeGame from './components/UI/ChangeGame';

function App() {
  const [options, setOptions] = useState(RPSLS);
  const [optionSelected, setOptionSelected] = useState(false);
  const [playerPick, setPlayerPick] = useState('');
  const [computerPick, setComputerPick] = useState('');
  const [outcome, setOutcome] = useState('');
  const [score, setScore] = useState(getSavedScore());
  const [modalOpen, setModalOpen] = useState(false);
  const [bgShape, setBgShape] = useState(pentagon);

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  const playAgain = () => {
    setOptionSelected(false);
  };

  const changeGame = value => {
    if (value === 'RPSLS') {
      setOptions(RPSLS);
      setBgShape(pentagon);
    }
    if (value === 'RPS') {
      setOptions(RPS);
      setBgShape(triangle);
    }
  };

  const isDesktop = useMediaQuery('(min-width: 37.5em)');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle bgImage={optionSelected} shape={bgShape} options={options} />
      <Header score={score} optionSelected={optionSelected} options={options} />
      <main>
        {!optionSelected && (
          <IconsWrapper>
            {options.map(option => (
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
          </IconsWrapper>
        )}

        {optionSelected && (
          <>
            <PicksWrapper>
              <ChosenIcon player name={playerPick} outcome={outcome} />
              {isDesktop && <Outcome outcome={outcome} playAgain={playAgain} />}
              <ChosenIcon name={computerPick} outcome={outcome} />
            </PicksWrapper>
            {!isDesktop && <Outcome outcome={outcome} playAgain={playAgain} />}
          </>
        )}
        <RulesBtn setModalOpen={setModalOpen} />
        {!isDesktop && modalOpen && <Modal setModalOpen={setModalOpen} />}
        {isDesktop && modalOpen && <Overlay setModalOpen={setModalOpen} />}
        {isDesktop && modalOpen && <Modal setModalOpen={setModalOpen} />}
        <ChangeGame changeGame={changeGame} />
      </main>
    </ThemeProvider>
  );
}

export default App;
