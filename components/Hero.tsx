import Image from "next/image"

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                <div className="flex justify-center">
                    <Image
                        src="/diogo.png"
                        alt="Diogo Pavam"
                        width={320}
                        height={320}
                        className="rounded-full border-4 border-blue-500 shadow-lg"
                    />
                </div>

                <p className="text-blue-400 font-medium mb-3">
                    Olá, eu sou
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    Diogo Pavam
                </h1>

                <h2 className="mb-6 text-2x1 font-semibold text-gray-300 md:text-3x1">
                    Desenvolvedor Full Stack em Formação
                </h2>

                <p className="text-gray-400 text-lg mb-8">
                    Estudando React, Next.js, C#, ASP.NET e SAP ABAP.
                    Atualmente participo de projetos práticos e busco oportunidades
                    para crescer como desenvolvedor.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                    {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "C#",
                        "ASP.NET",
                        "SAP ABAP"
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="bg-gray-800 px-4 py-2 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>


                <div className="flex gap-4">

                    <a
                        href="https://www.linkedin.com/in/diogo-pavam-083638197/"
                        target="_blank" //abre o link em uma nova aba
                        rel="noreferrer" //medida de segurança para links abertos com 'target'
                        className="rounded-lg border border-gray-600 px-6 py-3 bg-blue-600 px-6 font-medium trasition hover-blue-700"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/DiogoPavam"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-gray-600 px-6 py-3 font-medium transition hover:bg-gray-800"
                    >
                        GitHub
                    </a>

                </div>

            </div>
        </section>
    )
}