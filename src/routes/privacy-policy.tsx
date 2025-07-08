import { APP_NAME } from "@/constants";
import { PrivacyPolicyScreen } from "@/screens/privacy-policy";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
	head: () => {
		return {
			meta: [
				{
					title: `Privacy Policy - ${APP_NAME}`,
					description: `Privacy Policy for ${APP_NAME}`,
				},
			],
		};
	},
	component: PrivacyPolicyScreen,
});
