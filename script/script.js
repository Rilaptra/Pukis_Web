let menu = document.querySelectorAll(".page");
let navList = document.querySelectorAll("nav .button a");
let openmenu = document.getElementById('openmenu')
let closemenu = document.getElementById('closemenu')
let nav = document.getElementById('nav')
let cardbox = document.querySelectorAll('.product .box')

window.onscroll = () => {
  menu.forEach((page) => {
    let top = window.scrollY;
    let offset = page.offsetTop - 100;
    let height = page.offsetHeight;
    if (top >= offset && top < offset + height) {
      navList.forEach((nav) => {
        if (page.classList[1] == nav.getAttribute("href").substring(1)) {
          nav.parentElement.classList.add("onview");
        } else {
          nav.parentElement.classList.remove("onview");
        }
      });
      page.classList.add("onviewpage");
    } else {
      page.classList.remove("onviewpage");
    }
  });
};

// Hamburger menu for Mobile
tooglenav = () => {
  nav.classList.toggle('clickview')
}
document.addEventListener('click', e => {
  if (!openmenu.contains(e.target) && !closemenu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove('clickview')
  }
})

cardbox.forEach(c => {
  c.addEventListener('click', (e) => {
    const link = 'https://rilaptra.github.io/Pukis_Web/' + c.getAttribute('link')
    window.location.href = link;
  })
})