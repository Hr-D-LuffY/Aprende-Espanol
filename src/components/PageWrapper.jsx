export default function PageWrapper({ children }) {
	return (
		<div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-serif">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 ">
				{children}
			</div>
		</div>
	);
}
