var input = document.getElementById("input-text");
var btnAdd = document.getElementById("add-to-list");
var list = document.querySelector(".list");
var remove = document.querySelector(".remove");
var listItem = document.getElementsByClassName("list-item");
var arr = []

btnAdd.addEventListener("click", function () {
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

    arr.push(input.value);
    console.log(arr);
    arr.map(item => li.innerText = item);

    var update = document.createElement("div");
    update.className = "action-list-wrapper";
    li.appendChild(update);

    var remove = document.createElement("span");
    remove.className = "remove";
    remove.innerHTML = "&#10060;";
    update.appendChild(remove);

    var check = document.createElement("input");
    check.className = "custom-checkbox";
    check.setAttribute('type', 'checkbox');
    update.appendChild(check);

    remove.addEventListener("click", function () {
      RemovefromTodolist(li);
    });

    check.addEventListener("change", function () {
      li.classList.toggle('checked')
    });
    input.value = "";
  }
}

function RemovefromTodolist(itemToRemove) {
  for (var i = 0; i < list.children.length; i++) {
    if (list.children[i] === itemToRemove) {
      console.log(itemToRemove)
      arr.splice(i, 1);
      list.removeChild(itemToRemove);
      console.log(arr);
    }
  }
}