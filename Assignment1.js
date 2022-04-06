// Create a function that will return children, teenagers, young people, old people from the age 






function peoleFromAge(Age) {

        if(Age>0 && Age<=9){
            console.log(`Hello your are a children`);
        }
        else if(Age>=10 && Age<=19){
            console.log(`Hello your are a Teenager`);
        }
        else if(Age>=20 && Age<=40){
            console.log(`Hello your are a Young people`);
        }
        else if(Age>=41 && Age<=100){
            console.log(`Hello your are a old people`);
        }else{
            console.log('Your are a Ghost or Angel');
        }

}


     let age = parseFloat(prompt('what is your age'))



      peoleFromAge(age);


      



