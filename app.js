// Rover Object Goes Here
var madrid = {
  direction: "N", //can contain one of four values: "N", "S", "E", or "W". 
  x: 0, //the rover's position
  y: 0, //the rover's position
  travelLog: []
}

//the console.log() function can be used to log anything. 
//You can use this to see which direction your rover is currently facing.
console.log('Your current direction is:' + madrid.direction);



//Begin with the a switch statement.
// ======================
function turnLeft(madrid){
  console.log('turnLeft was called');
  switch (madrid.direction) {
    case "N":
      madrid.direction = "W";
      console.log(madrid.direction); //Rover is facing North and turns left => Rover is now facing West
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "E":
      madrid.direction = "N";
      console.log(madrid.direction); //Rover is facing East and turns left => Rover is now facing North
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "S":
      madrid.direction = "E";
      console.log(madrid.direction); //Rover is facing South and turns left => Rover is now facing East
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "W":
      madrid.direction = "S";
      console.log(madrid.direction); //Rover is facing West and turns left => Rover is now facing South
      console.log(madrid.x);
      console.log(madrid.y);
      break;      
  }
}

// ======================
function turnRight(madrid){
  console.log('turnRight was called');
  switch (madrid.direction) {
    case "N":
      madrid.direction = "E";
      console.log(madrid.direction); //Rover is facing North and turns right => Rover is now facing East
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "E":
      madrid.direction = "S";
      console.log(madrid.direction); //Rover is facing East and turns right => Rover is now facing South
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "S":
      madrid.direction = "W";
      console.log(madrid.direction); //Rover is facing South and turns right => Rover is now facing West
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "W":
      madrid.direction = "N";
      console.log(madrid.direction); //Rover is facing West and turns right => Rover is now facing North
      console.log(madrid.x);
      console.log(madrid.y);
      break;      
  }
}





// ======================
// ======================
// ======================
function moveForward(madrid){
  console.log("moveForward was called")
  switch(madrid.direction) {
    case "N": //rover facing North and moves forward, we decrease the rover’s y by 1
      madrid.y -= 1;
      madrid.travelLog.push(madrid.x,madrid.y);  //push coordinates of previous space to travelLog array
      console.log(madrid.direction);
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "E": //rover facing East and moves forward, we increase the rover’s x by 1
      madrid.x += 1;
      madrid.travelLog.push(madrid.x,madrid.y);  //push coordinates of previous space to travelLog array
      console.log(madrid.direction);
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "S": //rover facing South and moves forward, we increase the rover’s y by 1
      madrid.y += 1;
      madrid.travelLog.push(madrid.x,madrid.y);  //push coordinates of previous space to travelLog array
      console.log(madrid.direction);
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "W": //rover facing West and moves forward, we decrease the rover’s x by 1
      madrid.x -= 1;
      madrid.travelLog.push(madrid.x,madrid.y);  //push coordinates of previous space to travelLog array
      console.log(madrid.direction);
      console.log(madrid.x);
      console.log(madrid.y);
      break;

  }
}


// ======================
// Create a function that receives a list of commands
//These commands will be the first letter of either (f)orward, (r)ight, or (l)eft
// ======================

function commands(command) {
  for (var i = 0; i < command.length; i++) {  //Use a loop to iterate over the string
    switch (command[i]) {  //write a switch or if statement to call the correct function
      case 'f':  //(f)orward
        moveForward();
        break;
      case 'r':  //(r)ight
        turnRight();
        break;
      case 'l':  //(l)eft
        turnLeft();
        break;

    }
  }
}
//Test the commands here-
//To test it, use the string: ‘rffrfflfrff’
console.log('======================');
console.log('COMMANDS');
commands("rffrfflfrff");
console.log('======================');
console.log('TRAVEL LOG');
console.log(travelLog);
console.log('======================');