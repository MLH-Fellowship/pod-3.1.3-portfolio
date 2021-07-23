// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
document.documentElement.setAttribute("data-theme", "dark");

// Get the button switcher from DOM
var themeSwitcher = document.getElementById("Switch");

themeSwitcher.onclick = function() {
  // Get the current color theme
  var currentTheme = document.documentElement.getAttribute("data-theme");

  // If dark, switch to light : If light, switch to dark
  var switchToTheme = currentTheme === "dark" ? "light" : "dark"

  // Set the new color theme
  document.documentElement.setAttribute("data-theme", switchToTheme);


  // Get Sources for Current GitHub Stats and Most Used Languages
  var currentGitHubStats =  document.getElementById("github_stats").src
  var currentGitHubLanguages = document.getElementById("github_languages").src

  // If dark, switch GitHub theme to dark : If light, switch GitHub theme to light
  if (currentTheme == "dark") {
    document.getElementById("github_stats").src = document.getElementById("github_stats").src.replace("dark", "default");
    document.getElementById("github_languages").src = document.getElementById("github_languages").src.replace("dark", "default");
  } else {
    document.getElementById("github_stats").src = document.getElementById("github_stats").src.replace("default", "dark");
    document.getElementById("github_languages").src = document.getElementById("github_languages").src.replace("default", "dark");
  }


}
});
