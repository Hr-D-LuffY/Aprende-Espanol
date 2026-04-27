import { useState } from "react";
import { Link } from "react-router-dom";
import { RULES } from "../context/PronunRules";

export default function PronunciationPage() {
	const [activeRule, setActiveRule] = useState("vowels");
	const current = RULES.find((r) => r.id === activeRule);

	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-16 pb-24">
				{/* Header */}
				<div className="mb-14">
					<p className="text-[11px] tracking-[0.18em] uppercase text-[#3f3f46] mb-4">
						Reference · A1
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
					{/* Sidebar — rule list */}
					<div className="lg:sticky lg:top-20 flex flex-col gap-1">
						{RULES.map((r) => (
							<button
								key={r.id}
								onClick={() => setActiveRule(r.id)}
								className={`text-left px-4 py-3 rounded-xl border transition-all duration-150 cursor-pointer ${
									activeRule === r.id ?
										"bg-[#f59e0b]/10 border-[#f59e0b]/30 text-[#fafafa]"
									:	"bg-transparent border-transparent text-[#52525b] hover:text-[#a1a1aa] hover:bg-[#111113] hover:border-[#1c1c1f]"
								}`}
							>
								<p className="text-[12px] leading-snug">{r.title}</p>
								<p
									className="text-[9px] tracking-[0.1em] uppercase mt-0.5"
									style={{
										color: activeRule === r.id ? r.tagColor : "#3f3f46",
									}}
								>
									{r.tag}
								</p>
							</button>
						))}
					</div>

					{/* Rule detail */}
					{current && (
						<div className="border border-[#1c1c1f] rounded-2xl bg-[#111113] overflow-hidden">
							{/* Rule header */}
							<div className="border-b border-[#1c1c1f] px-8 py-7">
								<div className="flex items-center gap-3 mb-3">
									<span
										className="text-[9px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-md border"
										style={{
											color: current.tagColor,
											borderColor: current.tagColor + "40",
											background: current.tagColor + "10",
										}}
									>
										{current.tag}
									</span>
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
								{current.content.map((block, bi) => (
									<div key={bi}>
										{/* Vowel grid */}
										{block.type === "vowel-grid" && (
											<div className="grid grid-cols-5 gap-3">
												{block.items.map((v) => (
													<div
														key={v.letter}
														className="border border-[#1c1c1f] rounded-xl bg-[#09090b] p-4 text-center"
													>
														<p className="text-3xl font-extralight text-[#f59e0b] mb-1">
															{v.letter}
														</p>
														<p className="text-[13px] text-[#a1a1aa] mb-3">
															"{v.sound}"
														</p>
														<div className="border-t border-[#1c1c1f] pt-3">
															<p className="text-[12px] text-[#fafafa]">
																{v.example}
															</p>
															<p className="text-[10px] text-[#3f3f46] mt-0.5">
																({v.pron})
															</p>
															<p className="text-[10px] text-[#52525b] mt-0.5">
																= {v.meaning}
															</p>
														</div>
													</div>
												))}
											</div>
										)}

										{/* Simple examples */}
										{block.type === "examples" && (
											<div className="flex flex-col gap-2">
												{block.items.map((ex, ei) => (
													<div
														key={ei}
														className="grid grid-cols-[120px_140px_1fr] gap-4 items-center py-3 border-b border-[#1c1c1f] last:border-0"
													>
														<span className="text-[16px] font-light text-[#fafafa]">
															{ex.word}
														</span>
														<span className="text-[12px] text-[#52525b]">
															({ex.pron})
														</span>
														<span className="text-[12px] text-[#3f3f46]">
															= {ex.meaning}
														</span>
													</div>
												))}
											</div>
										)}

										{/* Split two-column */}
										{block.type === "split" && (
											<div className="grid grid-cols-2 gap-4">
												{[block.left, block.right].map((col, ci) => (
													<div
														key={ci}
														className="border border-[#1c1c1f] rounded-xl bg-[#09090b] p-5"
													>
														<p className="text-[10px] tracking-[0.1em] uppercase text-[#f59e0b] mb-4">
															{col.label}
														</p>
														<div className="flex flex-col gap-3">
															{col.items.map((ex, ei) => (
																<div key={ei}>
																	<p className="text-[15px] font-light text-[#fafafa]">
																		{ex.word}
																	</p>
																	<p className="text-[11px] text-[#52525b]">
																		({ex.pron}) = {ex.meaning}
																	</p>
																</div>
															))}
														</div>
													</div>
												))}
											</div>
										)}

										{/* Note block */}
										{block.type === "note-block" && (
											<div className="border border-[#f59e0b]/20 bg-[#f59e0b]/5 rounded-xl p-5">
												<p className="text-[10px] tracking-[0.1em] uppercase text-[#f59e0b] mb-1">
													{block.label}
												</p>
												<p className="text-[12px] text-[#52525b] mb-4 leading-relaxed">
													{block.body}
												</p>
												<div className="flex flex-col gap-2">
													{block.items.map((ex, ei) => (
														<div key={ei} className="flex items-center gap-4">
															<span className="text-[15px] font-light text-[#fafafa]">
																{ex.word}
															</span>
															<span className="text-[11px] text-[#52525b]">
																({ex.pron})
															</span>
															<span className="text-[11px] text-[#3f3f46]">
																= {ex.meaning}
															</span>
														</div>
													))}
												</div>
											</div>
										)}
									</div>
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

							{/* Navigation between rules */}
							<div className="border-t border-[#1c1c1f] px-8 py-4 flex justify-between items-center">
								{(() => {
									const idx = RULES.findIndex((r) => r.id === activeRule);
									const prev = RULES[idx - 1];
									const next = RULES[idx + 1];
									return (
										<>
											<button
												onClick={() => prev && setActiveRule(prev.id)}
												className={`text-[12px] transition-colors ${prev ? "text-[#52525b] hover:text-[#a1a1aa] cursor-pointer" : "text-[#27272a] cursor-default"}`}
											>
												← {prev ? prev.title : ""}
											</button>
											<span className="text-[10px] text-[#27272a]">
												{RULES.findIndex((r) => r.id === activeRule) + 1} /{" "}
												{RULES.length}
											</span>
											<button
												onClick={() => next && setActiveRule(next.id)}
												className={`text-[12px] transition-colors ${next ? "text-[#52525b] hover:text-[#a1a1aa] cursor-pointer" : "text-[#27272a] cursor-default"}`}
											>
												{next ? next.title : ""} →
											</button>
										</>
									);
								})()}
							</div>
						</div>
					)}
				</div>

				{/* Back to alphabet link */}
				<div className="mt-16 border-t border-[#1c1c1f] pt-10 flex justify-between items-center">
					<div>
						<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-4">
							Previous step
						</p>
						<Link
							to="/a1/alphabet"
							className="inline-flex items-center gap-3 border border-[#1c1c1f] bg-[#111113] hover:border-[#f59e0b]/30 hover:bg-[#f59e0b]/5 rounded-xl px-6 py-4 no-underline transition-all duration-150 group"
						>
							<span className="text-[#3f3f46] group-hover:text-[#f59e0b] transition-colors">
								←
							</span>
							<div>
								<p className="text-[13px] text-[#fafafa]">Back to Alphabet</p>
								<p className="text-[11px] text-[#3f3f46]">See all 27 letters</p>
							</div>
						</Link>
					</div>
					<div>
						<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-4">
							Next step
						</p>
						<Link
							to="/a1/alphabet"
							className="inline-flex items-center gap-3 border border-[#1c1c1f] bg-[#111113] hover:border-[#f59e0b]/30 hover:bg-[#f59e0b]/5 rounded-xl px-6 py-4 no-underline transition-all duration-150 group"
						>
							<div className="text-right">
								<p className="text-[13px] text-[#fafafa]">Next Topic</p>
								<p className="text-[11px] text-[#3f3f46]">
									Go to Pronunciation
								</p>
							</div>
							<span className="text-[#3f3f46] group-hover:text-[#f59e0b] transition-colors">
								→
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
