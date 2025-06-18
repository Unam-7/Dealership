  // Populate years from 2000 to current year
  const yearSelect = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  for (let y = 2000; y <= currentYear; y++) {
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearSelect.appendChild(option);
  }

  // Dynamically update model options based on selected make
  const modelSelect = document.getElementById("model");
  const makeSelect = document.getElementById("make");

  const models = {
    bmw: ["3 Series", "5 Series", "X3", "X5"],
    toyota: ["Corolla", "Camry", "RAV4", "Highlander"],
    honda: ["Civic", "Accord", "CR-V", "Pilot"]
  };

  makeSelect.addEventListener("change", function () {
    const selectedMake = makeSelect.value;
    modelSelect.innerHTML = '<option value="">All Models</option>';

    if (models[selectedMake]) {
      models[selectedMake].forEach(model => {
        const option = document.createElement("option");
        option.value = model.toLowerCase();
        option.textContent = model;
        modelSelect.appendChild(option);
      });
    }
  });