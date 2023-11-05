const menu = document.querySelectorAll(".page");
const navList = document.querySelectorAll("nav .button a");
const openmenu = document.getElementById("openmenu");
const closemenu = document.getElementById("closemenu");
const nav = document.getElementById("nav");
const cardbox = document.querySelectorAll(".product .box");
const pukis = document.getElementById("pukis");
const kelas = document.getElementById("kelas");
const special = document.getElementById("special");
const h1credit = document.querySelector(".credits credit h1");

if (window.location.href != "https://rilaptra.github.io/Pukis_Web/") {
  window.location.href = "https://rilaptra.github.io/Pukis_Web/";
}

if (window.innerWidth < 768) {
  pukis.innerHTML = "SMANAGA IG";
  kelas.innerHTML = "Our Class IG";
}

h1credit.innerHTML = h1credit.innerText
  .split("")
  .map(
    (letter, i) =>
      `<span style="transition-delay: ${i * 80}ms">${letter}</span>`
  )
  .join("");

window.onscroll = () => {
  menu.forEach((page) => {
    const top = window.scrollY;
    const offset = page.offsetTop - 100;
    const height = page.offsetHeight;
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
  nav.classList.toggle("clickview");
};
document.addEventListener("click", (e) => {
  if (
    !openmenu.contains(e.target) &&
    !closemenu.contains(e.target) &&
    !nav.contains(e.target)
  ) {
    nav.classList.remove("clickview");
  }
});

cardbox.forEach((c) => {
  c.addEventListener("click", () => {
    window.location.href = window.location.href.split("#')[0] + c.getAttribute("link")
  });
});
