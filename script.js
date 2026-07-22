/**
 * LOVE WEBSITE — script.js
 * Romantic Premium Experience
 * Modular, clean, no framework.
 */

'use strict';

/* ================================================
   MODULE: CONSTANTS & DATA
   ================================================ */
const QUOTES = [
  "Mencintaimu bukan keputusan yang aku buat sekali. Itu adalah pilihan yang aku perbarui setiap pagi saat mataku terbuka dan namamu adalah hal pertama yang melintas.",
  "Ada orang-orang yang datang dan pergi seperti angin. Kamu datang dan memilih untuk tinggal — dan itulah yang membuatmu berbeda dari siapapun.",
  "Kesetiaan bukan tentang tidak pernah merasakan godaan. Ini tentang selalu memilih kembali ke kamu, lagi dan lagi, meskipun hari itu terasa berat.",
  "Aku bersyukur bukan hanya karena kamu ada, tapi karena kamu ada dengan cara yang paling tepat — pada waktu yang aku paling butuhkan.",
  "Masa depan yang paling aku inginkan adalah sederhana saja: kamu, aku, dan waktu yang tidak pernah habis untuk kita habiskan bersama.",
  "Ketika hari-hari terasa terlalu keras, aku tidak mencari pelarian. Aku mencarimu. Dan entah mengapa itu selalu cukup.",
  "Kamu adalah rumah yang tidak perlu aku gambarkan di peta, karena aku selalu tahu jalannya — hatiku selalu mengarah ke kamu.",
  "Cinta yang sesungguhnya bukan yang membuat hidupmu mudah. Tapi yang membuatmu merasa kuat untuk menghadapi yang sulit.",
  "Dalam banyak hal yang tidak aku yakin di dunia ini, satu hal yang selalu aku tahu pasti: perasaanku padamu nyata, dalam, dan tidak akan berubah.",
  "Kamu tidak harus sempurna untuk dicintai. Kamu cukup hanya dengan menjadi kamu — dan percayalah, itu lebih dari cukup.",
  "Ada keajaiban kecil dalam hal-hal sederhana: saat kamu tertawa, saat matamu berbinar, saat kamu tidur dengan tenang. Semua itu adalah duniaku.",
  "Perjuangan terbesar dalam hubungan bukan melawan satu sama lain. Tapi berjuang bersama menghadapi dunia yang kadang tidak mudah dimenangkan.",
  "Aku tidak butuh momen-momen besar untuk merasa bahagia bersamamu. Cukup momen-momen biasa — yang menjadi luar biasa karena kamu ada.",
  "Rasa nyaman yang kamu berikan itu berbeda dari nyaman yang lain. Itu bukan karena tidak ada masalah. Tapi karena ada kamu di sisinya.",
  "Kamu mengajariku bahwa cinta sejati itu bukan perasaan yang selalu meluap. Kadang ia diam, tenang, dan justru terasa lebih dalam.",
  "Bukan karena kamu selalu ada yang membuatmu istimewa. Tapi karena saat paling sepi pun, rasanya seperti kamu selalu ada.",
  "Tentang masa depan, aku tidak tahu banyak hal. Tapi satu hal yang aku yakini: aku ingin kamu ada di setiap versi hidupku yang akan datang.",
  "Cinta itu seperti gravitasi — kamu tidak bisa melihatnya, tapi kamu merasakannya setiap saat. Dan aku merasakannya paling kuat saat bersamamu.",
  "Aku tidak ingin menjadi seseorang yang hanya mencintaimu saat segalanya baik-baik saja. Aku ingin dicintai bahkan saat aku sedang di titik terendahku.",
  "Kenangan yang paling aku hargai bukan selalu yang dramatis. Tapi yang kita jalani diam-diam, tanpa rencana, dan tetap terasa sempurna.",
  "Senyummu adalah hal yang paling aku ingin lihat di akhir hari yang panjang. Bukan karena alasan romantis — tapi karena itu cara dunia memberitahuku bahwa segalanya baik-baik saja.",
  "Aku mencintaimu bukan dengan setengah hati. Dengan seluruh apa yang aku punya — termasuk bagian dariku yang belum pernah aku tunjukkan ke siapapun.",
  "Kamu adalah jawaban dari pertanyaan yang bahkan tidak aku tahu sedang aku ajukan. Dan sekarang aku tidak bisa membayangkan hidup tanpa jawabannya.",
  "Ada momen ketika aku melihatmu tanpa kamu sadar. Dan setiap kali, aku berpikir: betapa beruntungnya aku bisa menyebut kamu milikku.",
  "Kita tidak harus selalu bicara untuk memahami satu sama lain. Kadang cukup diam berdua — dan itu terasa lebih penuh dari percakapan panjang manapun.",
  "Aku tidak mencintaimu karena kamu sempurna. Aku mencintaimu karena saat bersamamu, aku merasa bisa menjadi diriku yang paling jujur.",
  "Jarak tidak pernah benar-benar memisahkan dua orang yang saling mencintai. Hati kita terlalu keras kepala untuk menyerah hanya karena ruang dan waktu.",
  "Kamu adalah alasan aku percaya bahwa hal-hal baik memang ada. Dan aku berharap aku bisa menjadi alasan yang sama untukmu.",
  "Mencintaimu terasa seperti pulang ke tempat yang belum pernah aku tinggalkan — familiar, hangat, dan selalu mau menerimaku apa adanya.",
  "Satu hal yang paling ingin aku lakukan setiap hari: memastikan kamu tahu bahwa kamu dicintai. Bukan dengan kata-kata besar, tapi dengan cara-cara kecil yang konsisten."
];

const PANTUNS = [
  {
    sampiran: "Bunga mawar mekar di pagi,\nHarum semerbak menghiasi taman.",
    isi: "Belum sehari kamu pergi,\nHatiku sudah sangat kehilangan.",
    emoji: "🌹"
  },
  {
    sampiran: "Burung pipit terbang rendah,\nHinggap di dahan pohon rindang.",
    isi: "Hatiku melayang entah kemana,\nSetiap kali kamu sedang dipandang.",
    emoji: "🕊️"
  },
  {
    sampiran: "Makan coklat di sore hari,\nManis sekali sampai ke hati.",
    isi: "Begitulah rasanya dekat kamu,\nManis sekali susah kulupakan lagi.",
    emoji: "🍫"
  },
  {
    sampiran: "Petik stroberi di kebun belakang,\nMerah merona cantik sekali.",
    isi: "Senyummu itu yang selalu kutunggu,\nCerahkan hariku dari pagi ke nanti.",
    emoji: "🍓"
  },
  {
    sampiran: "Kucing tidur di atas kasur,\nMimpi indah sambil mendengkur.",
    isi: "Kalau tidur kuharap kamu mimpi,\nAda aku duduk di sampingmu terus.",
    emoji: "🐱"
  },
  {
    sampiran: "Naik perahu menuju pulau,\nOmbak tenang angin semilir.",
    isi: "Satu momen bersamamu terasa berharga,\nLebih dari seribu hari tanpa kamu hadir.",
    emoji: "⛵"
  },
  {
    sampiran: "Langit malam berbintang terang,\nBulan purnama menyinari bumi.",
    isi: "Di antara semua yang ada di dunia,\nKamu yang paling bersinar di mataku ini.",
    emoji: "🌙"
  },
  {
    sampiran: "Main layang-layang di lapangan luas,\nAnginnya kencang benangnya kuat.",
    isi: "Meski badai datang silih berganti,\nCintaku padamu tidak akan putus.",
    emoji: "🪁"
  },
  {
    sampiran: "Kupu-kupu hinggap di bunga lily,\nSayapnya indah warna-warni.",
    isi: "Hatiku berbunga setiap saat,\nKetika kamu tersenyum padaku tadi.",
    emoji: "🦋"
  },
  {
    sampiran: "Hujan turun di pagi hari,\nBasahi tanah yang sudah kering.",
    isi: "Kata sayangmu yang terucap lembut,\nBasahi hatiku yang pernah kesepian.",
    emoji: "🌧️"
  },
  {
    sampiran: "Beli kue di toko seberang,\nKuenya lembut penuh isi.",
    isi: "Setiap hari bersamamu serasa manis,\nSeperti kue yang selalu kusuka ini.",
    emoji: "🍰"
  },
  {
    sampiran: "Pergi ke pasar membeli tebu,\nManis rasanya bukan kepalang.",
    isi: "Semakin lama kamu kukenal,\nSemakin aku tidak bisa lepas darimu.",
    emoji: "🌿"
  },
  {
    sampiran: "Ikan hiu berenang di lautan,\nTiap malam selalu mencari makan.",
    isi: "Tiap malam aku selalu mencari,\nPesan darimu sebelum aku terlelap.",
    emoji: "🐟"
  },
  {
    sampiran: "Tanam padi di sawah pagi,\nTumbuh subur disiram hujan.",
    isi: "Dari hari ke hari cintaku padamu,\nTerus tumbuh tidak pernah berkurang.",
    emoji: "🌾"
  },
  {
    sampiran: "Beli buku di toko buku lama,\nLembarnya kuning beraroma nostalgia.",
    isi: "Kisah kita baru saja dimulai,\nTapi sudah jadi favoritku selamanya.",
    emoji: "📖"
  },
  {
    sampiran: "Rajin memasak nasi goreng pagi,\nBumbu rempah wangi tercium jauh.",
    isi: "Rajin juga aku memikirkanmu,\nDari pagi hingga aku tertidur.",
    emoji: "🍳"
  },
  {
    sampiran: "Berkelana di hutan yang lebat,\nPohon tinggi rindang menaungi.",
    isi: "Di antara banyak orang di dunia ini,\nHanya kamu yang membuatku merasa aman.",
    emoji: "🌳"
  },
  {
    sampiran: "Angsa putih berenang di danau,\nAnggun bergerak tenang sekali.",
    isi: "Caramu menjagaku dengan tulus,\nLebih anggun dari apapun yang pernah kulihat.",
    emoji: "🦢"
  },
  {
    sampiran: "Minum kopi di pagi yang dingin,\nHangat menjalar sampai ke dada.",
    isi: "Begitulah rasanya mendengar suaramu,\nHangat sekali mengusir sepi dan gundah.",
    emoji: "☕"
  },
  {
    sampiran: "Berlari kecil di pinggir pantai,\nPasir putih terasa lembut di kaki.",
    isi: "Lari ke manapun aku pergi,\nSelalu ada sisi yang ingin balik ke kamu.",
    emoji: "🏖️"
  }
];

const TEKA_TEKI = [
  {
    question: "Aku tidak berbentuk tapi bisa dirasa. Aku tidak bisa dilihat tapi bisa menyakiti dan menyembuhkan. Aku tumbuh semakin kuat ketika diberi waktu. Apa aku?",
    answer: "Cinta 💕 — tidak kasat mata, namun nyata lebih dari apapun yang bisa kamu pegang."
  },
  {
    question: "Aku datang tanpa diundang dan pergi tanpa pamit. Aku paling sering muncul saat malam, dan aku berbentuk namamu. Apa aku?",
    answer: "Rindu 🌙 — selalu hadir tanpa izin, terutama ketika hari sudah sepi."
  },
  {
    question: "Aku bukan rumah, tapi kamu merasa nyaman di sana. Aku bukan bantal, tapi bisa membuatmu tenang. Aku ada setiap kali kamu membutuhkan ketenangan. Apa aku?",
    answer: "Pelukan dari orang yang mencintaimu 🤗"
  },
  {
    question: "Makin diberi, makin besar. Makin disimpan, makin mengecil. Aku bukan balon atau api. Apa aku?",
    answer: "Cinta yang diungkapkan ❤️ — semakin dibagi, semakin bertambah indahnya."
  },
  {
    question: "Aku tidak punya suara, tapi bisa membuat orang menangis. Aku tidak punya kaki, tapi bisa menghampiri dari jauh. Aku dikirim dengan hati, bukan tangan. Apa aku?",
    answer: "Kata-kata yang tulus 💌 — tulisan yang datang dari lubuk hati paling dalam."
  },
  {
    question: "Aku selalu ada dua, tidak pernah satu. Tanpa pasanganku, aku tidak lengkap. Aku bukan sepatu atau sarung tangan. Apa aku?",
    answer: "Kita — dua orang yang saling melengkapi dan membutuhkan satu sama lain 💑"
  },
  {
    question: "Aku semakin ringan ketika dibawa berdua. Aku semakin berat ketika dipikul sendiri. Aku bukan tas atau beban pekerjaan. Apa aku?",
    answer: "Masalah dan cobaan hidup ✨ — terasa jauh lebih ringan saat dihadapi bersama."
  },
  {
    question: "Kamu menatapku setiap kali ingin tahu kabar seseorang yang jauh. Aku bisa membawa suara, wajah, bahkan tawa. Tapi aku tidak bisa menggantikan kehadirannya. Apa aku?",
    answer: "Ponselmu 📱 — penghubung jarak yang tidak pernah bisa menggantikan kehangatan nyata."
  },
  {
    question: "Semakin kamu berlari menjauh dariku, semakin terasa berat langkahmu. Aku tidak pernah menarik lenganmu, tapi kamu selalu kembali. Apa aku?",
    answer: "Perasaan yang tidak bisa diabaikan 💗 — cinta yang mengikat tanpa rantai."
  },
  {
    question: "Aku bukan kalender, tapi kamu selalu ingat aku. Aku bukan momen penting, tapi kamu tandai aku di kepalamu. Aku adalah hari ketika segalanya berubah. Apa aku?",
    answer: "Hari pertama kamu jatuh cinta 🌹 — tanggal yang terukir tanpa perlu dicatat."
  },
  {
    question: "Aku bisa membuatmu tersenyum di tengah hari yang berat. Aku hanya butuh satu kalimat. Aku tidak perlu besar untuk terasa bermakna. Apa aku?",
    answer: "Pesan singkat dari orang tersayang 💬 — 'Aku kangen kamu' yang mengubah segalanya."
  },
  {
    question: "Aku tidak bisa dibeli dengan uang sebanyak apapun. Tapi orang rela melakukan segalanya untuk mendapatkanku. Aku bukan mahkota atau kekuasaan. Apa aku?",
    answer: "Kepercayaan dalam hubungan 🕊️ — lebih berharga dari apapun di dunia."
  },
  {
    question: "Aku diam ketika kamu bahagia. Aku paling keras ketika kamu sedih. Aku bukan hati, tapi ada di dadamu. Apa aku?",
    answer: "Kesedihan yang kamu sembunyikan 🌧️ — yang paling nyaring justru saat tak terucap."
  },
  {
    question: "Aku hadir di momen pertama dan momen terakhir. Aku ada di antara 'halo' dan 'sampai jumpa'. Aku tidak pernah cukup meski sudah diberikan berkali-kali. Apa aku?",
    answer: "Waktu bersama orang yang kita cintai ⏳ — tidak pernah terasa cukup."
  },
  {
    question: "Ketika kamu melihatku, kamu tidak bisa berpura-pura. Aku bisa menunjukkan apa yang kamu rasakan bahkan sebelum kamu bicara. Aku ada di wajahmu. Apa aku?",
    answer: "Senyum yang tidak bisa dibohongi 😊 — yang muncul begitu saja saat memikirkan dia."
  },
  {
    question: "Aku selalu ada di antara dua orang yang saling mencintai. Aku tidak terlihat, tapi terasa. Aku bukan jarak — aku yang mengisi jarak itu. Apa aku?",
    answer: "Kerinduan yang hangat 💫 — rasa yang menjaga dua hati tetap terhubung meski berjauhan."
  },
  {
    question: "Aku bisa membuat orang berani melakukan hal yang tidak pernah mereka bayangkan. Aku bisa membuatmu kuat dan rapuh di saat yang sama. Apa aku?",
    answer: "Cinta yang dalam ❤️‍🔥 — kekuatan terbesar sekaligus kerentanan paling jujur manusia."
  },
  {
    question: "Aku hidup di dalam kata-kata yang tidak pernah terucap. Aku tumbuh dalam keheningan. Dan suatu hari aku meledak dan mengubah segalanya. Apa aku?",
    answer: "Perasaan yang ditahan terlalu lama 💭 — yang akhirnya harus diakui juga."
  },
  {
    question: "Aku bukan musik, tapi bisa membuat hatimu bergetar. Aku bukan angin, tapi bisa membuatmu merasa dingin dan hangat bersamaan. Apa aku?",
    answer: "Tatapan matanya yang penuh makna 👀 — yang mengandung semua kata yang tidak perlu diucapkan."
  },
  {
    question: "Orang mencarinya bertahun-tahun. Beberapa menemukan, banyak yang belum. Ia tidak berbentuk sempurna, tapi terasa sempurna saat ditemukan. Apa itu?",
    answer: "Pasangan yang tepat 💑 — bukan yang sempurna, tapi yang tepat untukmu."
  }
];

const GAME_QUESTIONS = [
  {
    question: "Apa yang selalu ada di pikiranku setiap pagi ketika mataku baru saja terbuka?",
    options: ["A. Kopi hangat", "B. Pekerjaan", "C. Kamu", "D. Apa yang mau dimakan"],
    correct: "C",
    successMsg: "Tentu saja kamu! Mataku belum sepenuhnya terbuka pun, namamu sudah duluan ada di sana. 💕",
    wrongMsgs: [
      "Hmm, coba pikir lagi... Kira-kira siapa yang selalu aku rindukan setiap pagi? 🤔",
      "Dekat... tapi belum tepat. Coba ingat-ingat lagi, siapa yang aku kirimi pesan 'selamat pagi' setiap hari? 😄",
      "Hampir! Tapi ada yang jauh lebih istimewa dari itu... 💭"
    ]
  },
  {
    question: "Ketika aku sedang sedih dan tidak tahu harus berbuat apa, siapa yang pertama kali ingin aku hubungi?",
    options: ["A. Teman-teman", "B. Orang tua", "C. Kamu", "D. Biarkan sendiri"],
    correct: "C",
    successMsg: "Ya, selalu kamu. Karena bersamamu, bahkan hari paling berat terasa sedikit lebih ringan. 🌹",
    wrongMsgs: [
      "Mereka penting, tapi ada satu orang yang paling ingin aku dengar suaranya... 💭",
      "Bukan yang itu... Pikirkan siapa yang namanya pertama melintas saat hatiku berat. 🥺"
    ]
  },
  {
    question: "Kalau aku bisa mengulang satu momen dalam hidupku, momen apa yang akan aku pilih?",
    options: ["A. Hari wisuda", "B. Liburan terbaik", "C. Hari pertama bertemu kamu", "D. Hari pertama kerja"],
    correct: "C",
    successMsg: "Hari pertama bertemu kamu. Karena dari situlah semua cerita indah ini dimulai. 💗",
    wrongMsgs: [
      "Momen-momen itu memang spesial, tapi ada satu yang jauh lebih berarti... 🌟",
      "Coba ingat kapan hidupku benar-benar berubah... 💫"
    ]
  }
];

const GALLERY_ITEMS = [
  {
    src: "gallery/photo1.jpg",
    caption: "Di antara semua tempat yang pernah kita kunjungi, momen bersamamu selalu menjadi destinasi favoritku."
  },
  {
    src: "gallery/photo2.jpg",
    caption: "Tawa yang paling tulus selalu lahir dari momen yang paling tidak terduga. Seperti ini."
  },
  {
    src: "gallery/photo3.jpg",
    caption: "Kebersamaan kita tidak perlu selalu spektakuler. Yang biasa pun terasa istimewa bersamamu."
  },
  {
    src: "gallery/photo4.jpg",
    caption: "Setiap foto denganmu menyimpan cerita yang lebih dalam dari yang bisa dilihat mata."
  },
  {
    src: "gallery/photo5.jpg",
    caption: "Ini bukan sekadar gambar. Ini adalah kenangan yang akan aku bawa selamanya."
  }
];

const PLAYLIST = [
  { title: "Akhirnya Kumenemukanmu — Naff", src: "" },
  { title: "Sempurna — Andra & The Backbone", src: "" },
  { title: "Jika Itu Yang Kau Mau — Vidi Aldiano", src: "" },
  { title: "Karena Kamu — Yura Yunita", src: "" },
  { title: "I Love You — Mocca", src: "" }
];

const METER_RESULTS = [
  "Cintaku padamu telah melampaui batas yang bisa diukur oleh alat manapun di dunia.",
  "Ternyata angka saja tidak cukup untuk mengungkapkan seberapa besar aku mencintaimu.",
  "Alat ukur ini hampir rusak karena mencoba mengukur sesuatu yang tidak terbatas.",
  "Hasilnya selalu sama: cintaku padamu selalu di atas skala tertinggi yang ada."
];

const DYML_DIALOGS = [
  "Hmm... tombol 'Tidak' itu sepertinya salah. Coba lagi, tapi kali ini dengan hati yang jujur ya? 😄",
  "Kamu yakin? Karena matamu bilang hal yang berbeda dari tombol yang kamu tekan itu... 👀",
  "Oke, aku akan menerima jawabanmu... setelah kamu pikir ulang satu kali lagi. Gratis kok! 🥺",
  "Kasih tau aku satu alasan kenapa kamu pilih 'Tidak', dan aku berjanji tidak akan memaksamu... mungkin. 😏",
  "Baiklah. Kamu tahu apa? Tidak apa-apa. Aku akan tetap mencintaimu sampai kamu akhirnya mau mengakuinya. 💕"
];

/* ================================================
   MODULE: CANVAS BACKGROUND
   ================================================ */
const CanvasModule = (() => {
  let canvas, ctx, animId;
  let particles = [];
  let time = 0;

  function init() {
    canvas = document.getElementById('canvas-bg');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    createParticles();
    animate();
    window.addEventListener('resize', resize);
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(60, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        angle: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.005,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
  }

  function drawGradient() {
    const t = time * 0.0003;
    const grad = ctx.createRadialGradient(
      canvas.width * (0.5 + 0.15 * Math.sin(t)),
      canvas.height * (0.4 + 0.1 * Math.cos(t * 0.7)),
      0,
      canvas.width * 0.5, canvas.height * 0.5,
      Math.max(canvas.width, canvas.height) * 0.85
    );
    grad.addColorStop(0, `hsla(340, 70%, 22%, 1)`);
    grad.addColorStop(0.35, `hsla(320, 65%, 14%, 1)`);
    grad.addColorStop(0.7, `hsla(300, 55%, 10%, 1)`);
    grad.addColorStop(1, `hsla(340, 60%, 8%, 1)`);

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function drawParticles() {
    particles.forEach(p => {
      p.angle += p.drift;
      p.y -= p.speed;
      p.x += Math.sin(p.angle) * 0.4;

      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 160, 200, ${p.opacity})`;
      ctx.fill();
    });
  }

  function animate() {
    time++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGradient();
    drawParticles();
    animId = requestAnimationFrame(animate);
  }

  return { init };
})();

/* ================================================
   MODULE: FLOATING PARTICLES (DOM)
   ================================================ */
const ParticleModule = (() => {
  const EMOJIS = ['🌹', '🌸', '💕', '✨', '💫', '🌺', '💖', '⭐', '🌷', '💗'];
  let container;
  let count = 0;
  const MAX = 18;

  function init() {
    container = document.getElementById('particle-container');
    if (!container) return;
    spawnLoop();
  }

  function spawn() {
    if (count >= MAX) return;
    const el = document.createElement('span');
    el.classList.add('particle');
    el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      font-size: ${Math.random() * 14 + 10}px;
      animation-duration: ${Math.random() * 12 + 10}s;
      animation-delay: ${Math.random() * 5}s;
      opacity: ${Math.random() * 0.5 + 0.2};
    `;
    container.appendChild(el);
    count++;

    el.addEventListener('animationend', () => {
      el.remove();
      count--;
    });
  }

  function spawnLoop() {
    spawn();
    setTimeout(spawnLoop, Math.random() * 1800 + 800);
  }

  return { init };
})();

/* ================================================
   MODULE: MOUSE EFFECTS
   ================================================ */
const MouseModule = (() => {
  let glowEl;
  let mx = 0, my = 0;

  function init() {
    glowEl = document.getElementById('mouse-glow');
    if (!glowEl) return;

    document.addEventListener('mousemove', onMove);
    document.addEventListener('click', onClick);

    document.querySelectorAll('button, a, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => glowEl.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => glowEl.classList.remove('cursor-hover'));
    });

    // Hide on touch devices
    if ('ontouchstart' in window) {
      glowEl.style.display = 'none';
      document.body.classList.add('normal-cursor');
    }
  }

  function onMove(e) {
    mx = e.clientX; my = e.clientY;
    glowEl.style.left = mx + 'px';
    glowEl.style.top = my + 'px';
  }

  function onClick(e) {
    createRipple(e.clientX, e.clientY);
    if (Math.random() > 0.5) createSparkle(e.clientX, e.clientY);
  }

  function createRipple(x, y) {
    const size = 60;
    const el = document.createElement('div');
    el.classList.add('ripple');
    el.style.cssText = `
      left: ${x - size / 2}px;
      top: ${y - size / 2}px;
      width: ${size}px;
      height: ${size}px;
    `;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }

  function createSparkle(x, y) {
    const sparks = ['✨', '💫', '⭐', '🌟'];
    const el = document.createElement('span');
    el.classList.add('sparkle');
    el.textContent = sparks[Math.floor(Math.random() * sparks.length)];
    el.style.cssText = `
      left: ${x + (Math.random() - 0.5) * 30}px;
      top: ${y + (Math.random() - 0.5) * 30}px;
    `;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }

  return { init, createRipple };
})();

/* ================================================
   MODULE: NAVIGATION
   ================================================ */
const NavModule = (() => {
  const sections = ['opening', 'love-letter', 'quotes', 'pantun', 'teka-teki', 'gallery', 'love-meter', 'countdown', 'do-you-love-me', 'ending'];
  let currentIdx = 0;
  let observer;

  function init() {
    setupDots();
    setupNavButtons();
    setupScrollObserver();
    setupEnterButton();
  }

  function setupDots() {
    document.querySelectorAll('.nav-dot').forEach((dot, i) => {
      dot.addEventListener('click', () => goTo(i));
    });
  }

  function setupNavButtons() {
    document.querySelectorAll('.btn-nav-next').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        const idx = sections.indexOf(target);
        if (idx !== -1) goTo(idx);
      });
    });
  }

  function setupEnterButton() {
    const btn = document.getElementById('btn-enter');
    if (btn) btn.addEventListener('click', () => goTo(1));
  }

  function setupScrollObserver() {
    const options = { root: null, threshold: 0.4 };
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const idx = sections.indexOf(id);
          if (idx !== -1) {
            currentIdx = idx;
            updateDots(idx);
            entry.target.classList.add('in-view');
          }
        }
      });
    }, options);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  function goTo(idx) {
    const id = sections[idx];
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    currentIdx = idx;
    updateDots(idx);
  }

  function updateDots(idx) {
    document.querySelectorAll('.nav-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
  }

  return { init, goTo };
})();

/* ================================================
   MODULE: AUDIO PLAYER
   ================================================ */
const AudioModule = (() => {
  let audio, titleEl, playBtn, playIcon, pauseIcon;
  let currentIdx = 0;
  let isPlaying = false;

  function init() {
    audio = document.getElementById('audio-element');
    titleEl = document.getElementById('audio-title');
    playBtn = document.getElementById('btn-audio-toggle');
    playIcon = playBtn.querySelector('.icon-play');
    pauseIcon = playBtn.querySelector('.icon-pause');

    if (!audio) return;

    playBtn.addEventListener('click', togglePlay);
    document.getElementById('btn-prev').addEventListener('click', prev);
    document.getElementById('btn-next').addEventListener('click', next);
    audio.addEventListener('ended', next);

    loadTrack(currentIdx);
  }

  function loadTrack(idx) {
    const track = PLAYLIST[idx];
    titleEl.textContent = '♪ ' + track.title;
    if (track.src) {
      audio.src = track.src;
      if (isPlaying) audio.play().catch(() => {});
    } else {
      titleEl.textContent = '♪ ' + track.title + ' (tambahkan file audio)';
    }
  }

  function togglePlay() {
    if (!PLAYLIST[currentIdx].src) {
      titleEl.textContent = '♪ Tambahkan file MP3 di folder audio/';
      return;
    }
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play().catch(() => {
        titleEl.textContent = '♪ Tidak dapat memutar audio';
      });
      isPlaying = true;
    }
    playIcon.style.display = isPlaying ? 'none' : 'block';
    pauseIcon.style.display = isPlaying ? 'block' : 'none';
  }

  function prev() {
    currentIdx = (currentIdx - 1 + PLAYLIST.length) % PLAYLIST.length;
    loadTrack(currentIdx);
  }

  function next() {
    currentIdx = (currentIdx + 1) % PLAYLIST.length;
    loadTrack(currentIdx);
  }

  return { init };
})();

/* ================================================
   MODULE: LETTER DATE
   ================================================ */
function initLetterDate() {
  const el = document.getElementById('letter-date');
  if (!el) return;
  const now = new Date();
  const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  el.textContent = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

/* ================================================
   MODULE: ROMANTIC QUOTES
   ================================================ */
const QuotesModule = (() => {
  let current = 0;
  let isTransitioning = false;

  function init() {
    renderDots();
    showQuote(0, false);

    document.getElementById('btn-quote-next').addEventListener('click', next);
    document.getElementById('btn-quote-prev').addEventListener('click', prev);
    document.getElementById('quote-card').addEventListener('click', next);

    // Auto-advance
    setInterval(() => { if (!isTransitioning) next(); }, 8000);
  }

  function renderDots() {
    const container = document.getElementById('quote-dots');
    container.innerHTML = '';
    QUOTES.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.classList.add('qdot');
      btn.setAttribute('aria-label', `Kutipan ${i + 1}`);
      if (i === 0) btn.classList.add('active');
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        showQuote(i, true);
      });
      container.appendChild(btn);
    });
  }

  function showQuote(idx, animate) {
    if (isTransitioning) return;
    const card = document.getElementById('quote-card');
    const textEl = document.getElementById('quote-text');
    const counterEl = document.getElementById('quote-counter');

    if (animate) {
      isTransitioning = true;
      card.classList.add('fade-out');
      setTimeout(() => {
        current = (idx + QUOTES.length) % QUOTES.length;
        textEl.textContent = QUOTES[current];
        counterEl.textContent = `${current + 1} / ${QUOTES.length}`;
        updateDots();
        card.classList.remove('fade-out');
        card.classList.add('fade-in');
        setTimeout(() => {
          card.classList.remove('fade-in');
          isTransitioning = false;
        }, 400);
      }, 260);
    } else {
      current = (idx + QUOTES.length) % QUOTES.length;
      textEl.textContent = QUOTES[current];
      counterEl.textContent = `${current + 1} / ${QUOTES.length}`;
      updateDots();
    }
  }

  function updateDots() {
    document.querySelectorAll('.qdot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function next() { showQuote(current + 1, true); }
  function prev() { showQuote(current - 1, true); }

  return { init };
})();

/* ================================================
   MODULE: PANTUN
   ================================================ */
function initPantun() {
  const grid = document.getElementById('pantun-grid');
  if (!grid) return;

  PANTUNS.forEach((p, i) => {
    const card = document.createElement('article');
    card.classList.add('pantun-card');
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="pantun-number">Pantun ${i + 1}</div>
      <div class="pantun-sampiran">${p.sampiran.replace(/\n/g, '<br>')}</div>
      <div class="pantun-isi">${p.isi.replace(/\n/g, '<br>')}</div>
      <span class="pantun-emoji" aria-hidden="true">${p.emoji}</span>
    `;

    // Fade-in on scroll
    card.classList.add('fade-up');
    grid.appendChild(card);
  });

  observeFadeUp();
}

/* ================================================
   MODULE: TEKA TEKI
   ================================================ */
function initTekaTeki() {
  const list = document.getElementById('riddle-list');
  if (!list) return;

  TEKA_TEKI.forEach((r, i) => {
    const card = document.createElement('article');
    card.classList.add('riddle-card');
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="riddle-number">Teka Teki ${i + 1}</div>
      <p class="riddle-question">${r.question}</p>
      <button class="btn-riddle-reveal" data-idx="${i}" aria-expanded="false" aria-controls="answer-${i}">
        💡 Lihat Jawaban
      </button>
      <div class="riddle-answer" id="answer-${i}" aria-live="polite">
        ✦ ${r.answer}
      </div>
    `;

    card.querySelector('.btn-riddle-reveal').addEventListener('click', function() {
      const answerEl = document.getElementById(`answer-${i}`);
      const isRevealed = answerEl.classList.contains('revealed');
      answerEl.classList.toggle('revealed', !isRevealed);
      this.textContent = isRevealed ? '💡 Lihat Jawaban' : '🙈 Sembunyikan';
      this.setAttribute('aria-expanded', String(!isRevealed));
    });

    card.classList.add('fade-up');
    list.appendChild(card);
  });

  initMiniGame();
  observeFadeUp();
}

/* ================================================
   MODULE: MINI GAME
   ================================================ */
function initMiniGame() {
  let qIdx = 0;
  let wrongCount = 0;
  let wrongPerQ = 0;
  const MAX_WRONG = 2;

  function renderQuestion() {
    const q = GAME_QUESTIONS[qIdx];
    const content = document.getElementById('game-content');
    const feedback = document.getElementById('game-feedback');
    feedback.innerHTML = '';
    wrongPerQ = 0;

    content.innerHTML = `
      <p class="game-question">${q.question}</p>
      <div class="game-options">
        ${q.options.map(opt => `
          <button class="btn-game-option" data-choice="${opt.charAt(0)}">${opt}</button>
        `).join('')}
      </div>
    `;

    content.querySelectorAll('.btn-game-option').forEach(btn => {
      btn.addEventListener('click', () => handleChoice(btn, q));
    });
  }

  function handleChoice(btn, q) {
    const choice = btn.dataset.choice;
    const feedback = document.getElementById('game-feedback');
    const allBtns = document.querySelectorAll('.btn-game-option');

    if (choice === q.correct) {
      btn.classList.add('correct');
      allBtns.forEach(b => { b.disabled = true; b.style.pointerEvents = 'none'; });
      feedback.innerHTML = `
        <div class="game-hearts-burst">💗 💗 💗 💗 💗</div>
        <p class="game-feedback-text success">${q.successMsg}</p>
      `;
      burstHearts();

      // Auto next question
      if (qIdx < GAME_QUESTIONS.length - 1) {
        setTimeout(() => {
          qIdx++;
          renderQuestion();
        }, 3500);
      } else {
        setTimeout(() => {
          feedback.innerHTML += `<p class="game-feedback-text success" style="margin-top:10px">Kamu sudah menjawab semua pertanyaan dengan benar! 🎉</p>`;
        }, 3600);
      }
    } else {
      btn.classList.add('wrong');
      wrongPerQ++;
      wrongCount++;
      const msgs = q.wrongMsgs;
      const msg = msgs[Math.min(wrongPerQ - 1, msgs.length - 1)];
      feedback.innerHTML = `<p class="game-feedback-text error">${msg}</p>`;

      setTimeout(() => {
        btn.classList.remove('wrong');
        btn.disabled = true;
        btn.style.opacity = '0.4';
        btn.style.pointerEvents = 'none';
      }, 800);
    }
  }

  function burstHearts() {
    const center = document.getElementById('mini-game');
    if (!center) return;
    const rect = center.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    for (let i = 0; i < 10; i++) {
      const el = document.createElement('span');
      el.classList.add('heart-burst-item');
      const angle = (Math.PI * 2 * i) / 10;
      const dist = 80 + Math.random() * 60;
      el.style.cssText = `
        left: ${cx}px; top: ${cy}px;
        --tx: ${Math.cos(angle) * dist}px;
        --ty: ${Math.sin(angle) * dist}px;
        animation-delay: ${Math.random() * 0.2}s;
      `;
      el.textContent = ['💕', '💗', '💖', '❤️', '💝'][Math.floor(Math.random() * 5)];
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }
  }

  renderQuestion();
}

/* ================================================
   MODULE: GALLERY
   ================================================ */
const GalleryModule = (() => {
  let current = 0;
  let items = [];

  function init() {
    const track = document.getElementById('gallery-track');
    const indicators = document.getElementById('gallery-indicators');
    if (!track) return;

    // Generate gradient placeholders since no real photos
    const colors = [
      ['#c0392b', '#e8316a', '#d4af37'],
      ['#8e0038', '#c0392b', '#f0d060'],
      ['#4a0020', '#8e0038', '#ff6b9d'],
      ['#1a0010', '#c0392b', '#d4af37'],
      ['#2d0020', '#e8316a', '#f0d060']
    ];

    GALLERY_ITEMS.forEach((item, i) => {
      const slide = document.createElement('div');
      slide.classList.add('gallery-item');

      // Create canvas-based placeholder photo
      const canvas = document.createElement('canvas');
      canvas.width = 800; canvas.height = 450;
      const ctx = canvas.getContext('2d');

      const grad = ctx.createLinearGradient(0, 0, 800, 450);
      grad.addColorStop(0, colors[i][0]);
      grad.addColorStop(0.5, colors[i][1]);
      grad.addColorStop(1, colors[i][2]);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 800, 450);

      // Draw heart
      ctx.fillStyle = 'rgba(255,255,255,0.12)';
      ctx.font = `${120 + i * 10}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(['💕', '🌹', '💗', '✨', '💖'][i], 400, 200);

      // Draw text
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = '600 24px Cormorant Garamond, serif';
      ctx.fillText(`Kenangan ${i + 1}`, 400, 360);

      const img = document.createElement('img');
      img.src = canvas.toDataURL('image/jpeg', 0.85);
      img.alt = `Kenangan ${i + 1}`;

      const caption = document.createElement('div');
      caption.classList.add('gallery-caption');
      caption.textContent = item.caption;

      slide.appendChild(img);
      slide.appendChild(caption);
      slide.addEventListener('click', () => openLightbox(i, img.src, item.caption));
      track.appendChild(slide);

      // Indicator
      const dot = document.createElement('button');
      dot.classList.add('gallery-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Foto ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      indicators.appendChild(dot);

      items.push({ src: img.src, caption: item.caption });
    });

    document.getElementById('gallery-prev').addEventListener('click', prev);
    document.getElementById('gallery-next').addEventListener('click', next);
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeLightbox();
    });

    // Touch/swipe support
    let startX = 0;
    const slider = document.getElementById('gallery-slider');
    slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
    });
  }

  function goTo(idx) {
    current = (idx + items.length) % items.length;
    const track = document.getElementById('gallery-track');
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.gallery-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function prev() { goTo(current - 1); }
  function next() { goTo(current + 1); }

  function openLightbox(idx, src, caption) {
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-img').alt = caption;
    document.getElementById('lightbox-caption').textContent = caption;
    lb.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    document.getElementById('lightbox').setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  return { init };
})();

/* ================================================
   MODULE: LOVE METER
   ================================================ */
function initLoveMeter() {
  const btn = document.getElementById('btn-meter-start');
  if (!btn) return;

  btn.addEventListener('click', () => {
    btn.style.display = 'none';
    document.querySelector('.meter-prompt').style.display = 'none';
    const wrapper = document.getElementById('meter-bar-wrapper');
    wrapper.removeAttribute('hidden');

    const fill = document.getElementById('meter-bar-fill');
    const percentEl = document.getElementById('meter-percentage');
    const result = document.getElementById('meter-result');
    const resultText = document.getElementById('meter-result-text');

    const target = Math.floor(Math.random() * 6) + 95; // 95-100

    // Animate bar
    let current = 0;
    const step = () => {
      if (current < target) {
        current += Math.random() * 3 + 0.5;
        if (current > target) current = target;
        fill.style.width = current + '%';
        percentEl.textContent = Math.floor(current) + '%';
        requestAnimationFrame(step);
      } else {
        fill.style.width = target + '%';
        percentEl.textContent = target + '%';
        setTimeout(() => showResult(target, result, resultText), 600);
      }
    };
    setTimeout(() => requestAnimationFrame(step), 400);
  });
}

function showResult(pct, resultEl, textEl) {
  resultEl.removeAttribute('hidden');
  textEl.textContent = METER_RESULTS[Math.floor(Math.random() * METER_RESULTS.length)];
  burstHeartsCenter();
}

function burstHeartsCenter() {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('span');
    el.classList.add('heart-burst-item');
    const angle = (Math.PI * 2 * i) / 14;
    const dist = 80 + Math.random() * 100;
    el.style.cssText = `
      left: ${cx}px; top: ${cy}px;
      --tx: ${Math.cos(angle) * dist}px;
      --ty: ${Math.sin(angle) * dist}px;
      animation-delay: ${Math.random() * 0.3}s;
      animation-duration: 1s;
      font-size: ${Math.random() * 1 + 1}rem;
    `;
    el.textContent = ['💕', '💗', '💖', '❤️', '💝', '🌹'][Math.floor(Math.random() * 6)];
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

/* ================================================
   MODULE: COUNTDOWN
   ================================================ */
const CountdownModule = (() => {
  let interval = null;
  let startDate = null;

  function init() {
    const btn = document.getElementById('btn-countdown-set');
    if (!btn) return;
    btn.addEventListener('click', start);
  }

  function start() {
    const input = document.getElementById('countdown-date-input');
    const val = input.value;
    if (!val) {
      input.focus();
      input.style.borderColor = '#e8316a';
      setTimeout(() => input.style.borderColor = '', 1200);
      return;
    }
    startDate = new Date(val);
    if (isNaN(startDate.getTime()) || startDate > new Date()) {
      input.style.borderColor = '#e8316a';
      setTimeout(() => input.style.borderColor = '', 1200);
      return;
    }

    document.getElementById('countdown-setup').setAttribute('hidden', '');
    document.getElementById('countdown-display').removeAttribute('hidden');

    tick();
    interval = setInterval(tick, 1000);
  }

  function tick() {
    const now = new Date();
    const diff = now - startDate;
    if (diff < 0) return;

    const totalSeconds = Math.floor(diff / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const totalDays = Math.floor(totalHours / 24);
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = totalDays % 30;

    document.getElementById('cd-years').textContent = years;
    document.getElementById('cd-months').textContent = months;
    document.getElementById('cd-days').textContent = days;
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('cd-seconds').textContent = String(seconds).padStart(2, '0');

    const msgs = [
      `Setiap detik bersama kamu adalah kenangan yang aku simpan.`,
      `${totalDays} hari yang luar biasa, dan masih banyak hari indah yang menunggu kita.`,
      `Waktu memang terus berjalan, tapi cintaku tidak pernah ikut menua.`
    ];
    document.getElementById('countdown-message').textContent = msgs[totalDays % msgs.length];
  }

  return { init };
})();

/* ================================================
   MODULE: DO YOU LOVE ME
   ================================================ */
function initDoYouLoveMe() {
  const btnNo = document.getElementById('btn-no');
  const btnYes = document.getElementById('btn-yes');
  if (!btnNo || !btnYes) return;

  let noCount = 0;
  const MAX_ESCAPES = 5;

  function moveNoButton() {
    if (noCount >= MAX_ESCAPES) {
      showDialog();
      return;
    }
    const container = document.getElementById('dylm-container');
    const rect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    const maxX = rect.width - btnRect.width - 20;
    const maxY = rect.height - btnRect.height - 20;
    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    btnNo.style.transform = `translate(${x}px, ${y}px)`;
    noCount++;
  }

  function showDialog() {
    document.getElementById('dylm-buttons').setAttribute('hidden', '');
    const dialog = document.getElementById('dylm-dialog');
    const dialogText = document.getElementById('dylm-dialog-text');
    dialog.removeAttribute('hidden');
    dialogText.textContent = DYML_DIALOGS[Math.min(noCount - 1, DYML_DIALOGS.length - 1)];

    document.getElementById('btn-dialog-yes').addEventListener('click', showResult);
  }

  function showResult() {
    document.getElementById('dylm-dialog').setAttribute('hidden', '');
    document.getElementById('dylm-question').style.opacity = '0';
    const result = document.getElementById('dylm-result');
    result.removeAttribute('hidden');
    burstHeartsCenter();

    // Confetti trigger
    setTimeout(() => {
      startConfetti();
    }, 500);
  }

  btnNo.addEventListener('mouseenter', moveNoButton);
  btnNo.addEventListener('touchstart', moveNoButton, { passive: true });
  btnNo.addEventListener('click', () => {
    noCount++;
    moveNoButton();
  });

  btnYes.addEventListener('click', showResult);
}

/* ================================================
   MODULE: ENDING & CONFETTI
   ================================================ */
function initEnding() {
  document.getElementById('btn-read-again').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.getElementById('btn-celebrate').addEventListener('click', () => {
    startConfetti();
    burstHeartsCenter();
  });
}

function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const COLORS = ['#e8316a', '#ff6b9d', '#d4af37', '#f0d060', '#c0392b', '#fff', '#fce8ef'];
  const COUNT = 120;

  for (let i = 0; i < COUNT; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      vx: (Math.random() - 0.5) * 2.5,
      vy: Math.random() * 3 + 1.5,
      size: Math.random() * 10 + 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.12,
      isHeart: Math.random() > 0.4
    });
  }

  let frame = 0;
  const MAX_FRAMES = 280;

  function drawHeart(ctx, x, y, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.5);
    ctx.bezierCurveTo(size * 0.5, -size, size, -size * 0.3, 0, size * 0.4);
    ctx.bezierCurveTo(-size, -size * 0.3, -size * 0.5, -size, 0, -size * 0.5);
    ctx.fill();
    ctx.restore();
  }

  function loop() {
    if (frame >= MAX_FRAMES) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.spin;
      p.vy += 0.05;

      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }

      ctx.save();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - frame / MAX_FRAMES);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      if (p.isHeart) {
        ctx.translate(-p.x, -p.y);
        drawHeart(ctx, p.x, p.y, p.size);
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      }
      ctx.restore();
    });
    frame++;
    requestAnimationFrame(loop);
  }

  loop();
}

/* ================================================
   MODULE: INTERSECTION OBSERVER (Fade Up)
   ================================================ */
function observeFadeUp() {
  const items = document.querySelectorAll('.fade-up:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => observer.observe(el));
}

/* ================================================
   MODULE: ENDING HEARTS
   ================================================ */
function initEndingHearts() {
  const container = document.getElementById('ending-hearts');
  if (!container) return;

  // Only animate when section is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        spawnEndingHearts(container);
        startConfetti();
      }
    });
  }, { threshold: 0.3 });

  const section = document.getElementById('ending');
  if (section) observer.observe(section);
}

function spawnEndingHearts(container) {
  const emojis = ['💕', '💗', '💖', '❤️', '💝', '🌹', '✨'];
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const el = document.createElement('span');
      el.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        bottom: -40px;
        font-size: ${Math.random() * 1.5 + 0.8}rem;
        animation: particle-float ${Math.random() * 6 + 8}s linear forwards;
        opacity: ${Math.random() * 0.5 + 0.3};
        pointer-events: none;
      `;
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      container.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }, i * 150);
  }
}

/* ================================================
   MODULE: SMOOTH SECTION REVEAL
   ================================================ */
function initSectionObserver() {
  const sections = document.querySelectorAll('.page-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(s => observer.observe(s));
}

/* ================================================
   MODULE: PARALLAX
   ================================================ */
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const petals = document.querySelectorAll('.petal');
    petals.forEach((p, i) => {
      const speed = (i % 3 + 1) * 0.12;
      p.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

/* ================================================
   INIT — Main Entry Point
   ================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Core modules
  CanvasModule.init();
  ParticleModule.init();
  MouseModule.init();
  NavModule.init();
  AudioModule.init();

  // Content modules
  initLetterDate();
  QuotesModule.init();
  initPantun();
  initTekaTeki();
  GalleryModule.init();
  initLoveMeter();
  CountdownModule.init();
  initDoYouLoveMe();
  initEnding();
  initEndingHearts();

  // UI enhancements
  initSectionObserver();
  initParallax();

  // Initial section visible
  document.getElementById('opening').classList.add('in-view');

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const dots = Array.from(document.querySelectorAll('.nav-dot'));
    const current = dots.findIndex(d => d.classList.contains('active'));
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      NavModule.goTo(Math.min(current + 1, dots.length - 1));
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      NavModule.goTo(Math.max(current - 1, 0));
    }
  });
});
