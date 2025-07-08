import { APP_NAME } from "@/constants";
import { TermsOfServiceScreen } from "@/screens/terms-of-service";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
	head: () => {
		return {
			meta: [
				{
					title: `Terms of Service - ${APP_NAME}`,
					description: `Terms of Service for ${APP_NAME}`,
				},
			],
		};
	},
	component: TermsOfServiceScreen,
});
