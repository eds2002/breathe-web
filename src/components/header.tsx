import { Link } from "@tanstack/react-router";

export const Header = () => {
	return (
		<div className="absolute top-0 left-0 w-full z-10">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex items-center justify-between py-6">
					<Link to="/" className="flex items-center gap-3">
						<div className="w-10 h-10 bg-white backdrop-blur-sm rounded-2xl border border-white/30" />
						<span className="text-white text-xl font-semibold">Breathe</span>
					</Link>
					<div className="flex items-center gap-6">
						<Link
							to="/privacy-policy"
							className="text-white text-sm font-medium hover:opacity-80 transition-opacity"
						>
							Privacy Policy
						</Link>
						<Link
							to="/terms-of-service"
							className="text-white text-sm font-medium hover:opacity-80 font-med transition-opacity"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
