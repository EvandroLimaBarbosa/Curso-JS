const url = 'https://6282db2492a6a5e4621a86f3.mockapi.io/api/start/usuario';

let data = {
  name: 'Sara'
}

var request = new Request(url, {
	method: 'POST',
	body: data,
	headers: new Headers()
});

fetch(request)
.then(function() {
    // Handle response we get from the API
    console.log(request)
})