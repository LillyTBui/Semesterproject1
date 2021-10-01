const container = document.querySelector(".discover-planets");

container.onclick = function (event) {
  const id = event.target.dataset.id;
  localStorage.setItem("post", JSON.stringify(id));
};

