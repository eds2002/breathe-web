import { TermsOfServiceScreen } from "@/screens/terms-of-service";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
	head: () => {
		return {
			meta: [
				{
					title: "Terms of Service - Breathe",
					description:
						"A variety of guided breathing cards to help you relax and meditate.",
				},
			],
		};
	},
	component: TermsOfServiceScreen,
});
