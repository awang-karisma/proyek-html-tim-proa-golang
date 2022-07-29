
function closeNav() {
    const sidebar = document.getElementById("drawer")
    console.log("closed nav")
    sidebar.style.width = "0"
}
function openNav() {
    const sidebar = document.getElementById("drawer")
    sidebar.style.width = "auto"
}

function toggleNav() {
    document.querySelector('nav').classList.toggle('open')
}   