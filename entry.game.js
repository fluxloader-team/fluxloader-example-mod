fluxloaderAPI.events.on("fl:scene-loaded", (scene) => {
	log("info", "examplemod", `Scene ${scene} has been loaded`);
});

log("info", "examplemod", "Sending message to other environments");

fluxloaderAPI.listenWorkerMessage("examplemod:gamemsg", (index, message) => {
	log("info", "examplemod", `examplemod:gamemsg received from worker ${index}: ${message}`);
});

const config = await fluxloaderAPI.modConfig.get("examplemod");
log("info", "examplemod", "Config loaded: " + JSON.stringify(config));

fluxloaderAPI.handleElectronEvent("examplemod:someevent", (event, args) => {
	log("info", "examplemod", `examplemod:someevent event arguments ${JSON.stringify(args)}`);
});

const res = await fluxloaderAPI.invokeElectronIPC("examplemod:electronfunc", { a: "hello", b: 10 });
log("info", "examplemod", `examplemod:electronfunc IPC response  ${JSON.stringify(res)}`);
