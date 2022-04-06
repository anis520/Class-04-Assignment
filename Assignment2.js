// Create a function that will return the area of a rectangle, square, triangle 



     


      function Areacal(nAme,a,b) {
          let result=0;
        if (nAme =='Rectangle'){
            result = a*b
          console.log(`${nAme} Area = ${result}`)

        }else if (nAme =='Square'){
          result = a*a
          console.log(`${nAme} Area = ${result}`)
        }else if ( nAme =='Triangle'){
          result = .5 *a*b
          console.log(`${nAme} Area = ${result}`)
        }

      
      }



      let  Area  = prompt('What area will you find out  Rectangle , Square , Triangle ?')



      if(Area == 'Rectangle'){

        let  weight = parseFloat(prompt('Give me Rectangle weight => '))
        let  length = parseFloat(prompt('Give me Rectangle length => '))

        Areacal(Area,weight,length);

        
        
      }else if(Area =='Triangle'){

         let base = parseFloat(prompt('Give me Triangle Base =>')) 
         let  height= parseFloat(prompt('Give me Triangle Height =>')) 
         
        
        Areacal(Area,base,height)

      }else if (Area == 'Square'){

        let  side = parseFloat(prompt('Give me Square side => '))
      

        Areacal(Area,side)

      }else{alert('please take some of area ');}
        
      