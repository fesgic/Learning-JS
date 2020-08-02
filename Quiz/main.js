const quiz = [["What is superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
    ];
let score = 0;
for (const [question, answer] of quiz){
    const response = prompt(question);
    if (response === answer){
        alert('Correct');
    }
    else{
        alert(`Wrong! The correct answer was ${answer}`);
    }
}
//report players score at end of game
alert(`Game Over! You scored ${score} point${score !==1 ? 's' : ''}`);