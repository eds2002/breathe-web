import { Header } from "@/components/header";
import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<HeadContent />
			<Header />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
