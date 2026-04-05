let input = document.getElementById("search");
let list = document.getElementById("startupList").getElementsByTagName("li");

input.addEventListener("keyup", function() {
  let filter = input.value.toLowerCase();
  
  for (let i = 0; i < list.length; i++) {
    let text = list[i].innerText.toLowerCase();
    list[i].style.display = text.includes(filter) ? "" : "none";
  }
});