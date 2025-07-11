
document.addEventListener("DOMContentLoaded", function() {
    const englishLink = document.getElementById("english");
    const hindiLink = document.getElementById("hindi");

    // Event listener for English link
    englishLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleLanguage("english"); // Show English content
        setActiveLanguage(englishLink);
    });

    // Event listener for Hindi link
    hindiLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleLanguage("hindi"); // Show Hindi content
        setActiveLanguage(hindiLink);
    });

    // Function to toggle content based on language
    function toggleLanguage(language) {
        const englishContent = document.querySelector(".section1");
        const hindiContent = document.querySelector(".hindi-content");

        if (language === "english") {
            englishContent.style.display = "block";
            hindiContent.style.display = "none";
        } else if (language === "hindi") {
            englishContent.style.display = "none";
            hindiContent.style.display = "block";
        }
    }

    // Function to set active language link
    function setActiveLanguage(activeLink) {
        const languageLinks = document.querySelectorAll(".language a");
        languageLinks.forEach(link => {
            link.classList.remove("active");
        });
        activeLink.classList.add("active");
    }
});
