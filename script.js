var input = document.getElementById("input-text");
var btn_add = document.getElementById("add-to-list");
var list = document.querySelector(".list");
var remove = document.querySelector(".remove");
var list_item = document.getElementsByClassName("list-item");
var arr = []

btn_add.addEventListener("click", function () {
  AddtoTodolist();
});

function AddtoTodolist() {
  if (input.value === "") {
    input.style.border = "1px solid red";
  } else {
    input.style.borderColor = "rgb(133, 133, 133)";
    var li = document.createElement("li");
    li.className = "list-item";
    list.appendChild(li);
    // li.textContent = input.value;

    arr.push(input.value);
    console.log(arr);
    arr.map(item => li.textContent = item);

    var remove = document.createElement("span");
    remove.className = "remove";
    remove.innerHTML = "&#10060;";
    li.appendChild(remove);
  }
  input.value = "";

  remove.addEventListener("click", function () {
    RemovefromTodolist(li);
  });
}


function RemovefromTodolist(itemToRemove) {
  for (var i = 0; i < list.children.length; i++) {
    if (list.children[i] === itemToRemove) {
      console.log(itemToRemove)
      arr.splice(i, 1);
      
      list.removeChild(itemToRemove);
    }
  }
}

