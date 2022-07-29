isMobile = window.innerWidth < 800
if(isMobile) document.querySelector('nav').classList.remove('open')
window.addEventListener('resize', function(event){
    if(window.innerWidth < 800 && document.querySelector('nav').classList.contains('open')) {
        document.querySelector('nav').classList.remove('open')
    } else if (window.innerWidth > 800 && !document.querySelector('nav').classList.contains('open')) {
        document.querySelector('nav').classList.add('open')
    }
})
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