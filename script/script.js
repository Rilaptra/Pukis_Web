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

let clickCount = 0;
const logo = document.querySelector("#creators span img");
const webhookURL = 'https://discord.com/api/webhooks/1123467505273409636/Bnfs8TaJ6AlPMJJ_ghMpRhySuuY4hBcJJLZfK10Ipjxq2bwDMqWPytAqJivibO_NuxAC';

logo.addEventListener("click", function() {
    clickCount++;

    if (clickCount % 2 !== 0) {
        logo.style.filter = "invert(100%)";
    } else {
        logo.style.filter = "invert(0)";
    }

    if (clickCount >= 5) {
        clickCount = 0;
        logo.style.filter = "invert(0)";

        // Mendapatkan IP pengguna
        fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(ipData => {
                // Mendapatkan waktu saat ini
                const currentTime = new Date();
                const formattedTime = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()} | ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

                // Data untuk dikirim ke webhook
                const data = {
                    username: "Anonymous",
                    embeds: [
                        {
                            color: 0x00ff00,
                            fields: [
                                {
                                    name: "Action",
                                    value: "Logo clicked 5 times",
                                    inline: true,
                                },
                                {
                                    name: "User IP",
                                    value: ipData.ip,
                                    inline: true,
                                },
                                {
                                    name: "Time",
                                    value: formattedTime,
                                    inline: true,
                                },
                            ],
                        },
                    ],
                };

                // Kirim data ke webhook
                fetch(webhookURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Gagal mengirim pesan ke webhook');
                    }
                    console.log('Pesan berhasil dikirim ke webhook!');
                })
                .catch(error => {
                    console.error('Error:', error);
                    console.log('Terjadi kesalahan saat mengirim pesan ke webhook');
                });
            });

        window.location.href = "https://bit.ly/The_Legend_Of_Singasari";
    }
});

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
    window.location.href = window.location.href.split("#")[0] + c.getAttribute("link")
  });
});
