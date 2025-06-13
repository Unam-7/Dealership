
  // Highlight menu items on click
  const menuItems = document.querySelectorAll('.menu_item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Form Validation
  const nameInput = document.querySelector('input[placeholder="Name"]');
  const surnameInput = document.querySelector('input[placeholder="Surname"]');
  const emailInput = document.querySelector('input[placeholder="Email Address"]');
  const phoneInput = document.querySelector('input[placeholder="Pone Number"]');

  [nameInput, surnameInput, emailInput, phoneInput].forEach(input => {
    input.addEventListener('blur', () => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
      } else {
        input.style.border = "2px solid green";
      }
    });
  });

  // Interactive "Read More" Button
  const readMoreButtons = document.querySelectorAll('.btn');
  readMoreButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      alert("Redirecting to detailed car info...");
    });
  });

  // Toggle Profile/Settings Icons
  document.querySelector('.profile').addEventListener('click', () => {
    alert("Go to your account profile.");
  });
  document.querySelector('.sett').addEventListener('click', () => {
    alert("Settings page loading...");
  });

