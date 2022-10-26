export function checkIfWon(options, playerPick, computerPick) {
  const startWithPlayerPick = options.slice(options.indexOf(playerPick));
  const newArray = startWithPlayerPick.concat(
    options.filter(option => !startWithPlayerPick.includes(option))
  );
  let outcome;
  if (newArray.indexOf(computerPick) === newArray.indexOf(playerPick)) {
    outcome = 'tie';
  } else {
    const num = newArray.indexOf(computerPick) - newArray.indexOf(playerPick);
    outcome = num % 2 === 0 ? 'lose' : 'win';
  }
  return outcome;
}
