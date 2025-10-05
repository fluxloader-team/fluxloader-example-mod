fluxloaderAPI.addPatch("js/336.bundle.js", {
	type: "replace",
	from: "Will launch elements upward",
	to: "Will throw some blocks around",
});

const config = fluxloaderAPI.modConfig.get("examplemod");

if (config.someSetting) {
	fluxloaderAPI.addPatch("js/bundle.js", {
		type: "replace",
		from: "t.store.resources.artifacts++,",
		to: `$$console.log('You got an artifact, config: ${config.someValue}'),`,
		token: "$$",
	});
}

fluxloaderAPI.events.on("fl:mod-loaded", () => {
	log("info", "examplemod", "I have been loaded");
});

fluxloaderAPI.events.on("fl:all-mods-loaded", () => {
	log("info", "examplemod", "All mods have been loaded");
});

fluxloaderAPI.events.on("fl:game-started", () => {
	log("info", "examplemod", "Game is starting");
});

fluxloaderAPI.events.on("fl:mod-unloaded", () => {
	log("info", "examplemod", "I have been loaded");
});

log("info", "examplemod", "Listening to other envionments");

fluxloaderAPI.handleGameIPC("examplemod:electronfunc", (event, args) => {
	log("info", "examplemod", `examplemod:electronfunc IPC arguments ${JSON.stringify(args)}`);

	fluxloaderAPI.sendGameEvent("examplemod:someevent", {
		hello: "world",
	});

	return "This is a response";
});
