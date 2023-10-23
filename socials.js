$(document).ready(function(){
  animateDiv('.a');
  animateDiv('.b');
  animateDiv('.c');
  animateDiv('.d');
});

function makeNewPosition(){
  var h = document.querySelector('.circle-space').offsetHeight;
  var w = document.querySelector('.circle-space').offsetWidth;
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  return [nh, nw];    
}

function animateDiv(myclass){
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 5000,   function(){
    animateDiv(myclass);        
  });
};