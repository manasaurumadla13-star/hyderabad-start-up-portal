let input = document.getElementById("search");
let list = document.querySelectorAll("#startupList li");

input.addEventListener("keyup", function () {
  let value = input.value.toLowerCase();

  list.forEach(function (item) {
    let text = item.innerText.toLowerCase();

    if (text.includes(value)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
