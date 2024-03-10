//arriw function
//callback function
//anonymus function


// const array = ["tunji", "bola", "sade", "tunmi"]

// $(document).ready(function () {

//   array.forEach(element => loadList(element));

// })

const array = []
const list = document.querySelector("#task-list")




function loadList(element) {
  const listItem = `<li>${element}</li>`
    list.innerHTML += listItem
}




function addToCarts() {
  const item = document.querySelector("#input_value");
  
  let value = item.value
  
  if (value) {
    displayValue = array.push(value)
  
    array.forEach(element => loadList(element));

  }
}
