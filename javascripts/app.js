let rover = {direction: "N", x: 0, y: 0, travelLog: []};

function turnLeft(rover) {
  console.log("turnLeft was called!");
  if (rover.direction == "N") {
    rover.direction = "W";
  }
  else if (rover.direction == "W") {
    rover.direction = "S";
  }
  else if (rover.direction == "S") {
    rover.direction = "E";
  }
  else if (rover.direction == "E") {
    rover.direction = "N";
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  if (rover.direction == "N") {
    rover.direction = "E";
  }
  else if (rover.direction == "E") {
    rover.direction = "S";
  }
  else if (rover.direction == "S") {
    rover.direction = "W";
  }
  else if (rover.direction == "W") {
    rover.direction = "N";
  }
}

function moveForward(rover) {
  console.log("moveForward was called")
  if (rover.direction == "N") {
    rover.y++;
    console.log(rover.x + " " + rover.y);
  }
  else if (rover.direction == "E") {
    rover.x++;
    console.log(rover.x + " " + rover.y);
  }
  else if (rover.direction == "S") {
    rover.y--;
    console.log(rover.x + " " + rover.y);
  }
  else if (rover.direction == "W") {
    rover.x--;
    console.log(rover.x + " " + rover.y);
  }
}

function commandRead(string) {
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) == "f") {
      rover.travelLog.push(x, y);
      moveForward(rover);
    }
    else if (string.charAt(i) == "r") {
      turnRight(rover);
    }
    else if (string.charAt(i) == "l") {
      turnLeft(rover);
    }
  }
}