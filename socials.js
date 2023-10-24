// Keep track of div positions
let divPositions = {}; 

function makeNewPosition(div){

  // Get container dimensions
  let h = document.querySelector('.circle-space').offsetHeight; 
  let w = document.querySelector('.circle-space').offsetWidth;

  // Generate random x, y within container  
  let newY = Math.floor(Math.random() * h);
  let newX = Math.floor(Math.random() * w);

  // Check if new position overlaps with existing divs
  let overlaps = false;
  for(let key in divPositions) {
    if(Math.abs(newX - divPositions[key].x) < 50 &&  
       Math.abs(newY - divPositions[key].y) < 50) {
      overlaps = true;
      break;
    }
  }

  // If no overlap generate new position
  if(!overlaps) {
    divPositions[div] = {x: newX, y: newY}; 
    return [newY, newX];
  } else {
    return makeNewPosition(div); // Recursively generate new position
  }

}


// Rest of code remains the same

$(document).ready(function(){
  animateDiv('.a');
  animateDiv('.b');  
  animateDiv('.c');
  animateDiv('.d');
  animateDiv('.e');
  animateDiv('.f');
});

function animateDiv(div){

  let newPos = makeNewPosition(div); // Pass div selector

  $(div).animate({ top: newPos[0], left: newPos[1] }, 5000, function(){
    animateDiv(div); 
  });

};