import { useState } from "react";
import BackNext from "../../../components/BackNext";
// ─── Primitives ───────────────────────────────────────────────────────────────

function Tag({ children, color = "zinc" }) {
	const styles = {
		amber: "border-[#f59e0b]/40 text-[#f59e0b] bg-[#f59e0b]/5",
		zinc: "border-[#27272a] text-[#52525b] bg-transparent",
		blue: "border-[#3b82f6]/30 text-[#60a5fa] bg-[#3b82f6]/5",
		green: "border-[#22c55e]/30 text-[#4ade80] bg-[#22c55e]/5",
		rose: "border-[#f43f5e]/30 text-[#fb7185] bg-[#f43f5e]/5",
		violet: "border-[#8b5cf6]/30 text-[#a78bfa] bg-[#8b5cf6]/5",
		teal: "border-[#14b8a6]/30 text-[#2dd4bf] bg-[#14b8a6]/5",
	};
	return (
		<span
			className={`inline-block border rounded px-2 py-0.5 text-[10px] tracking-[0.12em] uppercase font-semibold ${styles[color]}`}
		>
			{children}
		</span>
	);
}

function ExampleRow({ es, en }) {
	return (
		<div className="py-2.5 border-b border-[#1c1c1f] last:border-0 flex flex-col gap-0.5">
			<span className="text-[13px] text-[#fafafa] tracking-[-0.01em]">
				{es}
			</span>
			<span className="text-[11px] text-[#3f3f46] tracking-wide">{en}</span>
		</div>
	);
}

function UseBlock({ title, examples }) {
	return (
		<div className="border border-[#1c1c1f] rounded-xl bg-[#111113] overflow-hidden">
			<div className="px-5 py-3 border-b border-[#1c1c1f]">
				<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46]">
					{title}
				</p>
			</div>
			<div className="px-5">
				{examples.map((ex, i) => (
					<ExampleRow key={i} {...ex} />
				))}
			</div>
		</div>
	);
}

function VocabRow({ es, en }) {
	return (
		<div className="flex items-baseline justify-between py-2.5 border-b border-[#1c1c1f] last:border-0 hover:bg-[#f59e0b]/3 transition-colors px-1">
			<span className="text-[13px] text-[#fafafa]">{es}</span>
			<span className="text-[11px] text-[#52525b] tracking-wide">{en}</span>
		</div>
	);
}

function AfterPrepNote({ pairs }) {
	return (
		<div className="border border-[#27272a] rounded-lg px-4 py-3 flex items-center gap-6">
			<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] shrink-0">
				After prep.
			</p>
			<div className="flex gap-6">
				{pairs.map(([from, to]) => (
					<div key={from} className="flex items-center gap-2">
						<span className="text-[12px] text-[#52525b]">{from}</span>
						<span className="text-[#27272a]">→</span>
						<span className="text-[12px] text-[#f59e0b] font-semibold">
							{to}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PREPOSITIONS = [
	{
		id: "para",
		label: "Para",
		short: "for / in order to",
		tag: "Future · Purpose",
		tagColor: "amber",
		summary: "Purpose · Destination · Intention · Opinion · Time deadline",
		afterPrep: [
			["Tú", "Ti"],
			["Yo", "Mí"],
		],
		uses: [
			{
				title: "Purpose / Destination / Intention",
				examples: [
					{ es: "Es para ti", en: "It's for you" },
					{ es: "Es para mí", en: "It's for me" },
					{ es: "Este libro es para ti", en: "This book is for you" },
					{ es: "Este regalo es para Praptee", en: "This gift is for Praptee" },
				],
			},
			{
				title: "Towards (direction)",
				examples: [
					{ es: "Vamos para la casa", en: "We're heading home" },
					{ es: "Ellos van para la feria", en: "They are going to the fair" },
				],
			},
			{
				title: "Expressing Opinion",
				examples: [
					{ es: "Para mí, es una buena idea", en: "For me, it's a good idea" },
				],
			},
			{
				title: "With Time Phrases (by / deadline)",
				examples: [
					{
						es: "Tienes que estar listo para las 3 de la tarde",
						en: "You have to be ready by 3 PM",
					},
				],
			},
		],
		vocab: [
			{ es: "Feria", en: "Fair" },
			{ es: "Listo / Lista", en: "Ready" },
			{ es: "Regalo", en: "Gift" },
		],
	},
	{
		id: "por",
		label: "Por",
		short: "for / because of / by",
		tag: "Past · Cause",
		tagColor: "blue",
		summary:
			"Because of · Exchange · Transport · Means · Through · Time periods",
		afterPrep: [
			["Tú", "Ti"],
			["Yo", "Mí"],
		],
		uses: [
			{
				title: "Because of / Cause",
				examples: [
					{
						es: "Eso pasó por tu culpa",
						en: "That happened because of your fault",
					},
					{ es: "Este pescado es por ti", en: "This fish is for you (cause)" },
				],
			},
			{
				title: "In Exchange For",
				examples: [
					{ es: "Cambio este por otro", en: "I exchange this one for another" },
				],
			},
			{
				title: '"By" — Transport',
				examples: [
					{ es: "Voy por avión", en: "I go by plane" },
					{
						es: "Voy a la universidad a pie",
						en: "I go to the university on foot",
					},
				],
			},
			{
				title: '"By" — Means of Communication',
				examples: [
					{ es: "Hablamos por teléfono", en: "We speak by phone" },
					{ es: "Hablo con mi amigo por FB", en: "I speak to my friend by FB" },
					{ es: "Escribo por bolígrafo", en: "I write by pen" },
				],
			},
			{
				title: "Along & Through",
				examples: [
					{
						es: "Voy para la escuela por el parque",
						en: "I go to school through the park",
					},
					{
						es: "Vamos para la universidad por el parque",
						en: "We're going to the university through the park",
					},
				],
			},
			{
				title: "Time / Periods of the Day",
				examples: [
					{ es: "Bailo por la noche", en: "I dance at night" },
					{ es: "Trabajo por la mañana", en: "I work in the morning" },
				],
			},
		],
		vocab: [
			{ es: "Culpa", en: "Fault" },
			{ es: "Cambiar", en: "To exchange" },
			{ es: "Otro / Otra", en: "Other" },
			{ es: "Avión", en: "Plane" },
			{ es: "A pie", en: "On foot" },
			{ es: "Teléfono", en: "Phone" },
			{ es: "Bolígrafo", en: "Pen" },
			{ es: "Parque", en: "Park" },
		],
	},
	{
		id: "en",
		label: "En",
		short: "in / on / at",
		tag: "Location · Time",
		tagColor: "green",
		summary: "Location · Time · Mode of transport (inside)",
		uses: [
			{
				title: "Location (in / at)",
				examples: [
					{ es: "Estoy en casa", en: "I am at home" },
					{ es: "El libro está en la mesa", en: "The book is on the table" },
					{ es: "Vivo en España", en: "I live in Spain" },
					{ es: "Estamos en la escuela", en: "We are at school" },
				],
			},
			{
				title: "Time (in / on)",
				examples: [
					{ es: "Llegamos en enero", en: "We arrive in January" },
					{ es: "Nació en 1990", en: "He was born in 1990" },
				],
			},
			{
				title: "Mode of Transport (inside / enclosed)",
				examples: [
					{ es: "Voy en coche", en: "I go by car" },
					{ es: "Viajamos en tren", en: "We travel by train" },
					{ es: "Voy en avión", en: "I go by plane (inside it)" },
				],
			},
		],
		vocab: [
			{ es: "Casa", en: "House / Home" },
			{ es: "Mesa", en: "Table" },
			{ es: "Escuela", en: "School" },
			{ es: "Coche", en: "Car" },
			{ es: "Tren", en: "Train" },
			{ es: "Enero", en: "January" },
		],
	},
	{
		id: "de",
		label: "De",
		short: "of / from / about",
		tag: "Origin · Possession",
		tagColor: "rose",
		summary: "Origin · Possession · Material · Topic · Time (from)",
		uses: [
			{
				title: "Origin / From",
				examples: [
					{ es: "Soy de Bangladesh", en: "I am from Bangladesh" },
					{ es: "El vuelo es de Madrid", en: "The flight is from Madrid" },
				],
			},
			{
				title: "Possession / Belonging",
				examples: [
					{ es: "El libro de María", en: "María's book" },
					{ es: "La puerta de la casa", en: "The door of the house" },
				],
			},
			{
				title: "Material / Description",
				examples: [
					{ es: "Una mesa de madera", en: "A wooden table" },
					{ es: "Un vaso de agua", en: "A glass of water" },
				],
			},
			{
				title: "Topic / About",
				examples: [
					{ es: "Hablamos de política", en: "We talk about politics" },
					{ es: "Un libro de español", en: "A Spanish book" },
				],
			},
			{
				title: "Time — From",
				examples: [
					{
						es: "Trabajo de lunes a viernes",
						en: "I work from Monday to Friday",
					},
				],
			},
		],
		vocab: [
			{ es: "Madera", en: "Wood" },
			{ es: "Vaso", en: "Glass" },
			{ es: "Vuelo", en: "Flight" },
			{ es: "Política", en: "Politics" },
			{ es: "Lunes", en: "Monday" },
			{ es: "Viernes", en: "Friday" },
		],
	},
	{
		id: "a",
		label: "A",
		short: "to / at",
		tag: "Direction · Time",
		tagColor: "violet",
		summary: "Direction · Time (at) · Personal 'a' · Distance",
		uses: [
			{
				title: "Direction / To",
				examples: [
					{ es: "Voy a la escuela", en: "I go to school" },
					{ es: "Vamos a España", en: "We go to Spain" },
					{ es: "Ella va al mercado", en: "She goes to the market" },
				],
			},
			{
				title: "Time — At",
				examples: [
					{ es: "Llego a las tres", en: "I arrive at three" },
					{ es: "La clase empieza a las nueve", en: "Class starts at nine" },
				],
			},
			{
				title: "Personal 'A' (before a person)",
				examples: [
					{ es: "Veo a María", en: "I see María" },
					{ es: "Llamo a mi madre", en: "I call my mother" },
				],
			},
			{
				title: "Distance",
				examples: [
					{ es: "Está a dos kilómetros", en: "It's two kilometres away" },
				],
			},
		],
		vocab: [
			{ es: "Mercado", en: "Market" },
			{ es: "Kilómetro", en: "Kilometre" },
			{ es: "Empezar", en: "To start" },
			{ es: "Llegar", en: "To arrive" },
			{ es: "Llamar", en: "To call" },
		],
	},
	{
		id: "con",
		label: "Con",
		short: "with",
		tag: "Company · Manner",
		tagColor: "teal",
		summary: "Company · Manner · Ingredient / Content",
		uses: [
			{
				title: "Company / Together With",
				examples: [
					{ es: "Voy con mi amigo", en: "I go with my friend" },
					{ es: "Ella come con su familia", en: "She eats with her family" },
					{ es: "Hablo contigo", en: "I speak with you" },
				],
			},
			{
				title: "Manner / How",
				examples: [
					{ es: "Lo hace con cuidado", en: "He does it with care" },
					{ es: "Habla con respeto", en: "She speaks with respect" },
				],
			},
			{
				title: "Content / Ingredient",
				examples: [
					{ es: "Un café con leche", en: "A coffee with milk" },
					{ es: "Pan con mantequilla", en: "Bread with butter" },
				],
			},
		],
		vocab: [
			{ es: "Cuidado", en: "Care / Careful" },
			{ es: "Respeto", en: "Respect" },
			{ es: "Leche", en: "Milk" },
			{ es: "Mantequilla", en: "Butter" },
			{ es: "Contigo", en: "With you" },
			{ es: "Conmigo", en: "With me" },
		],
	},
	{
		id: "sin",
		label: "Sin",
		short: "without",
		tag: "Absence",
		tagColor: "zinc",
		summary: "Absence of something or someone",
		uses: [
			{
				title: "Without (person / thing)",
				examples: [
					{ es: "Café sin azúcar", en: "Coffee without sugar" },
					{ es: "Salgo sin dinero", en: "I leave without money" },
					{ es: "Estoy sin trabajo", en: "I am without work / unemployed" },
					{ es: "No puedo vivir sin ti", en: "I can't live without you" },
				],
			},
			{
				title: "Without + Verb (sin + infinitive)",
				examples: [
					{
						es: "Se fue sin decir nada",
						en: "He left without saying anything",
					},
					{ es: "Comes sin pensar", en: "You eat without thinking" },
				],
			},
		],
		vocab: [
			{ es: "Azúcar", en: "Sugar" },
			{ es: "Dinero", en: "Money" },
			{ es: "Trabajo", en: "Work / Job" },
			{ es: "Nada", en: "Nothing" },
		],
	},
	{
		id: "sobre",
		label: "Sobre",
		short: "on / about / over",
		tag: "Surface · Topic",
		tagColor: "amber",
		summary: "On top of · Topic / About · Approximately",
		uses: [
			{
				title: "On Top of / Over",
				examples: [
					{ es: "El libro está sobre la mesa", en: "The book is on the table" },
					{
						es: "El avión vuela sobre las nubes",
						en: "The plane flies over the clouds",
					},
				],
			},
			{
				title: "About / Regarding (topic)",
				examples: [
					{ es: "Hablamos sobre el proyecto", en: "We talk about the project" },
					{
						es: "Un documental sobre la naturaleza",
						en: "A documentary about nature",
					},
				],
			},
			{
				title: "Approximately (time / quantity)",
				examples: [
					{ es: "Llego sobre las tres", en: "I'll arrive around three" },
					{
						es: "Cuesta sobre veinte euros",
						en: "It costs about twenty euros",
					},
				],
			},
		],
		vocab: [
			{ es: "Nubes", en: "Clouds" },
			{ es: "Proyecto", en: "Project" },
			{ es: "Naturaleza", en: "Nature" },
			{ es: "Documental", en: "Documentary" },
			{ es: "Cuesta", en: "It costs" },
		],
	},
	{
		id: "entre",
		label: "Entre",
		short: "between / among",
		tag: "Position · Shared",
		tagColor: "green",
		summary: "Between two things · Among a group · Shared action",
		uses: [
			{
				title: "Between (two things / people)",
				examples: [
					{
						es: "El banco está entre la farmacia y el parque",
						en: "The bank is between the pharmacy and the park",
					},
					{ es: "Entre tú y yo", en: "Between you and me" },
				],
			},
			{
				title: "Among (a group)",
				examples: [
					{ es: "Estaba entre la multitud", en: "He was among the crowd" },
					{ es: "Entre todos lo hicimos", en: "Among all of us, we did it" },
				],
			},
		],
		vocab: [
			{ es: "Banco", en: "Bank" },
			{ es: "Farmacia", en: "Pharmacy" },
			{ es: "Multitud", en: "Crowd" },
			{ es: "Todos", en: "Everyone / All" },
		],
	},
	{
		id: "desde",
		label: "Desde",
		short: "from / since",
		tag: "Origin · Duration",
		tagColor: "blue",
		summary: "From a place · Since a time · Duration up to now",
		uses: [
			{
				title: "From (place)",
				examples: [
					{ es: "Viajo desde Madrid", en: "I travel from Madrid" },
					{
						es: "Desde aquí puedo ver el mar",
						en: "From here I can see the sea",
					},
				],
			},
			{
				title: "Since (time)",
				examples: [
					{
						es: "Estudio español desde enero",
						en: "I have been studying Spanish since January",
					},
					{ es: "Vivo aquí desde 2020", en: "I have lived here since 2020" },
				],
			},
			{
				title: "Desde … Hasta (From … To)",
				examples: [
					{ es: "Trabajo desde las 9 hasta las 5", en: "I work from 9 to 5" },
					{ es: "Desde lunes hasta viernes", en: "From Monday to Friday" },
				],
			},
		],
		vocab: [
			{ es: "Aquí", en: "Here" },
			{ es: "Mar", en: "Sea" },
			{ es: "Hasta", en: "Until / To" },
			{ es: "Viajar", en: "To travel" },
		],
	},
	{
		id: "hasta",
		label: "Hasta",
		short: "until / up to",
		tag: "Limit · End point",
		tagColor: "rose",
		summary: "Until a time · Up to a place · Farewell expressions",
		uses: [
			{
				title: "Until (time)",
				examples: [
					{ es: "Estudio hasta las diez", en: "I study until ten" },
					{ es: "Espera hasta mañana", en: "Wait until tomorrow" },
				],
			},
			{
				title: "Up To / As Far As (place)",
				examples: [
					{ es: "Caminé hasta la plaza", en: "I walked as far as the square" },
					{
						es: "El tren va hasta Barcelona",
						en: "The train goes as far as Barcelona",
					},
				],
			},
			{
				title: "Farewell Expressions",
				examples: [
					{ es: "¡Hasta luego!", en: "See you later!" },
					{ es: "¡Hasta mañana!", en: "See you tomorrow!" },
					{ es: "¡Hasta pronto!", en: "See you soon!" },
				],
			},
		],
		vocab: [
			{ es: "Plaza", en: "Square / Plaza" },
			{ es: "Mañana", en: "Tomorrow / Morning" },
			{ es: "Luego", en: "Later" },
			{ es: "Pronto", en: "Soon" },
			{ es: "Esperar", en: "To wait" },
		],
	},
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrepositionPage() {
	const [active, setActive] = useState("para");
	const prep = PREPOSITIONS.find((p) => p.id === active);

	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-3xl mx-auto px-6 pt-20 pb-28">
				{/* Header */}
				<div className="mb-10">
					<p className="text-[10px] tracking-[0.18em] uppercase text-[#3f3f46] mb-3">
						Grammar · Prepositions
					</p>
					<h1 className="text-6xl font-light tracking-[-0.04em] text-[#fafafa] mb-4">
						Prepositions
					</h1>
					<p className="text-[12px] text-[#52525b] tracking-wide max-w-sm">
						Small words, big impact. Each preposition pins a relationship —
						time, place, cause, or company — to the rest of the sentence.
					</p>
				</div>

				{/* Pill nav */}
				<div className="flex flex-wrap gap-2 mb-12">
					{PREPOSITIONS.map((p) => (
						<button
							key={p.id}
							onClick={() => setActive(p.id)}
							className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest border transition-all duration-150 cursor-pointer ${
								active === p.id ?
									"bg-[#f59e0b] text-[#09090b] border-[#f59e0b]"
								:	"bg-transparent text-[#52525b] border-[#27272a] hover:text-[#71717a] hover:border-[#3f3f46]"
							}`}
						>
							{p.label}
						</button>
					))}
				</div>

				{/* Panel */}
				<div key={active}>
					{/* Heading row */}
					<div className="flex items-baseline gap-4 mb-2">
						<span className="text-5xl font-light tracking-[-0.04em] text-[#fafafa]">
							{prep.label}
						</span>
						<Tag color={prep.tagColor}>{prep.tag}</Tag>
					</div>
					<p className="text-[12px] text-[#52525b] tracking-wide mb-1">
						{prep.short}
					</p>
					<p className="text-[10px] text-[#3f3f46] tracking-[0.1em] uppercase mb-8">
						{prep.summary}
					</p>

					{/* After-prep note — only where relevant */}
					{prep.afterPrep && (
						<div className="mb-8">
							<AfterPrepNote pairs={prep.afterPrep} />
						</div>
					)}

					{/* Uses */}
					<div className="mb-10">
						<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-4">
							Uses
						</p>
						<div className="flex flex-col gap-3">
							{prep.uses.map((u) => (
								<UseBlock key={u.title} {...u} />
							))}
						</div>
					</div>

					{/* Vocab */}
					{prep.vocab?.length > 0 && (
						<div>
							<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-4">
								Vocabulary
							</p>
							<div className="border border-[#1c1c1f] rounded-xl bg-[#111113] px-5">
								{prep.vocab.map((v) => (
									<VocabRow key={v.es} {...v} />
								))}
							</div>
						</div>
					)}
				</div>
				<BackNext
					back="/a1/grammar/negation"
					next="/a1/grammar/contraction"
					backLabel="Negation"
					nextLabel="Contraction"
				/>
			</div>
		</div>
	);
}
