const POSITIONS = {
	right: { carLeft: "42%", showBird: false, showBall: false },
	left: { carLeft: "8%", showBird: false, showBall: false },
	between: { carLeft: "38%", showBird: false, showBall: false },
	front: { carLeft: "55%", showBird: false, showBall: false },
	above: { carLeft: "72%", showBird: true, birdBottom: "66%", showBall: false },
	below: { carLeft: "72%", showBird: false, showBall: true, ballBottom: "20%" },
	near: { carLeft: "30%", showBird: false, showBall: false },
	far: { carLeft: "2%", showBird: false, showBall: false },
	beside: { carLeft: "22%", showBird: false, showBall: false },
	inside: { carLeft: "55%", showBird: false, showBall: false },
	behind: { carLeft: "68%", showBird: false, showBall: false },
	around: { carLeft: "35%", showBird: false, showBall: false },
};

export default function PrepScene({ activePos }) {
	const p = POSITIONS[activePos] || POSITIONS.right;
	return (
		<div
			className="relative border border-[var(--border)] rounded-lg bg-[var(--bg)] overflow-hidden w-full"
			style={{ height: 140 }}
		>
			<div className="absolute bottom-[30px] left-0 right-0 h-px bg-[#27272a]" />
			{/* tree */}
			<div
				className="absolute flex flex-col items-center"
				style={{ left: 52, bottom: 31 }}
			>
				<div
					style={{
						width: 0,
						height: 0,
						borderLeft: "22px solid transparent",
						borderRight: "22px solid transparent",
						borderBottom: "36px solid #3f3f46",
					}}
				/>
				<div style={{ width: 8, height: 40, background: "#52525b" }} />
			</div>
			{/* house */}
			<div
				className="absolute flex flex-col items-center"
				style={{ right: 32, bottom: 31 }}
			>
				<div
					style={{
						width: 0,
						height: 0,
						borderLeft: "22px solid transparent",
						borderRight: "22px solid transparent",
						borderBottom: "18px solid #3f3f46",
					}}
				/>
				<div
					style={{
						width: 44,
						height: 36,
						background: "#27272a",
						border: "1px solid #3f3f46",
					}}
				/>
			</div>
			{/* car */}
			<div
				className="absolute text-xl leading-none"
				style={{
					left: p.carLeft,
					bottom: 34,
					transition: "left 0.45s cubic-bezier(.4,0,.2,1)",
				}}
			>
				🚗
			</div>
			{p.showBird && (
				<div
					className="absolute text-sm leading-none"
					style={{ left: 52, bottom: p.birdBottom, transition: "all 0.45s" }}
				>
					🐦
				</div>
			)}
			{p.showBall && (
				<div
					className="absolute text-sm leading-none"
					style={{ left: 52, bottom: p.ballBottom, transition: "all 0.45s" }}
				>
					⚽
				</div>
			)}
		</div>
	);
}
