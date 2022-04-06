// Create a BMI function for health





let Weight = parseFloat(prompt('Your weight in kg ?'))
let height = parseFloat(prompt('Your height in feet ?'))



function bmical(a,b) {

    let feetToMeter= b*.3048
           let hEight= feetToMeter*feetToMeter
       let bmi = a/hEight
       
       
       console.log(`Your bmi is = ${bmi}`);

    
}



bmical(Weight,height);