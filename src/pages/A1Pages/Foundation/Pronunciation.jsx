import { useState } from "react";
import { RULES } from "../../../context/PronunRules";
import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";

import SidebarButton from "/src/components/Pronunciation/SidebarButton.jsx";
import RuleTag from "/src/components/Pronunciation/RuleTag.jsx";
import ContentBlock from "/src/components/Pronunciation/ContentBlock.jsx";

export default function PronunciationPage() {
	const [activeRule, setActiveRule] = useState("vowels");
	const current = RULES.find((r) => r.id === activeRule);

	return (
		<PageWrapper>
			{/* Header */}
			<div className="mb-10 sm:mb-14">
				<PageReference reference="A1" topic="Foundation" />
				<PageHeader
					title="Pronunciation Rules"
					es="Pronunciación"
					description="9 rules. Learn these once and you can read any Spanish word out loud — no guessing →"
				/>
			</div>

			{/* Layout */}
			<div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 items-start">
				{/* Sidebar — horizontal scroll on mobile, vertical on lg */}
				<div className="lg:sticky lg:top-20">
					<div className="flex flex-row lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
						{RULES.map((r) => (
							<SidebarButton
								key={r.id}
								rule={r}
								isActive={activeRule === r.id}
								onClick={() => setActiveRule(r.id)}
							/>
						))}
					</div>
				</div>

				{/* Rule detail */}
				{current && (
					<div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] overflow-hidden">
						{/* Rule header */}
						<div className="border-b border-[var(--border)] px-5 py-5 sm:px-8 sm:py-7">
							<div className="flex items-center gap-3 mb-3">
								<RuleTag tag={current.tag} tagColor={current.tagColor} />
							</div>
							<h2 className="text-xl sm:text-2xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-2">
								{current.title}
							</h2>
							<p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
								{current.summary}
							</p>
						</div>

						{/* Rule content */}
						<div className="px-5 py-5 sm:px-8 sm:py-7 flex flex-col gap-6">
							{current.content.map((block, i) => (
								<ContentBlock key={i} block={block} />
							))}

							{/* Tip */}
							<div className="border-l-2 border-[#f59e0b]/40 pl-4 mt-2">
								<p className="text-[10px] tracking-[0.12em] uppercase text-[var(--accent)]/60 mb-1">
									tip
								</p>
								<p className="text-[12px] text-[var(--text-muted)] leading-relaxed">
									{current.tip}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>

			<BackNext
				back="/a1/alphabet"
				next="/a1/grammar/noun-gender"
				backLabel="Alphabet"
				nextLabel="Noun-Gender"
			/>
		</PageWrapper>
	);
}
