const finalPosition = function (moves) {
  // Your code in here ...
  x = 0;
  y = 0;
  const paradeLocation = [x,y]
  for (const move of moves){
    switch(move){
    case "north":
      paradeLocation[1] =paradeLocation[1] +1;
      
      break;
    
    case "south":
      paradeLocation[1] =paradeLocation[1] -1;
      break;

    case "east":
      paradeLocation[0] =paradeLocation[0] +1;
      break;
    case "west":
      paradeLocation[0] =paradeLocation[0] -1;
      break;
    }
  } 
return paradeLocation
}
 
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
finalPosition(moves);
