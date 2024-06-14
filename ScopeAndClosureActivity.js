function outer(){
  // 1. Declare two variables, a and b in the outer function's scope and set them to a string 
  // and an object respectively. Log their values immediately.
  let a = 'string';
  const b = {property1: 'value1',
             property2: 'value2'
            };
  console.log(a);
  console.log(b);
  
    function inner(a, b) // 3. Update the inner function to take two parameters named a and b.  
    {
      // 2. Log the values of a and b in the inner function.
      console.log(a);
      console.log(b);

      // 5. Inside the inner function, assign new values to a and b and log them at the end of the function 
      // AND after the execution of inner(a,b).
       a = 'string2'
       b = {property1: 'value3',
                 property2: 'value4' 
      }
      b.property2 = 'value5' // 6. Inside the inner function, update a property of the b object.
      console.log(a);
      console.log(b);
     
    }
  
    inner(a, b);  // 4. Pass a and b in as arguments when you execute inner().
    console.log(a);
    console.log(b);
  }
  
  outer();