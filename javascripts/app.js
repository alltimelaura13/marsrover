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
    case "S":
    rover.direction = "S";
    break
  }
  rover.travelLog.push(" " + rover.x + ", " + rover.y)
  console.log("Rover direction: " + roer.direction);
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
    if (rover.y > 0) {
      rover.y -= 1;
    }
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "S":
    if (rover.y < 0) {
      rover.y += 1;
    }
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "E":
    if (rover.x > 0) {
      rover.x += 1;
    }
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "W":
    if (rover.x < 0) {
      rover.x -= 1;
    }
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
  }
  rover.travelLog.push(" " + rover.x + ", " + rover.y)
}

function moveBackward(rover){
  console.log("moveBackward was called")
  switch (rover.direction) {
    case "N":
    if (rover.y < 0) {
      rover.y += 1;
    }
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "S":
    if (rover.y > 0) {
      rover.y -= 1;
    }
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "E":
    if (rover.x < 0) {
      rover.x -= 1;
    }
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
    case "W":
    if (rover.x > 0) {
      rover.x += 1;
    }
    console.log("Rover direction: " + rover.x + ", " + rover.y);
    break;
  }
  rover.travelLog.push(" " + rover.x + ", " + rover.y)
}


function commands (movimientos) {
  for (var i = 0; i<movimientos.length; i++) {
    var movimiento1 = movimientos [i];
    if (movimiento1 === "f") {
      goForward(rover);
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
