const breakpointMobile = 768
let isNavOpen = true
/**
 * Listens to window resize event, hide navbar if width less than
 * breakpointMobile otherwise open it
 */
window.addEventListener('resize', function (event) {
    if (window.innerWidth < breakpointMobile && isNavOpen) {
        closeNav()
    } else if (window.innerWidth > breakpointMobile && !isNavOpen) {
        openNav()
    }
})

/**
 * Toggle navbar position
 */
 function toggleNav() {
    if(isNavOpen) {
        closeNav()
    } else {
        openNav()
    }
}

/**
 * Open navbar
 */
 function openNav() {
    if (isNavOpen) return
    document.querySelector('nav').classList.add('open')
    document.getElementsByClassName("modalcover")[0].style.visibility = "visible"
    document.getElementsByClassName("modalcover")[0].style.opacity = 1
    setTimeout(function(){
        isNavOpen = true
    }, 1000)
}

/**
 * Close navbar position
 */
 function closeNav() {
    if (!isNavOpen) return
    document.querySelector('nav').classList.remove('open')
    document.getElementsByClassName("modalcover")[0].style.opacity = 0
    setTimeout(function(){
        document.getElementsByClassName("modalcover")[0].style.visibility = "hidden"
        isNavOpen = false
    }, 1000)
}

/**
 * Get user-defined menu from menu.js dynamically
 * @param {String} name - menu name
 */
function renderMenu(name) {
    // if we can't find name in our menu, then just exit
    if (!!menuList[name] === false) return
    const items = menuList[name]
    // build menu structure
    let tmp = "<ul>"
    for (let i = 0; i < items.length; i++) {
        tmp += `<li id="menu-${name}-${items[i][0]}">${items[i][1]}</li>`
    }
    tmp += "</ul>"
    document.getElementById("menu").innerHTML = tmp
}

/**
 * Navigate iframe element to preset link
 * @param {String} name - user's name
 * @param {String} section - which section to go
 * @param {Boolean} render - if true then render submenu
 */
function goto(name, section = null, render = true) {
    const frame = document.getElementById("maincontent")
    frame.src = "profile." + name + ".html" + (!!section ? "#" + section : "")
    // only render submenu if we switch user
    if (render) renderMenu(name)
}

/**
 * Triggered when page finished loading and element rendered.
 * Registers menu click event listener
 */
window.addEventListener("DOMContentLoaded", function () {
    // If window width less than breakpointMobile then it's a mobile device
    // hide navbar by default
    if (window.innerWidth < breakpointMobile) closeNav()
    document.getElementById("menu").addEventListener('click', function (event) {
        const selectedMenu = !!event.target.id ? event.target.id.split("-") : []
        if (selectedMenu.length === 3 && selectedMenu[0] === "menu") {
            goto(selectedMenu[1], selectedMenu[2], true)
        }
    })
    const content = document.getElementsByClassName("content")[0]
    content.addEventListener('click', function(event) {
        if (window.innerWidth < breakpointMobile && document.querySelector('nav').classList.contains('open')) {
            closeNav()
        } 
    })

    const modal = document.getElementsByClassName("modalcover")[0]
    modal.addEventListener('click', function(event) {
        closeNav()
    })
})
