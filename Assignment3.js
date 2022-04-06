

// GPA, CGPA, GRADE function for result publishing 


function gpaGradCal(mark) {


  if(mark>0 && mark <33){
      console.log( `your are Fale ,your grad is 'F'And your gpa is 0`);
  }else if(mark>33 && mark <40){
    console.log( `your are Pass ,your grad is 'D'And your gpa is 1`);
}else if(mark>=40 && mark <50){
    console.log( `your are Pass ,your grad is 'C'And your gpa is 2`);
}else if(mark>=50 && mark <60){
    console.log( `your are Pass ,your grad is 'B'And your gpa is 3`);
}else if(mark>=60 && mark <70){
    console.log( `your are pass ,your grad is 'A-'And your gpa is 3.5`);
}else if(mark>=70 && mark <80){
    console.log( `your are pass ,your grad is 'A'And your gpa is 4`);
}else if(mark>= 80&& mark<=100){
    console.log( `your are pass ,your grad is 'A+'And your gpa is 5`);
}else{console.log('your got invalied number ')}
    
}




let mark=parseFloat(prompt('Take your mark'));


gpaGradCal(mark);