export default function Navigation() {
  return (
    <nav className=" fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex gap-2 rounded-full border border-slate-700 bg-slate-900/80 backdrop-blur-md p-2">
        <a href="#home" className="px-4 py-2 rounded-full hover:bg-slate-800 transition">
          Home
        </a>

        <a href="#about" className="px-4 py-2 rounded-full hover:bg-slate-800 transition">
          Sobre
        </a>

        <a href="#skills" className="px-4 py-2 rounded-full hover:bg-slate-800 transition">
          Skills
        </a>

        <a href="#projects" className="px-4 py-2 rounded-full hover:bg-slate-800 transition">
          Projetos
        </a>
      </div>
    </nav>
  );
}