# 💕 Love Website — Panduan Penggunaan

## Tentang Website Ini
Website romantis premium bertema "I Love You" yang dibuat dengan HTML, CSS, dan JavaScript murni. Dirancang dengan identitas visual yang unik, konten orisinal, dan pengalaman yang terasa personal.

## Struktur File
```
love-website/
├── index.html       ← Halaman utama
├── style.css        ← Semua styling & animasi
├── script.js        ← Semua logika interaktif
├── gallery/         ← Simpan foto-foto kenangan di sini
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
└── audio/           ← (Opsional) Simpan file MP3 di sini
```

## Cara Menggunakan

### 1. Buka Website
Buka file `index.html` langsung di browser, atau gunakan Live Server (VS Code) untuk pengalaman terbaik.

### 2. Menambahkan Foto Galeri
Tambahkan 5 foto ke folder `gallery/` dengan nama:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`

> Tanpa foto asli, galeri akan menampilkan placeholder cantik dengan warna gradient.

### 3. Menambahkan Musik
Di `script.js`, cari bagian `PLAYLIST` dan isi `src` dengan path file MP3:
```js
{ title: "Nama Lagu — Artis", src: "audio/nama-file.mp3" }
```
Lalu taruh file MP3 di folder `audio/`.

### 4. Personalisasi Konten
- **Surat Cinta**: Edit di `index.html` bagian `#love-letter`
- **Quotes**: Edit array `QUOTES` di `script.js`
- **Pantun**: Edit array `PANTUNS` di `script.js`
- **Teka Teki**: Edit array `TEKA_TEKI` di `script.js`
- **Mini Game**: Edit array `GAME_QUESTIONS` di `script.js`

## Fitur Lengkap

| Fitur | Keterangan |
|-------|-----------|
| 🎨 Opening Screen | Hero dengan animasi heart beat |
| 💌 Love Letter | Surat cinta panjang dan personal |
| 💬 Romantic Quotes | 30 kutipan dengan animasi fade |
| 🌹 Pantun Cinta | 20 pantun orisinal |
| 🔍 Teka Teki | 20 teka teki + mini game interaktif |
| 📸 Love Gallery | Slider foto dengan lightbox |
| 💞 Love Meter | Animasi loading dan heart burst |
| ⏳ Countdown | Hitung waktu kebersamaan |
| ❤️ Do You Love Me | Tombol No yang kabur lucu |
| 🎊 Ending | Confetti + animasi heart besar |
| 🎵 Audio Player | Playlist romantis |
| ✨ Animasi | Hearts, sparkle, ripple, parallax |

## Navigasi
- **Nav Dots**: Klik titik di kanan layar (desktop)
- **Keyboard**: Gunakan ↑↓ atau PageUp/PageDown
- **Tombol Next**: Tersedia di setiap section
- **Scroll**: Scroll normal juga berfungsi

## Catatan Teknis
- Tidak membutuhkan koneksi internet (kecuali Google Fonts)
- Performa ringan, tidak ada framework
- Responsif: Desktop, Tablet, Smartphone
- Browser modern: Chrome, Firefox, Safari, Edge
