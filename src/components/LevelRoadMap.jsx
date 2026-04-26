export const LEVELS = [
	{
		code: "A1",
		label: "Beginner",
		color: "#6EE7B7",
		textColor: "#064E3B",
		desc: "First words, greetings, basic survival Spanish",
		topics: [
			"Greetings & introductions",
			"Numbers 1–100",
			"Basic questions",
			"Ser / Estar basics",
			"Common verbs (tener, ir)",
			"Gender & articles",
		],
	},
	{
		code: "A2",
		label: "Elementary",
		color: "#93C5FD",
		textColor: "#1E3A8A",
		desc: "Simple conversations and daily routines",
		topics: [
			"Daily routines",
			"Past tense (pretérito)",
			"Reflexive verbs",
			"Basic connectors (y, pero, porque)",
			"Food & shopping vocabulary",
			"Time & schedules",
		],
	},
	{
		code: "B1",
		label: "Intermediate",
		color: "#FCD34D",
		textColor: "#78350F",
		desc: "Independent communication and expressing ideas",
		topics: [
			"Future tense",
			"Imperfect tense",
			"Opinions & arguments",
			"Travel & experiences",
			"Introduction to subjunctive",
			"Writing paragraphs",
		],
	},
	{
		code: "B2",
		label: "Upper Intermediate",
		color: "#FCA5A5",
		textColor: "#7F1D1D",
		desc: "Fluent communication and deeper understanding",
		topics: [
			"Advanced subjunctive",
			"Complex sentences",
			"Idioms & expressions",
			"Debates & discussions",
			"Listening to native content",
			"Formal vs informal speech",
		],
	},
	{
		code: "C1",
		label: "Advanced",
		color: "#FB7185",
		textColor: "#4C0519",
		desc: "Near-native fluency and academic/professional use",
		topics: [
			"Advanced grammar mastery",
			"Formal writing",
			"Professional communication",
			"Fast native speech comprehension",
			"Nuanced vocabulary",
			"Essay writing",
		],
	},
	{
		code: "C2",
		label: "Mastery",
		color: "#E11D48",
		textColor: "#FFF1F2",
		desc: "Full mastery, native-level understanding",
		topics: [
			"Cultural nuances",
			"Idioms & slang",
			"Literature & advanced texts",
			"Accent adaptation",
			"Complex discussions",
			"Creative writing",
		],
	},
];

export default function LevelRoadMap() {
	return (
		<section className="border-t border-[#1c1c1f] py-10 px-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-2xl font-light tracking-[-0.03em] text-[#fafafa] mb-10">
					What you need to reach each level
				</h2>
				<div className="flex flex-col">
					{LEVELS.map((lvl, index) => (
						<div
							key={lvl.code}
							className="grid grid-cols-[130px_1px_1fr] gap-x-8 pb-9 items-start"
						>
							{/* Badge */}
							<div
								className="rounded-xl p-3 bg-[#09090b] flex flex-col gap-0.5 border"
								style={{ borderColor: lvl.color + "30" }}
							>
								<span
									className="text-2xl font-extralight tracking-[-0.04em] leading-none"
									style={{ color: lvl.color }}
								>
									{lvl.code}
								</span>
								<span className="text-[9px] text-[#3f3f46] tracking-[0.08em] uppercase">
									{lvl.label}
								</span>
							</div>

							{/* Vertical line */}
							<div className="bg-[#1c1c1f] w-px self-stretch" />

							{/* Topic pills */}
							<div className="flex flex-wrap gap-2 pt-1">
								{lvl.topics.map((topic) => (
									<span
										key={topic}
										className="border border-[#1c1c1f] bg-[#111113] text-[#52525b] rounded-lg px-3.5 py-1.5 text-[12px] tracking-wide no-underline transition-all duration-150 hover:text-[#fafafa] hover:border-[#f59e0b]/30 hover:bg-[#f59e0b]/5"
									>
										{topic}
									</span>
								))}
							</div>
							{/* 🔥 Horizontal line (divider) */}
							{index !== LEVELS.length - 1 && (
								<div className="w-screen h-px bg-gradient-to-r from-transparent via-[#2a2a2e] to-transparent m-4" />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
