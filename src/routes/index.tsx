import { Index } from "@/screens/index/index";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	head: () => {
		return {
			meta: [
				{
					title: "Guided breathing cards - Breathe",
					description:
						"A variety of guided breathing cards to help you relax and meditate.",
				},
			],
		}
	},
	component: Index,
});
