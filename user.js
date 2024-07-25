function loadUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayUsers(data));
}
function displayUsers(data) {
  const ul = document.getElementById("users-list");
  for (const user of data) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
function loadUsers2() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayUsers2(data));
}
function displayUsers2(data) {
  const ul = document.getElementById("users-list");
  for (const user of data) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.email;
    ul.appendChild(li);
  }
}
