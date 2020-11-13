import fs from "fs";
import path from "path";

const isProd = process.env.NODE_ENV === "production";
// @ts-ignore
const pathToConfig = path.join(isProd ? __dirname : __static, "../config.json");

type Config = {
    title_tag: string;
    question_tag: string;
    sources: string[];
};

const json = fs.readFileSync(pathToConfig, { encoding: "utf8" });
const config: Config = JSON.parse(json);

export default config;
