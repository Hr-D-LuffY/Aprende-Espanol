import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import TopicPill from "../components/TopicPill";
import { SectionGrid } from "../components/SectionNavCard";

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
		title: "Vocabulary",
		topics: ["Family", "Colors"],
	},
	{
		title: "Usage",
		topics: ["Numbers", "Time & Days", "Location", "Common Phrases"],
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
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-4xl mx-auto px-8 pb-24">
				{/* ── HERO ── */}
				<section className="pt-14 pb-12 border-b border-[#1c1c1f]">
					<h1 className="text-[clamp(3rem,7vw,5rem)] font-light leading-[1.02] tracking-[-0.04em] text-[#fafafa] mb-4">
						A1 <span className="text-[#f59e0b] italic">Beginner</span>
					</h1>

					<div className="flex items-center gap-3 mb-5">
						<span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_6px_#f59e0b]" />
						<span className="text-[11px] text-[#52525b] tracking-[0.08em]">
							Start here
						</span>
					</div>

					<p className="text-[13px] text-[#52525b] leading-relaxed max-w-xl tracking-wide mb-6">
						Learn Spanish from the ground up. Build your foundation step by step
						— from understanding how words work to forming real sentences you
						can use in daily life.
					</p>

					{/* Level progress track */}
					<div className="flex items-center gap-1 mt-6">
						{["A1", "A2", "B1", "B2", "C1", "C2"].map((lvl, i) => (
							<div
								key={lvl}
								className={`h-[3px] flex-1 rounded-full transition-colors duration-200 ${i === 0 ? "bg-[#f59e0b]" : "bg-[#1c1c1f]"}`}
							/>
						))}
						<span className="text-[10px] text-[#3f3f46] tracking-[0.1em] ml-2 whitespace-nowrap">
							1 / 6
						</span>
					</div>
				</section>

				{/* ── WHAT YOU'LL LEARN ── */}
				<section className="py-10 border-b border-[#1c1c1f]">
					<SectionLabel>Curriculum</SectionLabel>
					<h2 className="text-2xl font-light tracking-[-0.03em] text-[#fafafa] mb-7">
						What you'll learn
					</h2>
					<ul className="flex flex-col gap-3">
						{LEARN_ITEMS.map((item) => (
							<li
								key={item}
								className="flex items-start gap-3 text-[13px] text-[#a1a1aa] leading-relaxed tracking-[0.01em]"
							>
								<span className="text-[#f59e0b] mt-[2px] flex-shrink-0 text-[12px]">
									→
								</span>
								{item}
							</li>
						))}
					</ul>
				</section>

				{/* ── TOPICS ── */}
				<section className="py-10 border-b border-[#1c1c1f]">
					<SectionLabel>Topics</SectionLabel>
					<h2 className="text-2xl font-light tracking-[-0.03em] text-[#fafafa] mb-7">
						What's covered
					</h2>
					{TOPIC_GROUPS.map((group) => (
						<div key={group.title} className="mb-8">
							{/* Section Title */}
							<h3 className="text-sm text-[#f59e0b] mb-3 uppercase tracking-wider">
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
				<section className="py-10 border-b border-[#1c1c1f]">
					<SectionLabel>Goals</SectionLabel>
					<h2 className="text-2xl font-light tracking-[-0.03em] text-[#fafafa] mb-7">
						What you'll be able to do
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#1c1c1f] rounded-xl overflow-hidden">
						{CAN_DO_ITEMS.map((item) => (
							<div
								key={item}
								className="group bg-[#09090b] border border-[#1c1c1f] p-5 relative hover:bg-[#111113] hover:border-[#27272a] transition-all duration-150"
							>
								<p className="text-[13px] text-[#a1a1aa] leading-relaxed tracking-[0.01em] pr-5">
									{item}
								</p>
								<span className="absolute top-5 right-5 text-[#27272a] text-sm group-hover:text-[#f59e0b] transition-colors">
									→
								</span>
							</div>
						))}
					</div>
				</section>

				{/* ── CTA ── */}
				<div className="pt-10 flex items-center gap-5">
					<Link
						to="/a1/alphabet"
						className="bg-[#f59e0b] text-[#09090b] text-[13px] font-semibold px-5 py-2.5 rounded-lg tracking-wide hover:bg-[#fbbf24] transition-colors no-underline"
					>
						Start learning →
					</Link>
					<a
						href="#secNav"
						className="text-[#52525b] text-[13px] tracking-wide hover:text-[#71717a] transition-colors no-underline"
					>
						View A1 Section
					</a>
				</div>

				{/* ── SECTION NAVIGATION ── */}
				<section id="secNav" className="pt-16">
					<SectionLabel>Explore</SectionLabel>
					<h2 className="text-2xl font-light tracking-[-0.03em] text-[#fafafa] mb-7">
						Jump to a section
					</h2>
					<SectionGrid />
				</section>

				{/* ── MINDSET ── */}
				<section className="pt-10 border-b border-[#1c1c1f]">
					<SectionLabel>Mindset</SectionLabel>
					<div className="bg-[#111113] border border-[#1c1c1f] rounded-xl p-6 flex items-start gap-4">
						<span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
						<p className="text-[12px] text-[#52525b] leading-[1.75] tracking-[0.01em]">
							<span className="text-[#a1a1aa] font-semibold">
								Focus on understanding, not memorizing.
							</span>{" "}
							A1 is about building confidence. Every word and sentence you grasp
							is a real win. Take your time with each topic — the goal is to
							genuinely understand how Spanish works, not to rush through the
							material. Consistency matters more than speed.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}
