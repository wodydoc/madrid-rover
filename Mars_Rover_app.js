// Rover Object 
var madrid = {
  x: 0, //madrid rover's position
  y: 0, //madrid rover's position
  direction: "N", //can be one of four values: "N", "S", "E", or "W". 
  travelLog: [],
}

//the console.log() function can be used to log anything. 
//You can use this to see which direction your rover is currently facing.
console.log('Your current direction is:' + madrid.direction);

//Begin with the a switch statement.
// ==========TURNING ROVER LEFT============
function turnLeft(madrid){
  console.log('turnLeft');
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

// ===========TURNING ROVER RIGHT===========
function turnRight(madrid){
  console.log('turnRight');
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

// =========================================================================
// =========MOVING ROVER FORWARD BASED ON DIRECTION IT'S FACING=============
// =========================================================================
function moveForward(madrid){
  console.log("moveForward");
  switch(madrid.direction) {
    case "N": //rover facing North and moves forward
      madrid.y = madrid.y-1;  //we decrease the rover’s y by 1
      madrid.travelLog.push(madrid.x,madrid.y);  //push coordinates of previous space to travelLog array
      console.log(madrid.direction);
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "E": //rover facing East and moves forward
      madrid.x = madrid.x+1;  //we increase the rover’s x by 1
      madrid.travelLog.push(madrid.x,madrid.y);  //push coordinates of previous space to travelLog array
      console.log(madrid.direction);
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "S": //rover facing South and moves forward
      madrid.y = madrid.y+1;  //we increase the rover’s y by 1
      madrid.travelLog.push(madrid.x,madrid.y);  //push coordinates of previous space to travelLog array
      console.log(madrid.direction);
      console.log(madrid.x);
      console.log(madrid.y);
      break;
    case "W": //rover facing West and moves forward
      madrid.x = madrid.x-1;  //we decrease the rover’s x by 1
      madrid.travelLog.push(madrid.x,madrid.y);  //push coordinates of previous space to travelLog array
      console.log(madrid.direction);
      console.log(madrid.x);
      console.log(madrid.y);
      break;

  }
}

// ==================================================================
//Create a function that receives a list of commands
//These commands will be the first letter of forward, right, or left 
// ==================================================================

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
console.log('COMMAND: ');
commands("rffrfflfrff");
console.log('======================');
console.log('TRAVEL LOG: ');
console.log(travelLog);
console.log('======================');