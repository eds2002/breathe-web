import { Header } from "@/components/header";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				name: "twitter:card",
				content: "summary",
			},
			{
				name: "twitter:image",
				content: "/logo512.png",
			},
			{
				name: "twitter:title",
				content: "Oak",
			},
			{
				name: "twitter:description",
				content: "Oak - Collectable Breathing Exercises",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:image",
				content: "/logo512.png",
			},
			{
				property: "og:title",
				content: "Oak",
			},
		],
	}),
	component: () => (
		<>
			<Header />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
