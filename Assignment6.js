// Create a currency converter function from taka to USD, CAD, POUND, EURO etc 





let amount = parseFloat(prompt('Amount of taka '))
let currency =prompt('What currency do you convet from taka ? option => [ usd , cad , pound , euro ]')





 function curr(a,b){
      
    let total= 0;


    switch(b){

         case 'usd':total = a/86.21
         break;
         case 'cad':total = a/69.02
         break;
         case 'pound':total = a/112.88
         break;
         case 'euro':total =a/94.24
         break;
    }

           console.log(`${amount} taka  = ${total} ${currency}`);

 }


curr(amount,currency)