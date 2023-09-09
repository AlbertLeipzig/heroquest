export const rollSingleDice = () => {
  return Math.ceil(Math.random() * 6);
};

export const rollMultipleDices = (amount : number) => {
  const dices = Array.from({ length: amount }, () => '');
  const result = dices.map(() => rollSingleDice()).reduce((a, b) => a + b, 0);
  return result;
};
