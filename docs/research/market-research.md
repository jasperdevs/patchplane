# Market Research

## Category

Patchplane sits in the software forge category: Git hosting, code review, issues, CI/CD, packages, releases, and developer identity. The user's requested position is "the Vercel of GitHub": hosted, polished, fast, opinionated, and beautiful, while staying open source over time.

## Current Landscape

### GitHub

Strengths: default network, open-source graph, profiles, issues, PRs, Actions, releases, packages, sponsors, search, and massive social proof.

Weaknesses to attack: reliability anxiety, slow or noisy flows, review friction, opaque platform control, and workflows designed before agentic coding became normal.

Strategic read: GitHub is hard to beat head-on because community is the moat. Patchplane needs coexistence, mirroring, and profile portability before asking maintainers to fully move.

### GitLab

GitLab positions itself as an intelligent DevSecOps platform with source code management, CI/CD, security, measurement, and enterprise features. It is comprehensive and commercially serious, but the product surface is broad and heavy.

Strategic read: GitLab proves enterprise budget exists, but also shows the danger of making the forge feel like a procurement platform instead of a place developers want to live.

### Bitbucket

Bitbucket's strongest wedge is Atlassian integration. It is mainly compelling for teams already centered on Jira and related workflows.

Strategic read: do not define Patchplane around one external ecosystem. Integrations should support the forge, not become the reason the forge exists.

### Gitea

Gitea describes itself as a painless self-hosted all-in-one software development service including Git hosting, code review, collaboration, packages, and CI/CD. It is open source and lightweight.

Strategic read: Gitea validates demand for simple self-hosted Git services, but the brand and product experience do not own the high-design hosted category the user wants.

### Forgejo and Codeberg

Forgejo is the most important open-source competitor to study. Codeberg describes itself as a democratic, community-driven, nonprofit software development platform built around a Forgejo-based forge. Codeberg's mission is explicitly about free collaboration, code preservation, and avoiding dependence on proprietary commercial platforms.

Strategic read: Forgejo/Codeberg own trust and openness better than most alternatives. Patchplane should not compete by being "more open" in copy only. It needs product taste, agent-native review, hosted reliability, and better migration/community continuity.

### Graphite

Graphite's major lesson is that code review can be a whole product. Better diff navigation, stacked changes, feeds, and hotkeys can make developers tolerate a new layer on top of GitHub.

Strategic read: review quality is a wedge. Patchplane should make Graphite-like review native instead of API-limited.

### Pierre / Code Storage

The video frames Pierre as infrastructure for high-throughput, agent-era repo storage. The key insight is that the next forge may need to handle many more repos, branches, sessions, and automated changes than GitHub's original architecture assumed.

Strategic read: Patchplane should architect for agent throughput early, even if the first UI is simple.

### Entyre

Entyre is positioned around agent context and the limitation that Git tracks changes but not intent.

Strategic read: Patchplane should store useful decision history near code changes: prompts, plans, checks, evidence, and release reasoning.

## White Space

The gap is a hosted, taste-led, open-core forge that combines:

- GitHub-level community affordances.
- Forgejo-level openness and portability.
- Graphite-level review quality.
- Vercel-level product polish.
- Agent-native context history.
- One-command setup and push-to-create flows.

## Initial Positioning

For open-source maintainers and AI-heavy product teams who need a reliable home for code, Patchplane is a modern software forge that makes review, CI, releases, and agent context feel like one fast workflow because it is built around source history and intent from day one.

## First Product Wedge

Do not start with every GitHub feature. Start with:

1. Repo hosting and mirrors.
2. PR/review with stacked changes.
3. CI status and release provenance.
4. Agent context attached to changes.
5. Profiles that import GitHub proof and preserve cross-forge identity.
6. Push-to-create CLI.

## Sources

- Vercel Web Interface Guidelines: https://vercel.com/design/guidelines
- Fluid Functionalism: https://www.fluidfunctionalism.com/
- Fluid Functionalism GitHub repository: https://github.com/mickadesign/fluid-functionalism
- Codeberg "What is Codeberg?": https://docs.codeberg.org/getting-started/what-is-codeberg/
- Gitea GitHub repository: https://github.com/go-gitea/gitea
- GitLab homepage: https://about.gitlab.com/
- Video reference: https://www.youtube.com/watch?v=HuE7OvOckfE
