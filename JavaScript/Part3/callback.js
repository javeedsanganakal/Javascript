
//A callback is a function that is to be executed after another function has finished executing — hence the name call back
//A  function calling another function is the call back function

function Mark(a, Louis){
    return a + Louis();
};

function john(){
    return 5 ;
}
// Mark(2,john);
console.log(Mark(2,john));

