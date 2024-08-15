
//Request menggunakan XMLHttprequesst
// const req = new XMLHttpRequest();
// let data;

// req.onload = function () {
//     data = JSON.parse(this.response)
//     console.log(data);
// }

// req.onerror = function(){
//     console.log('Error', this);
// }

// req.open('GET', 'https://swapi.dev/api/people/3');
// req.setRequestHeader('Accept','application/json');
// req.send();


// Request menggunakan fetch API
// fetch('https://swapi.dev/api/people/3')
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error("Could not fetch the data for that resource");
            
//         }

//         return res.json();
//     })

//     .then((data) => {
//         console.log('json 1', data);
//         return fetch('https://swapi.dev/api/people/5');
//     })

//     .then((res) => {
//         console.log('request 2');
//         if (!res.ok) {
//             throw new Error("Could not fetch the data for that resource");
            
//         }
//         return res.json();
//     })

//     .then((data) =>{
//         console.log(data);
//     })

//     .catch((err) => {
//         console.log('error',err);
//     });



//Request Menggunakan async 
const loadPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/3');
        const data = await res.json();
        console.log(data);
        const res2 = await fetch('https://swapi.dev/api/people/5');
        const data2 = await res2.json();
        console.log(data2);
    } catch (err) {
        console.log('error',err);
    }
    
};

loadPeople();