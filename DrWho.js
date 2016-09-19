// Write a javascript program that displays the numbers from 10 to 100. But for multiples of 4 print "Dr."
// instead of the number and for multiples of 6 print "Who". 
//For numbers which are multiples of both 4 and 6 print "Dr. Who"

function drWho(){
  for(var i = 10; i <= 100; i++){
    if(i % 4 === 0 && i % 6 === 0){
      console.log("Dr. Who");
    }else if(i % 4 === 0){
      console.log("Dr")
    }else if(i % 6 === 0){
      console.log("Who")
    }else{
      console.log(i)
    }
  }
}

drWho();

sfas