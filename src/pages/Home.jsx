import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const movies = [
    "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
    "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* 🔥 NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4">
        <ul className="flex items-center gap-6">
          <li className="text-2xl font-bold">🎬 CHILL</li>
          <li className="cursor-pointer hover:text-gray-400">Series</li>
          <li className="cursor-pointer hover:text-gray-400">Film</li>
          <li className="cursor-pointer hover:text-gray-400">Daftar Saya</li>
        </ul>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            className="rounded-full"
          />
          <span>▼</span>
        </div>
      </header>

      {/* 🎬 HERO */}
      <div
        className="h-[400px] bg-cover bg-center flex flex-col justify-end p-6"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold">Duty After School</h1>
        <p className="max-w-md text-sm mt-2">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara.
        </p>

        <div className="mt-4 flex gap-3">
          <button className="bg-white text-black px-4 py-2 rounded">
            ▶ Mulai
          </button>
          <button className="bg-gray-600 px-4 py-2 rounded">
            ℹ Selengkapnya
          </button>
        </div>

        <p className="mt-2 text-sm">18+</p>
      </div>

      {/* 🎥 SECTION 1 */}
      <Section title="Melanjutkan Tonton Film" movies={movies} />

      {/* 🎥 SECTION 2 */}
      <Section title="Top Rating Film dan Series Hari ini" movies={movies} />

      {/* 🎥 SECTION 3 */}
      <Section title="Film Trending" movies={movies} />

      {/* 🎥 SECTION 4 */}
      <Section title="Rilis Baru" movies={movies} />

      {/* 🔥 FOOTER */}
      <footer className="mt-10 px-6 py-6 border-t border-gray-700 text-gray-400">
        <p>© 2023 Chill Rights Reserved</p>

        <div className="flex gap-10 mt-4">
          <div className="cursor-pointer">Genre →</div>
          <div className="cursor-pointer">Bantuan →</div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, movies }) {
  return (
    <div className="px-6 mt-6">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>

      <div className="flex gap-4 overflow-x-auto">
        {movies.map((movie, i) => (
          <div key={i} className="relative group">
            <img
              src={movie}
              className="w-[150px] rounded-lg cursor-pointer group-hover:scale-110 transition"
            />

            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-sm transition">
              Lihat
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}