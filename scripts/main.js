/**
 * If window width less than 800px then it's a mobile device
 * hide navbar by default
 */
isMobile = window.innerWidth < 800
if(isMobile) document.querySelector('nav').classList.remove('open')

/**
 * Listens to window resize event, hide navbar if width less than
 * 800px otherwise open it
 */
window.addEventListener('resize', function(event){
    if(window.innerWidth < 800 && document.querySelector('nav').classList.contains('open')) {
        document.querySelector('nav').classList.remove('open')
    } else if (window.innerWidth > 800 && !document.querySelector('nav').classList.contains('open')) {
        document.querySelector('nav').classList.add('open')
    }
})

/**
 * Toggle navbar position
 */
function toggleNav() {
    document.querySelector('nav').classList.toggle('open')
}

/**
 * Get user-defined menu from menu.js dynamically
 * @param {String} name - menu name
 */
function renderMenu(name) {
    // if we can't find name in our menu, then just exit
    if(!!menuList[name] === false) return
    const items = menuList[name]
    // build menu structure
    let tmp = "<ul>"
    for(let i=0;i<items.length;i++){
        tmp += `<li id="menu-${name}-${items[i][0]}">${items[i][1]}</li>`
    }
    tmp += "</ul>"
    document.getElementById("menu").innerHTML = tmp    
}

/**
 * Navigate iframe element to preset link
 * @param {String} name - user's name
 * @param {String} section - which section to go
 */
function goto(name,section=null){
    const frame = document.getElementById("maincontent")
    frame.src = "profile." + name + ".html" + (!!section ? "#" + section : "")
    renderMenu(name)
}

/**
 * Triggered when page finished loading and element rendered.
 * Registers menu click event listener
 */
window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("menu").addEventListener('click', function(event){
        const selectedMenu = !!event.target.id ? event.target.id.split("-") : []
        if(selectedMenu.length === 3 && selectedMenu[0] === "menu") {
            goto(selectedMenu[1], selectedMenu[2])
        }
    })
})