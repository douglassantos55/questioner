import fs from "fs";
import path from "path";
import Topic from "./Topic";
import Source from "./Source";
import FileParser from "./FileParser";
import SourceLoader  from  "./SourceLoader";
import { getParsers } from "../DependencyInjection";

export default class PathSourceLoader implements SourceLoader {
    load(target: string): Source {
        const files: string[] = fs.readdirSync(target);
        const parsers: FileParser[] = getParsers();
        const topics: Topic[] = [];

        files.forEach(function (file: string) {
            parsers.every(function (parser: FileParser) {
                const topic: Topic | null = parser.parse(path.join(target, file));
                return !(topic && topics.push(topic));
            });
        });

        return new Source(path.basename(target), topics);
    }
}
