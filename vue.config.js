module.exports = {
    pluginOptions: {
        electronBuilder: {
            asar: false,
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
