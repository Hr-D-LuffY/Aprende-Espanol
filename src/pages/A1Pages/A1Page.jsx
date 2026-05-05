import { Link } from "react-router-dom";
import SectionLabel from "../../components/SectionLabel";
import TopicPill from "../../components/TopicPill";
import { SectionGrid } from "../../components/SectionNavCard";
import PageWrapper from "../../components/PageWrapper";

const LEARN_ITEMS = [
	"How Spanish words are structured — gender, articles, and noun agreement",
	"How to describe things using adjectives in the right position",
	"How to form simple, complete sentences from scratch",
	"Essential verbs: ser, estar, tener, and gustar",
	"How to ask and answer basic questions naturally",
	"Everyday vocabulary for greetings, numbers, time, and daily life",
];

const TOPIC_GROUPS = [
	{
		title: "Foundation",
		topics: ["Alphabet", "Pronunciation"],
	},
	{
		title: "Grammar",
		topics: [
			"Noun Gender",
			"Articles",
			"Plural",
			"Adjectives",
			"Pronouns",
			"Sentence Structure",
			"Demonstratives",
			"Possessives",
			"Ser",
			"Estar",
			"Tener",
			"Gustar",
			"Questions",
			"Negation",
			"Contractions",
			"Present Tense",
			"Irregular Verbs",
		],
	},
	{
		title: "Usage",
		topics: ["Numbers", "Time", "Days & Months", "Location", "Common Phrases"],
	},
];

const CAN_DO_ITEMS = [
	"Introduce yourself and others in a natural way",
	"Ask and answer simple questions confidently",
	"Talk about basic daily activities and routines",
	"Understand common phrases and expressions",
	"Read and write simple sentences correctly",
	"Survive basic real-life interactions in Spanish",
];

export default function A1Page() {
	return (
		<PageWrapper>
			{/* ── HERO ── */}
			<section className="pb-8 border-b border-[var(--border)]">
				<h1 className="text-[clamp(3rem,7vw,5rem)] font-light leading-[1.02] tracking-[-0.04em] text-[var(--text-primary)] mb-4">
					A1 <span className="text-[var(--accent)] italic">Beginner</span>
				</h1>

				<div className="flex items-center gap-3 mb-5">
					<span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_6px_#f59e0b]" />
					<span className="text-[11px] text-[var(--text-muted)] tracking-[0.08em]">
						Start here
					</span>
				</div>

				<p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-xl tracking-wide mb-6">
					Learn Spanish from the ground up. Build your foundation step by step —
					from understanding how words work to forming real sentences you can
					use in daily life.
				</p>

				{/* Level progress track */}
				<div className="flex items-center gap-1 mt-6">
					{["A1", "A2", "B1", "B2", "C1", "C2"].map((lvl, i) => (
						<div
							key={lvl}
							className={`h-[3px] flex-1 rounded-full transition-colors duration-200 ${i === 0 ? "bg-[var(--accent)]" : "bg-[#1c1c1f]"}`}
						/>
					))}
					<span className="text-[10px] text-[var(--text-label)] tracking-[0.1em] ml-2 whitespace-nowrap">
						1 / 6
					</span>
				</div>
			</section>
			{/* ── WHAT YOU'LL LEARN ── */}
			<section className="py-8 border-b border-[var(--border)]">
				<SectionLabel>Curriculum</SectionLabel>
				<h2 className="text-2xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-7">
					What you'll learn
				</h2>
				<ul className="flex flex-col gap-3">
					{LEARN_ITEMS.map((item) => (
						<li
							key={item}
							className="flex items-start gap-3 text-[13px] text-[var(--text-secondary)] leading-relaxed tracking-[0.01em]"
						>
							<span className="text-[var(--accent)] mt-[2px] flex-shrink-0 text-[12px]">
								→
							</span>
							{item}
						</li>
					))}
				</ul>
			</section>
			{/* ── TOPICS ── */}
			<section className="py-8 border-b border-[var(--border)]">
				<SectionLabel>Topics</SectionLabel>
				<h2 className="text-2xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-7">
					What's covered
				</h2>
				{TOPIC_GROUPS.map((group) => (
					<div key={group.title} className="mb-8">
						{/* Section Title */}
						<h3 className="text-sm text-[var(--accent)] mb-3 uppercase tracking-wider">
							{group.title}
						</h3>

						{/* Topic Pills */}
						<div className="flex flex-wrap gap-2">
							{group.topics.map((topic) => (
								<TopicPill key={topic} label={topic} />
							))}
						</div>
					</div>
				))}
			</section>
			{/* ── WHAT YOU CAN DO ── */}
			<section className="py-8 border-b border-[var(--border)]">
				<SectionLabel>Goals</SectionLabel>
				<h2 className="text-2xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-7">
					What you'll be able to do
				</h2>
				<ul className="flex flex-col gap-3">
					{CAN_DO_ITEMS.map((item) => (
						<li
							key={item}
							className="flex items-start gap-3 text-[13px] text-[var(--text-secondary)] leading-relaxed tracking-[0.01em]"
						>
							<span className="text-[var(--accent)] mt-[2px] flex-shrink-0 text-[12px]">
								→
							</span>
							{item}
						</li>
					))}
				</ul>
			</section>
			{/* ── CTA ── */}
			<div className="py-8 flex items-center gap-5 ">
				<Link
					to="/a1/alphabet"
					className="bg-[var(--accent)] text-[var(--accent-text)] text-[13px] font-semibold px-5 py-2.5 rounded-lg tracking-wide hover:bg-[#fbbf24] transition-colors no-underline"
				>
					Start learning →
				</Link>
			</div>
			{/* ── SECTION NAVIGATION ── */}
			<section className="py-8 border-b border-[var(--border)]">
				<SectionLabel>Explore</SectionLabel>
				<h2 className="text-2xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-7">
					Jump to a section
				</h2>
				<SectionGrid />
			</section>
			{/* ── MINDSET ── */}
			<section className="pt-10 ">
				<SectionLabel>Mindset</SectionLabel>
				<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 flex items-start gap-4">
					<span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
					<p className="text-[12px] text-[var(--text-muted)] leading-[1.75] tracking-[0.01em]">
						<span className="text-[var(--text-secondary)] font-semibold">
							Focus on understanding, not memorizing.
						</span>{" "}
						A1 is about building confidence. Every word and sentence you grasp
						is a real win. Take your time with each topic — the goal is to
						genuinely understand how Spanish works, not to rush through the
						material. Consistency matters more than speed.
					</p>
				</div>
			</section>{" "}
		</PageWrapper>
	);
}
