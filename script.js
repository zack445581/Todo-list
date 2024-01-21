var input = document.getElementById("input-text");
var btn_add = document.getElementById("add-to-list");
var list = document.querySelector(".list");

btn_add.addEventListener("click", function () {
  AddtoTodolist();
});

function AddtoTodolist() {
  if (input.value === "") {
    input.style.border = "1px solid red";
  } else {
    input.style.border = "initial";
    var li = document.createElement("li");
    li.className = "list-item";
    list.appendChild(li);
    li.textContent = input.value;
  }
  input.value = "";
}
