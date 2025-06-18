


  const maxYear = document.getElementById("year");
  const startPrice = 50000;
  for (startPrice ; startPrice <= maxYear; startPrice += 50000) {
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearSelect.appendChild(option);
  }
const priceSelect = document.getElementById("price");

  for (let price = 50000; price <= 1000000; price += 50000) {
    const option = document.createElement("option");
    option.value = price;
    option.textContent = `$${price.toLocaleString()}`;
    priceSelect.appendChild(option);
  }
