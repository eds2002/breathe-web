import { Header } from "../../components/header";
import { AppStoreButton } from "./components/app-store-button";
import { BackgroundGradient } from "./components/background-gradient";

export function Index() {
	return (
		<div className="text-center">
			<header className="min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)] relative overflow-hidden">
				<BackgroundGradient />
				<Header />

				<div className="flex flex-col items-center justify-center gap-12">
					<div className="flex flex-col items-center justify-center gap-4 max-w-3xl">
						<h1 className="text-6xl font-semibold">Guided breathing cards</h1>
						<p className="text-2xl font-medium opacity-80">
							A variety of guided breathing cards to help you relax and
							meditate.
						</p>
					</div>
					<AppStoreButton />
				</div>
			</header>
		</div>
	);
}
