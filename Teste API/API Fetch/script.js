function reset() {
  var btn = document.querySelector("#botao");
  btn.addEventListener("click",location.reload());
}


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const ul = document.getElementById('users');
const url = 'https://6282db2492a6a5e4621a86f3.mockapi.io/api/start/usuario';


function adicionar(){
axios.post('https://6282db2492a6a5e4621a86f3.mockapi.io/api/start/usuario', {
  name: 'Lisa Simpson',
  createdAt: new Date(),
  avatar: 'https://i.pinimg.com/originals/53/75/de/5375de5c953614c19b4fd6bebf0f5801.jpg'
})
.then(function (response) {
  console.log(response);
  document.location.reload(true);
})
.catch(function (error) {
  window.alert('DEU RUIM!!')
  console.error(error);
}); 
}

function fget(){
axios.get('https://6282db2492a6a5e4621a86f3.mockapi.io/api/start/usuario?ID=10')
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  });
}

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    
  let authors = data;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('p');
    let data = createNode('p');
    img.src = author.avatar;
    span.innerHTML = `${author.name}`;

    let txtdata = `${author.createdAt.substring(0,19)}`;

    let formatohora =  moment(txtdata, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');

    data.innerHTML = ` ${formatohora}`

    append(li, img);
    append(li, span);
    append(li, data);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});
