log("info", "examplemod", "Worker entrypoint loaded");

fluxloaderAPI.events.on("fl:worker-initialized", () => {
    const index = fluxloaderAPI.gameInstanceState.environment?.threadMeta?.startingIndex;
    log("info", "examplemod", `Worker initialized with index: ${index}`);
    fluxloaderAPI.sendGameMessage("examplemod:gamemsg", index, "Hello from the worker!");
});
