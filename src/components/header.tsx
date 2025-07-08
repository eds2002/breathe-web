import { APP_NAME } from "@/constants";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const toggleMenu = () => {
		if (isMenuOpen && !isClosing) {
			closeMenu();
		} else if (!isMenuOpen) {
			setIsMenuOpen(true);
		}
	};

	const closeMenu = () => {
		if (isClosing || !isMenuOpen) return;
		setIsClosing(true);
		setTimeout(() => {
			setIsMenuOpen(false);
			setIsClosing(false);
		}, 300); // Must match the animation duration
	};

	return (
		<>
			<div className="absolute top-0 left-0 w-full z-10">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex items-center justify-between py-6">
						<Link to="/" className="flex items-center gap-3">
							<div className="w-10 h-10 bg-white backdrop-blur-sm rounded-2xl border border-white/30" />
							<span className="text-white text-xl font-semibold">
								{APP_NAME}
							</span>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-6">
							<Link
								to="/privacy-policy"
								className="text-white text-sm font-medium hover:opacity-80 transition-opacity"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms-of-service"
								className="text-white text-sm font-medium hover:opacity-80 transition-opacity"
							>
								Terms of Service
							</Link>
						</div>

						{/* Mobile Hamburger Menu */}
						<button
							type="button"
							onClick={toggleMenu}
							className="md:hidden flex flex-col gap-1 p-2"
							aria-label="Toggle menu"
						>
							<span className="w-6 h-0.5 bg-white transition-all duration-200" />
							<span className="w-6 h-0.5 bg-white transition-all duration-200" />
							<span className="w-6 h-0.5 bg-white transition-all duration-200" />
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Modal */}
			{isMenuOpen && (
				<div className="fixed inset-0 z-50 md:hidden">
					{/* Backdrop with blur and dim */}
					<div
						className={`absolute inset-0 bg-black/60 backdrop-blur-sm
            transition-all duration-500 ${isClosing ? "animate-fade-out" : "animate-fade-in"}`}
						onClick={closeMenu}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								closeMenu();
							}
						}}
						role="button"
						tabIndex={0}
					/>

					{/* Modal sliding from bottom */}
					<div
						className={`absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-xl rounded-t-[64px] ${
							isClosing ? "animate-slide-down" : "animate-slide-up"
						}`}
					>
						<div className="px-6 py-8">
							{/* Handle bar */}
							<div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-8" />

							{/* Navigation Links */}
							<div className="space-y-6 text-center">
								<Link
									to="/privacy-policy"
									className="block text-white text-lg font-medium hover:opacity-80 transition-opacity py-3"
									onClick={closeMenu}
								>
									Privacy Policy
								</Link>
								<Link
									to="/terms-of-service"
									className="block text-white text-lg font-medium hover:opacity-80 transition-opacity py-3"
									onClick={closeMenu}
								>
									Terms of Service
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
