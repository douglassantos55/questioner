import fs from "fs";

class Config {
    constructor() {
        console.log("config");
        const config = fs.readFileSync("../../app.config.js");
        console.log(config);
    }
}

export default new Config();
