# arkalalchakravarty.com

Personal portfolio of **Arka Lal Chakravarty** — Full Stack Engineer & AI Specialist based in Kolkata, India. Building advanced AI SaaS and full-stack applications, and currently **open to collaborate**.

> Live site: [arkalalchakravarty.com](https://arkalalchakravarty.com)

## What's on the Site

The home page is a single-scroll narrative made up of these sections:

### Hero — "Hi, I'm Arka Lal Chakravarty"
Animated intro with an "Open to Collaborate" status badge, a **Book a Call** CTA (Calendly), **Source** and **Download Resume** buttons, and a bento grid that surfaces:
- **My Experience** — auto-scrolling timeline (Lead Full Stack Engineer @ Epigroww Global · current, Helionix Tech, ScaleGenAI, Infojini Inc.)
- **Tech Stack** — floating icons for Next.js, React, Python, OpenAI, MongoDB, Node.js
- **What I Build** — AI-powered SaaS and full-stack web apps
- **Location** — Kolkata, India (with animated map pin)
- **How I Work** — Discovery → Design → Develop → Deploy

### Global Collaboration
Interactive WebGL globe (Cobe) framing the headline *"Building with Global Teams"*.

### About
Cycling typewriter greeting (*"Hi there! I'm Arka / a Full Stack engineer / an AI Specialist / Frontend focused / built AI Agentic features / Looking for an Engineer? Let's collaborate!"*) alongside a hero simulation visual and the bio:
> I build **AI-powered SaaS**, **full-stack apps**, and **production-ready code**.

### Tech Stack — "Tools I Build With"
Arc-style display of the technologies used day-to-day.

### Skills — "What I Work With"
Grouped by category:
- **Languages** — JavaScript, TypeScript, Python
- **Frontend** — React, Next.js 16, HTML5, CSS3, SCSS, Tailwind CSS
- **Backend** — Node.js, Express.js, FastAPI, REST APIs
- **Databases** — MongoDB, Supabase, Pinecone, Qdrant
- **AI & Automation** — OpenAI API, Claude API, LLMs, RAG, Embeddings, Prompt Engineering, Agent Workflows
- **Soft Skills**

### Projects
Featured self-built and client work:
- **Disco** — full-scale influencer marketing platform with creator discovery, filtering, and profile enrichment.
- **AtomX Website** — client redesign with SEO, GSAP and Framer Motion animations.
- **NixBuilder — AI App Builder** — natural-language platform that builds full SaaS MVPs end-to-end without writing code.
- **AI RAG Copilot** — RAG chatbot that lets LLMs chat with a knowledge base and take actions on your behalf.
- **BrowzPot** — AI-powered Chrome extension for productivity automation (in development).

### GitHub Contributions & Analytics
Live contribution heatmap plus a **GitHub Repositories** panel showing total contributions, repositories, commits, PRs, issues, reviews, top repositories, and recently contributed-to projects — fetched from the GitHub API.

### Building in Public
Carousel surfacing recent posts.

### Contact
Email + Calendly with "24h Response" and "Open to work · Worldwide" badges.

### Hire Your Engineer / CTA / Footer
Closing CTA section pointing to the Calendly call link, plus a final marketing CTA and footer.

### Floating AI Chatbot — "Ask me about Arka"
Bottom-right chat bubble powered by OpenAI with streaming responses, so visitors can ask questions about Arka in natural language.

### Legal
Standalone **Privacy Policy** and **Terms of Service** pages.

## Tech Stack (How the Site Is Built)

- **Framework:** Next.js 16 (App Router) with Turbopack, React 19
- **Styling:** SCSS modules, custom local fonts + Inter / Space Grotesk, Radix UI primitives
- **Animation:** Framer Motion, GSAP, Lenis (smooth scroll), Matter.js, tsparticles, Cobe (globe)
- **AI:** OpenAI SDK with streaming via `eventsource-parser` / `openai-edge` (chat assistant)
- **Email:** Resend (contact form delivery)
- **Data:** GitHub API (analytics, contributions), X / Twitter (build-in-public feed)
- **Analytics & SEO:** Google Analytics, JSON-LD structured data (`ProfessionalService` + `WebSite`), Open Graph / Twitter cards, canonical URL, sitemap
- **Deployment:** Vercel

## Project Structure

```
arkalalchakravarty.com/
├── src/app/                       # Next.js App Router
│   ├── api/                       # chat (OpenAI), github, x route handlers
│   ├── privacyPolicy/
│   ├── termsOfService/
│   ├── layout.js                  # metadata, fonts, JSON-LD, GA, providers
│   ├── page.js                    # Home composition
│   ├── sitemap.js
│   └── globals.scss
├── components/
│   ├── chunks/                    # Section components
│   │   ├── Hero/                  # NewHero
│   │   ├── About/                 # About + AboutHeroSimulation
│   │   ├── GlobalCollaboration/   # Cobe globe
│   │   ├── TechStack/             # Tools I Build With
│   │   ├── Skills/                # What I Work With
│   │   ├── Projects/              # ProjectShowcase + VideoPopup
│   │   ├── GitHubContributions/   # Heatmap
│   │   ├── GitHubAnalytics/       # Repos / commits / PRs
│   │   ├── BuildInPublic/         # Carousel
│   │   ├── Contact/
│   │   ├── HireEngineer/
│   │   ├── CTASection/
│   │   ├── Footer/                # NewFooter
│   │   ├── Chatbot/               # OpenAI streaming chat
│   │   ├── ChatBubble/            # Floating "Ask me about Arka" launcher
│   │   └── IntroAnimation/
│   ├── pages/Home/                # NewHome composition
│   ├── ContainerScrollAnimation/, CtaButton/, Box/, SkeletonBox/
│   ├── SmoothScroll/, ThemeProvider.js, ScrollToTop.js
├── utils/                         # GoogleAnalytics, helpers
├── assets/                        # Images, resume PDF
├── public/                        # Static files
├── Providers.js                   # Global client providers
├── next.config.mjs
└── package.json
```

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint (`eslint-config-next`)

### Environment Variables

Create `.env.local` with whichever features you exercise locally:

```
OPENAI_API_KEY=
RESEND_API_KEY=
GITHUB_TOKEN=
MONGODB_URI=
```

## Connect

- Website: [arkalalchakravarty.com](https://arkalalchakravarty.com)
- Book a call: [calendly.com/arkalal-chakravarty/30min](https://calendly.com/arkalal-chakravarty/30min)
- GitHub: [github.com/arkalal](https://github.com/arkalal)
- LinkedIn: [linkedin.com/in/arkalal](https://www.linkedin.com/in/arkalal/)
- Email: arkalal.chakravarty@gmail.com
