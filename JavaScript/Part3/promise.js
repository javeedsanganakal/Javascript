var display = new Promise(function(resolve, reject){
    const firstUser = "Richard";
    const secondUser = "Johnson";

    if(firstUser === secondUser){
            resolve();
    }
    else{
            reject();
    }
});


display.
then(success => {
    console.log('Both are same!!!!'); 
}).
catch(failure => {
    console.log('Both are not same!!!!'); 
});











// var z = new Promise(function(resolve, reject) { 
//     const x = "geeksforgeeks"; 
//     const y = "geeksforgeeks"; 
//     if(x === y) { 
//       resolve(); 
//     } else { 
//       reject(); 
//     } 
//   }); 
    
//   z. 
//       then(success=> { 
//           console.log('Success, You are an Europian'); 
//       }). 
//       catch(failure=> { 
//           console.log('Some error u r not a Europian'); 
//       });

// PROMISE(constructorFunction)     resolve -> then (success)
//                                 reject  -> catch   (failure)

// what are the 3 stages in promises ? 
// *pending , resolve, reject
// how to overcome callback hell?
// *Using higher order array methods Promise and Async Await.