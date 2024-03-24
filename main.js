//arriw function
//callback function
//anonymus function


// const array = ["tunji", "bola", "sade", "tunmi"]

// $(document).ready(function () {

//   array.forEach(element => loadList(element));

// })

const array = []
const list = document.querySelector("#task-list")
list.style.width = "10px"

function loadList(element) {
  const listItem = `<li><input type ="text" value = ${element}></li>`
  list.insertAdjacentHTML("afterbegin", listItem)
}

function addToCarts() {
  const item = document.querySelector("#input_value");

  let value = item.value
  
  if (value) {
    array.push(value)
    array.forEach(element => loadList(element));
  }
  array.pop()
}


