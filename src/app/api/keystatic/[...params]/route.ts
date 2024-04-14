import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

// export const runtime = "edge";

export const { POST, GET } = makeRouteHandler({
	config,
});
