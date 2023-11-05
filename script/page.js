const page = {
  images: document.querySelector(".imgs"),
  nama: document.getElementById("nama"),
  pekerjaan: document.getElementById("pekerjaan"),
  sinopsis: document.getElementById("sinopsis"),
  narasi: document.getElementById("narasi"),
};
const View = new URLSearchParams(window.location.search)
const buttons = document.querySelectorAll("header ul li a");

// functions
function addImg(src, alt) {
  return `<img src="aset/${src}" alt="${alt}" class="slide" />`;
}
function fill(x, arg) {
  eval(`page.${x}.innerHTML = '${arg}'`);
}

function button(type) {
  buttons.forEach((e) => {
    if (e.getAttribute("href").includes(`${type}`)) {
      e.classList.add("clicked");
    } else {
      e.classList.remove("clicked");
    }
  });
}
let images;
let pageImages;
switch (View.get("page")) {
  // Pak Prasojo
  case "pak-prasojo":
    // Images
    images =
      '<img src="aset/pakprasojo-profil.jpeg" alt="pakprasojo-profil.jpeg" class="slide" />';
    for (let i = 1; i <= 7; i++) {
      images = `${images}${addImg(
        `pakprasojo-${i}.jpg`,
        `pakprasojo-${i}.jpg`
      )}`;
    }
    pageImages = page.images.innerHTML;
    page.images.innerHTML = pageImages + images;

    // About & Narasi
    fill("nama", "Pak Prasojo");
    fill("pekerjaan", "Office Boy | Pensiun");
    fill(
      "sinopsis",
      "Seorang tokoh kebersihan yang berada di SMA Negeri 3 Magelang, siapakah dirinya? Tokoh yang berjasa dalam menjaga kebersihan SMA Negeri 3 Magelang. Beginilah kisah seseorang Prasojo."
    );
    fill(
      "narasi",
      "Seorang Office Boy atau sering dikenal dengan OB adalah suatu pekerjaan yang memiliki tugas dan peran untuk membersihkan sampah-sampah yang ada disuatu tempat. ya, itu adalah pekerjaan pak Prasojo, beliau bekerja sebagai OB di SMA Negeri 3 Magelang. Hal yang sering dilakukan adalah membersihkan seluruh tempat yang ada di SMA Negeri 3 Magelang. Beliau sangat bersemangat dalam menjalankan tugasnya ini selain menurut beliau tugas ini sangat bermakna, bisa memiliki hubungan dekat dengan siswa-siswi di sekolah itu sendiri adalah hal yang sangat beliau sukai. Namun, saat ini beliau sudah memasuki masa pensiun sehingga membuatnya sudah tidak bekerja di SMA Negeri 3 Magelang ini. Kini beliau hanya membantu petugas-petugas yang bekerja saat bola perak datang menyinari kegelapan. Awalnya menjadi OB sekarang hanya membantu petugas yang ada untuk membersihkan sampah. membersihkan disini adalah mengambil sampah yang lalu dibuang ke tempat pembuangan sampah. Jadi sekarang beliau sudah tidak bekerja banyak lagi di SMA Negeri 3 Magelang. Beliau hanya berperan untuk membantu-bantu saja karena sudah menjadi hal yang beliau sukai sejak bekerja di SMA Negeri 3 Magelang. Hal yang bisa kita dapat dari kisah beliau adalah selalu mensyukuri dan bersemangat dalam pekerjaan yang kita jalani,  pekerjaan mulia itu muncul ketika kita dapat menjalaninya dengan tulus dan penuh api yang membara dalam diri kita. Jadi, marilah kita mulai mensyukuri apa yang kita miliki dan kita kerjakan, selagi itu memiliki nilai yang baik itu akan menumbuhkan kebaikan yang lain juga."
    );
    button("prasojo");
    break;

  // Pak Widodo
  case "pak-widodo":
    // Images
    images =
      '<img src="aset/pakwidodo-profil2.jpeg" alt="pakwidodo-profil.jpeg" class="slide" />';
    for (let i = 1; i <= 13; i++) {
      images = `${images}${addImg(`pakwidodo-${i}.jpg`, `pakwidodo-${i}.jpg`)}`;
    }
    pageImages = page.images.innerHTML;
    page.images.innerHTML = pageImages + images;

    // About & Narasi
    fill("nama", "Pak Widodo");
    fill("pekerjaan", "Kabid DLH | Pengelolaan Dan Penanganan Persampahan");
    fill(
      "sinopsis",
      "Tokoh yang berperan penting dalam menjaga kebersihan kota Magelang. Perjalanan panjang yang dia lewati untuk mencapai ini semua. Lika-liku kehidupan sudah terlewati. Resah karena dikejar komodo Ini dia kisah Widodo"
    );
    fill(
      "narasi",
      `Pendidikan S1 IPB Pertanian Pendidikan S2 Ekonomi Pembangunan UGM Diamanahi Pemerintah Kota Magelang Kabid pengelolaan dan penanganan persampahan sejak September 2021 Tempat Tinggal Jetis, Pancuranmas, Kabupaten Magelang Bapak Widodo memulai karirnya dari awal yaitu menjadi CPNS pada tahun 2001. Setelah satu tahun berlalu yang berarti pada tahun 2001 beliau resmi menjadi PNS Pemerintah Kota Magelang di Dinas Pertanian Jalan Kartini nomor 34 Magelang. Selama perjuangannya yang dilakukan waktu demi waktu telah beliau habiskan hingga membuahkan hasil yang membanggakan. Selama 14 tahun bekerja di Dinas pertanian beliau pernah diangkat menjadi Kepala Seksi Produksi Tanaman Pangan. Kemudian pada tahun 2014 ditugaskanlah beliau di Gunung Tidar menjadi Kepala UPT. Lalu dia lewati masa-masa sulit tersebut hingga menyelesaikan tugasnya dengan maksimal. Lalu, pada tahun 2019 Pak Widodo ditugaskan di DLH menjadi Tasi penanganan persamapahan. Hingga pada tahun 2021 tepatnya pada bulan September Bapak Widodo dilantik langsung oleh Bapak Walikota menjadi Kepala Bidang Pengelolaan dan Penanganan Persamapah. Pada saat berkarir tersebut beliau merasa yang menurutnya paling menantang adalah ketika bekerja di daerah Gunung Tidar. Disana beliau merasa kesulitan karena kondisi disana yang sangat kurang mencukupi seperti personil DLH-nya hanya 6 orang, dilanjutkan tidak ada kantor di daerah sana, dan yang terakhir adalah karakteristik warga Gunung Tidar yang sangat berbeda dibandingkan masyarakat biasanya. Meski berat dan terhambat beliau tetap semangat. Mengerjakannya dengan kuat dan keteguhan dengan membantu warga yang tadinya meminta-minta menjadi anggota dlh yang itu juga bias meningkatkan derajat orang tersebut. Mulai menambah personil di Gunung Tidar hingga semuanya bias terlewati dan memberikan hasil yang memuaskan dan membanggakan. Tentunya perubahan tersebut adalah suatu hal yang sangat menarik dan perlu dicontoh. Menjelaskan tentang sampah secara umum sampah-sampah yang terdapat di Negara Indonesia ini selama ini masih mengalami proses pola yang sama yaitu kumpul angkut tumpuk tpa. Hal itu berarti prosesnya selama ini hanyalah mengambil salah yang telah terkumpul lalu diangkut dan ditumpuk ditempat pembuangan akhir. Tentunya itu menjadi hal yang sangat buruk karena sampah menjadi tidak terolah dengan baik. Bahkan kekurangan yang ada di Magelang ini khususnya terdapat kekurangan lahan yang membuat kita menjadi susah untuk membuat pabrik pengolahan sampah. Apabila dipaksakan itu akan mengganggu warga sekitar dan tentu akan ditolak oleh warga. Selain itu, banyak dana yang diperlukan dan masih banyak lagi yang perlu dilakukan. Jadi menurut Bapak Widodo seharusnya pemuda generasi penerus harus diberi pengarahan dan pengajaran agar mereka semua dapat mengolah dan mengembangkan pemikiran mereka agar dapat mengolah sampah. Karena, banyak sekali sampah-sampah yang menumpuk di TPA hingga menjadi pegunungan sampah yang kurang mengenakan untuk kita pandang. Dengan ini kita harus mengadakan dan menjalankan pengolahan seperti yang sudah dilakukan orang-orang di beberapa daerah yang telah memanfaatkan sampah organic menjadi pupuk dan peternakan maggot, serta sampah anorganik barang-barang yang berharga kembali. Jadi dengan itu bias disimpulkan bahwa kita seharusnya tidak hanya mengeluh tentang penumpukan sampah yang mengganggu kita tetapi, juga mengurangi dan memanfaatkan lagi sampah yang dapat diolah agar dapat menjadi barang-barang yang dapat kita manfaatkan kembali. Kesimpulannya kita harus melakukan penanganan sampah ini dengan perilaku kita yang menerapkan kebiasaan yang lebih dan mengurangi sampah yang khususnya susah diolah dan terurai.`
    );
    button("widodo");
    break;

  // Pak Sumiaji
  case "pak-sumiaji":
    // Images
    images =
      '<img src="aset/paksumiaji-profil.jpeg" alt="paksumiaji-profil.jpeg" class="slide" />';
    for (let i = 1; i <= 13; i++) {
      images = `${images}${addImg(
        `paksumiaji-${i}.jpg`,
        `paksumiaji-${i}.jpg`
      )}`;
    }
    pageImages = page.images.innerHTML;
    page.images.innerHTML = pageImages + images;

    // About & Narasi
    fill("nama", "Pak Sumiaji");
    fill("pekerjaan", "Karyawan DLH | Petugas Kebersihan");
    fill(
      "sinopsis",
      "Seseorang yang membersihkan jalanan di Kota Magelang. Lantas bagaimana susah dan senang yang ia rasakan saat menjalan tugasnya. Mungkin dia bisa jadi sosok pahlawan. Sari pati umbi singkong yang dijadikan tepung kanji Berikut ini adalah kisah seorang Sumiaji"
    );
    fill(
      "narasi",
      "Dikisahkan ada sesuatu yang memiliki tangan, kaki, kepala, badan, dan pemikiran yang dapat digunakan. Yaa.. itu adalah manusia, ada seseorang yang bernama Sumiaji, seseorang yang memiliki sikap yang aneh dimana dia selalu membersihkan kotoran yang berserakan dijalanan. Ia rela membersihkan itu semuanya dengan tulus dan penuh semangat. Kebanyakan orang pasti tidak ingin melakukan aktivitas tersebut itu adalah sikap yang normal. Mungkin itu terbalik. Mungkin. Cerita awalnya bermula ketika dia sedang melakukan aktivitas di Kota Yogyakarta dan menikmati indahnya pemandangan disana. Namun, tidak lama kemudian dia pulang ke tempat yang menjadi rumahnya. Saat tiba ditempat awalnya itu beliau bingung dengan aktivitas apa yang akan ia kerjakan agar dapat menafkahi kehidupannya sendiri. Beliau berusaha mencari kesana kemari akan tetapi, belum menemukan hal tersebut. Akhirnya ia mendapatkan tawaran dari temannya untuk menjadi pahlawan kebersihan. Biasanya sih dikenal dengan DLH. akhirnya dia menjalani kehidupan dengan membantu masyarakat agar merasa nyaman dengan tempat yang mereka kunjungi. Dia sepenuhnya mengabdi untuk negara dengan menjadi pahlawan kebersihan. Rintangan cuaca yang ada baik cuaca normal maupun ekstrim dilewati oleh Sumiaji agar dapat memberikan kenyamanan bagi masyarakat. Sampai saat ini beliau masih aktif menjadi pahlawan kebersihan. Harapannya orang-orang bisa menghargai pahlawan-pahlawan tersebut dengan hal-hal kecil seperti membuang sampah pada kotak, tong, ataupun bentuk lainnya yang tersedia di sekeliling Kota."
    );
    button("sumiaji");
    break;

  case "home":
    window.location.href = window.location.href.split("/biography")[0];
    break;
  // Error Not Found
  default:
    alert("Not Found !");
    window.location.href = `${
      window.location.href.split("biography.html")[0]
    }biography.html?page=pak&prasojo`;
    break;
}

const slides = document.querySelectorAll(".slide");

let counter = 0;
slides.forEach((slide, i) => {
  slide.style.left = `${i * 100}%`;
});

const next = () => {
  counter++;
  counter > slides.length - 1 ? counter-- : slideImg();
};

const prev = () => {
  counter--;
  counter < 0 ? counter++ : slideImg();
};

const slideImg = () => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const openmenu = document.getElementById("menubut");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
tooglemenu = () => {
  menu.classList.toggle("viewmenu");
};
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !openmenu.contains(e.target)) {
    menu.classList.remove("viewmenu");
  }
});
