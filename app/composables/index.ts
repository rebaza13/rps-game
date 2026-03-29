export type game = 'rock' | 'paper' | 'scissors';

export const useGame = () => {
  const playerChoice = ref<game | null>(null);
  const computerChoice = ref<game | null>(null);
  const yourScore = ref<number>(0);
    const computerScore = ref<number>(0);
  const result = ref<string>('');
  
  const choices: game[] = ['rock', 'paper', 'scissors'];

    const playGame = (choice: game) => {
        playerChoice.value = choice;
        computerChoice.value = choices[Math.floor(Math.random() * choices.length)]!;

        if (playerChoice.value === computerChoice.value) {
            result.value = 'It\'s a tie!';
        } else if (
            (playerChoice.value === 'rock' && computerChoice.value === 'scissors') ||
            (playerChoice.value === 'paper' && computerChoice.value === 'rock') ||
            (playerChoice.value === 'scissors' && computerChoice.value === 'paper')
        ) {
            result.value = 'You win!';
            yourScore.value += 1;
        
        } else {
            result.value = 'Computer wins!';
            computerScore.value += 1;
        }
    };  
    return {
        playerChoice,
        computerChoice,
        result,
        playGame,
        yourScore,
        computerScore
    };
}