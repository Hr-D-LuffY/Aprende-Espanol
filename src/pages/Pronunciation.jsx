import { useState } from "react";
import { RULES } from "../context/PronunRules";

import BackNext from "../components/BackNext";
import SidebarButton from "../components/Pronunciation/SidebarButton";
import RuleTag from "../components/Pronunciation/RuleTag";
import ContentBlock from "../components/Pronunciation/ContentBlock";

export default function PronunciationPage() {
	const [activeRule, setActiveRule] = useState("vowels");
	const current = RULES.find((r) => r.id === activeRule);

	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-16 pb-24">
				{/* Header */}
				<div className="mb-14">
					<p className="text-[11px] tracking-[0.18em] uppercase text-[#3f3f46] mb-4">
						Reference — A1 · Foundation
					</p>
					<h1 className="text-5xl font-light tracking-[-0.04em] text-[#fafafa] mb-3">
						Pronunciation Rules
					</h1>
					<p className="text-[13px] text-[#52525b] leading-relaxed max-w-lg">
						9 rules. Learn these once and you can read any Spanish word out loud
						— no guessing.
					</p>
				</div>

				{/* Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 items-start">
					{/* Sidebar */}
					<div className="lg:sticky lg:top-20 flex flex-col gap-1">
						{RULES.map((r) => (
							<SidebarButton
								key={r.id}
								rule={r}
								isActive={activeRule === r.id}
								onClick={() => setActiveRule(r.id)}
							/>
						))}
					</div>

					{/* Rule detail */}
					{current && (
						<div className="border border-[#1c1c1f] rounded-2xl bg-[#111113] overflow-hidden">
							{/* Rule header */}
							<div className="border-b border-[#1c1c1f] px-8 py-7">
								<div className="flex items-center gap-3 mb-3">
									<RuleTag tag={current.tag} tagColor={current.tagColor} />
								</div>
								<h2 className="text-2xl font-light tracking-[-0.03em] text-[#fafafa] mb-2">
									{current.title}
								</h2>
								<p className="text-[13px] text-[#52525b] leading-relaxed">
									{current.summary}
								</p>
							</div>

							{/* Rule content */}
							<div className="px-8 py-7 flex flex-col gap-6">
								{current.content.map((block, i) => (
									<ContentBlock key={i} block={block} />
								))}

								{/* Tip */}
								<div className="border-l-2 border-[#f59e0b]/40 pl-4 mt-2">
									<p className="text-[10px] tracking-[0.12em] uppercase text-[#f59e0b]/60 mb-1">
										tip
									</p>
									<p className="text-[12px] text-[#52525b] leading-relaxed">
										{current.tip}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Back & Next */}
				<BackNext
					back="/a1/alphabet"
					next="/a1/grammar/noun-gender"
					backLabel="Alphabet"
					nextLabel="Noun-Gender"
				/>
			</div>
		</div>
	);
}
