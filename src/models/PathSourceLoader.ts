import fs from "fs";
import path from "path";
import Topic from "./Topic";
import Source from "./Source";
import FileParser from "./FileParser";
import SourceLoader  from  "./SourceLoader";
import { getParser } from "../DependencyInjection";

export default class PathSourceLoader implements SourceLoader {
    load(target: string): Source {
        const files: string[] = fs.readdirSync(target);
        const parser: FileParser = getParser();
        const topics: Topic[] = [];

        files.forEach(function (file: string) {
            const topic: Topic | null = parser.parse(path.join(target, file));

            if (topic) {
                topics.push(topic);
            }
        });

        return new Source(path.basename(target), topics);
    }
}
