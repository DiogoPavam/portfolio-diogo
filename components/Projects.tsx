export default function Projects() {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description:
        "Portfólio desenvolvido com Next.js, TypeScript e Tailwind CSS para apresentar minha trajetória e projetos.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      github: "#",
    },
    {
      title: "Sistema de Tarefas",
      description:
        "Aplicação CRUD para gerenciamento de tarefas utilizando React e C#.",
      technologies: ["React", "C#", "SQL"],
      github: "#",
    },
    {
      title: "Dashboard de Vendas",
      description:
        "Dashboard para acompanhamento de vendas, métricas e indicadores.",
      technologies: ["React", "Charts", "API"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12">
        Projetos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900/40 backdrop-blur-md border border-slate-700 rounded-3xl p-6 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              className="inline-block border border-slate-600 px-4 py-2 rounded-lg hover:bg-slate-800 transition">
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}