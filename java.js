
  const yearSelect = document.getElementById("vYear");
  const startYear = 2000;
  const endYear = new Date().getFullYear(); // current year, e.g. 2025

  for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
