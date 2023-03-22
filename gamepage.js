// random value generated
  var y=Math.floor(Math.random()*10+1);
  playername=localStorage.getItem("player_name");
  var guess=1
  function submit()
  {
    var x=document.getElementById("guessField");
    if(x==y)
    {
        alert("congratulation"+playername+"you guess the number"+guess+"guess");
        guess=1;
    }
    else
    if(x>y)
    {
        guess=guess+1;
        alert("oops try a smaller number");
        
    }
    else
    if(x<y)
    {
        guess=guess++;
        alert("oops try a bigger number");
        
    }
  }
  function playagain()
  {
    var y=Math.floor(Math.random()*10+1);
  }
  // counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
