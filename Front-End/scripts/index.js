const themetoggle = document.querySelector(".icon");
themetoggle.addEventListener("click", () => {
  console.log("clicking");
  const currenttheme = document.documentElement.getAttribute("data-theme");
  if (currenttheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

const signupButton = document.querySelector(".signupBtn");
const signupPanel = document.querySelector(".signup");
signupButton.addEventListener("click", () => {
  console.log("Clicking...");
  signupPanel.classList.add("active");
});
