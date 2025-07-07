import { PrivacyPolicyScreen } from "@/screens/privacy-policy";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
	head: () => {
		return {
			meta: [
				{
					title: "Privacy Policy - Breathe",
					description: "Privacy Policy for Breathe",
				},
			],
		};
	},
	component: PrivacyPolicyScreen,
});
