const menuBars = document.querySelector('.menu-bars')
const overlay = document.querySelector('.overlay')

const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')

const toggleNavItems = [menuBars, nav1, nav2, nav3, nav4, nav5]
const navs = [nav1, nav2, nav3, nav4, nav5]

// Event listeners
toggleNavItems.forEach(item => item.addEventListener('click', toggleNav))

function toggleNav() {
  menuBars.classList.toggle('change')

  overlay.classList.toggle('overlay-active')
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')

    navs.forEach((navItem, i) => {
      setAnimation({toAddCl: `slide-in-${i+1}`, toRemoveCl: `slide-out-${i+1}`, node: navItem})
    })

  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')

    navs.forEach((navItem, i) => {
      setAnimation({toAddCl: `slide-out-${i+1}`, toRemoveCl: `slide-in-${i+1}`, node: navItem})
    })
  }
}

const setAnimation = ({toAddCl, toRemoveCl, node}) => {
  node.classList.replace(toRemoveCl, toAddCl)
}
