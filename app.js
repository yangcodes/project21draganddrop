const lists = document.querySelectorAll(".list");
const listItems = document.querySelectorAll(".list-item");

let draggedItem = null;

for (let a = 0; a < listItems.length; a++) {
  const item = listItems[a];

  item.addEventListener("dragstart", function () {
    draggedItem = item;
    setTimeout(() => {
      item.style.display = "none";
    }, 50);
  });
  item.addEventListener("dragend", function () {
    setTimeout(() => {
      item.style.display = "block";
      dragItem = null;
    }, 50);
  });
}
