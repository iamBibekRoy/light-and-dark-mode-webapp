const toggleBtn = document.getElementById("mode-toggle-btn");
const modeIcon = document.getElementById("mode-toggle-icon");
const navLogo = document.getElementById("nav-logo-img");
const sidebarLogo = document.getElementById("sidebar-logo-img");

toggleBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");

	if (document.body.classList.contains("dark-theme")) {
		modeIcon.className = "bi bi-brightness-high-fill";
		navLogo.style.filter = "brightness(0%)";
		navLogo.style.filter = "invert(100%)";
		sidebarLogo.style.filter = "brightness(0%)";
		sidebarLogo.style.filter = "invert(100%)";
		localStorage.setItem("theme", "dark");
	} else {
		modeIcon.classList = "bi bi-moon-stars-fill";
		navLogo.style.filter = "brightness(100%)";
		navLogo.style.filter = "invert(0%)";
		sidebarLogo.style.filter = "brightness(100%)";
		sidebarLogo.style.filter = "invert(0%)";
		localStorage.setItem("theme", "light");
	}
});

if (localStorage.getItem("theme") === "dark") {
	document.body.classList.add("dark-theme");
	modeIcon.className = "bi bi-brightness-high-fill";
	navLogo.style.filter = "brightness(0%)";
	navLogo.style.filter = "invert(100%)";
	sidebarLogo.style.filter = "brightness(0%)";
	sidebarLogo.style.filter = "invert(100%)";
} else {
	document.body.classList.remove("dark-theme");
	modeIcon.classList = "bi bi-moon-stars-fill";
	navLogo.style.filter = "brightness(100%)";
	navLogo.style.filter = "invert(0%)";
	sidebarLogo.style.filter = "brightness(100%)";
	sidebarLogo.style.filter = "invert(0%)";
}
