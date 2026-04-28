import RuleTag from "./RuleTag.jsx";
import WordGrid from "./WordGrid.jsx";

export default function RuleBlock({ rule, gender }) {
	return (
		<div className="mb-7">
			<div className="flex items-baseline gap-3 mb-3">
				<span className="text-[10px] tracking-[0.14em] text-[#3f3f46] uppercase">
					{rule.num}
				</span>
				<span className="text-[13px] font-semibold tracking-[-0.01em] text-[#a1a1aa]">
					{rule.title}
				</span>
				<RuleTag gender={gender}>{rule.tag}</RuleTag>
			</div>
			<WordGrid words={rule.words} />
		</div>
	);
}
