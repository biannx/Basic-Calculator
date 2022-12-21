let string = "";
let buttons = document.querySelectorAll(".button");
let remove = document.getElementById('#delete');
let input = document.querySelector("input");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "equals") {
      string = eval(string);
      input.value = string;
    }
    else if (button.id == "backspace") {
        // Remove last character of string
        var str = document.querySelector("input").value.slice(0, -1);
        input.value = str;
    }
    else if (button.id == "clear-all") {
      string = "";
      input.value = string;
    } 
    else {
      string = string + button.id;
      input.value += button.id;
    }
  });
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
  if (themeToggleBtn.classList.contains('fa-moon')) {
    themeToggleBtn.classList.remove('fa-moon');
    themeToggleBtn.classList.add('fa-sun');
  } else {
    themeToggleBtn.classList.remove('fa-sun');
    themeToggleBtn.classList.add('fa-moon');
  }
 
};