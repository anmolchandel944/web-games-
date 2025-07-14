// Search Function
document.getElementById("searchBar").addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  const cards = document.querySelectorAll(".game-card");
  cards.forEach(card => {
    const title = card.querySelector("h2").innerText.toLowerCase();
    card.style.display = title.includes(searchText) ? "block" : "none";
  });
});

// Category Filter
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    btn.classList.add("active");
    const category = btn.getAttribute("data-category");
    const cards = document.querySelectorAll(".game-card");
    cards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  document.getElementById("themeToggle").textContent = isLight ? "🌞" : "🌙";
});
