<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mars Rover</title>
  <script src="javascripts/app.js"></script>
</head>

<script>

var rover = {
  direction: "N",
  travelLog: [],
  x: 0,
  y: 0,
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
    case "W":
    rover.direction = "S";
    break
  }
  rover.travelLog.push(" " + rover.x + ", " + rover.y)
  console.log("Rover direction: " + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "W":
    rover.direction = "N";
      break;
  }
  rover.travelLog.push(" " + rover.x + ", " + rover.y)
  console.log("Rover Direction: " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
    
      rover.y += 1;
    
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "S":
  
      rover.y -= 1;
    
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "E":
 
      rover.x += 1;
    
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "W":
    
      rover.x -= 1;
    
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
  }
  rover.travelLog.push(" " + rover.x + ", " + rover.y)
}

function moveBackward(rover){
  console.log("moveBackward was called")
  switch (rover.direction) {
    case "N":
 
      rover.y -= 1;
    
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "S":

      rover.y += 1;
    
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "E":

      rover.x -= 1;
    
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "W":
    
      rover.x += 1;
    
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
  }
  rover.travelLog.push(" " + rover.x + ", " + rover.y)
}


function commands (movimientos) {
  for (var i = 0; i<movimientos.length; i++) {
    var movimiento1 = movimientos [i];
    if (movimiento1 === "f") {
      moveForward(rover);
    }
    else if (movimiento1==="N") {
      rover.direction = "N";
    }
    else if (movimiento1=== "r") {
      turnRight(rover);
    }
    else if (movimiento1==="l") {
      turnLeft(rover);
    }
    else if (movimiento1==="b") {
      moveBackward(rover);
    }
    else {
      continue;
    }
  }
  console.log("The Mars Rover has traveled to " + rover.travelLog);
}


</script>
<body>




    <button type="button"
    onclick="commands (['f'])">
    seguir.</button> 
    <button type="button"
    onclick="commands (['b'])">
    sur.</button> 
    <button type="button"
    onclick="commands (['l'])">
    oeste.</button> 
    <button type="button"
    onclick="commands (['r'])">
    este.</button> 
    <button type="button"
    onclick="commands (['N'])">
    norte.</button> 


</body>
</html>
