// check for saved "dark-theme" in localStorage
let darkTheme = localStorage.getItem("darkTheme");

const darkThemeToggle = document.querySelector("#icon");

const enabledarkTheme = () => {
    // 1. Add the class to the body
    document.body.classList.add("darkTheme");
    
    // 2. Update darkTheme in localStorage
    localStorage.setItem("darkTheme", "enabled");
}

const disabledarkTheme = () => {
    // 1. Remove the class from the body
    document.body.classList.remove("darkTheme");
    
    // 2. Update darkTheme in localStorage 
    localStorage.setItem("darkTheme", null);
}

// If the user already visited and enabled darkTheme
// start things off with it on
if (darkTheme === "enabled") {
    enabledarkTheme();
}

// When someone clicks the button
darkThemeToggle.addEventListener("click", () => {
    // get their darkTheme setting
    darkTheme = localStorage.getItem("darkTheme");

    // if it not current enabled, enable it
    if (darkTheme !== "enabled") {
        enabledarkTheme();
        // if it has been enabled, turn it off  
    } else {
        disabledarkTheme();
    }
});
