module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                extraResources: ["config.json"]
            }
        }
    }
}
