import {
  ArrowRight,
  CheckCircle2,
  Command,
  GitBranch,
  GitPullRequestArrow,
  RadioTower,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const repos = [
  ["core", "main", "12.4k", "99.99%"],
  ["agent-runner", "review", "4.8k", "99.95%"],
  ["diff-engine", "release", "8.1k", "99.98%"],
];

const principles = [
  "Push-to-create repositories with no prompt maze.",
  "Review surfaces built around intent, not file noise.",
  "Agent sessions become durable project history.",
  "Everything exports cleanly because lock-in is a trust failure.",
];

const events = [
  ["09:41", "Agent opened stacked change", "Context attached"],
  ["09:43", "Maintainer reviewed API boundary", "No rerun needed"],
  ["09:45", "CI replayed affected tests", "3m 18s"],
  ["09:49", "Release candidate promoted", "Signed provenance"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Patchplane home">
          <span className="grid size-8 place-items-center rounded-md border bg-card">
            <GitBranch className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-normal">Patchplane</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a className="hover:text-foreground" href="#product">Product</a>
          <a className="hover:text-foreground" href="#review">Review</a>
          <a className="hover:text-foreground" href="#principles">Principles</a>
        </nav>
        <Button variant="secondary" className="hidden md:inline-flex">
          Join waitlist
        </Button>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-24 lg:pt-20">
        <div>
          <Badge tone="muted">Open-core forge for the agent era</Badge>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-balance md:text-7xl">
            Source control that feels as fast as deploy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Patchplane is a GitHub alternative for teams that need reliable source hosting, tasteful review, and durable agent context without losing the community layer that made open source work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button>
              Start a project <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Button>
            <Button variant="ghost">
              Read the thesis
            </Button>
          </div>
        </div>

        <div className="surface rounded-lg border p-3">
          <div className="rounded-md border bg-background/80">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div>
                <p className="text-sm font-medium">jasper/patchplane</p>
                <p className="mono mt-1 text-xs text-muted-foreground">main / 41ffd72</p>
              </div>
              <Badge tone="success">Healthy</Badge>
            </div>
            <div className="grid gap-3 p-4 lg:grid-cols-[1fr_0.8fr]">
              <div className="rounded-md border bg-card p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Review queue</p>
                  <GitPullRequestArrow className="size-4 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="mt-5 space-y-3">
                  {["Auth boundary cleanup", "Diff renderer stream", "Release provenance"].map((item, index) => (
                    <div key={item} className="rounded-md border bg-background p-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm">{item}</p>
                        <span className="mono text-xs text-muted-foreground">#{128 + index}</span>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-foreground" style={{ width: `${74 - index * 16}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-md border bg-card p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Agent context</p>
                  <Sparkles className="size-4 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="mt-5 space-y-4">
                  {events.map(([time, title, meta]) => (
                    <div key={title} className="grid grid-cols-[3rem_1fr] gap-3">
                      <span className="mono text-xs text-muted-foreground">{time}</span>
                      <div>
                        <p className="text-sm">{title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="border-y bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 md:grid-cols-3">
          {repos.map(([name, branch, stars, uptime]) => (
            <div key={name} className="rounded-lg border bg-background p-5">
              <div className="flex items-center justify-between">
                <p className="font-medium">{name}</p>
                <Badge>{branch}</Badge>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Metric label="Stars" value={stars} />
                <Metric label="Uptime" value={uptime} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="review" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.7fr_1fr] lg:items-start">
        <div>
          <Badge tone="muted">Review as product</Badge>
          <h2 className="mt-5 text-3xl font-semibold tracking-normal md:text-5xl">
            The important path is one screen.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Review, CI, releases, and agent reasoning should not live in separate mental models. Patchplane treats them as one timeline around a change.
          </p>
        </div>
        <div className="grid gap-3">
          {principles.map((item) => (
            <div key={item} className="flex items-start gap-4 rounded-lg border bg-card p-4">
              <CheckCircle2 className="mt-0.5 size-5 text-accent" aria-hidden="true" />
              <p className="text-sm leading-6 text-card-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="principles" className="mx-auto grid max-w-7xl gap-4 px-6 pb-24 md:grid-cols-3">
        <Pillar icon={<ShieldCheck className="size-5" />} title="Trust by default" text="Open source core, signed artifacts, portable exports, and clear governance from day one." />
        <Pillar icon={<RadioTower className="size-5" />} title="Community preserved" text="Profiles, contribution graph, package provenance, and cross-forge identity are first-class." />
        <Pillar icon={<Command className="size-5" />} title="CLI without ceremony" text="Common flows finish in one command. Interactive prompts are optional, not a tax." />
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mono text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Pillar({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-lg border bg-card p-5">
      <div className="grid size-9 place-items-center rounded-md border bg-background text-muted-foreground">
        {icon}
      </div>
      <h3 className="mt-5 font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}
