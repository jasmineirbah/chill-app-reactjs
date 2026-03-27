# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🎬 Chill Movie App

Aplikasi web berbasis **React JS** yang menampilkan halaman autentikasi (Login & Register) serta halaman utama (Homepage) dengan konsep **UI streaming platform seperti Netflix**.

Proyek ini dikembangkan sebagai bagian dari tugas pengembangan aplikasi frontend dengan fokus pada **komponen reusable, routing, dan responsive design**.

---

## 🚀 Fitur Utama

* 🔐 **Login & Register Page**

  * Form input dengan reusable component
  * Navigasi antar halaman
  * Alert notifikasi saat login/register

* 🏠 **Homepage (Netflix Style)**

  * Hero banner (featured movie)
  * Section film (Trending, Top Rating, dll)
  * Horizontal scroll movie list
  * Hover effect interaktif

* ♻️ **Reusable Components**

  * InputField
  * Button
  * Card
  * Section (Movie List)

* 🌐 **Routing**

  * React Router DOM
  * Navigasi antar halaman tanpa reload

* 📱 **Responsive Design**

  * Menggunakan Tailwind CSS
  * Tampilan menyesuaikan berbagai ukuran layar

---

## 🛠️ Teknologi yang Digunakan

* ⚛️ React JS (Vite)
* 🎨 Tailwind CSS
* 🔁 React Router DOM

---

## 📁 Struktur Project

```
src/
│
├── components/
│   ├── InputField.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Home.jsx
│
├── layouts/
│   ├── AuthLayout.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Instalasi & Menjalankan Project

1. Clone repository

```bash
git clone https://github.com/jasmineirbah/chill-app-reactjs
```

2. Masuk ke folder project

```bash
cd chill-app-reactjs
```

3. Install dependencies

```bash
npm install
```

4. Jalankan project

```bash
npm run dev
```

---

## 🎯 Tujuan Pengembangan

Proyek ini dibuat untuk:

* Menerapkan konsep **component-based architecture**
* Menggunakan **props dan reusable component**
* Membuat UI modern dan responsive
* Mengimplementasikan routing di React

---

## 📌 Catatan

* Data film masih menggunakan **dummy/static data**
* Belum terintegrasi dengan API eksternal (seperti TMDB)
* Autentikasi masih bersifat simulasi (belum menggunakan backend)

---

## 🔮 Pengembangan Selanjutnya

* 🔗 Integrasi API film (TMDB)
* 🔒 Sistem autentikasi dengan backend
* ❤️ Fitur favorite / watchlist
* 🔍 Pencarian film
* 🎬 Detail halaman film

---

## 👨‍💻 Author

Dikembangkan oleh:

**Jasmine**

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran.

