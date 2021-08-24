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
  for (let b = 0; b < lists.length; b++) {
    const list = lists[b];

    list.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      list.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    });
  }
}
