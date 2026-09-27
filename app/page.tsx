const exhibits = [
    {
        link: "https://github.com/nukkua/zhell",
        index: "01",
        title: "zhell — custom shell",
        stack: "Zig",
        year: "2026",
        description: "Unix-like shell from scratch. Builtins: cd, ls, echo, clear, cat, exit. Custom prompt, manual parsing.",
    },
    {
        link: "https://github.com/nukkua/checklo",
        index: "02",
        title: "Checklo — check + love",
        stack: "Vue 3, Pinia",
        year: "2026",
        description: "Checklo = check + love. Shared day-to-day todos for couples. Calendar view, add romantic plans, check off daily rituals together.",
    },
    {
        link: "https://github.com/nukkua/precos",
        index: "03",
        title: "PRE-COS — premilitar lookup",
        stack: "Next.js, React",
        year: "2025",
        description: "For Ministerio de Defensa de Bolivia. Citizens check premilitar invitation with CI. Staff side handles auth, inscription and military region assignment.",
    }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased">
        <header className="flex items-center justify-between px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] border-b-2 border-ink">
            <span className="font-medium">Marco Salazar</span>
            <span className="hidden sm:block text-muted">La Paz, BO — Sep 2026</span>
            <span className="border border-spot px-2 py-1 -rotate-2 text-spot">Open to work</span>
        </header>

        <main className="mx-auto w-full max-w-6xl px-6 pt-12 pb-10 md:pt-16 md:grid md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    Low-level & web dev
                </p>
                <h1 className="mt-3 font-display text-6xl leading-[0.95] tracking-[-0.02em] text-balance md:text-7xl">
                    <span className="block">I learn</span>
                    <span className="mt-1 inline-block -rotate-[0.5deg] bg-spot px-3 pb-2 text-paper">
                        <em className="italic">by building.</em>
                    </span>
                </h1>
            </div>

            <div className="mt-8 md:mt-0 md:col-span-5 md:pt-8">
                <p className="max-w-sm text-base leading-7 text-ink/80 text-pretty">
                    I'm Marco. Built a shell from scratch, a shared todo for couples,
                    and a premilitar lookup used in Bolivia.
                </p>

                <dl className="mt-6 border-t-2 border-ink font-mono text-xs uppercase tracking-[0.08em]">
                    <div className="flex justify-between gap-4 border-b border-line py-2.5">
                        <dt className="text-muted">Based</dt>
                        <dd>La Paz, Bolivia</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-line py-2.5">
                        <dt className="text-muted">Focus</dt>
                        <dd>Web / Pivoting to Low-level</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-line py-2.5">
                        <dt className="text-muted">Mail</dt>
                        <dd>
                            <a
                                href="mailto:marco.salazar.2014.com@gmail.com"
                                className="underline decoration-spot decoration-2 underline-offset-4"
                            >
                                Say hi ↗
                            </a>
                        </dd>
                    </div>
                </dl>

                <div className="mt-5 flex gap-6 font-mono text-xs uppercase tracking-[0.08em]">
                    <a href="https://github.com/nukkua" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-spot">
                        GitHub ↗
                    </a>
                    <a href="#exhibits" className="underline underline-offset-4 hover:text-spot">
                        Work ↓
                    </a>
                </div>
            </div>
        </main>

        <section id="exhibits" className="mx-auto w-full max-w-6xl px-6 pb-16">
            <div className="flex items-baseline justify-between border-t-2 border-ink pt-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                <span>Selected work</span>
                <span className="text-muted">03 — 2024/26</span>
            </div>

            <div>
                {exhibits.map((e) => (
                    <a
                        key={e.index}
                        href={e.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid grid-cols-[2.5rem_1fr_auto] gap-x-4 border-b border-line py-7"
                    >
                        <span className="font-mono text-sm text-muted pt-1">{e.index}</span>
                        <span>
                            <span className="block font-display text-2xl leading-tight decoration-spot decoration-2 underline-offset-4 group-hover:underline md:text-3xl">
                                {e.title}
                            </span>
                            <span className="mt-2 block max-w-xl text-[15px] leading-7 text-muted">
                                {e.description}
                            </span>
                            <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                                {e.stack} · {e.year}
                            </span>
                        </span>
                        <span className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                            ↗
                        </span>
                    </a>
                ))}
            </div>
        </section>

        <footer className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 border-t-2 border-ink font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            <span>© 2026 Marco Salazar</span>
            <span>Next.js — La Paz</span>
        </footer>
    </div>
  );
}
