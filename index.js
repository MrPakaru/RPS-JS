

function computerChoice(x)
{
    const choice = ["rock", "paper", "scissor"];
    x = choice[Math.floor(Math.random() * choice.length)];
    return x;
}

function playerChoice(y)
{
    y = prompt("Input: ").toLowerCase();
    return y;
}

function playRound(x, y)
{  
    if(y == 'rock' && x == 'paper')
    {
        return 'You Lose! Paper Beats Rock';
    }
    else if(y == 'rock' && x == 'scissor')
    {
        return'You Win! Rock Beats Scissor';
    }
    else if(y == 'paper' && x == 'scissor')
    {
        return 'You Lose! Scissor Beats Paper';
    }
    else if(y == 'paper' && x == 'rock')
    {
        return 'You Win! Paper Beats Rock';
    }
    else if(y == 'scissor' && x == 'paper')
    {
        return 'You Win! Scissor Beats Paper';
    }
    else if(y == 'scissor' && x == 'rock')
    {
        return 'You Lose! Rock Beats Scissor';
    }
    else
    {
        return 'Gleich';
    }
}



// console.log(playRound(computerSelection, playerSelection));

// playRound(computerSelection, playerSelection);
// console.log(playRound(computerSelection, playerSelection))

function game()
{
    for(let i = 0;i < 5;i++)
    {
        const playerSelection = playerChoice();
        const computerSelection = computerChoice();
        console.log(playRound(computerSelection, playerSelection));
    }
}

game();



