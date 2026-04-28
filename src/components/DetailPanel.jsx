export default function DetailPanel({ item }) {
	if (!item) return null;
	return (
		<div className="border border-[#1c1c1f] rounded-2xl bg-[#111113] p-7 flex flex-col gap-6 h-full">
			{/* Header */}
			<div className="border-b border-[#1c1c1f] pb-6">
				<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-3">
					Selected item
				</p>
				<div className="flex items-baseline gap-3">
					<span className="text-4xl font-light tracking-[-0.04em] text-[#f59e0b]">
						{item.es.split(" ")[0]}
					</span>
					{item.es.includes("/") && (
						<>
							<span className="text-[#27272a]">/</span>
							<span className="text-3xl font-light tracking-[-0.03em] text-[#52525b]">
								{item.es.split("/ ")[1]}
							</span>
						</>
					)}
				</div>
				<p className="text-[13px] text-[#52525b] mt-2">{item.en}</p>
			</div>

			{/* Metadata */}
			<div className="flex gap-3">
				{[
					{ label: "Person", val: item.person },
					{ label: "Number", val: item.number },
				].map((m) => (
					<div
						key={m.label}
						className="border border-[#1c1c1f] rounded-lg px-4 py-2.5 bg-[#09090b]"
					>
						<p className="text-[9px] tracking-[0.14em] uppercase text-[#3f3f46]">
							{m.label}
						</p>
						<p className="text-[12px] text-[#a1a1aa] mt-0.5 capitalize">
							{m.val}
						</p>
					</div>
				))}
			</div>

			{/* Note */}
			{item.note && (
				<div className="border-l-2 border-[#f59e0b]/40 pl-4">
					<p className="text-[11px] text-[#52525b] leading-relaxed">
						{item.note}
					</p>
				</div>
			)}

			{/* Examples */}
			<div>
				<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-3">
					Example Q&A
				</p>
				<div className="flex flex-col gap-4">
					{item.examples.map((ex, i) => (
						<div key={i}>
							<p className="text-[12px] text-[#3f3f46]">{ex.q}</p>
							<p className="text-[13px] text-[#a1a1aa] mt-1">{ex.a}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
