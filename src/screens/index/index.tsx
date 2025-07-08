import { AppStoreButton } from "./components/app-store-button";
import { BackgroundGradient } from "./components/background-gradient";

export function Index() {
	return (
		<div className="text-center">
			<header className="min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)] relative overflow-hidden">
				<BackgroundGradient />

				<div className="flex flex-col items-center justify-center gap-12">
					<div className="flex flex-col items-center justify-center gap-4 px-6 max-w-3xl">
						<h1 className="text-4xl lg:text-6xl font-semibold">
							Mindful Breathing
						</h1>
						<p className="text-xl lg:text-2xl font-medium opacity-80">
							Collections of guided breathing cards to help you relax and
							meditate.
						</p>
					</div>
					<AppStoreButton />
				</div>
			</header>
		</div>
	);
}
