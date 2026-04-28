import WordCard from "./WordCard.jsx";

export default function WordGrid({ words }) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#1c1c1f] border border-[#1c1c1f] rounded-xl overflow-hidden">
			{words.map((w) => (
				<WordCard key={w.es} {...w} />
			))}
		</div>
	);
}
