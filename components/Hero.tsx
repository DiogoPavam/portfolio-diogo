import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center p-8">
            <div
                className="
          w-full
          max-w-7xl
          rounded-3xl
          border
          border-slate-700
          bg-slate-900/60
          p-10
        "
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* FOTO */}
                    <div className="flex justify-center">
                        <Image
                            src="/diogo.png"
                            alt="Diogo Pavam"
                            width={420}
                            height={520}
                            className="rounded-3xl object-cover"
                        />
                    </div>

                    {/* TEXTO */}
                    <div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 mb-6">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

                            <span className="text-sm text-slate-300">
                                Open to Work
                            </span>
                        </div>

                        <p className="text-blue-400 mb-4">
                            Desenvolvedor Full-Stack
                        </p>

                        <h1 className="text-6xl font-bold leading-none mb-6">
                            Diogo
                            <br />
                            Pavam
                        </h1>

                        <h2 className="text-2xl text-slate-300 mb-6">
                            Desenvolvedor React, C# e SAP ABAP
                        </h2>

                        <p className="text-slate-400 mb-8">
                            Participando de projetos práticos e construindo
                            experiência em desenvolvimento web moderno com
                            React, Next.js e C#.
                        </p>

                        <div className="flex gap-4">

                            <a
                                href="https://www.linkedin.com/in/diogo-pavam-083638197/"
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
                                LinkedIn
                            </a>

                            <a
                                href="https://github.com/DiogoPavam"
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 rounded-xl border border-slate-600 hover:bg-slate-800 transition">
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}