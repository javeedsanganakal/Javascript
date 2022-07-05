async function getData(){
    let url = 'https://jsonplaceholder.typicode.com/todos';
    let response  = await  fetch(url);
    // console.log(response);
    let jsonData = await  response.json();
    console.log(jsonData);
}

getData();






// async function getTodos() {
//     let url="https://jsonplaceholder.typicode.com/todos";
//     let responce = await fetch(url);
//     let json = await responce.json();
//     console.log(json);
//     // document.write(json);
// }



// getTodos();