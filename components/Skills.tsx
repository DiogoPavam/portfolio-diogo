export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Backend",
      skills: ["C#", "ASP.NET", "SAP ABAP"],
    },
    {
      title: "Ferramentas",
      skills: ["Git", "GitHub", "VS Code", "SQL Server"],
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12">
        Tecnologias
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-900/40 backdrop-blur-md border
              border-slate-700 rounded-3xl p-6 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-xl bg-slate-800 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}