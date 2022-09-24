const toggleSection = document.getElementById("toggle-section");
const toggleText = document.getElementById('toggle-text')
toggleSection.addEventListener("click", () => {
    
    toggleText.parentElement.classList.toggle("active");
})