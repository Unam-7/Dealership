

const search = document.getElementsByClassName("press");
const items = document.getElementsByClassName("filter_list");

// Toggle visibility on .press click
Array.from(search).forEach(button => {
  button.addEventListener("click", function(e) {
    e.stopPropagation(); // Prevent bubbling to document

    Array.from(items).forEach(item => {
      if (item.classList.contains("show")) {
        item.classList.remove("show"); // Hide if already visible
      } else {
        item.classList.add("show"); // Show if hidden
      }
    });
  });
});

document.addEventListener("click", function(e) {
  const outSideSearch = e.target.closest(".press");
  const input = e.target.closest(".filter_list");

  // If not clicking a press button or inside a visible filter_list, hide items
  if (!outSideSearch && !input) {
    Array.from(items).forEach(item => {
      item.classList.remove("show");
    });
  }
});
