export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Cherry.png","Food1.webp","Order.webp","TakeAway.webp","Waiters.webp","favicon.png"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-bac07eb6.js","imports":["_app/immutable/start-bac07eb6.js","_app/immutable/chunks/index-60a7832a.js","_app/immutable/chunks/singletons-c37ba626.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
