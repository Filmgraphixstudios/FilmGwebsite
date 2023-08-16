// NavBar toggle

const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    };

    //Back  to top arrow

    document.addEventListener("DOMContentLoaded", () => {
        const backToTopButton = document.getElementById("backToTopBtn");
    
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });
    
        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
    

    //copyright script

    const date = new Date();
      const copyright = document.querySelector("#copyright");
      copyright.innerText = date.getFullYear();
