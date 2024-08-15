const req = new XMLHttpRequest();
let data;

req.onload = function () {
    data = JSON.parse(this.response)
    console.log(data);
}

req.onerror = function(){
    console.log('Error', this);
}

req.open('GET', 'https://swapi.dev/api/people/3');
req.setRequestHeader('Accept','application/json');
req.send();