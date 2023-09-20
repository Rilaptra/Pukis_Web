let menu = document.querySelectorAll(".page");
let navList = document.querySelectorAll("nav .button a");

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
