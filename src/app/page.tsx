export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white">
              MI
            </span>
            <span>MedLink Exchange</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-zinc-700 md:flex">
            <a className="hover:text-zinc-950" href="#features">
              Features
            </a>
            <a className="hover:text-zinc-950" href="#how-it-works">
              How it works
            </a>
            <a className="hover:text-zinc-950" href="#security">
              Security
            </a>
            <a className="hover:text-zinc-950" href="#faq">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 sm:inline-flex"
            >
              Talk to us
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.18),transparent_60%)]" />
          <div className="absolute -bottom-28 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_60%)]" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Built for clinical teams & patient support workflows
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Clear, secure medical information exchange —
              <span className="text-zinc-600"> across teams, faster.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
              MedLink Exchange helps hospitals, clinics, and care coordinators share medical
              updates, discharge notes, referrals, and patient questions with less friction.
              Designed for clarity, auditability, and privacy-first collaboration.
            </p>

            <div id="get-started" className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Request a demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                See features
              </a>
              <p className="text-sm text-zinc-500">
                No spam. Just a short call and a tailored walkthrough.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <Stat label="Faster handoffs" value="↓ 40%" hint="less back-and-forth" />
              <Stat label="Audit-ready" value="100%" hint="traceable updates" />
              <Stat label="Safer sharing" value="RBAC" hint="role-based access" />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Care Thread</div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  Encrypted
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <ThreadItem
                  badge="Referral"
                  title="Cardiology consult requested"
                  body="Symptoms: chest pain + dyspnea. Please review ECG + labs."
                  meta="Sent by ED · 10:26"
                />
                <ThreadItem
                  badge="Update"
                  title="Troponin trending down"
                  body="Repeat in 3h. Continue monitoring; no STEMI findings."
                  meta="Cardiology · 10:41"
                />
                <ThreadItem
                  badge="Patient"
                  title="Question from patient"
                  body="Can I resume my medication after discharge?"
                  meta="Patient portal · 11:03"
                />
              </div>

              <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <ShieldIcon className="h-4 w-4" />
                  Privacy controls
                </div>
                <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                  <li>• Mask sensitive identifiers when sharing externally</li>
                  <li>• Granular access by role, unit, and case</li>
                  <li>• Exportable audit trails for compliance</li>
                </ul>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 hidden h-28 w-28 rounded-2xl bg-zinc-900/5 blur-2xl sm:block" />
          </div>
        </div>
      </section>

      {/* Logos / Trust */}
      <section className="border-y border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-center text-sm text-zinc-500">
            Designed to fit existing workflows: EHR notes, call centers, care coordination,
            and secure messaging.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center text-xs font-medium text-zinc-500 sm:grid-cols-4">
            <div className="rounded-xl border border-zinc-200 bg-white py-3">Clinics</div>
            <div className="rounded-xl border border-zinc-200 bg-white py-3">Hospitals</div>
            <div className="rounded-xl border border-zinc-200 bg-white py-3">Telehealth</div>
            <div className="rounded-xl border border-zinc-200 bg-white py-3">Care teams</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">Everything you need to communicate safely</h2>
          <p className="mt-3 text-zinc-600">
            Turn scattered updates into structured, searchable threads. Keep sensitive details protected
            while ensuring clinicians and patients stay aligned.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<ChatIcon className="h-5 w-5" />}
            title="Structured threads"
            desc="Referrals, updates, and patient questions in one place — with context that doesn’t get lost."
          />
          <FeatureCard
            icon={<SearchIcon className="h-5 w-5" />}
            title="Search & summaries"
            desc="Find the latest plan fast. Summarize timelines for handoffs, rounds, and follow‑ups."
          />
          <FeatureCard
            icon={<LockIcon className="h-5 w-5" />}
            title="Access controls"
            desc="Role-based access, scoped visibility, and minimal sharing by default."
          />
          <FeatureCard
            icon={<DocIcon className="h-5 w-5" />}
            title="Templates"
            desc="Standardize key messages: discharge, medication changes, follow‑up instructions."
          />
          <FeatureCard
            icon={<BellIcon className="h-5 w-5" />}
            title="Smart notifications"
            desc="Alert only the right people — based on case, specialty, and urgency."
          />
          <FeatureCard
            icon={<AuditIcon className="h-5 w-5" />}
            title="Audit trails"
            desc="Track who shared what, when — with exportable logs for compliance reviews."
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
              <p className="mt-3 text-zinc-600">
                Start small: one department, one pathway, one workflow. Expand as teams see the value.
              </p>

              <ol className="mt-8 space-y-6">
                <Step
                  num="01"
                  title="Create a case thread"
                  desc="Start a thread for a referral, follow-up, discharge, or patient inquiry."
                />
                <Step
                  num="02"
                  title="Share only what’s needed"
                  desc="Choose recipients and scope: internal team, external clinic, or patient portal."
                />
                <Step
                  num="03"
                  title="Coordinate & close the loop"
                  desc="Confirm actions, attach notes, and track resolution with a clear timeline."
                />
              </ol>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="text-sm font-medium">Example: discharge coordination</div>
              <div className="mt-4 space-y-3">
                <MiniCard title="Discharge summary" body="Auto-template: diagnosis, meds, follow-up." />
                <MiniCard title="Medication change" body="Highlight deltas + rationale for pharmacy." />
                <MiniCard title="Patient instructions" body="Plain-language summary + next steps." />
              </div>
              <div className="mt-5 text-xs text-zinc-500">
                Note: This demo content is illustrative — actual implementations should follow your
                organization’s policies and legal/compliance guidance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Security & privacy by default</h2>
              <p className="mt-3 text-zinc-600">
                Medical data deserves careful handling. We design for least privilege, transparency,
                and operational safety.
              </p>
              <ul className="mt-6 space-y-3 text-zinc-700">
                <li className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5" />
                  <span>
                    <span className="font-medium">Role-based access (RBAC)</span> with scoped
                    permissions
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5" />
                  <span>
                    <span className="font-medium">Audit logging</span> for message access and changes
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5" />
                  <span>
                    <span className="font-medium">Data minimization</span> tools for external sharing
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5" />
                  <span>
                    <span className="font-medium">Configurable retention</span> and export workflows
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Compliance note</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                This landing page describes product intent. Final compliance posture depends on your
                deployment, vendor agreements, policies, and jurisdiction. Always consult your legal
                and compliance teams.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Pill label="Encryption in transit" />
                <Pill label="Encryption at rest" />
                <Pill label="Access logging" />
                <Pill label="Configurable retention" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-900 px-6 py-10 text-white sm:px-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Ready to improve handoffs?</h2>
                <p className="mt-3 text-zinc-200">
                  Tell us your workflow (referrals, discharge, patient questions, care coordination) and
                  we’ll tailor a demo.
                </p>
              </div>
              <form className="grid gap-3 sm:grid-cols-2">
                <input
                  className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-300 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/30"
                  placeholder="Name"
                  aria-label="Name"
                />
                <input
                  className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-300 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/30"
                  placeholder="Work email"
                  aria-label="Work email"
                />
                <input
                  className="sm:col-span-2 w-full rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-300 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/30"
                  placeholder="What are you trying to improve?"
                  aria-label="What are you trying to improve"
                />
                <button
                  type="button"
                  className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
                >
                  Send request
                </button>
                <p className="sm:col-span-2 text-xs text-zinc-300">
                  This is a demo form (no backend wired). Replace with your preferred form provider.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Faq
              q="Is this a replacement for our EHR?"
              a="No. Think of it as a communication layer for coordination and clarity. Many teams keep documentation in the EHR while using MedLink Exchange to coordinate and close loops."
            />
            <Faq
              q="Can we control what gets shared externally?"
              a="Yes. Use scoped access, masking tools, and templates to share only what’s necessary for the recipient’s role and context."
            />
            <Faq
              q="How do patients participate?"
              a="Patients can receive plain-language updates and submit questions (optional). Your team controls which threads are patient-visible."
            />
            <Faq
              q="Do you support audit trails?"
              a="Yes. The system is designed to log key events: access, edits, and sharing. Specific requirements vary by deployment and policy."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white text-xs font-semibold">
                MI
              </span>
              <span>© {new Date().getFullYear()} MedLink Exchange</span>
            </div>
            <div className="flex flex-wrap gap-6">
              <a className="hover:text-zinc-900" href="#features">
                Features
              </a>
              <a className="hover:text-zinc-900" href="#security">
                Security
              </a>
              <a className="hover:text-zinc-900" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <p className="mt-6 text-xs leading-5">
            Disclaimer: This page is for informational purposes only and is not medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="text-xs font-medium text-zinc-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-zinc-500">{hint}</div>
    </div>
  );
}

function ThreadItem({
  badge,
  title,
  body,
  meta,
}: {
  badge: string;
  title: string;
  body: string;
  meta: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
          {badge}
        </span>
        <span className="text-xs text-zinc-500">{meta}</span>
      </div>
      <div className="mt-2 text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-zinc-600">{body}</div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{desc}</p>
    </div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-sm font-semibold">
        {num}
      </div>
      <div>
        <div className="text-base font-semibold">{title}</div>
        <div className="mt-1 text-sm leading-6 text-zinc-600">{desc}</div>
      </div>
    </li>
  );
}

function MiniCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-zinc-600">{body}</div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700">
      {label}
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="text-base font-semibold">{q}</div>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{a}</p>
    </div>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function DocIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10.3 21a1.7 1.7 0 0 0 3.4 0" />
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
    </svg>
  );
}

function AuditIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12h6" />
      <path d="M9 16h6" />
      <path d="M9 8h6" />
      <path d="M5 3h11l3 3v15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
