import { useState, useEffect } from "react";
import { supabase } from "../../../App";
import PageWrapper from "../../../components/PageWrapper";
import BackNext from "../../../components/BackNext";

const TABS = [
	{ key: "ar", label: "-AR", patternVerb: "hablar", stem: "habl" },
	{ key: "er", label: "-ER", patternVerb: "comer", stem: "com" },
	{ key: "ir", label: "-IR", patternVerb: "vivir", stem: "viv" },
];

const IRREGULAR_CATEGORIES = {
	go_verb: {
		label: "Go Verbs",
		description: 'Yo form ends in "-go", rest conjugate normally.',
		example: "tener → tengo",
	},
	unique_yo_changes: {
		label: "Unique Yo Changes",
		description:
			"Only the yo form is irregular; all other forms follow regular patterns.",
		example: "saber → sé",
	},
	spelling_change_GUIR: {
		label: "Spelling: -GUIR",
		description: 'Drop the "u" in yo form to preserve the hard G sound.',
		example: "distinguir → distingo",
	},
	spelling_change_GER_GIR: {
		label: "Spelling: -GER/-GIR",
		description: 'Yo form changes G → J to preserve the soft sound before "o".',
		example: "coger → cojo",
	},
	spelling_change_CER_CIR: {
		label: "Spelling: -CER/-CIR",
		description: 'Yo form changes C → ZC before "o".',
		example: "conocer → conozco",
	},
	stem_IE: {
		label: "Stem: E → IE",
		description:
			"Stem vowel E changes to IE in all forms except nosotros and vosotros.",
		example: "querer → quiero",
	},
	stem_UE: {
		label: "Stem: O → UE",
		description:
			"Stem vowel O changes to UE in all forms except nosotros and vosotros.",
		example: "poder → puedo",
	},
	stem_I: {
		label: "Stem: E → I",
		description:
			"Stem vowel E changes to I in all forms except nosotros and vosotros. Only -IR verbs.",
		example: "pedir → pido",
	},
};

const CONJUGATION_PATTERNS = {
	ar: [
		{ pronoun: "yo", ending: "o" },
		{ pronoun: "tú", ending: "as" },
		{ pronoun: "él/ella", ending: "a" },
		{ pronoun: "nosotros", ending: "amos" },
		{ pronoun: "vosotros", ending: "áis" },
		{ pronoun: "ellos", ending: "an" },
	],
	er: [
		{ pronoun: "yo", ending: "o" },
		{ pronoun: "tú", ending: "es" },
		{ pronoun: "él/ella", ending: "e" },
		{ pronoun: "nosotros", ending: "emos" },
		{ pronoun: "vosotros", ending: "éis" },
		{ pronoun: "ellos", ending: "en" },
	],
	ir: [
		{ pronoun: "yo", ending: "o" },
		{ pronoun: "tú", ending: "es" },
		{ pronoun: "él/ella", ending: "e" },
		{ pronoun: "nosotros", ending: "imos" },
		{ pronoun: "vosotros", ending: "ís" },
		{ pronoun: "ellos", ending: "en" },
	],
};

const ENDINGS_BY_TYPE = {
	ar: ["amos", "áis", "an", "as", "a", "o"],
	er: ["emos", "éis", "en", "es", "e", "o"],
	ir: ["imos", "ís", "en", "es", "e", "o"],
};

function splitEnding(word, type) {
	const endings = ENDINGS_BY_TYPE[type];
	for (const end of endings) {
		if (word.endsWith(end)) {
			return { stem: word.slice(0, word.length - end.length), ending: end };
		}
	}
	return { stem: word, ending: "" };
}

// ── Category bar — horizontal scroll on mobile ──

function CategoryBar({ activeCategory, onSwitch }) {
	return (
		<div className="flex flex-col mb-8 sm:mb-10">
			{/* Scrollable tab row */}
			<div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
				<div className="flex gap-0 border-b border-[var(--border)] min-w-max sm:min-w-0 sm:flex-wrap">
					{Object.entries(IRREGULAR_CATEGORIES).map(([key, meta]) => (
						<button
							key={key}
							onClick={() => onSwitch(key)}
							className={[
								"px-3 sm:px-4 py-2.5 text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.14em] uppercase font-semibold border-b-2 -mb-px transition-colors duration-150 cursor-pointer bg-transparent font-mono whitespace-nowrap",
								activeCategory === key ?
									"text-[var(--accent)] border-[#f59e0b]"
								:	"text-[var(--text-label)] border-transparent hover:text-[var(--text-muted)]",
							].join(" ")}
						>
							{meta.label}
						</button>
					))}
				</div>
			</div>

			{/* Description strip */}
			<div className="mt-3 sm:mt-4 px-1 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed">
					{IRREGULAR_CATEGORIES[activeCategory].description}
				</p>
				<span className="shrink-0 text-[10px] font-mono italic text-[#27272a]">
					{IRREGULAR_CATEGORIES[activeCategory].example}
				</span>
			</div>
		</div>
	);
}

function ConjCell({ pronoun, stem, ending }) {
	return (
		<div className="py-2.5 sm:py-3 px-0">
			<p className="text-[9px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-1.5">
				{pronoun}
			</p>
			<p className="text-[13px] sm:text-[14px] text-[var(--text-secondary)] tracking-[-0.01em]">
				{stem}
				<span className="text-[var(--accent)]">{ending}</span>
			</p>
		</div>
	);
}

function ConjugationBar({ type }) {
	const tab = TABS.find((t) => t.key === type);
	const rows = CONJUGATION_PATTERNS[type];
	const singular = rows.slice(0, 3);
	const plural = rows.slice(3);

	return (
		<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 sm:p-6 mb-8 sm:mb-10">
			<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-4">
				Pattern —{" "}
				<span className="text-[var(--text-muted)]">{tab.patternVerb}</span>
			</p>
			<div className="grid grid-cols-3 divide-x divide-[#1c1c1f] border-b border-[var(--border)]">
				{singular.map((r) => (
					<div key={r.pronoun} className="px-2 sm:px-4 first:pl-0">
						<ConjCell pronoun={r.pronoun} stem={tab.stem} ending={r.ending} />
					</div>
				))}
			</div>
			<div className="grid grid-cols-3 divide-x divide-[#1c1c1f]">
				{plural.map((r) => (
					<div key={r.pronoun} className="px-2 sm:px-4 first:pl-0">
						<ConjCell pronoun={r.pronoun} stem={tab.stem} ending={r.ending} />
					</div>
				))}
			</div>
		</div>
	);
}

function VerbCard({ verb, type, expanded, onToggle }) {
	return (
		<div
			onClick={onToggle}
			className={[
				"p-4 sm:p-5 cursor-pointer transition-all duration-200 rounded-xl border group",
				expanded ?
					"bg-[var(--surface)] border-[#f59e0b]/30"
				:	"bg-[var(--surface)] border-[var(--border)] hover:border-[#2c2c30]",
			].join(" ")}
		>
			{/* Verb name + meaning */}
			<div className="flex items-baseline justify-between gap-2 mb-3 sm:mb-4">
				<p className="text-[18px] sm:text-[20px] font-light tracking-[-0.03em] text-[var(--text-primary)]">
					{verb.name}
				</p>
				<p className="text-[10px] tracking-[0.08em] uppercase text-[var(--text-label)] shrink-0">
					{verb.meaning}
				</p>
			</div>

			{/* Row 1 — yo tú él */}
			<div className="grid grid-cols-3 mb-2">
				{[
					{ label: "yo", word: verb.yo },
					{ label: "tú", word: verb.tu },
					{ label: "él", word: verb.el },
				].map(({ label, word }) => {
					const { stem, ending } = splitEnding(word, type);
					return (
						<div key={label}>
							<p className="text-[8px] tracking-[0.12em] uppercase text-[#27272a] mb-0.5">
								{label}
							</p>
							<p className="text-[11px] sm:text-[12px] text-[var(--text-muted)]">
								{stem}
								<span className="text-[var(--accent)]">{ending}</span>
							</p>
						</div>
					);
				})}
			</div>

			{/* Row 2 — nosotros vosotros ellos */}
			<div className="grid grid-cols-3 mb-3 sm:mb-4">
				{[
					{ label: "nos.", word: verb.nosotros },
					{ label: "vos.", word: verb.vosotros },
					{ label: "ellos", word: verb.ellos },
				].map(({ label, word }) => {
					const { stem, ending } = splitEnding(word, type);
					return (
						<div key={label}>
							<p className="text-[8px] tracking-[0.12em] uppercase text-[#27272a] mb-0.5">
								{label}
							</p>
							<p className="text-[11px] sm:text-[12px] text-[var(--text-muted)]">
								{stem}
								<span className="text-[var(--accent)]">{ending}</span>
							</p>
						</div>
					);
				})}
			</div>

			{/* Toggle hint OR example */}
			{!expanded ?
				<div className="pt-3 border-t border-[var(--border)] flex items-center gap-2">
					<div className="w-3 h-px bg-[#2c2c30]" />
					<p className="text-[10px] tracking-[0.1em] text-[#2c2c30] group-hover:text-[var(--text-label)] transition-colors">
						tap for example
					</p>
				</div>
			:	<div className="pt-3 border-t border-[#f59e0b]/20">
					<p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
						{verb.example_sp}
					</p>
					<p className="text-[11px] text-[var(--text-label)] mt-1 italic">
						{verb.example_eng}
					</p>
				</div>
			}
		</div>
	);
}

function VerbsGrid({ verbs, type, expandedId, onToggle }) {
	if (!verbs) {
		return (
			<div className="text-center py-16 text-[var(--text-label)] text-[12px] tracking-[0.1em]">
				Loading...
			</div>
		);
	}
	if (verbs.length === 0) {
		return (
			<div className="text-center py-16 text-[var(--text-label)] text-[12px] tracking-[0.1em]">
				No verbs found.
			</div>
		);
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
			{verbs.map((verb) => (
				<VerbCard
					key={verb.id}
					verb={verb}
					type={type}
					expanded={expandedId === verb.id}
					onToggle={() => onToggle(verb.id)}
				/>
			))}
		</div>
	);
}

// ── Page ──

export default function IrregularVerbsPage() {
	const [activeCategory, setActiveCategory] = useState("go_verb");
	const [verbsByCategory, setVerbsByCategory] = useState(
		Object.fromEntries(Object.keys(IRREGULAR_CATEGORIES).map((k) => [k, null])),
	);
	const [expandedId, setExpandedId] = useState(null);

	useEffect(() => {
		if (verbsByCategory[activeCategory] !== null) return;
		(async () => {
			const { data, error } = await supabase
				.from("VERBs")
				.select("*")
				.eq("category", activeCategory)
				.order("name");
			if (error) {
				console.error(error);
				setVerbsByCategory((prev) => ({ ...prev, [activeCategory]: [] }));
			} else {
				setVerbsByCategory((prev) => ({ ...prev, [activeCategory]: data }));
			}
		})();
	}, [activeCategory]);

	function handleCategorySwitch(cat) {
		setActiveCategory(cat);
		setExpandedId(null);
	}

	function handleToggle(id) {
		setExpandedId((prev) => (prev === id ? null : id));
	}

	const currentVerbs = verbsByCategory[activeCategory];
	const activeType =
		currentVerbs?.[0]?.type?.replace("-", "").toLowerCase() ?? "ar";

	return (
		<PageWrapper>
			{/* Header */}
			<p className="text-[10px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-3">
				Grammar / Tenses
			</p>
			<h1 className="text-3xl sm:text-4xl font-light tracking-[-0.04em] text-[var(--text-primary)] mb-2">
				Irregular Verbs
			</h1>
			<p className="text-[13px] text-[var(--text-muted)] leading-relaxed mb-8 sm:mb-12 tracking-wide">
				Present tense — verbs that break the regular conjugation rules.
			</p>

			{/* Category selector */}
			<CategoryBar
				activeCategory={activeCategory}
				onSwitch={handleCategorySwitch}
			/>

			{/* Section label */}
			<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-4">
				Verbs in this category
			</p>

			<VerbsGrid
				verbs={currentVerbs}
				type={activeType}
				expandedId={expandedId}
				onToggle={handleToggle}
			/>

			<BackNext
				back="/a1/grammar/regular-verbs"
				next="/a1/usage/numbers"
				backLabel="Regular Verbs"
				nextLabel="Numbers"
			/>
		</PageWrapper>
	);
}
