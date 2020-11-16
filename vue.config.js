module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                publish: [
                    {
                        provider: "generic",
                        url: "http://localhost:8080"
                    }
                ],
                extraResources: ["config.json"]
            }
        }
    }
}
