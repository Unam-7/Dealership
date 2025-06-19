
  // Elements
  const makeSelect = document.getElementById("make");
  const modelSelect = document.getElementById("model");
  const minYear = document.getElementById("minYear");
  const maxYear = document.getElementById("maxYear");
  const searchInput = document.getElementById("searchInput");

  // Sample models for each make
  const carModels = {
    bmw: ["X1", "X3", "X5", "3 Series", "5 Series"],
    toyota: ["Corolla", "Camry", "RAV4", "Highlander"],
    honda: ["Civic", "Accord", "CR-V", "Pilot"]
  };

  // Dynamically populate year dropdowns
  const currentYear = new Date().getFullYear();
  for (let y = 2000; y <= currentYear; y++) {
    const option1 = new Option(y, y);
    const option2 = new Option(y, y);
    minYear.appendChild(option1.cloneNode(true));
    maxYear.appendChild(option2.cloneNode(true));
  }
  
  // When a make is selected, update models
  makeSelect.addEventListener("change", function () {
    const selectedMake = makeSelect.value;
    modelSelect.innerHTML = '<option value="">All Models</option>';

    if (carModels[selectedMake]) {
      carModels[selectedMake].forEach(model => {
        const opt = document.createElement("option");
        opt.value = model.toLowerCase().replace(" ", "-");
        opt.textContent = model;
        modelSelect.appendChild(opt);
      });
    }
  });

  // Handle search input (optional)
  searchInput.addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase();
    console.log("Searching for:", query);
    // You could filter visible results here if needed
  });

  // Handle form submit (for now, just prevent default)
  document.getElementById("carFilter").addEventListener("submit", function (e) {
    e.preventDefault();
    const filters = {
      make: makeSelect.value,
      model: modelSelect.value,
      minYear: minYear.value,
      maxYear: maxYear.value,
      minPrice: document.getElementById("minPrice").value,
      maxPrice: document.getElementById("maxPrice").value,
      bodyType: document.getElementById("bodyType").value,
      keyword: searchInput.value
    };
    console.log("Applied Filters:", filters);
    // You can now use `filters` to search/filter vehicles in your listing
  });


  const modelSearchInput = document.getElementById("searchInput");

  // Stores the current models for the selected make
  let currentModelList = [];

  makeSelect.addEventListener("change", function () {
    const selectedMake = makeSelect.value;
    modelSelect.innerHTML = '<option value="">All Models</option>';
    currentModelList = [];

    if (carModels[selectedMake]) {
      currentModelList = [...carModels[selectedMake]];

      currentModelList.forEach(model => {
        const opt = new Option(model, model.toLowerCase().replace(" ", "-"));
        modelSelect.appendChild(opt);
      });
    }
  });

  // Filter model dropdown based on search input
  modelSearchInput.addEventListener("input", function () {
    const searchValue = modelSearchInput.value.toLowerCase();

    // Clear existing options
    modelSelect.innerHTML = '<option value="">All Models</option>';

    // Filter from currentModelList
    currentModelList
      .filter(model => model.toLowerCase().includes(searchValue))
      .forEach(filteredModel => {
        const opt = new Option(filteredModel, filteredModel.toLowerCase().replace(" ", "-"));
        modelSelect.appendChild(opt);
      });
  });
