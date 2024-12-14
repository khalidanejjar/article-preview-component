document.addEventListener('DOMContentLoaded', () => {
    const shareIcon = document.getElementById("share-icon");
    const socialIcon = document.getElementById("social-icon")

    // Toggle social icon
    const toggleSocialIcon = () => {
        socialIcon.classList.toggle("visible");
        socialIcon.classList.toggle("hidden");
    }
    //Show share elements when click
    shareIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSocialIcon();
    });
    //Hide share element when clicking outside of the element itself
    document.addEventListener("click", (e) => {
        if(!socialIcon.contains(e.target) && e.target !== shareIcon){
            socialIcon.classList.remove("visible");
            socialIcon.classList.add("hidden");
        }
    });

     // Prevent click social-icons from closing it
     socialIcon.addEventListener("click", (e) =>{
        e.stopPropagation;
     });
})