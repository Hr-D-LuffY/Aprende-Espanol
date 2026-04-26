import { useState } from "react";

const ALPHABET = [
	{
		letter: "A",
		sound: "ah",
		word: "amigo",
		pronunciation: "ah-mee-go",
		meaning: "friend",
		note: 'Like "a" in "father"',
	},
	{
		letter: "B",
		sound: "beh",
		word: "burro",
		pronunciation: "boo-rroh",
		meaning: "donkey",
		note: "Softer than English B",
	},
	{
		letter: "C",
		sound: "seh",
		word: "casa",
		pronunciation: "kah-sah",
		meaning: "house",
		note: "K before a/o/u, S before e/i",
	},
	{
		letter: "D",
		sound: "deh",
		word: "día",
		pronunciation: "dee-ah",
		meaning: "day",
		note: "Softer than English D",
	},
	{
		letter: "E",
		sound: "eh",
		word: "español",
		pronunciation: "es-pah-nyol",
		meaning: "Spanish",
		note: 'Like "e" in "bed"',
	},
	{
		letter: "F",
		sound: "ef-eh",
		word: "familia",
		pronunciation: "fah-mee-lee-ah",
		meaning: "family",
		note: "Same as English F",
	},
	{
		letter: "G",
		sound: "heh",
		word: "gato",
		pronunciation: "gah-toh",
		meaning: "cat",
		note: "Hard G before a/o/u, like H before e/i",
	},
	{
		letter: "H",
		sound: "ah-cheh",
		word: "hola",
		pronunciation: "oh-lah",
		meaning: "hello",
		note: "Always silent in Spanish",
	},
	{
		letter: "I",
		sound: "ee",
		word: "iglesia",
		pronunciation: "ee-gleh-see-ah",
		meaning: "church",
		note: 'Like "ee" in "feet"',
	},
	{
		letter: "J",
		sound: "hoh-tah",
		word: "jugo",
		pronunciation: "hoo-goh",
		meaning: "juice",
		note: "Like a strong English H",
	},
	{
		letter: "K",
		sound: "kah",
		word: "kilo",
		pronunciation: "kee-loh",
		meaning: "kilogram",
		note: "Rare, mostly in loanwords",
	},
	{
		letter: "L",
		sound: "el-eh",
		word: "luna",
		pronunciation: "loo-nah",
		meaning: "moon",
		note: "Same as English L",
	},
	{
		letter: "M",
		sound: "em-eh",
		word: "madre",
		pronunciation: "mah-dreh",
		meaning: "mother",
		note: "Same as English M",
	},
	{
		letter: "N",
		sound: "en-eh",
		word: "noche",
		pronunciation: "noh-cheh",
		meaning: "night",
		note: "Same as English N",
	},
	{
		letter: "Ñ",
		sound: "en-yeh",
		word: "niño",
		pronunciation: "nee-nyoh",
		meaning: "child/boy",
		note: 'Like "ny" in "canyon"',
	},
	{
		letter: "O",
		sound: "oh",
		word: "ojo",
		pronunciation: "oh-hoh",
		meaning: "eye",
		note: 'Like "o" in "more"',
	},
	{
		letter: "P",
		sound: "peh",
		word: "padre",
		pronunciation: "pah-dreh",
		meaning: "father",
		note: "No puff of air like English P",
	},
	{
		letter: "Q",
		sound: "koo",
		word: "queso",
		pronunciation: "keh-soh",
		meaning: "cheese",
		note: "Always followed by silent U",
	},
	{
		letter: "R",
		sound: "er-eh",
		word: "rojo",
		pronunciation: "roh-hoh",
		meaning: "red",
		note: "Trilled at start of word",
	},
	{
		letter: "S",
		sound: "es-eh",
		word: "sol",
		pronunciation: "sohl",
		meaning: "sun",
		note: "Same as English S",
	},
	{
		letter: "T",
		sound: "teh",
		word: "tiempo",
		pronunciation: "tee-em-poh",
		meaning: "weather/time",
		note: "No puff of air like English T",
	},
	{
		letter: "U",
		sound: "oo",
		word: "uva",
		pronunciation: "oo-bah",
		meaning: "grape",
		note: 'Like "oo" in "food"',
	},
	{
		letter: "V",
		sound: "oo-beh",
		word: "vino",
		pronunciation: "bee-noh",
		meaning: "wine",
		note: "Almost identical to Spanish B",
	},
	{
		letter: "W",
		sound: "doh-bleh-oo",
		word: "wifi",
		pronunciation: "wee-fee",
		meaning: "wifi",
		note: "Only in foreign loanwords",
	},
	{
		letter: "X",
		sound: "eh-kees",
		word: "éxito",
		pronunciation: "ek-see-toh",
		meaning: "success",
		note: "Usually like English S or KS",
	},
	{
		letter: "Y",
		sound: "ee-gree-eh-gah",
		word: "yo",
		pronunciation: "yoh",
		meaning: "I (myself)",
		note: "Like English Y or J",
	},
	{
		letter: "Z",
		sound: "seh-tah",
		word: "zapato",
		pronunciation: "sah-pah-toh",
		meaning: "shoe",
		note: "Like S in Latin America",
	},
];

const SPECIAL = [
	{
		letters: "CH",
		sound: "cheh",
		word: "chico",
		pronunciation: "chee-koh",
		meaning: "boy/small",
		note: "Like English CH",
	},
	{
		letters: "LL",
		sound: "eh-yeh",
		word: "lluvia",
		pronunciation: "yoo-bee-ah",
		meaning: "rain",
		note: "Like English Y",
	},
	{
		letters: "RR",
		sound: "eh-rreh",
		word: "perro",
		pronunciation: "peh-rroh",
		meaning: "dog",
		note: "Strong rolled trill",
	},
];

export default function AlphabetPage() {
	const [active, setActive] = useState(null);
	const [search, setSearch] = useState("");

	const filtered = ALPHABET.filter(
		(a) =>
			a.letter.toLowerCase().includes(search.toLowerCase()) ||
			a.word.toLowerCase().includes(search.toLowerCase()) ||
			a.meaning.toLowerCase().includes(search.toLowerCase()),
	);

	const selected =
		active !== null ?
			ALPHABET.find((a) => a.letter === active) ||
			SPECIAL.find((a) => a.letters === active)
		:	null;

	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-16 pb-24">
				{/* Header */}
				<div className="mb-14">
					<p className="text-[11px] tracking-[0.18em] uppercase text-[#3f3f46] mb-4">
						Reference · A1
					</p>
					<h1 className="text-5xl font-light tracking-[-0.04em] text-[#fafafa] mb-3">
						The Spanish Alphabet
					</h1>
					<p className="text-[13px] text-[#52525b] leading-relaxed max-w-lg">
						27 letters. Click any to see pronunciation, an example word, and a
						study note.
					</p>
				</div>

				{/* Search */}
				<div className="relative mb-10 max-w-xs">
					<span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3f3f46] text-[12px]">
						→
					</span>
					<input
						type="text"
						placeholder="search letter, word, meaning..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full bg-[#111113] border border-[#1c1c1f] rounded-lg pl-8 pr-4 py-2 text-[12px] text-[#a1a1aa] placeholder-[#3f3f46] focus:outline-none focus:border-[#f59e0b]/40 tracking-wide transition-colors"
					/>
				</div>

				{/* Main grid + detail panel */}
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
					{/* Letter grid */}
					<div>
						<div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mb-6">
							{filtered.map((a) => (
								<button
									key={a.letter}
									onClick={() =>
										setActive(active === a.letter ? null : a.letter)
									}
									className={`
                    group relative flex flex-col items-center justify-center
                    aspect-square rounded-xl border transition-all duration-150 cursor-pointer
                    ${
											active === a.letter ?
												"bg-[#f59e0b]/10 border-[#f59e0b]/40 text-[#f59e0b]"
											:	"bg-[#111113] border-[#1c1c1f] text-[#a1a1aa] hover:border-[#27272a] hover:bg-[#18181b] hover:text-[#fafafa]"
										}
                    ${a.letter === "Ñ" ? "col-span-1" : ""}
                  `}
								>
									<span className="text-xl font-light tracking-tight">
										{a.letter}
									</span>
									<span
										className={`text-[9px] tracking-wide mt-0.5 ${active === a.letter ? "text-[#f59e0b]/70" : "text-[#3f3f46]"}`}
									>
										{a.sound}
									</span>
								</button>
							))}
						</div>

						{/* Special combos */}
						<div className="border-t border-[#1c1c1f] pt-6">
							<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-3">
								Special combinations
							</p>
							<div className="flex gap-2 flex-wrap">
								{SPECIAL.map((s) => (
									<button
										key={s.letters}
										onClick={() =>
											setActive(active === s.letters ? null : s.letters)
										}
										className={`
                      flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-150 cursor-pointer
                      ${
												active === s.letters ?
													"bg-[#f59e0b]/10 border-[#f59e0b]/40 text-[#f59e0b]"
												:	"bg-[#111113] border-[#1c1c1f] text-[#a1a1aa] hover:border-[#27272a] hover:bg-[#18181b] hover:text-[#fafafa]"
											}
                    `}
									>
										<span className="text-lg font-light">{s.letters}</span>
										<span
											className={`text-[10px] ${active === s.letters ? "text-[#f59e0b]/70" : "text-[#3f3f46]"}`}
										>
											{s.sound}
										</span>
									</button>
								))}
							</div>
						</div>
					</div>

					{/* Detail panel */}
					<div className="lg:sticky lg:top-20">
						{selected ?
							<div className="border border-[#1c1c1f] rounded-2xl bg-[#111113] overflow-hidden">
								{/* Big letter */}
								<div className="border-b border-[#1c1c1f] px-6 py-8 flex items-end gap-4">
									<span className="text-7xl font-extralight tracking-[-0.05em] text-[#f59e0b] leading-none">
										{selected.letter || selected.letters}
									</span>
									<div className="pb-1">
										<p className="text-[11px] text-[#3f3f46] tracking-[0.1em] uppercase mb-0.5">
											sounds like
										</p>
										<p className="text-[18px] font-light text-[#a1a1aa] tracking-wide">
											"{selected.sound}"
										</p>
									</div>
								</div>

								{/* Word example */}
								<div className="px-6 py-5 border-b border-[#1c1c1f]">
									<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-3">
										example word
									</p>
									<p className="text-[22px] font-light text-[#fafafa] tracking-tight mb-1">
										{selected.word}
									</p>
									<p className="text-[12px] text-[#52525b] mb-1">
										({selected.pronunciation})
									</p>
									<p className="text-[12px] text-[#f59e0b]/80">
										= {selected.meaning}
									</p>
								</div>

								{/* Study note */}
								<div className="px-6 py-5">
									<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-2">
										study note
									</p>
									<p className="text-[12px] text-[#52525b] leading-relaxed">
										{selected.note}
									</p>
								</div>
							</div>
						:	<div className="border border-[#1c1c1f] rounded-2xl bg-[#111113] px-6 py-10 flex flex-col items-center justify-center text-center gap-3">
								<span className="text-4xl font-extralight text-[#27272a]">
									A–Z
								</span>
								<p className="text-[12px] text-[#3f3f46] tracking-wide">
									Click any letter to see its pronunciation and an example
								</p>
							</div>
						}

						{/* Quick stats */}
						<div className="grid grid-cols-3 gap-2 mt-3">
							<div className="bg-[#111113] border border-[#1c1c1f] rounded-xl p-3 text-center">
								<p className="text-lg font-light text-[#fafafa]">27</p>
								<p className="text-[9px] text-[#3f3f46] tracking-wide uppercase mt-0.5">
									letters
								</p>
							</div>
							<div className="bg-[#111113] border border-[#1c1c1f] rounded-xl p-3 text-center">
								<p className="text-lg font-light text-[#fafafa]">3</p>
								<p className="text-[9px] text-[#3f3f46] tracking-wide uppercase mt-0.5">
									combos
								</p>
							</div>
							<div className="bg-[#111113] border border-[#1c1c1f] rounded-xl p-3 text-center">
								<p className="text-lg font-light text-[#f59e0b]">1</p>
								<p className="text-[9px] text-[#3f3f46] tracking-wide uppercase mt-0.5">
									unique (Ñ)
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* All letters — compact list view */}
				<div className="mt-16 border-t border-[#1c1c1f] pt-12">
					<h2 className="text-xl font-light tracking-[-0.03em] text-[#fafafa] mb-8">
						Full reference
					</h2>
					<div className="flex flex-col gap-0">
						{ALPHABET.map((a, i) => (
							<div
								key={a.letter}
								className="grid grid-cols-[40px_80px_1fr_1fr_1fr] gap-4 py-3 border-b border-[#1c1c1f] items-center group hover:bg-[#111113] px-3 -mx-3 rounded-lg transition-colors cursor-pointer"
								onClick={() => {
									setActive(a.letter);
									window.scrollTo({ top: 0, behavior: "smooth" });
								}}
							>
								<span className="text-[18px] font-light text-[#f59e0b] group-hover:scale-110 transition-transform inline-block">
									{a.letter}
								</span>
								<span className="text-[11px] text-[#52525b]">({a.sound})</span>
								<span className="text-[12px] text-[#a1a1aa]">{a.word}</span>
								<span className="text-[11px] text-[#3f3f46]">
									/{a.pronunciation}/
								</span>
								<span className="text-[11px] text-[#52525b]">
									= {a.meaning}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
