
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const ul = document.getElementById('users');
const url = 'https://6282db2492a6a5e4621a86f3.mockapi.io/api/start/usuario';

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