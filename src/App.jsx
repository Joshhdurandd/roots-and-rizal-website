import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const NavLink = ({ href, children }) => (
    <a href={href} className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700">
      {children}
    </a>
  );

  const Section = ({ id, title, subtitle, children }) => (
    <section id={id} className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h2>
          {subtitle && <p className="mt-3 text-lg text-slate-600">{subtitle}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="w-full bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-xs sm:text-sm font-medium">
          Building a global network of Filipino young professionals — bridging opportunity to the motherland.
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="p-0.5 rounded-full bg-gradient-to-tr from-blue-600 via-yellow-400 to-red-600">
                <img src="/logo.png" alt="Roots & Rizal Logo" className="h-9 w-9 rounded-full shadow bg-white" />
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tight">Roots & Rizal</span>
            </a>
            <nav className="hidden md:flex items-center">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#programs">Programs</NavLink>
              <NavLink href="#chapters">Chapters</NavLink>
              <NavLink href="#events">Events</NavLink>
              <NavLink href="#get-involved">Get Involved</NavLink>
              <NavLink href="#donate">Donate</NavLink>
              <a href="#join" className="ml-4 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Join</a>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_50%_-100px,rgba(29,78,216,0.12),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Filipino excellence,
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-yellow-500 to-red-600">
                  rooted in heritage — built for the future.
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-2xl">
                Roots & Rizal connects Filipino and Filipino‑American students and young professionals with mentors, opportunities, and community — and channels that momentum into impact back home.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#join" className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700">Join the Network</a>
                <a href="#donate" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-50">Donate</a>
              </div>
              <div className="mt-6 text-sm text-slate-500">
                Backed by a growing coalition of chapters and partner organizations.
              </div>
              <div className="mt-10">
                <img src="/logo.png" alt="Roots & Rizal Logo" className="mx-auto max-w-xs" />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl border border-slate-200 shadow-sm overflow-hidden bg-white">
                <div className="grid grid-cols-3 h-full">
                  <div className="bg-blue-600/10" />
                  <div className="bg-yellow-400/10" />
                  <div className="bg-red-600/10" />
                  <div className="bg-yellow-400/10" />
                  <div className="bg-red-600/10" />
                  <div className="bg-blue-600/10" />
                  <div className="bg-red-600/10" />
                  <div className="bg-blue-600/10" />
                  <div className="bg-yellow-400/10" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl bg-white shadow-lg border border-slate-200 p-4">
                <p className="text-sm font-semibold">Vision</p>
                <p className="text-sm text-slate-600">A thriving global network that lifts as it climbs — creating a bridge of opportunity to the motherland.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" title="Our Mission" subtitle="Uplift the Filipino community through mentorship, leadership, and impact.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title: "Mentor", body: "Pair students and young professionals with Filipino leaders across industries."},
            {title: "Mobilize", body: "Host events, workshops, and service initiatives that build skills and solidarity."},
            {title: "Multiply", body: "Channel resources into scholarships and projects that create opportunity in the Philippines."}
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="mt-2 text-slate-600">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="programs" title="Programs" subtitle="Concrete pathways for growth and impact.">
        <div className="grid md:grid-cols-2 gap-6">
          <ProgramCard
            label="Mentorship"
            headline="1:1 mentorship & career circles"
            bullets={["Match by industry and goals","Monthly circle meetups","Office hours with senior leaders"]}
          />
          <ProgramCard
            label="Opportunities"
            headline="Jobs, internships & scholarships"
            bullets={["Curated opportunities feed","Partner company referrals","Rizal Fund micro‑grants"]}
          />
          <ProgramCard
            label="Community"
            headline="Events & service initiatives"
            bullets={["Professional mixers","Skills workshops","Service trips & fundraisers"]}
          />
          <ProgramCard
            label="Leadership"
            headline="Campus & city chapters"
            bullets={["Launch playbook","Chapter grants","National summit"]}
          />
        </div>
      </Section>

      <Section id="chapters" title="Chapters" subtitle="Launching in cities and campuses across the U.S.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Boston, MA","New York, NY","Washington, D.C.","Seattle, WA","Los Angeles, CA","Manila (Partner Orgs)"].map((city) => (
            <div key={city} className="rounded-xl border border-slate-200 p-4 flex items-center justify-between">
              <span className="font-semibold">{city}</span>
              <a href="#join" className="text-sm font-medium text-blue-700 hover:underline">Join</a>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-slate-600">Want to start a chapter? <a href="#join" className="text-blue-700 font-semibold hover:underline">Get the playbook</a>.</div>
      </Section>

      <Section id="events" title="Events" subtitle="Mixers, panels, and workshops — online and in person.">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="h-36 bg-gradient-to-br from-blue-600/15 via-yellow-400/15 to-red-600/15" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sep {10 + i}, 2025 · Boston</p>
                <h3 className="mt-1 text-lg font-bold">Roots & Rizal {i === 1 ? 'Kickoff Mixer' : i === 2 ? 'Career Panel' : 'Leadership Workshop'}</h3>
                <p className="mt-2 text-sm text-slate-600">Meet mentors, connect with peers, and plan impact.</p>
                <div className="mt-4 flex gap-2">
                  <a href="#" className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Register</a>
                  <a href="#" className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50">Share</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="get-involved" title="Get Involved" subtitle="There are many ways to contribute.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title: "Mentor a member", body: "Offer 30–60 minutes a month to guide a rising professional."},
            {title: "Sponsor a program", body: "Fund scholarships, events, or chapter micro‑grants."},
            {title: "Volunteer ops", body: "Help with outreach, socials, design, or event ops."},
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-slate-600">{card.body}</p>
              <a href="#join" className="mt-4 inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">I’m Interested</a>
            </div>
          ))}
        </div>
      </Section>

      <Section id="donate" title="Donate" subtitle="Fuel scholarships, mentorship, and service projects.">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-bold">One‑time or monthly</h3>
            <p className="mt-2 text-slate-600">Every gift powers mentorship, chapters, and the Rizal Fund. Donation processing will connect to your platform of choice (e.g., Stripe/Donorbox/GiveButter).</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">Give Now</a>
              <a href="#" className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:bg-slate-50">Sponsor a Program</a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-bold">Where it goes</h3>
            <ul className="mt-3 space-y-2 text-slate-600 list-disc pl-5">
              <li>Rizal Fund micro‑grants (students & early‑career)</li>
              <li>Chapter launch kits & leadership training</li>
              <li>Service projects with partner orgs in the Philippines</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="join" title="Join the Network" subtitle="Get plugged into mentors, opportunities, and community.">
        <form onSubmit={handleSubscribe} className="rounded-2xl border border-slate-200 p-6 max-w-xl">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <label className="block text-sm font-medium mt-4">What best describes you?</label>
          <select className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option>Student</option>
            <option>Young Professional (0–5 yrs)</option>
            <option>Senior Professional / Executive</option>
            <option>Ally / Sponsor</option>
          </select>
          <button type="submit" className="mt-5 inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Request Invite</button>
          {submitted && (
            <p className="mt-3 text-sm text-green-700">Thanks! We’ll be in touch soon.</p>
          )}
        </form>
      </Section>

      <Section id="contact" title="Contact" subtitle="Partnerships, press, or questions — let’s talk.">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard title="Email" body={<a href="mailto:hello@rootsandrizal.org" className="text-blue-700 hover:underline">hello@rootsandrizal.org</a>} />
          <InfoCard title="Instagram" body={<a href="#" className="text-blue-700 hover:underline">@rootsandrizal</a>} />
          <InfoCard title="LinkedIn" body={<a href="https://www.linkedin.com/company/rootsandrizal" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">linkedin.com/company/rootsandrizal</a>} />
        </div>
      </Section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Roots & Rizal. All rights reserved.</p>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <span>·</span>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <span>·</span>
              <a href="https://www.linkedin.com/company/rootsandrizal" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProgramCard({ label, headline, bullets }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <h3 className="mt-1 text-lg font-bold">{headline}</h3>
      <ul className="mt-3 space-y-2 text-slate-600 list-disc pl-5">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function InfoCard({ title, body }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <div className="mt-1 text-slate-700">{body}</div>
    </div>
  );
}
