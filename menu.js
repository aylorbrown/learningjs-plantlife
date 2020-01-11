const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")


// when i click the toggle tag, toggle a class of open on the main tag 
// and if its open, make the toggle tag says closed 
// and if its closed, make the toggle tag say menu 
toggleTag.addEventListener("click", function () {
    mainTag.classList.toggle("open")



    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = `<img src="assets/close.svg"> Close`;
    } else {
        toggleTag.innerHTML = `<img src="assets/menu.svg"> Menu`;
    }
})
