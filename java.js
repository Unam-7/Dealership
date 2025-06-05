// const buttons = document.querySelector("[data-courousel-button]")

// buttons.array.forEach(button => {
//     button.addEventListe
// });

const search = document.getElementById("get");
const items = document.getElementsByClassName("filter_list");


function unam(e) {
  // Convert HTMLCollection to array and loop over all items
  Array.from(items).forEach(item => {
    if (e.target === search) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
search.addEventListener("click", unam(e));




// const input = document.getElementById('myInput');

// input.addEventListener('click', function(event) {
//   console.log('Input was clicked!');
//   // You can also access the input value:
//   console.log('Current value:', event.target.value);
// });
