






// This is to create a object Object.create() and also overwrite it.
//creating object using Object literal
const Dog={
    name:"Ricky",
    age: 5,
    "Breed" : "RotWiller",  //json data
    used:"pet",
    specialFeature: "aggresiveness",
    description: function(){
        return `${this.name} who is ${this.age} which is a ${this.Breed} breed is used as ${this.used} in the house , it 
        is wellknown for ${this.specialFeature}`
    }};



    console.log(Dog);
    console.log(Dog.description());
    
    Dog.favouriteFood = "Egg"; //dot notation  // Adding an prop  to object
    Dog.name = "Ricky1";
    Dog['specialFeatures']= "protecting its master"; //array notation 



    // Dog.leaveAreaHeight = 40;
    // Dog.leaveAreaWeidth = 60;
    
    console.log(Dog);
    
    // console.log(Dog.favouriteFood);
    //creating object using Object Constructor